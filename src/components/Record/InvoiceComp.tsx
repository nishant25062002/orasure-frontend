import React, { useState } from "react";
import Divider from "../global/Divider";
import DownloadIcon from "../../assets/records/DownloadIcon.svg";
import PrintIcon from "../../assets/records/PrintIcon.svg";
import ShareIcon from "../../assets/records/ShareIcon.svg";

const InvoiceComp = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-[49px] h-fit w-full rounded-[6px] border-l-[3px] border-[#9EC55B] bg-[#fff] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] mt-[8px] flex items-center justify-between ease-linear transition-all duration-150 px-[16px] flex-col"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between w-full min-h-[49px]">
        <div className="text-[#000] text-[14px] font-[700]">{data.title}</div>
        <div className="text-[#444] text-[10px] font-[400]">
          Monday, 30 August 2023{" "}
        </div>
      </div>
      {open && (
        <>
          <Divider customStyle="h-[0.5px] bg-[#D9D9D9] w-full" />
          <div className="flex w-full my-[10px]">
            <div className="text-[#444] text-[12px] font-[700] leading-[12px] w-[45%]">
              {data.header[0]}
            </div>
            <div className="text-[#444] text-[12px] font-[700] leading-[12px] w-[35%] text-center">
              {data.header[1]}
            </div>
            <div className="text-[#444] text-[12px] font-[700] leading-[12px] w-[20%] text-center">
              {data.header[2]}
            </div>
          </div>
          <Divider customStyle="h-[0.5px] bg-[#D9D9D9] w-full" />
          <div className=" w-full mt-[10px]">
            {data.arrData.map((item: any, index: number) => (
              <div className="flex my-[16px]" key={index}>
                <div className="text-[#000] text-[12px] font-[600] leading-[14px] w-[45%] flex gap-[4px]">
                  {index + 1}. {item.first}
                </div>
                <div className="text-[#000] text-[12px] font-[600] leading-[12px] w-[35%] text-center">
                  {item.second}
                  <br />
                  {data.header[1] == "Dosage" && (
                    <div className=" text-[11px] mt-[4px]">(After Meal)</div>
                  )}
                </div>
                <div className="text-[#000] text-[12px] font-[600] leading-[12px] w-[20%] text-center">
                  {data.header[2] == "Cost" && item.third != "-" && "₹"}
                  {item.third}
                </div>
              </div>
            ))}
          </div>
          <Divider customStyle="h-[0.5px] bg-[#D9D9D9] w-full" />
          <div className="flex items-center justify-end gap-[28px] w-full p-[18px]">
            {" "}
            <img src={PrintIcon} alt="" />
            <img src={DownloadIcon} alt="" />
            <img src={ShareIcon} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default InvoiceComp;
