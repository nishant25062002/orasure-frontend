import React from "react";

const FormHeader = ({ head }: { head: string }) => {
  return (
    <div className="text-[#000] text-[16px] leading-[16px] bg-[#9EC55B] font-[700] h-[49px] flex items-center pl-[40px]">
      {head}
    </div>
  );
};

export default FormHeader;
