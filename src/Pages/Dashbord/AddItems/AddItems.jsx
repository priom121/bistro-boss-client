import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxios from "../../../Hook/useAxios";
import Swal from "sweetalert2";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {

  const { register, handleSubmit ,reset } = useForm()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxios()
 const onSubmit =async (data) => {
  console.log(data)
  const imageFile ={image: data.image [0]}
 const res = await axiosPublic.post(image_hosting_api,imageFile,{
  headers:{
    "content-type": "multipart/form-data",
  }
  
 })
 if(res.data.success){
  // send menu item data server
 
  const menuItem ={
    name:data.name,
    category:data.category,
    price :parseFloat(data.price),
    recipe:data.recipe,
    image:res.data.data.display_url
  }
  const menuRes = await axiosSecure.post('/menu', menuItem)
  console.log(menuRes.data);
  if(menuRes.data.insertedId){
    reset()
    Swal.fire({
      icon: "success",
      title: "Done the add items",
      text:`${data.name} added the cart`,
      timer:2500
    });
  }
 }
console.log(res.data);
}
 return (
 <div>
     <SectionTitle heading={'add an items'} subHeading={'what,s new?'}></SectionTitle>  
     <div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input  />
      <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">* Recipe name</span>
  </label>
  <input type="text"
   placeholder="Type here"
   {...register("name",{required:true})}
   className="input input-bordered w-full" />

</div>
<div className="flex gap-5">
<div className="form-control w-full my-4 ">
  <label className="label">
    <span className="label-text">*category</span>
  </label>
  <select defaultValue='default'  {...register("category" ,{required:true})} className="select select-bordered w-full  ">
  <option disabled value='default'>select a category</option>
  <option>salad</option>
  <option>pizza</option>
  <option>soup</option>
  <option>dessert</option>
  <option>drinks</option>
</select>
</div>
<div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">price</span>
  </label>
  <input type="text"
   placeholder="Type here"
   {...register("price" ,{required:true})}
   className="input input-bordered w-full" />

</div>
</div>
{/* lg */}
<textarea {...register('recipe',{required:true})} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " >
</textarea>
<input {...register('image' ,{required:true})} type="file"
 className="file-input w-full max-w-xs mt-4" />
     <div>
     <button className="btn btn-info p-3 mt-4">
      Add item <FaUtensilSpoon className="mr-2"></FaUtensilSpoon>
     </button>
     </div>
    </form>                              
</div>                                                                                   
  </div>
  );
};

export default AddItems;