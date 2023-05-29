import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
      return (
            <div className=' flex flex-col min-h-screen'>
                  <Header/>
                  <Outlet/>
                  <Footer/>
                  
            </div>
      );
};

export default Main;