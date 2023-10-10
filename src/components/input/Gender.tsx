import React from "react";

const Gender = ({
  value = "",
  SetValue,
}: {
  value?: string;
  SetValue: any;
}) => {
  const gender = ["Male", "Female", "Other"];

  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
        Gender :
      </div>
      <div className="flex mt-[5px] justify-between items-center">
        {gender.map((gender, index) => (
          <div
            className="rounded-[2px] border-[1px] border-[#BFBFBF] w-[87px] h-[32px] flex items-center justify-center text-[#BFBFBF] font-[700]"
            key={index}
          >
            {gender}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gender;
