import React from "react";
import Logo from "../../assets/global/Logo.svg";
import Account from "../../assets/header/Account.svg";
import Cart from "../../assets/header/Cart.svg";
import Menu from "../../assets/header/Menu.svg";

const Header = () => {
  return (
    <div className="flex p-[27px_16px_31px_16px] justify-between items-center h-fit bg-transparent">
      <img src={Logo} className="w-[148px] h-[33.57px]" />
      <div className="flex gap-[22px]">
        <img src={Cart} className="h-[20px] w-[20px]" />
        <img src={Account} className="h-[20px] w-[20px]" />
        <img src={Menu} className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default Header;
