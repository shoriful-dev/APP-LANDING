import { GoDotFill } from 'react-icons/go';
import Container from '../components/Container';
import Button from '../components/Button';
import Image from '../components/Image';
import TextImage from '../assets/text.png';
import Wave from '../assets/wave.png';
import Ellips from '../assets/EllipseOne.svg';
import RightImage from '../assets/rightImage.svg';
import Phone from '../assets/phone.png';
import Line2 from '../assets/Line2.png';
import Line1 from '../assets/Line1.png';
import waveTwo from '../assets/waveTwo.png';
import waveThree from '../assets/waveThree.png';

const Banner = () => {
  return (
    <>
      <div className="bg-bannerImage relative top-[-110px] left-0 w-full h-[830px] py-[200px] -z-10 mb-[200px]">
        <div className="">
          <Container>
            <div className="z-20">
              <div className="flex space-x-3 -z-10">
                <span className="flex text-red">
                  <GoDotFill />
                  <GoDotFill />
                </span>
                <span className="font-roboto text-xs font-medium text-red uppercase">
                  trendy application
                </span>
              </div>
              <h3 className="text-[80px] font-extrabold font-Darker text-white w-[599px] leading-[90px]">
                Work Faster With Powerful Tools
              </h3>
              <p className="text-[28px] font-medium font-Darker w-[609px] text-white pt-5">
                Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco
                eiusmod officia magna ad id.
              </p>
              <a href="#">
                <Button btnText={'Learn more'} className={'mt-10 z-30'} />
              </a>
            </div>
          </Container>
          <div>
          <Image
            imgSrc={TextImage}
            className={
              'w-[1178px] h-[284px] absolute top-[510px] left-20 -z-10'
            }
          />
        </div>
          <div>
          <Image
            imgSrc={Wave}
            className={'absolute top-0 left-0 w-full -z-10'}
          />
        </div>
          <div>
          <Image
            imgSrc={Ellips}
            className={'w-[1460px] h-[698px] absolute top-0 -z-10'}
          />
        </div>
          <div>
          <Image
            imgSrc={RightImage}
            className={'w-[926px] h-[522px] absolute top-48 right-[-320px]'}
          />
        </div>
          <div>
          <Image
            imgSrc={Phone}
            className={'w-[530px] h-[690px] relative top-[-500px] left-[990px]'}
          />
        </div>
          <div>
            <Image imgSrc={Line2} className={'absolute top-[780px] -z-10'} />
          </div>
          <div>
            <Image imgSrc={Line1} className={'absolute top-[760px] -z-10'} />
          </div>
          <div>
            <Image
              imgSrc={waveTwo}
              className={'h-[868px] relative top-[-1260px] left-0 w-full -z-10'}
            />
          </div>
          <div>
            <Image
              imgSrc={waveThree}
              className={'h-[868px] relative top-[-2070px] left-0 w-full -z-10'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
