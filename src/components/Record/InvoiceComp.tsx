import React from "react";

const InvoiceComp = () => {
  return (
    <div className="min-h-[49px] h-fit w-full rounded-[6px] border-l-[3px] border-[#9EC55B] bg-[#fff] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] mt-[8px] flex items-center justify-between ease-linear transition-all duration-150 px-[16px]">
      <div className="text-[#000] text-[14px] font-[700]">Invoice</div>
      <div className="text-[#444] text-[10px] font-[400]">
        Monday, 30 August 2023{" "}
      </div>
    </div>
  );
};

export default InvoiceComp;
