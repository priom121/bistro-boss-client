import { useQuery } from "@tanstack/react-query";
// import useHook from "../../../Hook/useHook";
import useAxios from "../../../Hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProVider";
import { FaBook, FaDollarSign, FaRavelry, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxios()
    const {data : stats} =useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/admin-stats')
            console.log(res.data);
            return res.data
            
        }
    })
 return (
 <div>
    <p className="text-4xl p-5 font-bold"> This is Admin Home :</p>
   <div className="text-3xl text-center ">
    Admin name :
   {
        user.displayName ? user.displayName :'BACK'
    }
   </div>
    <div className="">
    <div className="stats shadow w-full ">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaDollarSign className="text-3xl font-semibold"></FaDollarSign>
    </div>
    <div className="stat-title font-bold text-xl">Revenue</div>
    <div className="stat-value">{stats?.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaUsers className="text-3xl font-semibold"></FaUsers>
    </div>
    <div className="stat-title font-bold text-xl">Users</div>
    <div className="stat-value">{stats?.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaRavelry className="text-3xl font-semibold"></FaRavelry> 
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value font-bold text-xl">{stats?.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaBook className="text-3xl font-semibold"></FaBook>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value font-bold text-xl">{stats?.menuItems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>   
      </div>                                                                                    
 </div>
 );
};

export default AdminHome;