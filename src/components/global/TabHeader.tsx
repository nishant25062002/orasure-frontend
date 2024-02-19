import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TabHeader = ({ data }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-[17px] flex p-[10px_16px_10px_16px] gap-[13px] rounded-[8px] bg-[rgba(158,197,91,0.30)]">
      {data.map((tabData: any, index: number) => (
        <div
          key={index}
          onClick={() => {
            navigate(tabData.path);
          }}
          className={`relative cursor-pointer p-[12px]  gap-[16px] sm:p-[12px] text-[#000] text-[12px] sm:text-[16px] font-[700] w-[50%] flex items-center justify-center ${
            activeTab == tabData.path ? "rounded-[8px] bg-[#9EC55B]" : ""
          }`}
        >
          {tabData.label}
        </div>
      ))}
    </div>
  );
};

export default TabHeader;
