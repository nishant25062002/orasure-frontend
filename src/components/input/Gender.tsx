import React, { useState } from "react";

const Gender = ({ value = "", onChange }: { value?: string; onChange: any }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const gender = ["Male", "Female", "Other"];

  const handleGenderSelection = (index: number) => {
    setSelectedGender(gender[index]);
  };

  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
        Gender:
      </div>
      <div className="flex mt-[5px] justify-between items-center">
        {gender.map((genderOption, index) => (
          <div
            className={`rounded-[2px] border-[1px] border-[#BFBFBF] w-[87px] h-[32px] flex items-center justify-center text-[#BFBFBF] font-[700]
             ${selectedGender === genderOption ? "!border-[#9EC55B] !text-[#9EC55B]" : ""}`}
            key={index}
            onClick={() => handleGenderSelection(index)}
          >
            {genderOption}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gender;
