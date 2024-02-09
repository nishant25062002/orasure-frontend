import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../plan/cards/ImageCard";
import Dentin from "../../../assets/plans/Dentin.svg";

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
        <div className="w-full h-[250px] rounded-[16px] absolute top-[50px] bg-[#003050F2] z-[0]" />
        <div
          className="w-[310px] z-[1] rounded-[16px] "
          onClick={() => navigate("/plans")}
        >
          {/* shadow-[0px_1.105px_8.837px_2.209px_rgba(0,0,0,0.25)] */}
          <ImageCard img={Dentin} />
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
