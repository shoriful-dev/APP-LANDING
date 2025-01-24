import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import OpenVideo from '../assets/openVideo.png';
import { VscDebugStart } from 'react-icons/vsc';
import Accordian from '../components/Accordian';

const FrequentlyQuestions = () => {
  return (
    <Container>
      <Flex className={'justify-between items-center flex-col md:flex-row'}>
        <div className="relative">
          <div className={'w-[500px] h-[500px]'}>
            <Image imgSrc={OpenVideo} />
          </div>
            <div className="h-20 w-20 rounded-full bg-[#F7F7F7] flex items-center justify-center absolute top-52 left-52 hover:scale-125 transition-all duration-300">
              <VscDebugStart className="text-4xl text-red" />
          </div>
        </div>
        <div>
          <Accordian />
        </div>
      </Flex>
    </Container>
  );
}

export default FrequentlyQuestions;
