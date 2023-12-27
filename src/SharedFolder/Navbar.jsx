import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProVider";
import useCart from "../Hook/useCart";
import useAdmin from "../Hook/useAdmin";

const Navbar = () => {
  const [cart] =useCart()
  const {user,logOut} =useContext(AuthContext)
  const [isAdmin] =useAdmin()
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
 const navLinks = <>
 
 <ul className="lg:flex  items-center gap-5 text-xl font-medium">
  {/* {
    user && isAdmin &&  <li>
                                 
    <NavLink
   to='/dashbord/userHome'
   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600" : ""
   }
   >
  User Home
   </NavLink>
    </li>
  } */}
  {/* {
    user && !isAdmin &&  <li>
                                 
    <NavLink
   to='/dashbord/adminHome'
   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600" : ""
   }
   >
  Admin Home
   </NavLink>
    </li>
  } */}
  <li>
 <NavLink
to="/"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
 Home
</NavLink>
 </li>                    
 <li>
 <NavLink
to="/menu"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
 Menu
</NavLink>
 </li>

 <li>
                                 
 <NavLink
to="/order/salad"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
OrderFood
</NavLink>
 </li>
                           
{ user ? 
  
<button onClick={handleLogOut}>logout [ {user?.displayName} ]</button> :<li>
 <NavLink
to="/login"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
 }
>
Login
 </NavLink>
 </li>}
 <li>
 <NavLink
to="/dashbord/cart"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
 }
>

<button className="btn btn-outline">
 <FaShoppingCart className="mr-2"></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
 </NavLink>
 </li>
</ul>
 </>
return (
                              <div>
<div className=" navbar fixed bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white z-10">
                                <div className="navbar-start">
                                  <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content
                                     mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                                    </ul>
                                  </div>
                              <div>
                              <a className="flex gap-3 items-center md:text-2xl ">
 <span className="text-blue-500 text-2xl font-bold">Bistro Boss Restaurant</span></a>
                              </div>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                  <ul className="menu menu-horizontal px-1">
                                  {navLinks}
                                  </ul>
                                </div>
                                <div className="navbar-end">
                                 <ul>
                                <li>
{/* {
  user?.email ? <div className="dropdown dropdown-end md:mr-5 z-[10]">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-12 rounded-full">
          <img src={user?.photoURL} alt="User Photo" />
      </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-4 z-[1]  shadow bg-base-100 rounded-box max-w-[300px] p-5">
                       <li className="font-black ml-3">
               {user?.displayName}
                    </li>
           <li><a className="px-5" >{user?.email}</a></li>
      <li><button onClick={handleLogOut} className="text-xl font-bold">Logout
      </button></li>
                                    
                  </ul>
      
                    </div>
                              
   :<NavLink
   to="/login"
    className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "text-red-600" : ""
    }
                                 >
   <div className="text-xl font-semibold">Login</div>
    </NavLink>
} */}
                               </li>
                               </ul>
                                </div>
                              </div>                                                                                         
                               </div>
);
};

export default Navbar;