import { useQuery } from "@tanstack/react-query";
import useHook from "../../../Hook/useHook";
import useAxios from "../../../Hook/useAxios";

const PaymentHistory = () => {
   const {user} = useHook() ;
   const axiosSecure = useAxios() 
     const {data:payment =[]} =useQuery({
         queryKey:['payments',user.email],
         queryFn:async()=>{
      const res = await axiosSecure.get(`/payments/${user.email}`)
      return res.data
         }
     })                       
return (
 <div>
     <h2 className="text-5xl mt-4  font-semibold">Payment :{payment.length}</h2>
     <div>
     <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <t className ='text-xl mt-5 w-full'>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>status</th>
      </t>
    </thead>
    <tbody>
      {
         payment.map((payments,index) => <tr key={payments._id} className="bg-base-200">
         <th className="text-lg font-bold">{index +1 }</th>
         <td className="text-lg font-bold">$ {payments.price}</td>
         <td className="text-lg font-bold">{payments.transictionId }</td>
         <td className="text-lg font-bold">status : {payments.status}</td>
       </tr>)                     
      }
     
    </tbody>
  </table>
</div>                           
   </div>                                                                                     
 </div>
);
};

export default PaymentHistory;