import Container from '../components/Container';
import HeadingOne from '../components/HeadingOne';
import WhatWillGetCart from '../components/WhatWillGetCart';
import WhatWillGetOne from '../assets/whatWillGetOne.svg';
import WhatWillGetTwo from '../assets/whatWillGetTwo.svg';
import WhatWillGetThree from '../assets/whatWillGetThree.svg';
import Image from '../components/Image';
import RightShape from '../assets/rightDots.svg';
import PreviewOne from '../assets/previewText.png';

const WhatWillGet = () => {
  return (
    <>
      <div>
        <HeadingOne
          imgSrc={PreviewOne}
          text={'See what you will get with us'}
        />
      </div>
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 md:justify-between md:mt-10 mt-0">
          <div className="pt-5 md:pt-0">
            <WhatWillGetCart
              imgSrc={WhatWillGetOne}
              header={'Development courses'}
              text={
                'Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'
              }
            />
          </div>
          <div className="mt-[-60px] md:mt-0">
            <WhatWillGetCart
              imgSrc={WhatWillGetTwo}
              header={'Money saving services'}
              text={
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
              }
            />
          </div>
          <div className="mt-[-60px] md:mt-0">
            <WhatWillGetCart
              imgSrc={WhatWillGetThree}
              header={'Usability interface'}
              text={
                'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.'
              }
            />
          </div>
        </div>
      </Container>
      <div className="relative hidden md:block">
        <Image
          imgSrc={RightShape}
          className={'w-[273px] h-[384] absolute right-20 top-[-200px]'}
        />
      </div>
    </>
  );
};

export default WhatWillGet;
