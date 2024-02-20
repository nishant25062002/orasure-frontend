import React, { useState, useEffect } from "react";
import Logo from "../../assets/global/Logo.svg";
import Account from "../../assets/header/Account.svg";
import Cart from "../../assets/header/Cart.svg";
import Menu from "../../assets/header/Menu.svg";
import Cross from "../../assets/header/Cross.svg";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Header = ({
  profile = false,
  doctor = false,
}: {
  profile?: boolean;
  doctor?: boolean;
}) => {
  const navigate = useNavigate();

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
      <div className="flex p-[27px_16px_31px_16px] justify-between items-center h-fit bg-[#ECF4F9] !z-[100] w-full">
        <img
          src={Logo}
          className="w-[148px] h-[33.57px]"
          onClick={() => navigate("/")}
        />
        <div className="flex gap-[22px]">
          {!profile && 
          <img src={Cart} 
          className="h-[20px] w-[20px]" 
          onClick={ () => navigate("/user-type")}
           
          />}
          {!profile && (
            <img
              src={Account}
              className="h-[20px] w-[20px]"
              onClick={() => navigate("/profile")}
            />
          )}
          <img
            src={show ? Cross : Menu}
            className="h-[20px] w-[20px]"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {show && <Sidebar show setShow={setShow} doctor={doctor} />}
    </>
  );
};

export default Header;
