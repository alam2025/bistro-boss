import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import menu1 from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../UseMenu/useMenu';
import MenuItems from '../../../componets/MenuItems';

const Menu = () => {
      const [menu] = useMenu();
      const popularMenu = menu.filter(item => item.category === 'popular')


      // useEffect(() => {
      //       fetch('/menu.json')
      //             .then(res => res.json())
      //             .then(datas => {
      //                   const popularMenu = datas.filter(data => data.category === 'popular');
      //                   setMenu(popularMenu)
      //             })
      // }, [])

      return (
            <section className='my-20 mx-[10%]'>
                  <SectionTitle heading={'Popular Menu'}
                        subHeading={'Check it Out'} />

                  <MenuItems items={popularMenu}></MenuItems>

                  {/* <div className='grid md:grid-cols-2 gap-10'>
                        {
                              popularMenu.map(m =>
                                    <div key={m._id} className='flex gap-3  items-center'>
                                          <img style={{ borderRadius: '0 200px 200px' }} src={m.image} alt="" className=' w-[100px] h-[100px]' />
                                          <div className='flex gap-3'>
                                                <div>
                                                      <h3 className='text-2xl'>{m.name} ------------------</h3>
                                                      <p>{m.recipe}</p>
                                                </div>
                                                <p className='text-[#BB8506]'>${m.price}</p>
                                          </div>
                                    </div>)
                        }

                  </div> */}
            </section>
      );
};

export default Menu;