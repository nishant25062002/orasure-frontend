import React from "react";
import Divider from "../../global/Divider";
import CheckIcon from "../../../assets/global/Check.svg";

const SliderCard = ({ image }: any) => {
  return (
    <div className="w-full !rounded-[8px]">
      <img
        src={image}
        className="flex justify-center items-center w-full !rounded-[8px]"
      />
    </div>
  );
};

export default SliderCard;
