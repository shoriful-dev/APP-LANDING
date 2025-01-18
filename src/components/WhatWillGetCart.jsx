import React from 'react'
import Image from './Image'

const WhatWillGetCart = ({imgSrc, header, text}) => {
  return (
    <>
      <div className="w-[360px] h-[600px] px-10 py-10 shadow-2xl rounded-2xl">
        <div className="">
          <Image imgSrc={imgSrc} />
        </div>
        <div className="">
          <h3 className="text-[28px] font-semibold font-Darker pt-10">
            {header}
          </h3>
          <p className="font-roboto w-[280px] pt-5 text-[#888888]">{text}</p>
        </div>
      </div>
    </>
  );
}

export default WhatWillGetCart
