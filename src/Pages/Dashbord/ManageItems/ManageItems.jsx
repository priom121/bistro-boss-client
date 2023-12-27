import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../Hook/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [items ,refetch] = useAuth();
  const axiosSecure = useAxios();

  const handleDeleted =(item)=>{
 console.log( 'item',item);
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
    axiosSecure.delete(`/menu/${item._id}`)
   .then(res=>{
    console.log(res.data);
    if(res.data.deletedCount > 0){
      refetch()
    Swal.fire({
      title: "Deleted!",
      text: `${item.name} deletd successfully`,
      icon: "success",
      timer:1500
    });
    }
   })

  }
});
  }
 return (
 <div>
   
     <SectionTitle heading={'manage all items'} subHeading={'Hurry up'}></SectionTitle>                                                                                     
  <div>
  <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="text-lg font-semibold">
   #
        <th>Image</th>
        <th>Item Name</th>
        <th>price</th>
        <th>update</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
    {items.map((item,index) =>  <tr key={item._id}>
     <td>
     {index+1}
     </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>

        <td>
          <div className="font-bold">{item.name}</div>
          <br/>
   
        </td>
       <div className="text-lg ">$ {item.price}</div>
        <td>
   <Link to={`/dashbord/updateItems/${item._id}`}>
   <button  className="btn btn-ghost btn-lg">
                       <FaEdit className="text-red-500"></FaEdit> 
                    </button>
   </Link>
        </td>
        <td>
         <button onClick={()=>handleDeleted(item)} className="btn btn-ghost btn-lg">
                       <FaTrashAlt className="text-red-500"></FaTrashAlt> 
                    </button>
         </td>
      </tr>)}

    </tbody>
  </table>
</div>                         
  </div>
  </div>
);
};

export default ManageItems;