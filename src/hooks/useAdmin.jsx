import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin=()=>{
      const {user,loading}=useAuth();
      const [axiosSecure]=useAxiosSecure()
      const token = localStorage.getItem('Access_token');

      const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
            queryKey:['isAdmin',user?.email],
            // enabled:!loading,
            // queryFn:async()=>{
            //       const res= await axiosSecure.get(`/users/admin/${user?.email}`);
            //       // console.log('admin res : ', res);
            //       return res.data.admin;
            // }
            enabled:!loading,
            queryFn: async () => {
                  const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                        headers: {
                              authorization: `Bearer ${token}`
                        }
                  })
                  return res.json()
            }
      })
      return [isAdmin,isAdminLoading]
}

export default useAdmin