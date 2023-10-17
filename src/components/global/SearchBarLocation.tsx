import React from "react";
import SearchIcon from "../../assets/global/SearchIcon.svg";
import LocationIcon from "../../assets/global/LocationIcon.svg";

const SearchBarLocation = () => {
  return (
    // p-[16px_24px_16px_14px]
    <div className="flex gap-[8px]">
      <div
        className={`h-[40px] border-[1px] border-[#D9D9D9] rounded-[4px] flex p-[12px] gap-[10px] bg-[#f8f6f6] w-[calc(100%-100px)]`}
      >
        <img src={SearchIcon} className="h-[15px] w-[15px]" />
        <input
          className="w-[100%] text-[12px] text-[#888] outline-none border-none bg-transparent font-[400]"
          placeholder="Search Health Plans"
        />
      </div>
      <div className="rounded-[4px] bg-[#f8f6f6] border-[1px] border-[#D9D9D9] !w-[100px] h-[40px] flex items-center justify-center px-[12px]">
        <img
          src={LocationIcon}
          alt="check"
          className="h-[13px] w-[9px] mr-[3px]"
        />
        <input
          className="w-[calc(100%-10px)] text-[12px] text-[#888] outline-none border-none bg-transparent"
          placeholder="Location"
        />
      </div>
    </div>
  );
};

export default SearchBarLocation;
