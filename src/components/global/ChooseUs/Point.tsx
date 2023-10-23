import React from "react";
import ToothPoint from "../../../assets/global/ToothPoint.svg";

const Point = ({ point }: { point: string }) => {
  return (
    <div className="flex items-start gap-[16px] mt-[32px]">
      <img src={ToothPoint} className="" />
      <div className="text-[#444] text-[14px] font-[400] leading-[24px]">
        {point}
      </div>
    </div>
  );
};

export default Point;
