import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedFolder/Footer";
import Navbar from "../SharedFolder/Navbar";


const MainLayOut = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')||location.pathname.includes('signUp')
    
return (
 <div>
     {noHeaderFooter || <Navbar></Navbar>}
       <Outlet></Outlet> 
     { noHeaderFooter ||  <Footer></Footer> }                                                                                 
   </div>
);
};

export default MainLayOut;