import React from 'react';

const FoodCard = ({ item }) => {
      return (
            <div className="card  bg-base-100 shadow-xl ">
                  <figure><img src={item.image} alt="Shoes" className=' w-full' /></figure>
                  <p className=' bg-black text-white absolute right-0 mr-6 mt-4 px-4 py-1 rounded-md'>${item.price}</p>
                  <div className="card-body  flex flex-col justify-center items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end mt-4 flex  justify-center items-center w-full">
                              <button className="btn btn-outline border-0 border-b-4 border-orange-400 px-8">ADD TO CART</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;