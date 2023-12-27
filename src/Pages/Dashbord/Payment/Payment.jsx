import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(import.meta.env.VITE_API_STRIPE);

const Payment = () => {

return (
 <div>
     <SectionTitle heading={'payment'} subHeading={'payment after eat'}></SectionTitle>
     <h2 className="text-4xl text-center">Eat and Pay</h2>   
     <div>
       <Elements stripe={stripePromise}>
      <CheckOut></CheckOut>
       </Elements>
    </div>                                                                                  
  </div>
 );
};

export default Payment;