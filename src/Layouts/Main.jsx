import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
      const location = useLocation();
      const noheaderFooter = location.pathname.includes(`login`)|| location.pathname.includes('register')
      // console.log(noheaderFooter);
      const user={}
      return (
            <div className=' flex flex-col min-h-screen'>
                  {noheaderFooter || <Header />}
                  <Outlet />
                  {noheaderFooter || <Footer />}

            </div>
      );
};

export default Main;