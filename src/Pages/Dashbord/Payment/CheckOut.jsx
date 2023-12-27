import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../Hook/useAxios";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../../Provider/AuthProVider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOut = () => {
 const [error ,setError] =useState([])
 const [clientSecret ,setClientSecret] = useState([]);
 const [transictionId ,setTransictionId] =useState([])
 const stripe = useStripe()
 const elements = useElements()
 const axiosSecure = useAxios()
 const navigate = useNavigate()
 const {user} =useContext(AuthContext)
 const [cart ,refetch] =useCart()
 const totalPrice = cart.reduce((total,item)=>total + item.price,0)

 useEffect(()=>{
  if(totalPrice >0){
    axiosSecure.post('/create-payment-intent',{price:totalPrice})
    .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  }
 },[axiosSecure,totalPrice])

 const handleSubmit = async(e)=>{
  e.preventDefault()
  if(!stripe || !elements){
    return ;
  }
  const card = elements.getElement(CardElement);
  if(card === null){
   return;
  }
//   // Use your card Element with other Stripe.js APIs
 const {error,paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card,                          
 })
 if(error){
 console.log('error', error);
 setError(error.message)
 }
 else{
    console.log('payment method',paymentMethod);
    setError('')
 }

//  payment ----
const {paymentIntent,error:confirmError} = 
await stripe.confirmCardPayment(clientSecret,{
  payment_method:{
    card:card,
    billing_details:{
      name:user?.displayName || 'anonymous',
      email:user?.email || 'anonymous'
    }
  }
})
if(confirmError){
  console.log('confirm error');
}
else{
  console.log('payment intent',paymentIntent);
  if(paymentIntent .status === 'succeeded'){
    console.log('transictin id',paymentIntent.id);
    setTransictionId(paymentIntent.id)
    // save the payment mongodb
    const payment ={
      email:user.email,
      price : totalPrice,
      transictionId :paymentIntent.id,
      date: new Date(), //monment js
      cartIds : cart.map(item=>item._id),
      menuItemId: cart.map(item=>item.menuId),
      status:'pending'
    }
  const res = await axiosSecure.post('/payments',payment)
  console.log('payment save', res.data);
  refetch()
  if(res.data?.result?.insertedId){
    Swal.fire({
      title: "Good job!",
      text: "thank you for the payment!",
      icon: "success",
      timer:1500
    });
    navigate('/dashbord/paymentHistory')
  }
  }
}

 }
return (
 <form onSubmit={handleSubmit}>
   <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn my-4 btn-info btn-sm" type="submit" disabled={!stripe ||!clientSecret}>
        Pay
      </button>
      <p className="text-red-500 font-bold text-xl">{error}</p>
     {transictionId && 
     <p className="text-green-600 font-bold text-xl">your transictin id :{transictionId} </p>}
 </form>
);
};

export default CheckOut;