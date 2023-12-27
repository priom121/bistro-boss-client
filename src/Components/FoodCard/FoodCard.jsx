import Swal from "sweetalert2";
import useHook from "../../Hook/useHook";
import { useLocation, useNavigate } from "react-router-dom";

import useAxios from "../../Hook/useAxios";
import useCart from "../../Hook/useCart";

const FoodCard = ({item}) => {
  const {name,image,price,recipe ,_id} = item
  const {user} =useHook()
  const axiosSecure =useAxios()
  const navigate = useNavigate()
  const location = useLocation()
  const [refetch] =useCart()
  const handleAddToCart =()=>{
    // console.log(food);
    if(user && user.email){
      // cart sent
      const cartItem ={
        menuId:_id,
        email:user?.email,
        name,price,image
      }
   axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            icon: "success",
            title: `${name} added to the cart`,
            timer:1500
          });
          // refetch the cart
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "you are not login",
        text: "add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
        //  login page
        navigate('/login',{state:{from:location}})
        }
      }); 
    }
  }
 return (
 <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-black rounded text-white absolute right-0 px-2 mt-4 mr-4">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleAddToCart(item)} 
      className="btn bg-slate-200 text-white btn-info border-0 border-b-2 mt-3">
        Add to cart</button>
    </div>
  </div>
</div>                                                                                    
  </div>
 );
};

export default FoodCard;