import Container from "../components/Container";
import HeadingOne from "../components/HeadingOne";
import WhatWillGetCart from "../components/WhatWillGetCart";
import WhatWillGetOne from '../assets/whatWillGetOne.svg';
import WhatWillGetTwo from '../assets/whatWillGetTwo.svg';
import WhatWillGetThree from '../assets/whatWillGetThree.svg';


const WhatWillGet = () => {
  return (
    <>
      <div className="">
        <HeadingOne />
      </div>
      <Container>
        <div className="flex justify-between mt-10">
          <WhatWillGetCart
            imgSrc={WhatWillGetOne}
            header={'Development courses'}
            text={
              'Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'
            }
          />
          <WhatWillGetCart
            imgSrc={WhatWillGetTwo}
            header={'Money saving services'}
            text={
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            }
          />
          <WhatWillGetCart
            imgSrc={WhatWillGetThree}
            header={'Usability interface'}
            text={
              'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.'
            }
          />
        </div>
      </Container>
    </>
  );
}

export default WhatWillGet;
