import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

import useCart from '../../hooks/useCart';
import swal from 'sweetalert';
import axios from 'axios';

const FoodCard = ({ item }) => {
      const navigate = useNavigate()
      const { user } = useContext(AuthContext);
      const location=useLocation()
      const [,refetch]=useCart()


      const{name, image, price, recipe, _id}=item;
      


      const handleAddToCart = items => {
            const {_id,name,image,price,recipe}= items;
            if (user && user?.email) {
                  const cartItem={menuItemId:_id, name,image,price,recipe,email:user?.email}
                  const token=localStorage.getItem('Access-token')
                  fetch(`http://localhost:5000/carts`, {
                        method: 'POST',
                        headers: {
                              'content-type': 'application/json',
                              // 'authorization':`Bearer ${token}`
                        },
                        body: JSON.stringify(cartItem)
                  })
                  

                        .then(res => res.json())
                        .then(data => {
                              refetch()
                              
                              if (data.insertedId) {
                                    swal({
                                          title: "Good job!",
                                          text: `You add ${name} to your cart!`,
                                          icon: "success",
                                        });
                              }
                        })
            }
            else {
                  swal({
                        title: 'Please, login to save food.',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Login here!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login', {state:{from:location}} )
                          
                        }
                      })
            }
      }
      return (
            <div className="card  bg-base-100 shadow-xl ">
                  <figure><img src={image} alt="Shoes" className=' w-full' /></figure>
                  <p className=' bg-black text-white absolute right-0 mr-6 mt-4 px-4 py-1 rounded-md'>${price}</p>
                  <div className="card-body  flex flex-col justify-center items-center">
                        <h2 className="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end mt-4 flex  justify-center items-center w-full">
                              <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 px-8">ADD TO CART</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;