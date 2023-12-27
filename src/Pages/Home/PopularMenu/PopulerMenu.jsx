

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import UseAuth from '../../../Hook/UseAuth';
import PopulerItems from '../../../SharedFolder/PopulerItems';

const PopulerMenu = () => {
 const [items] = UseAuth()
 const popular = items.filter(item=>item.category ==='popular')
  // const [items,setItems] =useState([])
  // useEffect(()=>{
  //   fetch('menu.json')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     const popularItem = data.filter(item=>item.category === 'popular')
  //     setItems(popularItem)
  //   })
  // },[])
return (
 <div className='mb-12'>
     <SectionTitle 
      heading={'---Check it out---'}
      subHeading={'FROM OUR MENU'}
     ></SectionTitle>
         <div className='grid grid-cols-2 gap-10'>
          {
            popular .map(menu=><PopulerItems 
              key={menu._id} menu={menu}></PopulerItems>)
          }
          </div> 
                                                                                       
  </div>
);
};

export default PopulerMenu;