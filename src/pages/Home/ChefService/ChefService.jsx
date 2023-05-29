import React from 'react';
import serveice from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
      return (
            <section style={{ backgroundImage: `url(${serveice})` }} className='py-[8%] px-[10%] mt-20 '>
                  {/* <img src={serveice} alt="" /> */}
                  <div className='bg-white  text-center rounded-md shadow-md px-28 py-20 '>
                        <h3 className='text-4xl my-4'>Bistro Boss</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                  </div>
            </section>
      );
};

export default ChefService;