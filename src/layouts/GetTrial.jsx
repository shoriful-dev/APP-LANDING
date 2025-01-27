import React from 'react';
import Container from '../components/Container';
import { GoDotFill } from 'react-icons/go';
import Button from '../components/Button';
import { SlClose } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import RightShape from '../assets/leftDots.svg';
import Image from '../components/Image';

const GetTrial = () => {
  let showRef = React.useRef();
  const handleButtonClick = () => {
    showRef.current.classList.toggle('hidden');
  };

  return (
    <>
      <div className="w-[273px] h-[384] right-[-1580px] top-[0px] relative hidden md:block">
        <Image imgSrc={RightShape} />
      </div>
      <div className="bg-TrialCart h-[1064px] md:mt-[-550px] mt-0">
        <Container>
          <div className="pt-72 relative">
            <div className="bg-trialBg h-[564px] py-[150px]">
              <div className="flex space-x-3 justify-center ">
                <span className="flex text-red">
                  <GoDotFill />
                  <GoDotFill />
                </span>
                <h3 className="text-xs font-medium font-roboto uppercase text-red">
                  trendy application
                </h3>
              </div>
              <div className="flex justify-center text-center leading-[70px]">
                <h3 className="w-[573px] text-[80px] font-extrabold font-Darker text-white">
                  Get a free trial for
                  <span className="text-[80px] font-extrabold font-Darker text-[#FF6231] px-5">
                    30
                  </span>
                  days
                </h3>
              </div>
              <div className="flex justify-center pt-10">
                <Button
                  btnText={'get a free trial'}
                  className={'py-4'}
                  onClick={handleButtonClick}
                />
              </div>
              <div
                ref={showRef}
                className="bg-OfferBg h-[800px] w-[731px] pl-[200px] leading-[60px] py-14 rounded-2xl hidden absolute top-[200px] left-[150px]"
              >
                <button
                  onClick={handleButtonClick}
                  className="absolute top-10 right-10"
                >
                  <SlClose className="hover:text-red text-white text-2xl" />
                </button>
                <h3 className="w-[480px] text-[50px] font-semibold font-Darker text-white">
                  Get a free trial for
                  <span className="text-[50px] font-semibold font-Darker text-[#FF6231] px-5">
                    30
                  </span>
                  days
                </h3>
                <p className="text-[16px] font-roboto text-white w-[457px] mt-5 leading-10">
                  Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                  incididunt dolore ipsum tempor duis do ullamc.
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[460px] h-[60px] px-5 rounded-full text-gray outline-none mt-10"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[460px] h-[60px] px-5 rounded-full text-gray outline-none mt-5"
                />
                <textarea
                  name="text"
                  id="text"
                  placeholder="Message"
                  className="w-[460px] h-[150px] px-5 rounded-2xl text-gray outline-none mt-5 resize-none"
                ></textarea>
                <Link to={'/'}>
                  <Button
                    btnText={'get a free trial'}
                    className={'py-0 font-medium w-[180px]'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GetTrial;
