import React, { useState, useEffect } from "react";
import Logo from "../../assets/global/Logo.svg";
import Account from "../../assets/header/Account.svg";
import Cart from "../../assets/header/Cart.svg";
import Menu from "../../assets/header/Menu.svg";
import Cross from "../../assets/header/Cross.svg";
import Sidebar from "./Sidebar";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex p-[27px_16px_31px_16px] justify-between items-center h-fit bg-[#ECF4F9] !z-[100]">
        <img src={Logo} className="w-[148px] h-[33.57px]" />
        <div className="flex gap-[22px]">
          <img src={Cart} className="h-[20px] w-[20px]" />
          <img src={Account} className="h-[20px] w-[20px]" />
          <img
            src={show ? Cross : Menu}
            className="h-[20px] w-[20px]"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {show && <Sidebar show />}
    </>
  );
};

export default Header;
