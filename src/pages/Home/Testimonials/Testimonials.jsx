import React, { useEffect, useState } from 'react';
import { FaQuoteLeft} from "react-icons/fa";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
      const [reviews, setReview] = useState([])
      useEffect(() => {
            fetch('/reviews.json')
                  .then(res => res.json())
                  .then(data => {
                        setReview(data)
                  })
      }, [])
      console.log(reviews);
      return (
            <section className=' mx-[10%]'>
                  <SectionTitle subHeading={'What Our Client Says'} heading={'Testimonials'}></SectionTitle>

                  <>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                              {
                                    reviews.map(review => <SwiperSlide key={review._id}>
                                          <div className='flex flex-col gap-6 items-center mx-24 my-16 text-center'>
                                                <Rating
                                                      style={{ maxWidth: 180 }}
                                                      value={review.rating}
                                                      readOnly
                                                />

                                                <FaQuoteLeft size={100}/>
                                                <p>{review.details}</p>
                                                <h3 className=' text-3xl text-amber-500'>{review.name}</h3>
                                          </div>


                                    </SwiperSlide>)
                              }

                        </Swiper>
                  </>
            </section>
      );
};

export default Testimonials;