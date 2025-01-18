import Image from '../components/Image';
import PreviewImage from '../assets/previewText.png';
import Container from './Container';
import { GoDotFill } from 'react-icons/go';

const HeadingOne = () => {
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
          <Image imgSrc={PreviewImage} className={'md:w-[703px] w-auto md:h-[47px] h-auto mt-2'} />
        </div>
        <div className="flex justify-center md:mt-[-50px] mt-[-25px]">
          <h3 className="md:text-[50px] text-[30px] font-semibold font-Darker">
            See what you will get with us
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default HeadingOne;
