import React from 'react'
import Container from '../components/Container';
import Dots from '../assets/dots.png';
import Image from '../components/Image';
import EasyText from '../assets/EasyText.png';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa6';
import Basic from '../assets/Basic.png';
import Populer from '../assets/Popuper.png';

const Download = () => {
  return (
    <>
      <Container>
        <div className="mt-60 flex justify-between mb-20">
          <div>
          <div>
            <Image imgSrc={Dots} className={'h-[6px] w-[16px]'} />
          </div>
            <Image imgSrc={EasyText} className={'w-[456px] text-[40px] pt-2'} />
            <h3 className="text-[50px] font-semibold font-Darker w-[457px] mt-[-95px] leading-[50px]">
              easy download and ready to use
            </h3>
            <p className="text-[16px] font-roboto w-[457px] text-gray mt-10 leading-7">
              Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.
            </p>
          <div className="flex space-x-5">
            <button className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6231] to-[#FFA979] hover:bg-gradient-to-r hover:from-[#FFA979] hover:to-[#FF6231] duration-500 px-8 py-3 mt-10 rounded-full">
              <IoLogoGooglePlaystore className="text-white text-2xl" />
              <div className="">
                <p className="text-[10px] text-white font-roboto">
                  Download on the
                </p>
                <p className="flex text-sm font-roboto text-white">
                  Google play
                </p>
              </div>
            </button>
            <button className="flex items-center space-x-3 border border-red px-8 py-3 mt-10 rounded-full hover:scale-110 duration-300">
              <FaApple className="text-red text-2xl" />
              <div className="">
                <p className="text-[10px] text-red font-roboto">
                  Download on the
                </p>
                <p className="flex text-sm font-roboto text-red">App Store</p>
              </div>
            </button>
          </div>
          </div>
          <div className="flex space-x-5 items-center">
            <Image imgSrc={Basic} className={'w-[241px] h-[263px]'}/>
            <Image imgSrc={Populer} className={'w-[241px] h-[263px]'}/>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Download;
