import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import LikeImage from "../assets/Like.svg";
import Dots from '../assets/dots.png';
import PopulerText from '../assets/populerText.png';
import DoneIcon from '../assets/DoneIcon.png';
import LeftShape from '../assets/leftDots.svg';


const TheMostPopuler = () => {
  return (
    <>
      <Container>
        <Flex className={'justify-between mt-10 mb-10'}>
          <div className="">
            <Image imgSrc={LikeImage} className={'w-[609px] h-[548px]'} />
          </div>
          <div>
            <div className="">
              <Image imgSrc={Dots} className={'h-[6px] w-4'} />
            </div>
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
                <Image imgSrc={DoneIcon} className={'h-[20px] w-[20px]'} />
                <p className="w-[417px] font-roboto">
                  Elit mollit aliqua quis ad sint nulla Lorem commodo
                  reprehenderit.
                </p>
              </div>
              <div className="pt-10 flex space-x-5">
                <Image imgSrc={DoneIcon} className={'h-[20px] w-[20px]'} />
                <p className="w-[417px] font-roboto">
                  Tempor consectetur aliqua aute veniam occaecat eu do esse
                  adipisicing ut.
                </p>
              </div>
              <div className="pt-10 flex space-x-5">
                <Image imgSrc={DoneIcon} className={'h-[20px] w-[20px]'} />
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
      <div className="relative hidden md:block">
        <Image
          imgSrc={LeftShape}
          className={'w-[274px] h-[384] absolute left-20 top-[-200px]'}
        />
      </div>
    </>
  );
}

export default TheMostPopuler;
