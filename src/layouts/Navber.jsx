import MenuItems from "../components/menuItems";
import Image from "../components/Image" ;
import Logo from "../assets/Logo.svg";
import SmartPhone from "../assets/smartphone.svg";


const Navber = () => {
  return (
    <>
      <nav className="flex items-center justify-between max-w-navContainer mx-auto py-10">
        <div>
          <Image imgSrc={Logo} className={'w-[98px] h-[16px]'} />
        </div>
        <div>
          <MenuItems />
        </div>
        <div className="flex space-x-2 items-center">
          <Image imgSrc={SmartPhone} className={'w-[24px] h-[24px]'} />
          <p className="text-[19px] font-roboto font-medium">
            +1 742 65 84 122
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navber
