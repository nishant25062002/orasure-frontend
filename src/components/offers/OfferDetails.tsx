import React from "react";
import Header from "../global/Header";
import OfferImage from "../../assets/offer/OfferImage.svg";
import FixedBottom from "./FixedBottom";

const OfferDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] mb-[70px] max-w-[420px] w-full flex flex-col items-center">
        <Header />
        <FixedBottom />
        <div className="w-full px-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Offers
          </div>

          <div className="rounded-[16px] bg-[#fff] p-[20px] relative shadow-sm">
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
            <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Description -
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul>
            {/*  */}
            <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Associate Clinics
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul>
            {/*  */}
            <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Associate Clinics
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul>

            <img src={OfferImage} className="absolute top-[50px] right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
