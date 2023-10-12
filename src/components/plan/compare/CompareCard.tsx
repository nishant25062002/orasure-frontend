import React from "react";
import Divider from "../../global/Divider";
import CheckIcon from "../../../assets/global/Check.svg";
import { useNavigate } from "react-router-dom";

const CompareCard = () => {
  const navigate = useNavigate();

  const dataS = {
    name: "Enamel Member Plan",
    monthPrice: 2990,
    yearPrice: 299,
    planIncludes: [{}],
  };

  return (
    <div
      className="rounded-[16px] bg-[#fff] w-[100%] max-w-[350%] h-[250px] p-[20px] border-[1px] border-[#9EC55B]  my-[8px]"
      onClick={() => navigate("/treatment")}
    >
      <div className="text-[#9EC55B] text-[14px] font-[700] leading-[14px] uppercase">
        {dataS.name}
      </div>
      <div className="flex pt-[12px] justify-between">
        <div className="text-[#222] text-[24px] font-[700] leading-[24px]">
          ₹{2990}
          <span className="text-[12px] font-[500]">/Year</span>
        </div>
        <div className="text-[#222] text-[24px] font-[700] leading-[24px]">
          ₹{299}
          <span className="text-[12px] font-[500]">/Month</span>
        </div>
      </div>
      <Divider
        customStyle={"h-[0.5px] w-full bg-[#D9D9D9] mt-[8px] mb-[17px]"}
      />
      <div>
        <div className="text-[#222] text-[16px] font-[600] leading-[16px] mb-[16px]">
          This Plan Includes :
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] mb-[17px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div>1 Year Plan Period</div>
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] mb-[17px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div>Max Benefits upto ₹6830</div>
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div> Discount of 10% on Service</div>
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
