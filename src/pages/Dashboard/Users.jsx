import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import swal from 'sweetalert';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
const Users = () => {
      const [axiosSecure] = useAxiosSecure()
      const { user } = useAuth()
      const token = localStorage.getItem('Access_token');
      const { refetch, data: users = [] } = useQuery({
            queryKey: ['users'],
            // queryFn: async () => {
            //       const res = await axiosSecure.get(`/users`)
            //       return res.data;
            // }
            queryFn: async () => {
                  const res = await fetch(`http://localhost:5000/users`, {
                        headers: {
                              authorization: `Bearer ${token}`
                        }
                  })
                  return res.json()
            }

      })

      const handleRole = (user) => {
            fetch(`http://localhost:5000/users/admin/${user._id}`, {
                  method: 'PATCH'
            })
                  .then(res => res.json())
                  .then(data => {
                        refetch()
                        if (data.modifiedCount > 0) {
                              swal({
                                    title: "Ok!",
                                    text: `${user.name} is now Admin`,
                                    icon: "success",
                              });
                        }
                  })
      }

      const handleDelete = user => {
            swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this imaginary file!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
            })
                  .then((willDelete) => {
                        if (willDelete) {
                              fetch(`http://localhost:5000/users/${user._id}`, {
                                    method: "DELETE"
                              })
                                    .then(res => res.json())
                                    .then(data => {
                                          refetch()
                                          if (data.deletedCount > 0) {
                                                swal("Poof! Your imaginary file has been deleted!", {
                                                      icon: "success",
                                                });
                                          }

                                    })
                        } else {
                              swal("Your imaginary file is safe!");
                        }
                  });
      }
      return (
            <div className='md:mx-12'>
                  <SectionTitle subHeading={'How Many???'} heading={'manage all users'}></SectionTitle>
                  <div className=' border p-8 mb-16 shadow-md'>
                        <h1 className=' h-16 text-2xl font-semibold'>TOTAL USER : {users.length}</h1>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr className=' text-xl text-black bg-amber-300'>
                                                <th>
                                                      #
                                                </th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Roll</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {
                                                users.map((user, index) => <tr key={user._id}>
                                                      <th>
                                                            <label>
                                                                  {index + 1}
                                                            </label>
                                                      </th>
                                                      <td>
                                                            {user.name}
                                                      </td>
                                                      <td>
                                                            {user.email}
                                                      </td>
                                                      <td className='flex justify-end'>
                                                            {user.role === 'Admin' ? 'Admin' :
                                                                  <button onClick={() => handleRole(user)} className="btn btn-outline bg-orange-300 border-0"><FaUserShield size={20} /></button>}
                                                      </td>
                                                      <th>
                                                            <button onClick={() => handleDelete(user)} className="btn btn-outline bg-orange-300 border-0"><FaTrashAlt size={20} /></button>
                                                      </th>
                                                </tr>)
                                          }
                                    </tbody>


                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default Users;