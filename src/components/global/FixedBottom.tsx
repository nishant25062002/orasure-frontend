import React from "react";
import CallBlueIcon from "../../assets/global/CallBlueIcon.svg";
import WhatsappGreenIcon from "../../assets/global/WhatsappGreenIcon.svg";
import DirectionIcon from "../../assets/global/DirectionIcon.svg";
import Divider from "./Divider";

const FixedBottom = () => {
  return (
    <div className="flex fixed bottom-0 left-0 w-full gap-[45px] justify-center shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] border-t-[0.5px] border-[#888] py-[12px] bg-[#fff]">
      <div className="flex flex-col items-center text-[10px] text-[#000] text-center font-[700]">
        <img src={CallBlueIcon} className="h-[21px] w-[21px] mb-[5px]" />
        Call
      </div>
      <Divider customStyle="w-[0.5px] h-[27px] bg-[#D9D9D9]" />
      <div className="flex flex-col text-[10px] text-[#000] text-center font-[700] items-center">
        <img src={WhatsappGreenIcon} className="h-[21px] w-[21px] mb-[5px]" />
        WhatsApp
      </div>
      <Divider customStyle="w-[0.5px] h-[27px] bg-[#D9D9D9]" />
      <div className="flex flex-col items-center text-[10px] text-[#000] text-center font-[700]">
        <img src={DirectionIcon} className="h-[21px] w-[21px] mb-[5px]" />
        Direction
      </div>
    </div>
  );
};

export default FixedBottom;
