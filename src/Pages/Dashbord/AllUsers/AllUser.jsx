import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
     const axiosSecure = useAxios()
     const {data:users=[],refetch} = useQuery({
           queryKey:['users'],
           queryFn:async ()=>{
             const res = await axiosSecure.get('/users');
             return res.data
           }
     }) 

     const handleAdmin =(user)=>{
 axiosSecure.patch(`/users/admin/${user}`)
  .then(res=>{
     console.log(res.data);
 if(res.data.modifiedCount > 0){
//   refetch()
  Swal.fire({
   icon: "success",
  title: `${user.name}is a admin`,
   timer:1500
                       }); 
                            }   
                                    
                              })
                          }
    //  delted
     const handleDeleted =(user)=>{
      console.log('user', user);
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
  axiosSecure.delete(`/users/${user}`)
   .then(res=>{
      // console.log(res);
      if(res.data.deletedCount > 0){
            refetch();
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
     <div className="flex mt-10 justify-evenly">
  <h1 className="text-3xl">All Users</h1>
  <h1 className="text-3xl">Total {users.length}</h1>
 </div> 
  <div>
  <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead className="text-lg">
      <tr>
      <th>index</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
         users.map((item,index)=><tr key={item._id} className="bg-base-200">
 <th>{index+1}</th>
         <th>{item.name}</th>
         <td>{item.email}</td>
         <td>
         { item.role === 'admin' ? 'Admin' :<button onClick={()=>handleAdmin(item._id)} className="btn bg-orange-300 btn-lg">
                       <FaUsers className="text-white text-xl"></FaUsers> 
                    </button>}
         </td>
         <td>
         <button onClick={()=>handleDeleted(item._id)} className="btn btn-ghost btn-lg">
                       <FaTrashAlt className="text-red-500"></FaTrashAlt> 
                    </button>
         </td>
       </tr>)
      }

    </tbody>
  </table>
</div>
  </div>
 </div>
 );
};

export default AllUser;