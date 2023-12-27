import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProVider";


const PrivateRouter = ({children}) => {
   const {user,loading} =useContext(AuthContext)
   const location = useLocation()
   console.log(location.pathname); 
   if(loading){
      return <span className="loading loading-spinner text-secondary"></span>
   }
   if(user){
     return children
   }                          
 return <Navigate to='/login' state={{form:location}} replace >Login</Navigate>
};

export default PrivateRouter;