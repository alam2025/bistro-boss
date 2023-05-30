import React from 'react';
import Cover from '../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuItems = ({ items, title, coverImg }) => {
      return (

            <div >
                  <div className=' my-12'>
                        {title && <Cover title={title} coverImg={coverImg} />}
                  </div>
                  <div className='grid md:grid-cols-2 gap-10 md:mx-[10%]'>
                        {
                              items.map(m =>
                                    <div key={m._id} className='flex gap-3  items-center'>
                                          <img style={{ borderRadius: '0 200px 200px' }} src={m.image} alt="" className=' w-[100px] h-[100px]' />
                                          <div className='flex gap-3'>
                                                <div>
                                                      <h3 className='text-2xl'>{m.name} -----------</h3>
                                                      <p>{m.recipe}</p>
                                                </div>
                                                <p className='text-[#BB8506]'>${m.price}</p>
                                          </div>
                                    </div>)
                        }

                  </div>
                  <div className=' flex flex-col justify-center items-center mt-4 mb-12'>
                        <Link to={`/shop/${title}`}>
                              <button className="btn btn-outline border-x-0 border-t-0 border-b-4">Order Your Favourite Food</button>
                        </Link>
                  </div>
            </div>
      );
};

export default MenuItems;