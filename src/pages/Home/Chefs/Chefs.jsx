import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
const Chefs = () => {

      const [menu, setMenu] = useState([])

      useEffect(() => {
            fetch('/menu.json')
                  .then(res => res.json())
                  .then(datas => {
                        const popularMenu = datas.filter(data => data.category === 'popular');
                        setMenu(popularMenu)
                  })
      }, [])
      return (
            <div>
                  <SectionTitle heading={'popoular chefs'} subHeading={'Should Try'}></SectionTitle>

                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-24"
                  >
                        <div className=''>
                              {
                                    menu.map(m => <div className=' mx-8'>
                                          <SwiperSlide key={m._id}>

                                                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                                                      <figure><img src={m.image} alt="Shoes" /></figure>
                                                      <div className="card-body flex flex-col justify-center items-center">
                                                            <h2 className="card-title">{m.name}</h2>
                                                            <p>{m.recipe}</p>
                                                            <div className="card-actions justify-end">
                                                                  <button className="btn btn-outline border-x-0 border-t-0 border-b-4">ADD TO CART</button>
                                                            </div>
                                                      </div>
                                                </div>

                                          </SwiperSlide>
                                    </div>)
                              }
                        </div>

                        <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>

            </div>
      );
};

export default Chefs;