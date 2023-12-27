import { useContext } from "react";
import {  Link, useLocation, useNavigate } from "react-router-dom";
// import { loadCaptchaEnginge, LoadCanvasTemplate, 
//    validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProVider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Social from "../../Components/Social/Social";
   
const Login = () => {

 const {signIn} =useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
const from = location?.state?.from?.pathname || '/'

//    useEffect(()=>{
// loadCaptchaEnginge(6);                     
//    },[])

 const handleLogin =(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user =result.user
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from,{replace:true})
    })
 
 }

//  const handleValidate =(e)=>{
//   const user_Validate_Captcha = e.target.value;
//   if(validateCaptcha (user_Validate_Captcha )){
//    setDisable(false)
//   }else{
//   setDisable(true)
//   }
//  }


return (
<>
<Helmet>
       <title> Bistro | login</title>
     </Helmet>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl 
    bg-gradient-to-r from-blue-500 to-slate-200 text-white">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl font-bold">Login!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password"
           name='password' className="input text-black input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text"  placeholder="type the recaptcha"
           name='captcha' className="input text-black input-bordered" required />
           <button onBlur={handleValidate} 
           className="btn btn-outline btn-accent">validate</button>
        </div> */}

    
        <div className="form-control mt-6">
          <button disabled={false}  className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>New to restaurant ?  
        <Link className='text-blue-600 font-medium' to='/signUp'>
        Sign Up
        </Link></p>
      </form>
      <div className="py-4 text-center">
       <p className="text-center text-lg text-cyan-400">or connect with</p>
       <Social></Social>
      </div>
    </div>
  </div>
</div>
</>
 );
};

export default Login;