import React from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../../../global/Divider";
import CheckIcon from "../../../../assets/global/Check.svg";
import { Button } from "@mui/material";

const TicketCard = ({ status = "" }: { status?: string }) => {
  const navigate = useNavigate();
  const data = [
    {
      service: "Routine Checkup",
      treatment: "-",
      cost: "-",
    },
    {
      service: "X Rays",
      treatment: "-",
      cost: "-",
    },
    {
      service: "Routine Scaling",
      treatment: "1",
      cost: "1090",
    },
    {
      service: "Restoration",
      treatment: "4",
      cost: "2760",
    },
    {
      service: "Extraction",
      treatment: "2",
      cost: "1980",
    },
  ];
  return (
    <div className="my-[16px]">
      <div className="flex justify-end mb-[4px] text-[#000] text-[10px] font-[400]">
        12 Oct 2023 , 10:45AM
      </div>
      <div
        className={`rounded-[16px] border-[1px] border-t-[5px] ${
          status == "Progress" && "border-t-[#ECB302]"
        } ${status == "" && "border-t-[#116EB6]"} ${
          status == "Settled" && "border-t-[#68A400]"
        } border-[#D9D9D9] bg-[#FFF]`}
      >
        <div className="p-[15px_13px]">
          <div className="text-[#116EB6] text-[16px] font-[700] uppercase">
            TICKET NUMBER - OHC78210
          </div>
          <div className="mt-[15px]">
            <div className="flex mb-[22px]">
              {/* heading */}
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[45%]">
                Basic Services :
              </div>
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[35%] text-center">
                Treatments
              </div>
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[20%] text-center">
                Cost
              </div>
            </div>
            {/* body */}
            {data.map((data, index) => (
              <div className="flex mb-[16px]" key={index}>
                <div className="text-[#555] text-[12px] font-[600] leading-[14px] w-[45%] flex gap-[4px]">
                  <img
                    src={CheckIcon}
                    alt="check"
                    className="h-[12.5px] w-[12.5px]"
                  />
                  {data.service}
                </div>
                <div className="text-[#000] text-[14px] font-[600] leading-[14px] w-[35%] text-center">
                  {data.treatment}
                </div>
                <div className="text-[#000] text-[14px] font-[600] leading-[14px] w-[20%] text-center">
                  {data.cost !== "-" && "₹"}
                  {data.cost}
                </div>
              </div>
            ))}
            <Divider customStyle={"mt-[8px] !h-[1px] bg-[#888]"} />
            <div className="flex justify-between items-center mt-[12px]">
              <div className="text-[#000] text-[16px] font-[600] ">
                Total Cost
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[#444] text-[16px] font-[400] leading-[16px]">
                  ₹ 2990
                </div>
              </div>
            </div>
            <Divider customStyle={"mt-[12px] !h-[1px] bg-[#888]"} />
          </div>
          <div className="gap-[6px] flex items-center justify-center my-[20px]">
            <Button
              className="!px-[20px] w-[145px] h-[40px] !rounded-[4px] !text-[#444] font-[500] text-[16px] !bg-[#fff]"
              onClick={() => navigate("/doctor-ticket-detail")}
              style={{ border: "0.5px solid rgba(68, 68, 68, 0.57)" }}
            >
              View Details
            </Button>
            {!status && (
              <Button
                className="!px-[20px] w-[145px] h-[40px] !rounded-[4px] !text-[#FFF] font-[500] text-[16px] !bg-[#116EB6]"
                onClick={() => navigate("/doctor-ticket-detail")}
              >
                Claim
              </Button>
            )}
            {status && (
              <div
                className={`w-[145px] text-center ${
                  status == "Progress" ? "text-[#ECB302]" : "text-[#68A400]"
                } font-[500] text-[20px]`}
              >
                {status == "Progress" ? "In Progress" : "Settled"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
