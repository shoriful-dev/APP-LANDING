import Image from "./Image";
import Dots from '../assets/dots.png';
import PreviewImage from '../assets/previewText.png';
import Container from "./Container";


const HeadingOne = () => {
  return (
    <Container>
      <div className="">
        <div className="flex justify-center">
          <Image imgSrc={Dots} className={'w-[16px] h-[6px]'} />
        </div>
        <div className="flex justify-center">
          <Image imgSrc={PreviewImage} className={'w-[703px] h-[47px] mt-2'} />
        </div>
        <div className="flex justify-center mt-[-50px]">
          <h3 className="text-[50px] font-semibold font-Darker">See what you will get with us</h3>
        </div>
      </div>
    </Container>
  );
}

export default HeadingOne
