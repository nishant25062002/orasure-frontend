import React from "react";
import Divider from "../../global/Divider";

const WorkingDays = () => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <div className="mt-[24px] mb-[18px] text-[#000] text-[16px] font-[500]">
        Choose your Working Days :
      </div>
      <div className="flex flex-wrap gap-[18px]">
        {week.map((data, index) => (
          <div
            key={index}
            className="rounded-[2px] border-[0.5px] border-[#D9D9D9] w-[65px] p-[5px_20px] flex items-center justify-center"
          >
            {data.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-[30px] mb-[20px]">
        <div className="text-[#000] text-[16px] font-[500]">Clinic Timing</div>
        <div className="text-[#68A400] text-[13px] font-[500]">
          Customize Timing
        </div>
      </div>
      <div>
        {week.map((data, index) => (
          <div>
            <div className="text-[#116EB6] text-[14px] font-[600] mb-[9px]">
              {data}
            </div>
            <div className="flex gap-[20px]">
              <input
                placeholder="09:00 AM"
                type="text"
                className="rounded-[2px] border-[1px] border-[#116EB6] bg-[rgba(17,110,182,0.05)] outline-none p-[4px] w-full text-[#666] text-[12px] font-[400]"
              />
              To
              <input
                placeholder="12:00 PM"
                type="text"
                className="rounded-[2px] border-[1px] border-[#116EB6] bg-[rgba(17,110,182,0.05)] outline-none p-[4px] w-full text-[#666] text-[12px] font-[400]"
              />
            </div>
            <div className="flex gap-[20px] mt-[12px]">
              <input
                placeholder="02:00 PM"
                type="text"
                className="rounded-[2px] border-[1px] border-[#116EB6] bg-[rgba(17,110,182,0.05)] outline-none p-[4px] w-full text-[#666] text-[12px] font-[400]"
              />
              To
              <input
                placeholder="06:00 PM"
                type="text"
                className="rounded-[2px] border-[1px] border-[#116EB6] bg-[rgba(17,110,182,0.05)] outline-none p-[4px] w-full text-[#666] text-[12px] font-[400]"
              />
            </div>
            <Divider customStyle="my-[16px] h-[0.5px] !w-full bg-[#444]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingDays;
