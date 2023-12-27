import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Feature from "./Feature/Feature";
import PopulerMenu from "./PopularMenu/PopulerMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
return (
 <div>
  <Helmet>
    <title>Bistro Boss | Home</title>
  </Helmet>
    <Banner></Banner> 
    <Category></Category>
    <PopulerMenu></PopulerMenu> 
    <Feature></Feature>           
    <Testimonial></Testimonial>                                                                     
  </div>
 );
};

export default Home;