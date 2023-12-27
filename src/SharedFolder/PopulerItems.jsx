


const PopulerItems = ({menu}) => {
 const {name,image,price,recipe} =menu
//  console.log(menu);
 return (
 <div className="flex space-x-2">
      <div>
    <img style={{borderRadius:'0 200px 200px 200px'}}
     className="w-[100px]" src={image} alt="" />
   </div> 
   <div>
  <h3 className="uppercase text-2xl font-medium">{name} ----------</h3>
  <p >{recipe}</p>                             
 </div>
  <p className="text-orange-500">${price}</p>
  </div>
 );
};

export default PopulerItems;