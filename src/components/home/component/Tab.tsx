import React from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ tab, link, img }: { tab: string; link: string; img: any }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-[14px] border-[1px] border-[#D9D9D9] bg-[#fff] w-[144px] flex flex-col items-center justify-center z-[1] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.20)] p-[17px_27px]"
      onClick={() => {
        navigate(link);
      }}
    >
      <img src={img} alt="img" className="h-[68px]" />
      <div className="max-w-[110px] text-center pt-[12px] text-[#26292F] text-[14px] font-[600]">
        {tab}
      </div>
    </div>
  );
};

export default Tab;
