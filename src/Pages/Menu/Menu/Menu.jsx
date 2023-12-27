import {  Helmet } from 'react-helmet-async';
import Cover from '../../../SharedFolder/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladtImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import UseAuth from '../../../Hook/UseAuth';

import MenuCategory from '../../Home/PopularMenu/MenuCategory/MenuCategory';




const Menu = () => {
  const [items] = UseAuth([])
  const offered = items.filter(item=>item.category ==='offered')
  const dessert = items.filter(item=>item.category ==='dessert')
  const pizza = items.filter(item=>item.category === 'pizza ')
  const salad = items.filter(item=>item.category ==='salad')
  const soup = items.filter(item=>item.category ==='soup')                        
return (
  <div>
     <Helmet>
       <title> Bistro | menu</title>
     </Helmet>
     <Cover img={menuImg} title={'Our Menu'}></Cover>
    <SectionTitle subHeading={'Do not Miss'} heading={'Today,s Offer'}></SectionTitle>
    {/* offered */}
   <MenuCategory items={offered}></MenuCategory> 
    {/* dessert */}
    <MenuCategory items={dessert} title={'dessert'} coverImg={dessertImg}></MenuCategory> 
    {/* pizza */}
    <MenuCategory items={salad} title={'salad'} coverImg={saladtImg}></MenuCategory>
     {/*soup  */}
     <MenuCategory items={soup} title={'soup'} coverImg={soupImg}></MenuCategory>
     {/* pizza */}
     <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg}></MenuCategory>
   </div>

);
};

export default Menu;