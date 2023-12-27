import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";



const useAuth = () => {
const axiosPublic = useAxiosPublic()
//  const [items,setItems] =useState([])
//  const [loading,setLoading] =useState(true)
// useEffect(()=>{
//   fetch('https://bistro-boss-server-mocha-beta.vercel.app/menu')
//   .then(res=>res.json())
//   .then(data=>{
//        setItems(data)
//        setLoading(false)
//   })
// },[])  
 const {data:items =[],isPending:loading,refetch} =useQuery({
  queryKey:['menu'],
  queryFn:async()=>{
  const res =await axiosPublic.get('/menu')
  return res.data
  }
 })

return [items,loading ,refetch]                       
};

export default useAuth;