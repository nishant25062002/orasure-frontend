import { Button } from "@mui/material";
import React from "react";

const Step = ({
  img,
  cardText,
  index,
  buttonText,
}: {
  img: any;
  cardText: string;
  index: number;
  buttonText: string;
}) => {
  return (
    <div className="rounded-[24px] border-[1px] border-[rgba(217,217,217,0.50)] bg-[#fff] p-[24px_32px] flex flex-col items-center mt-[32px] max-w-[350px]">
      <img src={img} alt="img" />
      <div className="text-[#26292F] text-center font-[700] text-[16px] leading-[26px] mt-[26px]">
        Step {index + 1}
      </div>
      <div className="max-w-[174px] text-[#444] text-center font-[500] text-[14px] mb-[26px]">
        {cardText}
      </div>
      <Button
        style={{
          width: "228px",
          height: "40px",
          color: "#000",
          fontSize: "16px",
          fontWeight: 400,
          borderRadius: "8px",
          border: "1px solid rgba(22,48,86,0.71)",
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Step;
