import React, { useState, useEffect } from "react";
import Logo from "../../assets/global/Logo.svg";
import Divider from "../global/Divider";
import IdCard from "../user/IdCard";
import CircleOption from "../global/CircleOption";
import ReceiptIcon from "../../assets/global/ReceiptIcon.svg";
import MoreIcon from "../../assets/global/MoreIcon.svg";
import AccountIcon from "../../assets/header/Account.svg";
import CartIcon from "../../assets/header/Cart.svg";
import ServiceList from "./ServiceList";
import Header from "../global/Header";

const TreatmentPage = () => {
  const options = [
    {
      icon: ReceiptIcon,
      text: "Records",
      link: "/records",
    },
    {
      icon: AccountIcon,
      text: "Profile",
      link: "/profile",
    },
    {
      icon: CartIcon,
      text: "Cart",
      link: "/",
    },
    {
      icon: MoreIcon,
      text: "More",
      link: "/",
    },
  ];

  return (
    <div className="relative flex justify-center">
      <Header profile />
      <Divider
        customStyle={
          "rounded-[0px_0px_12px_12px] bg-[#EBF4F8] h-[115px] w-full absolute fixed z-[-1]"
        }
      />
      {/* <div className="flex p-[27px_16px_31px_16px] justify-between items-center h-fit bg-transparent">
        <img src={Logo} className="w-[148px] h-[33.57px]" />
      </div> */}

      {/* body */}
      <div className="px-[15px] w-full">
        <IdCard />
        <div className="flex items-center justify-center gap-[34px] sm:gap-[32px] mt-[32px] w-full">
          {options.map((option, index) => (
            <CircleOption option={option} key={index} />
          ))}
        </div>

        {/* services lists */}
        <ServiceList />
      </div>
    </div>
  );
};

export default TreatmentPage;
