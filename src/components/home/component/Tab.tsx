import React from "react";

const Tab = ({ tab, link, img }: { tab: string; link: string; img: any }) => {
  return (
    <div className="rounded-[14px] border-[1px] border-[#D9D9D9] bg-[#fff] w-[144px] h-[141px] flex flex-col items-center justify-center z-[1]">
      <img src={img} alt="img" />
      <div className="max-w-[110px] text-center pt-[14px] text-[#26292F] text-[14px] font-[600]">
        {tab}
      </div>
    </div>
  );
};

export default Tab;
