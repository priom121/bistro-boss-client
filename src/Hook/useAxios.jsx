import axios from "axios";
 import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";




const axiosSecure = axios.create({
 baseURL:'https://bistro-boss-server-mocha-beta.vercel.app'
})
const useAxios = () => {
      
    //  const {logOut} = useAuth()
    //  const navigate =useNavigate()
   axiosSecure.interceptors.request.use(function(config){
      const token =localStorage.getItem('access-token');
      // console.log('requested stopped by interceptors',token);
         config.headers.authorization = `Bearer ${token}`                     
     return config;
   }, function (error) {
// Do something with request error
 return Promise.reject(error);
  })

// interceptors 401 & 403 status
axiosSecure.interceptors.response.use(function(response){
return response;
},async(error)=>{
const status = error.response.status
console.log('status error',status);
if(status === 401 || status === 403){

// await logOut()
//  navigate('/login')

}
 return Promise.reject(error)
})


return axiosSecure
};

export default useAxios;