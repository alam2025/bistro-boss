import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';
import ChefService from '../ChefService/ChefService';
import CallUs from '../CallUs/CallUs';
import Testimonials from '../Testimonials/Testimonials';
import Featured from '../Featured/Featured';
import Chefs from '../Chefs/Chefs';

const Home = () => {
      return (
            <div>
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