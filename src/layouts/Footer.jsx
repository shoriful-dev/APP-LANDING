import React from 'react';
import Container from '../components/Container';
import MenuItems from '../components/MenuItems';

const Footer = () => {
  return (
    <>
      <div className="bg-FooterBg h-[546px] relative mt-[-270px]">
        <Container>
          <div className="absolute top-[400px] left-1/2 -translate-x-1/2">
            <MenuItems />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
