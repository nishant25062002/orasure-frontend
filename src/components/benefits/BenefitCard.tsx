import React from "react";

type Props = {
  title: string;
  desc: string;
  img: string;
};

const BenefitCard = (props: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center
     rounded-[10.2px] border-[.85px] border-[#116EB6] min-w-[300px] pt-[36px] pb-[10px]"
    >
      <div className="text-[fato] text-[20px] font-[700] text-[#116EB6] text-center leading-[28px]">
        {props.title}
      </div>
      <div className="text[14px] !font-[400] leading-[19px] text-[#262626] text-center pt-[10px] mb-[20px] px-[12px]">
        {props.desc}
      </div>
      <img src={props.img} alt="img" className="h-[146px]" />
    </div>
  );
};

export default BenefitCard;
