import MenuItems from '../components/MenuItems';
import Image from '../components/Image';
import Logo from '../assets/Logo.svg';
import SmartPhone from '../assets/smartphone.svg';
import { FaBarsProgress } from 'react-icons/fa6';

const Navber = () => {
  return (
    <>
      <nav className="flex items-center justify-between max-w-navContainer mx-auto py-10 relative z-50 px-5 md:px-0">
        <a href="#home">
          <Image imgSrc={Logo} className={'w-[98px] h-[16px]'} />
        </a>
        <div className="absolute ml-80 hidden md:block">
          <MenuItems />
        </div>
        <div className="flex space-x-3 items-center invisible md:visible">
          <div>
            <Image imgSrc={SmartPhone} className={'w-[24px] h-[24px]'} />
          </div>
          <h3 className="text-[19px] font-roboto font-medium text-white">
            +1 742 65 84 122
          </h3>
        </div>
        <div className="md:hidden hover:bg-red hover:border-white duration-500 hover:scale-125 border border-red px-3 py-3 rounded-full">
          <FaBarsProgress className="text-2xl text-white" />
        </div>
      </nav>
    </>
  );
};

export default Navber;
