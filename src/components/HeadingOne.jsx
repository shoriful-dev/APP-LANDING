import Image from '../components/Image';
import Container from './Container';
import { GoDotFill } from 'react-icons/go';

const HeadingOne = ({imgSrc, text, color=false}) => {
  return (
    <Container>
      <div>
        <div className="flex justify-center">
          <span className="flex text-red">
            <GoDotFill />
            <GoDotFill />
          </span>
        </div>
        <div className="flex justify-center">
          <Image
            imgSrc={imgSrc}
            className={'md:w-[703px] w-auto md:h-[47px] h-auto mt-2'}
          />
        </div>
        <div className="flex justify-center md:mt-[-50px] mt-[-25px]">
          <h3
            className={`md:text-[50px] text-[30px] font-semibold font-Darker ${color ? 'text-white' : 'text-black'}`}
          >
            {text}
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default HeadingOne;
