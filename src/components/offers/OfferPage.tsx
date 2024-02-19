import React from "react";
import Header from "../global/Header";
import SearchBar from "../global/SearchBar";
import OfferComp from "./OfferComp";
import OfferImage1 from "../../assets/offer/Offer1.svg";
import OfferImage2 from "../../assets/offer/Offer2.svg";
import OfferImage3 from "../../assets/offer/Offer3.svg";

const OfferPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] max-w-[420px] w-full flex flex-col items-center">
        <Header />
        <div className="w-full px-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Offers
          </div>
          <div className="mb-[4px] ">
            <SearchBar filter />
          </div>
          <div className="flex flex-col p-4 items-center mb-[40px]">
            <OfferComp img={OfferImage1} />
            <OfferComp img={OfferImage2} />
            <OfferComp img={OfferImage3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
