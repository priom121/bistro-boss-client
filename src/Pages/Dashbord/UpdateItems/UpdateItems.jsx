import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxios from "../../../Hook/useAxios";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItems = () => {
 const { _id,name,category,recipe,price} = useLoaderData()
//  console.log(items);
const { register, handleSubmit ,reset } = useForm()
const axiosPublic = useAxiosPublic()
const axiosSecure = useAxios();
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
  const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
  console.log(menuRes.data);
  if(menuRes.data.modifiedCount){
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
      <SectionTitle subHeading={'Update Items'} heading={'updated'}></SectionTitle>
      <div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input  />
      <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">* Recipe name</span>
  </label>
  <input type="text"
   placeholder="name"
   defaultValue={name}
   {...register("name",{required:true})}
   className="input input-bordered w-full" />

</div>
<div className="flex gap-5">
<div className="form-control w-full my-4 ">
  <label className="label">
    <span className="label-text">*category</span>
  </label>
  <select defaultValue={category}  {...register("category" ,{required:true})} className="select select-bordered w-full  ">
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
   defaultValue={price}
   {...register("price" ,{required:true})}
   className="input input-bordered w-full" />

</div>
</div>
{/* lg */}
<textarea defaultValue={recipe} {...register('recipe',{required:true})} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " >
</textarea>
<input {...register('image' ,{required:true})} type="file"
 className="file-input w-full max-w-xs mt-4" />
     <div>
     <button className="btn btn-info p-3 mt-4">
      update item 
     </button>
     </div>
    </form>                              
</div>                                                                                    
  </div>
 );
};

export default UpdateItems;