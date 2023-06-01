import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertbg from '../../assets/menu/dessert-bg.jpeg'
import pizzabg from '../../assets/menu/pizza-bg.jpg'
import saladbg from '../../assets/menu/salad-bg.jpg'
import soupbg from '../../assets/menu/soup-bg.jpg'
import Menu from '../Home/Menu/Menu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuItems from './MenuItems';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingSpinner from '../../Loader/LoadingSpinner';
import useMenu from '../../hooks/useMenu';



const OurMenu = () => {
      const [menu]= useMenu();
      const {loading}= useContext(AuthContext);

      if(loading){
            return <LoadingSpinner/>
      }

      const offered = menu.filter(item => item.category === 'offered')
      const dessert = menu.filter(item => item.category === 'dessert')
      const pizza = menu.filter(item => item.category === 'pizza')
      const salad = menu.filter(item => item.category === 'salad')
      const soup = menu.filter(item => item.category === 'soup')
      // console.log(menu);
      return (
            <div className='mb-20'>
                  <Helmet>
                        <title>Bistro Boss | Menu</title>
                  </Helmet>

                  <Cover coverImg={menuImg} title={"Our Menu"} />
                  <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offers"}></SectionTitle>
                  <MenuItems items={offered}></MenuItems>

                  {/* dessets option  */}

                  <MenuItems items={dessert} coverImg={dessertbg} title={"dessert"}></MenuItems>

                  {/* pizza option  */}

                  <MenuItems items={pizza} coverImg={pizzabg} title={"pizza"}></MenuItems>

                  {/* salad option  */}

                  <MenuItems items={salad} coverImg={saladbg} title={"salad"}></MenuItems>

                  {/* salad option  */}

                  <MenuItems items={soup} coverImg={soupbg} title={"soup"}></MenuItems>
                 
               
            </div>
      );
};

export default OurMenu;