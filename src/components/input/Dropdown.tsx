import React, { useState, useEffect, useRef } from "react";
import DownIcon from "../../assets/global/Dropdown.svg";

const Dropdown = ({
  fieldName = "",
  options = [],
  selectedValue = "",
  placeholder = "",
  setSelectedValue,
}: {
  fieldName?: string;
  options?: string[];
  selectedValue?: string;
  setSelectedValue: any;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef?.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-[#000] text-[12px] font-[400] leading-[22px] mt-[18px]">
      {fieldName && (
        <div className="text-[#000] text-[12px] font-[400] leading-[22px]">
          {fieldName} :
        </div>
      )}
      <div className="relative" ref={dropdownRef}>
        <div
          className="bg-[#fff] border-[1px] border-[#D9D9D9] rounded-[2px] p-[0_12px] w-full cursor-pointer h-[32px] mt-[5px] flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <div>
            {selectedValue ? (
              selectedValue
            ) : (
              <div className="text-[rgba(0,0,0,0.25)] font-[600]">
                {" "}
                {placeholder}
              </div>
            )}
          </div>
          <div>
            <img src={DownIcon} />
          </div>
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[2px] shadow-md ">
            {options.map((option, index) => (
              <div
                key={index}
                className="p-[5px_12px] cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
