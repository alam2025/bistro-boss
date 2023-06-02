import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaFileContract, FaHome, FaShopify, FaShoppingCart, FaStreetView, FaWallet } from "react-icons/fa";
import useCart from '../hooks/useCart';
import { AiFillShop, AiOutlineMenu, AiTwotoneContacts } from "react-icons/ai";
import { Helmet } from 'react-helmet';



const Dashboard = () => {
      const [cart] = useCart()
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
                              <div className="divider "></div>
                              <li><Link><FaHome />USER HOME</Link></li>
                              <li><Link><FaCalendarAlt /> RESERVATION</Link></li>
                              <li><Link><FaWallet /> PAYMENT HISTORY</Link></li>
                              <li><Link to='/dashboard/my-cart'><FaShoppingCart /> MY CART
                                    <div className="badge badge-secondary absolute  right-12 top-0">+{cart ? cart.length : 0}</div>
                              </Link></li>
                              <li><Link><FaStreetView /> ADD REVIEW</Link></li>
                              <li><Link><FaBook /> MY BOOKINGS</Link></li>

                              <div className="divider "></div>

                              <li><Link to='/'><FaHome /> HOME</Link></li>
                              <li><Link ><AiOutlineMenu />MENU</Link></li>
                              <li><Link ><FaShopify />SHOP</Link></li>
                              <li><Link ><AiTwotoneContacts />CONTACT</Link></li>


                        </ul>
                  </div>
            </div>
      );
};

export default Dashboard;
