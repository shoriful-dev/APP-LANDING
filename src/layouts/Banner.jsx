import { GoDotFill } from 'react-icons/go';
import Container from '../components/Container';
import Button from '../components/Button';

const Banner = () => {
  return (
    <>
        <div className="bg-bannerImage relative top-[-109px] left-0 w-full h-[895px] py-[220px] mb-[50px]">
          <Container>
            <div className="mt-[-50px] md:mt-0">
              <div className="flex space-x-3 -z-10 justify-center md:justify-start ">
                <span className="flex text-red">
                  <GoDotFill />
                  <GoDotFill />
                </span>
                <span className="font-roboto text-xs font-medium text-red uppercase">
                  trendy application
                </span>
              </div>
              <h3 className="md:text-[80px] text-4xl font-extrabold font-Darker text-white md:w-[599px] md:leading-[90px] text-center md:text-start">
                Work Faster With Powerful Tools
              </h3>
              <p className="text-[28px] font-medium font-Darker md:w-[609px] text-center md:text-start text-white pt-5">
                Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco
                eiusmod officia magna ad id.
              </p>
              <a href="#" className='flex justify-center md:justify-start'>
                <Button btnText={'Learn more'} className={'mt-10 z-30'} />
              </a>
            </div>
          </Container>
        </div>
    </>
  );
};

export default Banner;
