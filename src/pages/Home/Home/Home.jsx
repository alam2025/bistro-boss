import React, { useContext } from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';
import ChefService from '../ChefService/ChefService';
import CallUs from '../CallUs/CallUs';
import Testimonials from '../Testimonials/Testimonials';
import Featured from '../Featured/Featured';
import Chefs from '../Chefs/Chefs';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../provider/AuthProvider';
import LoadingSpinner from '../../../Loader/LoadingSpinner';

const Home = () => {
      const {loading}= useContext(AuthContext);
      if(loading){
            return <LoadingSpinner/>
      }
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Home</title>
                  </Helmet>
                  <Banner/>
                  <Category/>
                  <ChefService/>
                  <Menu/>
                  <CallUs/>
                  <Chefs/>
                  <Featured/>
                  <Testimonials/>

                  
            </div>
      );
};

export default Home;