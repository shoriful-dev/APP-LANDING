import Container from '../components/Container';
import Image from '../components/Image';
import SlickOne from '../assets/SlickOne.png';
import SlickTwo from '../assets/SlickTwo.png';
import SlickThree from '../assets/SlickThree.png';
import SlickFour from '../assets/SlickFour.png';
import SlickFive from '../assets/SlickFive.png';
import SlickSix from '../assets/SIx.png';
import PreviewOne from '../assets/PreviewTwo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import RightShape from '../assets/rightDots.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';
import HeadingOne from '../components/HeadingOne';


const UiPart = () => {
  let color = true;
  
  return (
    <>
      <div className="bg-bannerUI h-auto mt-[-350px] md:mt-[-500px] md:h-[1172px] mb-60 md:mb-0">  
        <Container className={'mt-20'}>
          <div className="pt-40 md:pt-80">
            <HeadingOne
              imgSrc={PreviewOne}
              text={'watch our UI presentation'}
              color={color}
            />
          </div>
          <div className="pt-5">
            <Swiper
              spaceBetween={-50}
              slidesPerView={3}
              loop={true}
              initialSlide={2}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 160,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <Image imgSrc={SlickFive} />
              </SwiperSlide>
              <SwiperSlide>
                <Image imgSrc={SlickFour} />
              </SwiperSlide>
              <SwiperSlide>
                <Image imgSrc={SlickOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image imgSrc={SlickTwo} />
              </SwiperSlide>
              <SwiperSlide>
                <Image imgSrc={SlickThree} />
              </SwiperSlide>
              <SwiperSlide>
                <Image imgSrc={SlickSix} />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
      <div className="w-[273px] h-[384px] right-[-1580px] top-0 relative hidden md:block">
        <Image imgSrc={RightShape} />
      </div>
    </>
  );
}

export default UiPart;
