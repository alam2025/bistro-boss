import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
const Category = () => {
      return (
            <div className=' my-12 md:mx-[10%]'>
                  <SectionTitle subHeading={`From 11:00am to 10:00pm`} 
                  heading={'order online'}/>
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <img src={slide1} alt="" />
                              <h3 className=' uppercase text-3xl text-center font-bold text-white -mt-16'>Salads</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide2} alt="" />
                              <h3 className=' uppercase text-3xl text-center font-bold text-white -mt-16'>Pizzas</h3></SwiperSlide>
                        <SwiperSlide><img src={slide3} alt="" />
                              <h3 className=' uppercase text-3xl text-center font-bold text-white -mt-16'>Soups</h3></SwiperSlide>
                        <SwiperSlide><img src={slide4} alt="" />
                              <h3 className=' uppercase text-3xl text-center font-bold text-white -mt-16'>Desserts</h3></SwiperSlide>
                        <SwiperSlide><img src={slide5} alt="" />
                              <h3 className=' uppercase text-3xl text-center font-bold text-white '>Salads</h3></SwiperSlide>


                  </Swiper>
            </div>
      );
};

export default Category;