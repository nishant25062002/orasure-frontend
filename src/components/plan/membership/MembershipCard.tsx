import React from "react";
import Divider from "../../global/Divider";
import CheckIcon from "../../../assets/global/Check.svg";

const MembershipCard = ({ data }: any) => {
  const dataS = {
    name: "Enamel Member Plan",
    monthPrice: 2990,
    yearPrice: 299,
    planIncludes: [{}],
  };
  return (
    <div className="rounded-[16px] bg-[#9EC55B] w-[281px] h-[250px] p-[20px] shadow-sm">
      <div className="text-[#000] text-[14px] font-[700] leading-[14px] uppercase">
        {dataS.name}
      </div>
      <div className="flex pt-[12px] justify-between">
        <div className="text-[#fff] text-[24px] font-[700] leading-[24px]">
          ₹{2990}
          <span className="text-[12px] font-[500]">/Year</span>
        </div>
        <div className="text-[#fff] text-[24px] font-[700] leading-[24px]">
          ₹{299}
          <span className="text-[12px] font-[500]">/Month</span>
        </div>
      </div>
      <Divider customStyle={"h-[0.5px] w-full bg-[#fff] mt-[8px] mb-[17px]"} />
      <div>
        <div className="text-[#222] text-[16px] font-[600] leading-[16px] mb-[16px]">
          This Plan Includes :
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] mb-[17px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div>
            <span className="text-[#fff] ">1 Year </span>Plan Period
          </div>
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] mb-[17px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div>
            Max Benefits upto <span className="text-[#fff] ">₹6830</span>
          </div>
        </div>
        <div className="text-[#222] text-[12px] font-[600] leading-[12px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          <div>
            {" "}
            Discount of <span className="text-[#fff] ">10% on Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
