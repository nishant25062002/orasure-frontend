import React from "react";
import Header from "../global/Header";
import SearchBar from "../global/SearchBar";
import OfferComp from "./OfferComp";

const OfferPage = () => {
  const offers = [
    { color: "#116EB6", expired: false },
    { color: "#9EC55B", expired: false },
    { color: "#ED2D3C", expired: false },
  ];

  return (
    <div>
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="mx-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Offers
          </div>
          <div className="mb-[4px] ">
            <SearchBar filter />
          </div>
          <div className="mb-[40px] ">
            {/* <div className="mt-[10px] "> */}
            {/* {offers.map((offer, index) => ( */}
            <div className="bg-[#116EB6] rounded-[16px]">
              <OfferComp />
            </div>
            <div className="bg-[#9EC55B] rounded-[16px]">
              <OfferComp />
            </div>
            <div className="bg-[#ED2D3C] rounded-[16px]">
              <OfferComp />
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
