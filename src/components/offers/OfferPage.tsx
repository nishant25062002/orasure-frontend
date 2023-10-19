import React from "react";
import Header from "../global/Header";
import SearchBar from "../global/SearchBar";
import OfferComp from "./OfferComp";

const OfferPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="mx-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Offers
          </div>
          <div className="mb-[4px]">
            <SearchBar filter />
          </div>
          <OfferComp />
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
