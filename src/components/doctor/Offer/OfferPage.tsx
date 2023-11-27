import React from "react";
import Header from "../../global/Header";
import SearchBar from "../../global/SearchBar";
import OfferComp from "../../offers/OfferComp";
import TabOffer from "../Global/TabOffer";
import { Route, Routes } from "react-router-dom";
import NewOffers from "./NewOffers";
import ActiveOffers from "./ActiveOffers";

const DoctorOfferPage = () => {
  return (
    <div className="bg-[#edf2f5] bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
      <Header />
      <div className="mx-[16px]">
        <div className="text-[#000] text-[20px] font-[700]">Offers</div>
        <TabOffer />
        <div className="mb-[4px] ">
          <SearchBar filter />
        </div>
        <Routes>
          <Route path="/" element={<ActiveOffers />} />
          <Route path="/new-offer" element={<NewOffers />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorOfferPage;
