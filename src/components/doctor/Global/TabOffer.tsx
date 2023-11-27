import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TabOffer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const data = [
    {
      label: "Active Offers",
      path: "/doctor-offer/",
    },
    {
      label: "New Offers",
      path: "/doctor-offer/new-offer",
    },
  ];

  return (
    <div className="flex p-[5px] gap-[9px] rounded-[12px] bg-[rgba(17,110,182,0.30)] w-full my-[19px]">
      {data.map((tabData: any, index: number) => (
        <div
          key={index}
          onClick={() => {
            navigate(tabData.path);
          }}
          className={`relative cursor-pointer p-[8px_4px] sm:p-[12px] text-[16px] sm:text-[16px] font-[500] w-[50%] flex items-center justify-center ${
            activeTab == tabData.path
              ? "rounded-[8px] bg-[#116EB6] text-[#fff]"
              : "text-[#000]"
          }`}
        >
          {tabData.label}
        </div>
      ))}
    </div>
  );
};

export default TabOffer;
