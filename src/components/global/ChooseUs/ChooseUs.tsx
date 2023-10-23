import React from "react";
import Heading from "../Heading";
import ChooseUsImg from "../../../assets/global/ChooseUs.svg";
import Point from "./Point";
import { Button } from "@mui/material";
import ForwardArrow from "../../../assets/global/ForwardArrow.svg";

const ChooseUs = ({ founder = false }: { founder?: boolean }) => {
  const points = [
    "Guaranteed acceptance with no age limit (plans available for all age), previous diseases included, and no waiting period",
    "Get affordable and cashless treatments, multiple options to choose from a health plan with health plan tenures ranging from 1 to 3 years",
    "Enjoy the freedom to choose your own dentist, access to your digital records anytime anywhere.",
    "Our plan covers all your dental treatments, including esthetic treatments.",
    "We provide best dental treatments  with most affordable  charges pan India",
  ];
  return (
    <div className="bg-[#E8F1FF] w-full flex flex-col items-center p-[32px_29px_56px_29px]">
      {!founder && (
        <div className="w-[270px] mb-[22px]">
          <Heading
            heading={"Why You should choose"}
            highlistText={"Orasure ?"}
            number={5}
          />
        </div>
      )}
      <img src={ChooseUsImg} className="rounded-[90px]" />
      {founder && (
        <div className="w-[270px] text-[#69A806] text-center text-[16px] font-[600] leading-[23px] mt-[22px]">
          Dr. Ravil Seth
          <br />
          <span className="text-[#26292F] text-center text-[16px] font-[400] leading-[21px]">
            Founder @ORASURE
          </span>
        </div>
      )}

      {founder && (
        <div className="w-full flex flex-col">
          <div className="w-[270px] text-[#000] text-[14px] font-[600] leading-[24px] mt-[20px]">
            Founder’s Words
          </div>
          <div className="text-[#26292F] text-[16px] font-[400] leading-[21px] mt-[10px]">
            The insurance market is a behemoth, yet one cannot find stand-alone
            dental insurance. The lack of dental coverage in their policies is
            frustrating because:
          </div>
        </div>
      )}

      {points.map((point, index) => (
        <Point key={index} point={point} />
      ))}
      {founder && (
        <Button
          onClick={() => {}}
          variant={"contained"}
          style={{
            backgroundColor: "#098B8C",
            height: "39px",
            marginTop: "40px",
            gap: "10px",
            // color: customData.customColor,
            fontWeight: "500",
            fontSize: "12px",
            width: "162px",
            borderRadius: "64px",
            // boxShadow: customData.boxShadow,
            // border: customData.customBorder,
          }}
        >
          Read More
          <img src={ForwardArrow} />
        </Button>
      )}
    </div>
  );
};

export default ChooseUs;
