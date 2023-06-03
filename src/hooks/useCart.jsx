import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
// import { AuthContext } from '../provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'



const useCart = () => {
      const [axiosSecure]= useAxiosSecure()
      
      const { user,loading } = useAuth()
      // console.log(user);
      
      
      // const token = localStorage.getItem('Access_token');
      const { isLoading, refetch, data: cart = [] } = useQuery({
            queryKey: ['cart', user?.email],
            // enabled:!!localStorage.getItem('Access_token'),
            enabled:!loading,
            queryFn: async () => {
                  // console.log(token);
                  const res = await axiosSecure(`/carts?email=${user?.email}`)
                  // console.log(res);
                  return res.data;
            },
            // enabled:!loading,
            // queryFn: async () => {
            //       const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
            //             headers: {
            //                   authorization: `Bearer ${token}`
            //             }
            //       })
            //       return res.json()
            // }
      })


      return [cart, refetch]



}

export default useCart