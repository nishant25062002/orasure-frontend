import React from "react";

const FormDocumentField = ({
  fieldLabel,
  fieldValue,
}: {
  fieldLabel: string;
  fieldValue: string;
}) => {
  return (
    <div className="text-[#000] text-[12px] font-[400] min-w-[80px]">
      <div className="text-[rgba(68,68,68,0.85)] text-[10px] leading-[22px] font-[400] ">
        {fieldLabel}
      </div>
      <div className="text-[000] text-[12px] leading-[20px] font-[400] outline-none rounded-[6px] w-full border-[0.5px] border-[#000] text-center p-[5px_16px]">
        {fieldValue}
      </div>
    </div>
  );
};

export default FormDocumentField;
