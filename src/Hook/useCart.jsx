import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProVider";


const useCart = () => {
//     tan stack query use 
const {user} =useContext(AuthContext)
// console.log(user);
const axiosSecure = useAxios()
const {data:cart =[],refetch} = useQuery({
    queryKey:['cart',user?.email],
    enabled:!!user?.email,
    queryFn: async ()=>{
         const result = await axiosSecure.get(`/carts?email=${user?.email}`)
         return result.data
    }
}) 
return[cart,refetch]                      
};

export default useCart;