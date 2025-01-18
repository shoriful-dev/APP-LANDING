import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button
      className={`px-8 py-3 border bg-gradient-to-r from-[#FF6231] to-[#FFA979] hover:bg-gradient-to-r hover:from-[#FFA979] hover:to-[#FF6231] rounded-full font-medium text-white ${className}`}
    >
      {btnText}
    </button>
  );
}

export default Button
