import React from "react";
import OfferImage from "../../../../assets/offer/OfferImage.svg";
import CardButton from "./CardButton";

const BlueOffer = ({ joined = false }: { joined?: boolean }) => {
  return (
    <div className="bg-[#fff] rounded-[16px]">
      <div className="bg-[#116EB6] rounded-[16px]">
        <div
          className={`rounded-[16px] text-[#fff] w-full p-[20px_20px] relative mt-[20px]`}
        >
          <div className="text-[20px] leading-[20px] font-[600]">
            RCT price has gone down
          </div>
          <div className="text-[15px] font-[500] w-[80%] pt-[9px]">
            Now get the RCT done ₹2000/
          </div>
          <div className="text-[FFF] text-[10px] font-[500] w-[60%] pt-[9px]">
            Valid Till - 12 Dec 2023 , 11:59PM
          </div>
          <img
            src={OfferImage}
            className="absolute bottom-0 right-[10px] w-[80px] h-[85px]"
          />
        </div>
      </div>
      <CardButton joined={joined} />
    </div>
  );
};

export default BlueOffer;
