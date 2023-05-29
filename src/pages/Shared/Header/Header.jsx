import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
      const navLinks=<>
      <li>Home</li>
      <li>Contact Us</li>
      <li>Dashboard</li>
      <li>Our Menu</li>
      <li>Our Shop</li>
      </>
      return (
            <div className="navbar fixed md:w-[85%] bg-opacity-60 bg-black text-white z-10  bg-base-100  ">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                              </ul>
                        </div>
                        <Link to='/' className=' flex flex-col justify-start items-start'>
                        <span className=' text-3xl font-extrabold'>BISTRO BOSS</span>
                        <span className=' text-xl tracking-widest block'>RESTAURANT</span>
                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <a className="btn">Get started</a>
                  </div>
            </div>
      );
};

export default Header;