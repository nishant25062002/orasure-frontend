import React from "react";
import CheckIcon from "../../assets/global/Check.svg";
import Divider from "../global/Divider";

const ServiceOffered = () => {
  const services = [
    "Routine Checkup",
    "X Rays",
    "Routine Scaling",
    "Restoration",
    "Extraction",
  ];

  return (
    <div className="border-[rgba(17,110,182,0.30)] border-[1px] rounded-[12px] p-[12px] my-[18px]">
      <div className="text-[#444] text-[12px] font-[600] leading-[16px]">
        Service Offered (5)
      </div>
      <Divider customStyle="h-[0.5px] bg-[#F1F1F1] my-[10px]" />
      {services.map((service) => (
        <div className="text-[#555] text-[14px] font-[600] leading-[14px] mb-[17px] flex gap-[10px]">
          <img src={CheckIcon} alt="check" className="h-[12.5px] w-[12.5px]" />
          {service}
        </div>
      ))}
    </div>
  );
};

export default ServiceOffered;
