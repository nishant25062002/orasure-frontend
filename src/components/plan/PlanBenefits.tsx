import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../global/Divider";

type PlanBenefitsProps = {
    isHeading: string;
    justPrice:string;

};

const PlanBenefits: FC<PlanBenefitsProps> = ({
    isHeading,
    justPrice,


}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-5">
      <div className="mx-10">
        <h1 className="text-[24px] text-[#262626] font-[700] ">{isHeading}</h1>
        <p className="text-[#116EB6] font-[700] text-[24px]">{justPrice}</p>
      </div>
      <Divider customStyle={"mt-[8px]  border bg-[#44444466] "} />




    </div>
  );
};

export default PlanBenefits