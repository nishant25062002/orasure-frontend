import React from "react";
import SliderCard from "../../plan/cards/SliderCard";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center my-[48px] w-full px-[8px]">
      <div className="text-[#383838] text-[20px] font-[600] leading-[40px] text-center">
        How Our
        <br />
        <span className="text-[#69A806] text-[32px] leading-[42px]">
          Plans Better?
        </span>
      </div>
      <div className="mt-[32px] mb-[20px] relative flex items-center justify-center">
        <div className="w-full h-[200px] rounded-[16px] absolute top-[20px] bg-[rgba(158,197,91,0.50)] z-[0]" />
        <div
          className="w-[310px] z-[1] shadow-md rounded-[16px]"
          onClick={() => navigate("/plans")}
        >
          <SliderCard />
        </div>
      </div>
      <div
        className="text-[#116EB6] text-[12px] font-[400] text-center"
        onClick={() => navigate("/plans")}
      >
        Tap on card to view Details
      </div>
    </div>
  );
};

export default Plan;
