import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaBookmark, FaCalendarAlt, FaFileContract, FaHome, FaShopify, FaShoppingCart, FaStreetView, FaUserAlt, FaUserCircle, FaUserFriends, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from '../hooks/useCart';
import { AiFillShop, AiOutlineMenu, AiTwotoneContacts } from "react-icons/ai";
import { Helmet } from 'react-helmet';

import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {
      const [cart] = useCart()

      const isAdmin = true;
      return (
            <div className="drawer lg:drawer-open">
                  <Helmet>
                        <title>Bistro Boss | Dashboard</title>
                  </Helmet>
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                        {/* Page content here */}

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><AiOutlineMenu /></label>
                        <Outlet />
                  </div>
                  <div className="drawer-side bg-amber-300">
                        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                        <ul className="menu p-4 h-full  text-base-content">
                              {/* Sidebar content here */}
                              <div className='mb-8 flex flex-col justify-start items-start'>
                                    <span className=' text-3xl font-extrabold'>BISTRO BOSS</span>
                                    <span className=' text-xl tracking-widest block'>RESTAURANT</span>
                              </div>


                              {
                                    isAdmin ? <>
                                          <div className="divider "></div>
                                          <li><NavLink to='/user'><FaHome />ADMIN HOME</NavLink></li>
                                          <li><NavLink to='/reservation'><FaUtensils /> ADD ITEMS</NavLink></li>
                                          <li><NavLink to='/wallet'><TfiMenuAlt/> MANAGE ITEMS</NavLink></li>
                                          <li><NavLink to='/wallet'><FaBookmark /> MANAGES BOOKINGS</NavLink></li>
                                          <li><NavLink to='/dashboard/all-users'><FaUsers />ALL USERS</NavLink></li>
                                    </>
                                          : <>
                                                <div className="divider "></div>
                                                <li><NavLink to='/user'><FaHome />USER HOME</NavLink></li>
                                                <li><NavLink to='/reservation'><FaCalendarAlt /> RESERVATION</NavLink></li>
                                                <li><NavLink to='/wallet'><FaWallet /> PAYMENT HISTORY</NavLink></li>
                                                <li><NavLink to='/dashboard/my-cart'><FaShoppingCart /> MY CART
                                                      <div className="badge badge-secondary absolute  right-12 top-0">+{cart ? cart.length : 0}</div>
                                                </NavLink></li>
                                                <li><NavLink to='/reviews'><FaStreetView /> ADD REVIEW</NavLink></li>
                                                <li><NavLink to='books'><FaBook /> MY BOOKINGS</NavLink></li>
                                          </>
                              }



                              <div className="divider "></div>

                              <li><NavLink to='/'><FaHome /> HOME</NavLink></li>
                              <li><NavLink to='/dashboard/menulist'><AiOutlineMenu />MENU</NavLink></li>
                              <li><NavLink to='/shop' ><FaShopify />SHOP</NavLink></li>
                              <li><NavLink to='/contact'><AiTwotoneContacts />CONTACT</NavLink></li>


                        </ul>
                  </div>
            </div>
      );
};

export default Dashboard;
