import React from "react";
import Star from "../../assets/global/Star.svg";
import ReviewProgress from "./ReviewProgress";

const PatientReview = () => {
  const Review = [75, 20, 25, 10, 5];
  return (
    <div>
      <div className="text-[#555] text-[12px] font-[700] leading-[12px] mb-[17px] flex flex-col">
        <div>Patients Review</div>
        <div className="font-[400] leading-[12px] text-[12px] text-[#444] pt-[8px] flex items-center gap-[9px] ">
          <span className="font-[700] flex items-center">
            4.5 <img src={Star} className="rounded-full h-[14px] w-[14px]" />
          </span>
          (234 Reviews)
        </div>
        {Review.map((number, index) => (
          <ReviewProgress index={index} data={number} />
        ))}
      </div>
    </div>
  );
};

export default PatientReview;
