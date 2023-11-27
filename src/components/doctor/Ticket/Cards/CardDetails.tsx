import React from "react";
import CheckIcon from "../../../../assets/global/Check.svg";
import Divider from "../../../global/Divider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../../global/Header";
import CardComponent from "./CardComponent";

const CardDetails = ({ status = "Settled" }: { status?: string }) => {
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
  const dateData = [
    { title: "Ticket Created", value: "10 Oct 2023 , 10:49AM " },
    { title: "Ticket Claimed", value: "10 Oct 2023 , 10:45AM " },
    { title: "Settlement Date", value: "12 Oct 2023 , 5:05AM " },
  ];

  return (
    <div className="bg-[#EAF3F8] bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] mb-[70px] pb-[10px]">
      <Header />
      <div className="mx-[16px]">
        <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
          Ticket Detail
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
            <div className="flex mt-[30px]">
              <div className="text-[#444] text-[14px] font-[500] ">
                Ticket status -
              </div>
              <div
                className={`${
                  status == "Progress" ? "text-[#ECB302]" : "text-[#68A400]"
                } text-[14px] font-[500] pl-[4px]`}
              >
                {status}
              </div>
            </div>
            {/* date */}
            <div>
              {dateData.map((date, index) => (
                <div key={index}>
                  {index === 2 && status === "Settled" && (
                    <CardComponent title={date.title} value={date.value} />
                  )}
                  {index !== 2 && (
                    <CardComponent title={date.title} value={date.value} />
                  )}
                </div>
              ))}
            </div>

            <div className="gap-[6px] flex items-center justify-center my-[20px]">
              <Button
                className="!px-[20px] w-[145px] h-[40px] !rounded-[4px] !text-[#E33629] font-[500] text-[16px] !bg-[#fff]"
                onClick={() => navigate("/doctor-offer-terms")}
                style={{ border: "0.5px solid rgba(68, 68, 68, 0.57)" }}
              >
                Raise Issue
              </Button>
              <Button
                className="!px-[20px] w-[145px] h-[40px] !rounded-[4px] !text-[#FFF] font-[500] text-[16px] !bg-[#E33629]"
                onClick={() => navigate("/doctor-offer-terms")}
              >
                Delete Ticket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
