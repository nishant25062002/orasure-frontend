import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../global/Divider";

type PlanBenefitsProps = {
  isHeading: string;
  paragraph: string;
};

const PlanHighlights: FC<PlanBenefitsProps> = ({ isHeading, paragraph }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-5 mx-10">
      <h1 className="text-[18px] font-[700] text-[#262626]">{isHeading}</h1>
      <div className="flex items-center ">
        <p className="text-[#444444] text-[15px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default PlanHighlights;
