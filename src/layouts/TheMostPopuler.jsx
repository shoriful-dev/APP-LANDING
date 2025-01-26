import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import LikeImage from '../assets/Like.svg';
import PopulerText from '../assets/populerText.png';
import DoneIcon from '../assets/DoneIcon.png';
import LeftShape from '../assets/leftDots.svg';
import { GoDotFill } from 'react-icons/go';

const TheMostPopuler = () => {
  return (
    <>
      <Container>
        <Flex
          className={'justify-between mb-10 mt-[-300px] flex-col md:flex-row'}
        >
          <div>
            <Image
              imgSrc={LikeImage}
              className={'w-[609px] h-[548px] mt-40 md:mt-0'}
            />
          </div>
          <div>
            <span className="flex text-red justify-center md:justify-start">
              <GoDotFill />
              <GoDotFill />
            </span>
            <div className="pt-2 flex justify-center">
              <Image
                imgSrc={PopulerText}
                className={'w-[200px] md:w-[457px] h-[50px] md:h-[94px]'}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start mt-10 md:mt-0">
              <h3 className="font-Darker text-3xl md:text-[50px] font-semibold md:w-[457px] w-[200px] leading-[40px] md:leading-0 mt-[-100px]">
                The most popular application 2021
              </h3>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="font-Darker md:text-[28px] text-xl font-medium md:w-[457px] w-[300px] text-gray mt-5 text-center md:text-start">
                Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                incididunt dolore ipsum.
              </p>
            </div>
            <div className="mb-40 md:mb-0 px-5 md:px-0">
              <div className="pt-10 flex space-x-5">
                <div className={'h-5 w-5'}>
                  <Image imgSrc={DoneIcon} />
                </div>
                <p className="w-[417px] font-roboto">
                  Elit mollit aliqua quis ad sint nulla Lorem commodo
                  reprehenderit.
                </p>
              </div>
              <div className="pt-10 flex space-x-5">
                <div className={'h-5 w-5'}>
                  <Image imgSrc={DoneIcon} />
                </div>
                <p className="w-[417px] font-roboto">
                  Tempor consectetur aliqua aute veniam occaecat eu do esse
                  adipisicing ut.
                </p>
              </div>
              <div className="pt-10 flex space-x-5">
                <div className={'h-5 w-5'}>
                  <Image imgSrc={DoneIcon} />
                </div>
                <p className="w-[417px] font-roboto">
                  Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                  incididunt dolore ipsum tempor duis do ullamco eiusmod officia
                  magna ad id.
                </p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
      <div className="w-[273px] h-[384] left-20 top-[-200px] relative hidden md:block">
        <Image imgSrc={LeftShape} />
      </div>
    </>
  );
};

export default TheMostPopuler;
