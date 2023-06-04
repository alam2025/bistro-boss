import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';

const ManageItem = () => {
      const [menu]= useMenu()
      return (
            <div>
                  <SectionTitle heading={'manage all items'} subHeading={'Hurry Up!'}></SectionTitle>

                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                <label>
                                                      #
                                                </label>
                                          </th>
                                          <th>ITEM IMAGE</th>
                                          <th>ITEM NAME</th>
                                          <th>PRICE</th>
                                          <th>UPDATE</th>
                                          <th>DELETE</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    
                                    
                              {
                                    menu.map(item=> 
                                    <tr key={item._id}>
                                          <th>

                                          </th>
                                          <td>
                                                <div className="flex items-center space-x-3">
                                                      <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                      </div>

                                                </div>
                                          </td>
                                          <td>
                                                {item.name}
                                                
                                          </td>
                                          <td className=' text-end'>${item.price}</td>
                                          <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                          </th>
                                          <th>
                                                <button className="btn btn-ghost btn-xs">d</button>
                                          </th>
                                    </tr>
                                    )
                              }

                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default ManageItem;