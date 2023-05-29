import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'

const Featured = () => {
      return (
            <div style={{backgroundImage:`url(${featureImg})`}} className=' my-20 pt-16 bg-fixed text-white my-20 pt-16 '>
                  <SectionTitle heading={'Featured Item'} subHeading={'Check It Out'}></SectionTitle>

                  <div className='md:flex justify-center items-center bg-opacity-60 px-36 pb-24 bg-slate-400'>
                        <div><img src={featureImg} alt="" /></div>
                        <div className='md:ml-10 mt-12'>
                              <p>{Date()}</p>
                              <h3 className=' uppercase text-3xl'>WHERE CAN I GET SOME?</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default Featured;