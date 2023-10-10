import React from "react";

const CustomInput = ({
  fieldName,
  value = "",
  SetValue,
  type = "text",
  placeholder = "Type...",
}: {
  fieldName: string;
  value?: string;
  SetValue: any;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
        {fieldName} :
      </div>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e) => SetValue(e.target.value)}
        className="text-[rgba(0,0,0,0.25)] text-[14px] font-[400] leading-[22px] p-[5px_12px] outline-none rounded-[2px] border-[1px] border-[#D9D9D9] w-full mt-[5px] h-[32px] "
      />
    </div>
  );
};

export default CustomInput;
