import React from "react";
import Heading from "../../global/Heading";
import { Button } from "@mui/material";

const Episode = ({
  episode,
  heading,
  para,
  img,
}: {
  episode: string;
  heading: string;
  para: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center my-[40px] px-[24px]">
      <div className="text-[#262626] text-[14px] font-[400] text-center">
        {" "}
        {episode}
      </div>
      <div className="text-[#262626] text-[20px] font-[700] text-center">
        {heading}
      </div>
      <div className="text-[#262626] text-center text-[14px] font-[300] py-[16px]">
        {para}
      </div>
      <img src={img} />
      {episode === "Episode 1" && (
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
          View Plans
        </Button>
      )}
    </div>
  );
};

export default Episode;
