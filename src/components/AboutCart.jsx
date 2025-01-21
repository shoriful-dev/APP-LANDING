import React from 'react';
import Image from './Image';
import Frame from '../assets/frame.png';


const AboutCart = ({ imgSrc, text}) => {
  return (
    <>
      <div className="w-[480px] h-[333px] shadow-2xl rounded-2xl border-gray-200 px-10 py-6 mb-20">
        <div className={'h-[50px] w-[50px]'}>
          <Image imgSrc={Frame} />
        </div>
        <p className="font-roboto text-gray pt-5 w-[400px]">
          “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est
          officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore
          ipsum. Proident excepteur ex aliqua cupidatat.”
        </p>
        <div className="flex items-center space-x-5">
          <div className={'w-[60px] h-[60px] mt-10'}>
            <Image imgSrc={imgSrc} />
          </div>
          <h3 className="font-roboto font-medium mt-10">{text}</h3>
        </div>
      </div>
    </>
  );
};

export default AboutCart;
