import { GoDotFill } from 'react-icons/go';
import MenuBtn from './MenuBtn';

const MenuItems = () => {
  return (
    <>
      <nav className="flex space-x-5">
        <ul className="flex items-center space-x-5">
          <a href="#WhatWillGet">
            <li className="font-roboto text-base text-white hover:text-[#FF6231]">
              Features
            </li>
          </a>
          <GoDotFill className="h-2 text-white" />
          <li className="font-roboto text-base text-white hover:text-[#FF6231]">
            Download app
          </li>
          <GoDotFill className="h-2 text-white" />
          <li className="font-roboto text-base text-white hover:text-[#FF6231]">
            UI screens
          </li>
          <GoDotFill className="h-2 text-white" />
          <li className="font-roboto text-base text-white hover:text-[#FF6231]">
            Testimonials
          </li>
          <GoDotFill className="h-2 text-white" />
          <li className="font-roboto text-base text-white hover:text-[#FF6231]">
            FAQ
          </li>
          <GoDotFill className="h-2 text-white" />
        </ul>
        <a href="#freetrial">
          <MenuBtn menuBtnText={'Free trial'} />
        </a>
      </nav>
    </>
  );
};

export default MenuItems;
