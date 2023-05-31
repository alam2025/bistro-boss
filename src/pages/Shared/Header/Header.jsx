import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
      const {user,logOut}=useContext(AuthContext);
     
      const navLinks = <>
            <li><Link to='/'>Home</Link></li>
            
            <li><Link to='/menu'>Our Menu</Link></li>
            <li><Link to='/shop/salad'>Our Shop</Link></li>
            <li><Link to='/secret'>Secret</Link></li>
            {!user ? <li><Link to='/login'>Login</Link></li>
            :<li><button onClick={()=>logOut().then().catch(error=>console.log(error.message))} className='btn btn-outline'>Logout</button></li>}
           
            
            
      </>
      return (
            <div className="navbar fixed md:px-[5%] bg-opacity-60 bg-black text-white z-10  bg-base-100  ">
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