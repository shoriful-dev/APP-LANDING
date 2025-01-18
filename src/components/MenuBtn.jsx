

const MenuBtn = ({className, menuBtnText}) => {
  return (
    <div
      className={`w-[104px] h-[35px] font-roboto font-medium rounded-3xl flex justify-center items-center text-[#FF6231] border-[#FF6231] border ${className}`}
    >
      {menuBtnText}
    </div>
  );
}

export default MenuBtn
