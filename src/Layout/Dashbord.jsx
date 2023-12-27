import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart,
      FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";



const Dashbord = () => {
   
     const [isAdmin] = useAdmin()
     console.log(isAdmin);
 return (
<div className="flex">
         {/* dashbord side ber */}
    <div className=" w-64 min-h-screen bg-orange-400">
       <ul className="menu">               
      {
          isAdmin ? <>
          <li>
      

      <NavLink to='/dashbord/adminHome'>
           <FaHome></FaHome>                         
      Admin home</NavLink>
      </li>                        
            <li>
      <NavLink to='/dashbord/addItems'>
           <FaUtensils></FaUtensils>                       
      Add Items</NavLink>
      </li>                        
            <li>
      <NavLink to='/dashbord/manageItems'>
           <FaList></FaList>                       
      Manage Items</NavLink>
      </li> 
      <li>
      <NavLink to='/dashbord/bookings'>
           <FaBook></FaBook>                        
      Manage Bookings</NavLink>
      </li>                       
      <li>
      <NavLink to='/dashbord/users'>
           <FaUsers></FaUsers>                       
      All Users</NavLink>
      </li>
          
          </>
          :
          <>
          <li>
      

      <NavLink to='/dashbord/userHome'>
           <FaHome></FaHome>                         
      user home</NavLink>
      </li>                        
            <li>
      <NavLink to='/dashbord/reservation'>
           <FaCalendar></FaCalendar>                        
      reservation</NavLink>
      </li>                        
            <li>
      <NavLink to='/dashbord/review'>
           <FaAd></FaAd>                       
      AddReview</NavLink>
      </li> 
      <li>
      <NavLink to='/dashbord/cart'>
           <FaShoppingCart></FaShoppingCart>                         
      my cart</NavLink>
      </li>                       
      <li>
      <NavLink to='/dashbord/paymentHistory'>
           <FaList></FaList>                         
      my payment History</NavLink>
      </li>
          </>
      }

{/* shared navlinks */}

<div className="diveder"></div> 
<li>
<NavLink to='/'>
     <FaHome></FaHome>                         
 Home</NavLink>
</li>                      
<li>
<NavLink to='/dashbord/menu'>
     <FaSearch></FaSearch>                        
 menu</NavLink>
</li>                      
<li>
<NavLink to='/dashbord/email'>
     <FaEnvelope></FaEnvelope>                       
email</NavLink>
</li>                      
      </ul>                       
                            
    </div>
    <div className="flex-1">
    <Outlet></Outlet>                       
   </div>                                                                                      
 </div>
 );
};

export default Dashbord;