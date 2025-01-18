import { GoDotFill } from "react-icons/go";
import MenuBtn from "./MenuBtn";


const MenuItems = () => {
  return (
    <>
      <nav className="flex space-x-5">
        <ul className="flex items-center space-x-5">
          <li className="font-roboto text-base text-blue-700 hover:text-[#FF6231]">
            Features
          </li>
          <GoDotFill className="h-2 text-blue-700" />
          <li className="font-roboto text-base text-blue-700 hover:text-[#FF6231]">
            Download app
          </li>
          <GoDotFill className="h-2 text-blue-700" />
          <li className="font-roboto text-base text-blue-700 hover:text-[#FF6231]">
            UI screens
          </li>
          <GoDotFill className="h-2 text-blue-700" />
          <li className="font-roboto text-base text-blue-700 hover:text-[#FF6231]">
            Testimonials
          </li>
          <GoDotFill className="h-2 text-blue-700" />
          <li className="font-roboto text-base text-blue-700 hover:text-[#FF6231]">
            FAQ
          </li>
          <GoDotFill className="h-2 text-blue-700" />
        </ul>
        <MenuBtn menuBtnText={'Free trial'} />
      </nav>
    </>
  );
};

export default MenuItems;
