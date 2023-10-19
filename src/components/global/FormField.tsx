import React from "react";

const FormField = ({
  fieldLabel,
  fieldValue,
}: {
  fieldLabel: string;
  fieldValue: string;
}) => {
  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] min-w-[80px]">
      <div className="text-[rgba(68,68,68,0.85)] text-[10px] font-[400] leading-[22px]">
        {fieldLabel}
      </div>
      <div className="text-[rgba(0,0,0,0.85)] text-[14px] font-[700] leading-[22px] outline-none rounded-[2px] w-full">
        {fieldValue}
      </div>
    </div>
  );
};

export default FormField;
