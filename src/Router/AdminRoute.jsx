import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";

const AdminRoute = ({children}) => {
 const [user,loading] =useAuth()
 const[isAdmin,isAdminLoading] =useAdmin()
 const location = useLocation()
 console.log(location.pathname); 
 if(loading || isAdminLoading){
    return <span className="loading loading-spinner text-secondary"></span>
 }
 if(user && isAdmin){
   return children
 }                          
return <Navigate to='/login' state={{form:location}} replace >Login</Navigate>
};

export default AdminRoute;