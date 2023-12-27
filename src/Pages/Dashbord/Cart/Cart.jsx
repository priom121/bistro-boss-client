import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hook/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../Hook/useAxios";
import { Link } from "react-router-dom";


const Cart = () => {
      const [cart ,refetch] =useCart();
      console.log( 'carttt from',cart);
      const totalPrice = cart.reduce((total,item)=> total + item.price,0)
      const axiosSecure = useAxios()
      const handleDeleted =(id)=>{
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                       axiosSecure.delete(`/carts/${id}`)
                       .then(res=>{
                        // console.log(res);
                        if(res.data.deletedCount > 0){
                              refetch()
                                Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                        }
                       }) 
                
                  }
                });
      }
return (
<div>
      <div className="flex p-5 justify-evenly">
      <h2 className="text-4xl">My cart : {cart.length}</h2>      
      <h2 className="text-4xl">Price :{totalPrice} $ </h2> 
  {cart.length ? <Link to='/dashbord/payment'>
  <button className="btn btn-info">pay</button>     
  </Link> : <button disabled className="btn btn-info">pay</button>  }
       </div> 
       <div>
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg">
        <th>
      #
        </th>
        <th>Image</th>
        <th>name</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
            cart.map(item=> <tr key={item._id}>
                  <th>
                   
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                   {item.name}
                    
                  </td>
                  <td className="text-lg">${item.price}</td>
                  <th>
                    <button onClick={()=>handleDeleted(item._id)} className="btn btn-ghost btn-lg">
                       <FaTrashAlt className="text-red-500"></FaTrashAlt> 
                    </button>
                  </th>
                </tr>)
       }
     
 
    </tbody>
  </table>
</div>     
       </div>                                                                                  
 </div>
 );
};

export default Cart;