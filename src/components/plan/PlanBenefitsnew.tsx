import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../global/Divider";

type PlanBenefitsProps = {
    isHeading: string;
    priceworth: string;
};

const PlanBenefitsnew: FC<PlanBenefitsProps> = ({ isHeading, priceworth }) => {
    const navigate = useNavigate();

    return (
        <div className="pt-5 mx-10">
            <h1 className="text-[18px] font-[700] text-[#262626]">{isHeading}</h1>
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    Benefit Worth of{" "}
                    <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "}
                </h1>
            </div>
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    Tenure :
                    <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "}
                </h1>
            </div>
      
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    Best Suited For
                    <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "}
                </h1>
            </div>
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    No EMI Option Available
                    <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "}
                </h1>
            </div>
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    Cash Less Service Available
                    <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "}
                </h1>
            </div>
            <div className="flex items-center ">
                <div className="rounded-full bg-[#444444] h-2 w-2 mr-2"> </div>
                <h1>
                    Discount Of <span className="text-[#116EB6] text-[15px] font-[400]">
                        {priceworth}
                    </span>{" "} On Other Service

                </h1>
            </div>
        </div>
    );
};

export default PlanBenefitsnew;
