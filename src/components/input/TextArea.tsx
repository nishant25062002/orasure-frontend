import React from "react";

const TextArea = ({
  fieldName,
  value = "",
  onChange,
  placeholder = "Type...",
}: {
  fieldName: string;
  value?: string;
  onChange: any;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
        {fieldName} :
      </div>
      <textarea
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-[rgba(0,0,0,0.25)] text-[14px] font-[400] leading-[22px] p-[5px_12px] outline-none rounded-[2px] border-[1px] border-[#D9D9D9] w-full mt-[5px] h-[86px] resize-none"
      />
    </div>
  );
};

export default TextArea;
