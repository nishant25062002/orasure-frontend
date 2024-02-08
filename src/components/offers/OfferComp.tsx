import React from "react";
import { useNavigate } from "react-router-dom";

const OfferComp = (props: any) => {
  const navigate = useNavigate();

  return (
    <img
      src={props.img}
      className="rounded-[12px] w-[283px] h-[283px]"
      onClick={() => navigate("/offer-details")}
    />
  );
};

export default OfferComp;
