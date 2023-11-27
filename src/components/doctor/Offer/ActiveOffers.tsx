import React from "react";
import BlueOffer from "./Cards/BlueOffer";
import GreenOffer from "./Cards/GreenOffer";
import RedOffer from "./Cards/RedOffer";

const ActiveOffers = () => {
  return (
    <div className="pb-[40px] ">
      <RedOffer joined />
      <GreenOffer joined />
      <BlueOffer joined />
    </div>
  );
};

export default ActiveOffers;
