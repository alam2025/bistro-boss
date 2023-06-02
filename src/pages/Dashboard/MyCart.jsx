import React, { useContext } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../provider/AuthProvider';
import { FaTrashAlt } from "react-icons/fa";
import swal from 'sweetalert';
import { Helmet } from 'react-helmet';
const MyCart = () => {
      const { user } = useContext(AuthContext)
      const [cart,refetch] = useCart()
      

      const totalPrice = cart.reduce((accumulator, currentValue) => {
            return (accumulator + currentValue.price)
      }, 0)


      const handleDelete=(item)=>{
            swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this imaginary file!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                    fetch(`http://localhost:5000/carts/${item._id}`,{
                        method:'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        refetch()
                        if(data.deletedCount){
                              swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                  })
                        }

                    })
                  } else {
                    swal("Your imaginary file is safe!");
                  }
                });
      }


      return (
            <div className=' md:mx-12'>
                  <Helmet>
                        <title>Bistro Boss | My Cart</title>
                  </Helmet>
                  <SectionTitle subHeading={'My Cart'} heading={'Wanna Add More'}></SectionTitle>

                  <div className=' border p-8 mb-16 shadow-md'>
                        <div className=' flex justify-evenly items-center h-24'>
                              <h3 className=' text-2xl font-semibold'>Total Order : {cart?.length}</h3>
                              <h3 className=' text-2xl font-semibold'>Total Price : ${totalPrice}</h3>
                              <button className=' btn btn-small btn-warning'>PAY</button>
                        </div>

                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr className=' text-xl text-black bg-amber-300'>
                                                <th>
                                                      #
                                                </th>
                                                <th>Item Image</th>
                                                <th>Item Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {
                                                cart.map((item,index) => <tr key={item._id}>
                                                      <th>
                                                            <label>
                                                                  {index+1}
                                                            </label>
                                                      </th>
                                                      <td>
                                                            <div className="flex items-center space-x-3">
                                                                  <div className="avatar">
                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                              <img src={item.image} alt={item.name} />
                                                                        </div>
                                                                  </div>
                                                                  
                                                            </div>
                                                      </td>
                                                      <td>
                                                            {item.name}
                                                      </td>
                                                      <td className='flex justify-end'>${item.price}</td>
                                                      <th>
                                                            <button onClick={()=>handleDelete(item)} className="btn btn-outline bg-orange-300 border-0"><FaTrashAlt size={20}/></button>
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

export default MyCart;