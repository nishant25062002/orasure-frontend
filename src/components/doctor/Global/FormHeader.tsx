import React from "react";

const FormHeader = ({ head, page }: { head: string; page: number }) => {
  return (
    <div className="text-[#FFF] text-[16px] leading-[16px] bg-[#116EB6] font-[700] h-[49px] flex justify-between items-center px-[40px] w-full">
      {head}
      <div>Step {page}/6</div>
    </div>
  );
};

export default FormHeader;
