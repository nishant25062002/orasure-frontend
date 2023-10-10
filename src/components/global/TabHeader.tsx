import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TabHeaderProps {
  data: [
    tab: {
      label: string;
      path: string;
    }
  ];
}

const TabHeader = ({ data }: TabHeaderProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="mx-[17px] flex p-[5px] gap-[9px] rounded-[42px] bg-[rgba(158,197,91,0.30)]">
      {data.map((tabData, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveTab(index);
            navigate(tabData.path);
          }}
          className={`cursor-pointer p-[8px_4px] sm:p-[12px] text-[#000] text-[12px] sm:text-[16px] font-[700] w-[50%] flex items-center justify-center ${
            activeTab == index ? "rounded-[33px] bg-[#9EC55B]" : ""
          }`}
        >
          {tabData.label}
        </div>
      ))}
    </div>
  );
};

export default TabHeader;
