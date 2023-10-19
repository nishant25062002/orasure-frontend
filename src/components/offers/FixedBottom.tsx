import React from "react";
import CallBlueIcon from "../../assets/global/CallBlueIcon.svg";
import WhatsappGreenIcon from "../../assets/global/WhatsappGreenIcon.svg";
import DirectionIcon from "../../assets/global/DirectionIcon.svg";
import Divider from "../global/Divider";
import { Button } from "@mui/material";

const FixedBottom = () => {
  return (
    <div className="flex fixed bottom-0 left-0 w-full gap-[45px] justify-center shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] border-t-[0.5px] border-[#888] py-[12px] px-[30px] bg-[#fff] z-[100]">
      <Button
        variant="outlined"
        className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] w-full !border-[1px] !border-[#000] !rounded-[35px] !text-[#000] text-[16px] font-[500]"
      >
        Claim Now
      </Button>
    </div>
  );
};

export default FixedBottom;
