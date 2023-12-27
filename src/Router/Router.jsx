import {createBrowserRouter,} from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order.jsx/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";
import AllUser from "../Pages/Dashbord/AllUsers/AllUser";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashbord/AddItems/AddItems";
import PrivateRouter from "./PrivateRoute";
import ManageItems from "../Pages/Dashbord/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashbord/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashbord/Payment/Payment";
import PaymentHistory from "../Pages/Dashbord/Payment/PaymentHistory";
import UserHome from "../Pages/Dashbord/UserHome/UserHome";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";


const router = createBrowserRouter([
{
   path: "/",
  element: <MainLayOut></MainLayOut>,
  children:[
     {
       path:'/',
       element:<Home></Home>
     },
     {
      path:'/menu',
      element:<Menu></Menu>
     },
     {
      path:'/order/:category',
      element:<PrivateRouter><Order></Order></PrivateRouter>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/signUp',
      element:<SignUp></SignUp>
     }
  ]
 },
 {
   path:'/dashbord',
   element:<Dashbord></Dashbord>,
   children:[
      {
       path:'/dashbord/userHome',
       element:<UserHome></UserHome>
      },
      {
         path:'/dashbord/cart',
         element:<Cart></Cart>
      },
      {
         path:'/dashbord/payment',
         element:<Payment></Payment>
      },
      {
         path:'/dashbord/paymentHistory',
         element:<PaymentHistory></PaymentHistory>
      },
      // admin-----------
      {
        path:'/dashbord/adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
         path:'/dashbord/users',
         element:<AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
         path:'/dashbord/addItems',
         element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
         path:'/dashbord/manageItems',
         element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
         path:'/dashbord/updateItems/:id',
         element:<AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
         loader:({params})=>fetch(`https://bistro-boss-server-mocha-beta.vercel.app/menu/${params.id}`)
      }
   ]
 }
 ]); 
 export default router;           