import React from "react";
import OfferImage from "../../assets/offer/OfferImage.svg";

const OfferComp = () => {
  return (
    <div className="rounded-[16px] bg-[#116EB6] text-[#fff] w-full p-[20px_20px] relative">
      <div className="text-[20px] leading-[20px] font-[600]">
        RCT price has gone down
      </div>
      <div className="text-[12px] font-[500] w-[60%] pt-[9px]">
        Now get the RCT done in the most affordable price.{" "}
      </div>
      <div className="text-[24px] font-[700] py-[10px]">₹2000/</div>
      <div className="text-[14px] font-[700] ">Claim now </div>
      <div className="text-[7px] font-[400] pt-[6px]">
        *For first ever recharge on Vi, T&C apply
      </div>
      <img src={OfferImage} className="absolute bottom-0 right-0" />
    </div>
  );
};

export default OfferComp;
