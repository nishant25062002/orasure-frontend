import React from "react";
import { useNavigate } from "react-router-dom";

const CircleOption = ({ option }: { option: any }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col"
      onClick={() => {
        navigate(option.link);
      }}
    >
      <div className="flex p-[12px] justify-between items-center rounded-[50px] border-[0.95px] border-[#D7E6F3]  bg-[#FFF] w-fit h-fit">
        <img src={option.icon} className="w-[24px] h-[24px]" />
      </div>
      <div className="text-[#324969] text-[10px] leading-[16px] font-[700] uppercase text-center mt-[4px]">
        {option.text}
      </div>
    </div>
  );
};

export default CircleOption;
