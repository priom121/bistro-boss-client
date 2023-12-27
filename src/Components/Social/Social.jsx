import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProVider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";




const Social = () => {
 const {googleSignIn} =useContext(AuthContext)
 const axiosPublic = useAxiosPublic()
 const navigate = useNavigate()
 const googleLogIn =()=>{
     googleSignIn()
     .then(result=>{
        console.log(result.user);
        const userInform = {
         email:result.user?.email,
         name:result.user?.displayName
        }
        axiosPublic.post('/users',userInform)
        .then(res=>{
          console.log(res.data);
          navigate('/')
        })
     })
    
 }
 return (
  <div className="p-4">
     <div>
     <button onClick={googleLogIn} className="btn ">
    <FaGoogle></FaGoogle> google
    {/* Google <svg xmlns="http://www.w3.org/2000/svg" 
  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> */}
</button>
    </div>                                                                                     
 </div>
 );
}

export default Social;