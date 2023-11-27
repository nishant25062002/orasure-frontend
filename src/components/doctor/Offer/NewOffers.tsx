import React from "react";
import BlueOffer from "./Cards/BlueOffer";
import GreenOffer from "./Cards/GreenOffer";
import RedOffer from "./Cards/RedOffer";

const NewOffers = () => {
  return (
    <div className="pb-[40px] ">
      <RedOffer />
      <GreenOffer />
      <BlueOffer />
    </div>
  );
};

export default NewOffers;
