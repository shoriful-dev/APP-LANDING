import React from 'react';
import Container from '../components/Container';
import { GoDotFill } from 'react-icons/go';
import Image from '../components/Image';
import AboutText from '../assets/aboutText.png';
import AboutCart from '../components/AboutCart';
import ManOne from '../assets/manOne.png';
import ManTwo from '../assets/manTwo.png';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';


const AboutUs = () => {
  const settings = {
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <>
      <Container>
        <div className="">
          <span className="flex text-red px-5 md:px-0">
            <GoDotFill />
            <GoDotFill />
          </span>
          <div className='px-5 md:px-0'>
            <div className="w-[420px] pt-2">
              <Image imgSrc={AboutText} />
            </div>
            <h3 className="text-[50px] font-semibold font-Darker mt-[-45px]">
              they say about us
            </h3>
          </div>
          <div className="w-[1520px] h-[457px] mt-10 px-5">
            <Slider {...settings}>
              <div>
                <AboutCart imgSrc={ManOne} text={'Brooklyn Simmons'} />
              </div>
              <div>
                <AboutCart imgSrc={ManTwo} text={'Brooklyn Yashman'} />
              </div>
              <div>
                <AboutCart imgSrc={ManOne} text={'Guy Hawkins'} />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
