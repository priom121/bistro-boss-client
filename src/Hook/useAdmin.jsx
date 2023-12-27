import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProVider";
// import { useEffect, useState } from "react";


const useAdmin = () => {
 const {user} =useContext(AuthContext)
 const axiosSecure = useAxios()
 const {data :isAdmin ,isPending:isAdminLoading} = useQuery({
      queryKey:[ 'isAdmin', user?.email  ],
      queryFn:async()=>{
         console.log('user emai', user?.email);
         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
         console.log(res.data);
         return res.data?.admin
      },   
 })
 return [isAdmin,isAdminLoading]
};

export default useAdmin;