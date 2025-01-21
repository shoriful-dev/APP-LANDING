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
        <Flex className={'justify-between mb-10 mt-[-300px]'}>
          <div className="">
            <Image imgSrc={LikeImage} className={'w-[609px] h-[548px]'} />
          </div>
          <div>
            <span className="flex text-red">
              <GoDotFill />
              <GoDotFill />
            </span>
            <div className="pt-2">
              <Image imgSrc={PopulerText} className={'w-[457px] h-[94px]'} />
            </div>
            <h3 className="font-Darker text-[50px] font-semibold w-[457px] leading-[60px] mt-[-100px]">
              The most popular application 2021
            </h3>
            <p className="font-Darker text-[28px] font-medium w-[457px] text-gray mt-5">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum.
            </p>
            <div className="">
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
