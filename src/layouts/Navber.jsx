import MenuItems from "../components/menuItems";
import Image from "../components/Image" ;
import Logo from "../assets/Logo.svg";
import SmartPhone from "../assets/smartphone.svg";


const Navber = () => {
  return (
    <>
      <nav className="flex items-center justify-between max-w-navContainer mx-auto py-10 relative">
        <a href="#home">
          <Image imgSrc={Logo} className={'w-[98px] h-[16px]'} />
        </a>
        <div className="absolute ml-80">
          <MenuItems />
        </div>
        <div className="flex space-x-3 items-center">
          <div>
            <Image imgSrc={SmartPhone} className={'w-[24px] h-[24px]'} />
          </div>
          <h3 className="text-[19px] font-roboto font-medium text-white">
            +1 742 65 84 122
          </h3>
        </div>
      </nav>
    </>
  );
}

export default Navber
