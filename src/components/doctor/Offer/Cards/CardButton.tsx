import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardButton = ({ joined }: { joined: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row py-[10px] px-[12px] justify-between items-center">
      <div className="!text-[#000] font-[500] text-[10px]">
        {joined && "Joined at - 12 Oct 2023 , 10:45AM"}
      </div>
      {joined ? (
        <Button
          className="w-[82px] h-[27px] !rounded-[4px] !text-[#E33629] font-[500] text-[14px]"
          style={{ border: "0.5px solid #E33629" }}
        >
          Leave
        </Button>
      ) : (
        <div className="gap-[6px] flex">
          <Button
            className="!px-[20px] h-[27px] !rounded-[4px] !text-[#666] font-[500] text-[14px] !bg-[#fff]"
            onClick={() => navigate("/doctor-offer-terms")}
            style={{ border: "0.5px solid #666" }}
          >
            View Details
          </Button>
          <Button
            className="w-[82px] h-[27px] !rounded-[4px] !text-[#fff] font-[500] text-[14px] !bg-[#68A400]"
            onClick={() => navigate("/doctor-offer-terms")}
          >
            Join
          </Button>
        </div>
      )}
    </div>
  );
};

export default CardButton;
