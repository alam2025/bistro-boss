import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
      return (
            <div className=' flex flex-col justify-center items-center my-8'>
                  <p className=' text-[#D99904] text-xl mb-2'>--- {subHeading} ---</p>
                  <h1 className=' uppercase text-4xl font-bold border-y-4 py-4 px-8'>{heading}</h1>
            </div>
      );
};

export default SectionTitle;