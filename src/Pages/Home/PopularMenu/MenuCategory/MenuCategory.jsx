
import { Link } from "react-router-dom";
import Cover from "../../../../SharedFolder/Cover/Cover";
import PopulerItems from "../../../../SharedFolder/PopulerItems";


const MenuCategory = ({items,title ,coverImg}) => {

 return (
 <div className="pt-8">
          { title && <Cover img={coverImg} title={title}></Cover>}
        <div className='grid grid-cols-2 gap-10 my-16'>
          {
            items.map(menu=><PopulerItems 
              key={menu._id} menu={menu}></PopulerItems>)
          }
          </div> 
          <Link to={`/order/${title}`}>
           <button className="btn text-white btn-info border-0 border-b-2 mt-3">
            order now</button> 

           </Link>                                                                           
  </div>
 );
};

export default MenuCategory;