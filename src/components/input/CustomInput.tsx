import React, { useRef } from "react";
import UploadIcon from "../../assets/global/UploadIcon.svg";

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
  const inputRef = useRef(null);

  const handleInputChange = (e: any) => {
    SetValue(e.target.value);
  };

  const handleIconClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
        {fieldName} :
      </div>
      {type == "file" ? (
        <>
          <input
            type="file"
            value={value}
            onChange={handleInputChange}
            ref={inputRef}
            style={{ display: "none" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={handleIconClick}
              className="text-[rgba(0,0,0,0.25)] text-[14px] font-[400] leading-[22px] p-[5px_12px] outline-none rounded-[2px] border-[1px] border-[#D9D9D9] w-full mt-[5px] h-[32px] flex gap-[5px]"
            >
              <img src={UploadIcon} alt="logo" />
              Upload {placeholder}
            </div>
          </div>
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={(e) => SetValue(e.target.value)}
          className="text-[rgba(0,0,0,0.25)] text-[14px] font-[400] leading-[22px] p-[5px_12px] outline-none rounded-[2px] border-[1px] border-[#D9D9D9] w-full mt-[5px] h-[32px] "
        />
      )}
    </div>
  );
};

export default CustomInput;
