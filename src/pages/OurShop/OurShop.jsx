import React, { useContext, useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import shop from '../../assets/shop/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../UseMenu/useMenu';
import OrderTap from './OrderTap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingSpinner from '../../Loader/LoadingSpinner';

const OurShop = () => {
      const {loading}= useContext(AuthContext);

      if(loading){
            return <LoadingSpinner/>
      }
     

      const categories=['salad','pizza','soup','dessert','drink']
      const {category}= useParams();
      const initialIndex= categories.indexOf(category)
      // console.log(initialIndex);

      const [tabIndex, setTabIndex] = useState(initialIndex);
      const [menu] = useMenu();


      const dessert = menu.filter(item => item.category === 'dessert')
      const pizza = menu.filter(item => item.category === 'pizza')
      const salad = menu.filter(item => item.category === 'salad')
      const soup = menu.filter(item => item.category === 'soup')
      const drink = menu.filter(item => item.category === 'drinks')
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Order food</title>
                  </Helmet>
                  <Cover coverImg={shop} title={'Our Shop'}></Cover>

                  <div className=' md:mx-[10%] my-12'>
                        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList>
                                    <Tab>Salad</Tab>
                                    <Tab>Pizzas</Tab>
                                    <Tab>Soups</Tab>
                                    <Tab>Desserts</Tab>
                                    <Tab>Drinks</Tab>
                              </TabList>
                              <TabPanel>
                                    <OrderTap items={salad}></OrderTap>
                              </TabPanel>
                             
                              <TabPanel>
                                    <OrderTap items={pizza}></OrderTap>
                              </TabPanel>
                              <TabPanel>
                                    <OrderTap items={soup}></OrderTap>
                              </TabPanel>
                              <TabPanel>
                                    <OrderTap items={dessert}></OrderTap>
                              </TabPanel>
                              <TabPanel>
                                    <OrderTap items={drink}></OrderTap>
                              </TabPanel>
                        </Tabs>
                  </div>

            </div>
      );
};

export default OurShop;