import React from "react";
import OfferImage from "../../../../assets/offer/OfferImage.svg";
import FixedBottom from "../../../offers/FixedBottom";
import Header from "../../../global/Header";

const TermsPage = () => {
  return (
    <div className="bg-[#EAF3F8] bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] mb-[70px]">
      <Header />
      <FixedBottom Text="Join Now" />
      <div className="mx-[16px]">
        <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
          Offers
        </div>

        <div className="rounded-[16px] bg-[#116EB6] p-[20px] relative shadow-sm text-[#fff]">
          <div className="text-[20px] leading-[20px] font-[600]">
            RCT price has gone down
          </div>
          <div className="text-[12px] font-[500] w-[60%] pt-[9px]">
            Now get the RCT done in the most affordable price.{" "}
          </div>
          <div className="text-[24px] font-[700] pt-[10px]">₹2000/</div>
          <div className="text-[12px] font-[500] w-[60%] pt-[9px]">
            Valid till
          </div>
          <div className="text-[24px] font-[700] ">12/08/2023</div>

          <div className="text-[#fff] text-[12px] font-[700] mt-[16px]">
            Description -
          </div>
          <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor
            </li>
          </ul>
          {/*  */}
          {/*  */}
          <div className="text-[#fff] text-[12px] font-[700] mt-[16px] ">
            Associate Clinics
          </div>
          <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px] mb-[60px]">
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-[#fff] text-[12px] font-[400]">
              Lorem ipsum dolor
            </li>
          </ul>

          <img src={OfferImage} className="absolute top-[50px] right-0" />
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
