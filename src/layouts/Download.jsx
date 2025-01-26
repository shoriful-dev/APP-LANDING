import React from 'react'
import Container from '../components/Container';
import Image from '../components/Image';
import EasyText from '../assets/EasyText.png';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa6';
import Basic from '../assets/Basic.png';
import Populer from '../assets/Popuper.png';
import { GoDotFill } from 'react-icons/go';
import LeftShape from '../assets/leftDots.svg';

const Download = () => {
  return (
    <>
      <Container className="mt-[-150px] md:mt-0 mb-40 md:mb-0">
        <div className="mt-[-50px] md:mt-[-150px] flex flex-col md:flex-row justify-between mb-[-100px] md:mb-[-250px]">
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <span className="flex text-red justify-center md:justify-start">
              <GoDotFill />
              <GoDotFill />
            </span>
            <div className="flex justify-center md:justify-start">
              <Image
                imgSrc={EasyText}
                className="w-[250px] md:w-[350px] lg:w-[456px] pt-2"
              />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-[50px] font-semibold font-Darker mt-4 md:mt-[-95px] leading-tight md:leading-[50px] text-center md:text-left">
              easy download and ready to use
            </h3>
            <p className="text-sm md:text-base font-roboto text-gray mt-6 md:mt-10 leading-6 md:leading-7 text-center md:text-left">
              Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-5 mt-6 md:mt-10">
              <button className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#FF6231] to-[#FFA979] hover:bg-gradient-to-r hover:from-[#FFA979] hover:to-[#FF6231] duration-500 px-6 md:px-8 py-3 rounded-full w-full sm:w-auto">
                <IoLogoGooglePlaystore className="text-white text-xl md:text-2xl" />
                <div>
                  <p className="text-[10px] text-white font-roboto">
                    Download on the
                  </p>
                  <p className="text-sm font-roboto text-white">Google play</p>
                </div>
              </button>
              <button className="flex items-center justify-center space-x-3 border border-red px-6 md:px-8 py-3 rounded-full hover:scale-110 duration-300 w-full sm:w-auto">
                <FaApple className="text-red text-xl md:text-2xl" />
                <div>
                  <p className="text-[10px] text-red font-roboto">
                    Download on the
                  </p>
                  <p className="text-sm font-roboto text-red">App Store</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end space-x-3 md:space-x-5 items-center mt-10 md:mt-0">
            <Image
              imgSrc={Basic}
              className="w-[120px] md:w-[180px] lg:w-[241px]"
            />
            <Image
              imgSrc={Populer}
              className="w-[120px] md:w-[180px] lg:w-[241px]"
            />
          </div>
        </div>
      </Container>
      <div className="w-[273px] h-[384] left-20 top-[250px] relative hidden md:block">
        <Image imgSrc={LeftShape} />
      </div>
    </>
  );
}

export default Download;
