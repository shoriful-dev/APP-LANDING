import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import OpenVideo from '../assets/openVideo.png';
import { VscDebugStart } from 'react-icons/vsc';

const FrequentlyQuestions = () => {
  let showRef = React.useRef(null);
  const handleButtonClick = () => {
    showRef.current.classList.toggle('hidden');
  };
  return (
    <>
      <Container>
        <div className="relative">
          <div className={'w-[500px] h-[500px]'} onClick={handleButtonClick}>
            <Image imgSrc={OpenVideo} />
          </div>
          <div className="h-20 w-20 rounded-full bg-[#F7F7F7] flex items-center justify-center absolute top-52 left-52 hover:scale-125 transition-all duration-300">
            <VscDebugStart className="text-4xl text-red" />
          </div>
          <div className='hidden' ref={showRef}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kP9TfCWaQT4?si=h6pDRUZrATR5rzaD"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}

export default FrequentlyQuestions;
