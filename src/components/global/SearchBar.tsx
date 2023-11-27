import React from "react";
import SearchIcon from "../../assets/global/SearchIcon.svg";
import FilterIcon from "../../assets/global/FilterIcon.svg";

const SearchBar = ({ filter = false }: { filter?: boolean }) => {
  return (
    <div className="flex gap-[8px]">
      <div
        className={`h-[40px] border-[1px] border-[#888] rounded-[4px] flex p-[12px] gap-[10px] bg-[#fff] ${
          filter ? "w-[calc(100%-50px)]" : "w-full"
        }`}
      >
        <img src={SearchIcon} className="h-[15px] w-[15px]" />
        <input
          className="w-[100%] text-[12px] text-[#888] outline-none border-none bg-transparent"
          placeholder="Search "
        />
      </div>
      {filter && (
        <div className="rounded-[4px] bg-[#fff] border-[1px] border-[#888] !w-[40px] h-[40px] flex items-center justify-center">
          <img src={FilterIcon} alt="check" className="h-[9px] w-[16px]" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
