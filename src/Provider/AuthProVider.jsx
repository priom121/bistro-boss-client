import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,
   getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut,
  updateProfile} from "firebase/auth";
import { app } from "../../firebase.config";
import useAxios from "../Hook/useAxios";


 export const AuthContext = createContext()
 const auth = getAuth(app);
const AuthProVider = ({children}) => {
 const [user,setUser] =useState({})
 const [loading,setLoading] =useState(true)
 const axiosPublic = useAxios()

 const provider = new GoogleAuthProvider()
  
 const createUser =(email,password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
 }

 const signIn =(email,password)=>{
          setLoading(true)
   return signInWithEmailAndPassword (auth,email,password)
 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
          if(currentUser){
            // get token
            const userInfo = {email:currentUser.email }
            axiosPublic.post('/jwt',userInfo)
           .then(res=>{
            if(res.data.token){
              localStorage.setItem('access-token',res.data.token)
            }
           })
          }
          else{
            // todo
            localStorage.removeItem('access-token')
          }
          setLoading(false)                
   })
   return()=>{
       return unsubscribe ()
   }
 },[axiosPublic])

 const googleSignIn = ()=>{
  setLoading(true)
  return signInWithPopup(auth, provider )
 }

 const logOut = ()=>{
 setLoading(true)
 return signOut(auth)
 }

 const updateUserProfile =(name,photo)=>{
  return updateProfile(auth.currentUser,{
    displayName:name ,photoURL:photo
   })
 }


const authInfo ={
  googleSignIn, user,loading,createUser,signIn ,logOut, updateUserProfile
}
return (
 <AuthContext.Provider value={authInfo}>
         {children}                                                                                 
 </AuthContext.Provider>
);
};

export default AuthProVider;