import React, { useState } from "react";
import FormHeader from "../Global/FormHeader";
import { Button } from "@mui/material";
import BackIcon from "../../../assets/global/BackIcon.svg";
import List from "../../global/List";

const StepFive = ({ setPage }: { setPage: any }) => {
  const [plan, setPlan] = useState(0);

  const tab = [
    { text: "Partner With Us", price: "₹2990/Year" },
    { text: "Register Your Clinic", price: "₹299/Year" },
  ];

  const details = [
    {
      title: "Benefits ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
      ],
    },
    {
      title: "Terms & Conditions ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur ",
      ],
    },
  ];

  return (
    <div className="w-full">
      {" "}
      <div className="w-full pl-[31px] my-[32px]">
        <div className="text-[#000] font-[700] text-[24px] ">
          Hello Doctor!!
        </div>
        <div className="text-[#000] font-[400] text-16px] ">
          Lets Build your dedicated profile.
        </div>
      </div>
      <FormHeader head="Clinic Detail" page={5} />
      <div className="px-[25px] pb-[30px] w-full">
        <div className="flex mt-[24px] gap-[22px] w-full justify-center">
          {tab.map((data, index) => (
            <div
              className={`flex flex-col rounded-[18px] border-[0.5px] px-[16px] py-[25px] w-[156px] cursor-pointer ${
                plan == index
                  ? "bg-[#116EB6] border-[#116EB6] text-[#fff]"
                  : "bg-[#fff] border-[#444] text-[#116EB6]"
              }`}
              key={index}
              onClick={() => setPlan(index)}
            >
              <div className="text-[14px] font-[500]">{data.text}</div>
              <div className="text-[14px] font-[500] pt-[12px]">
                {data.price}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[16px] border-[1px] border-[#116EB6] bg-[#fff] p-[24px] mt-[32px]">
          <div className="text-[#222] text-[20px] font-[700] uppercase">
            Partner With Us
          </div>
          {details.map((detail, index) => (
            <div key={index} className="w-full">
              <List data={detail} />
            </div>
          ))}
        </div>

        <div className="flex w-full gap-[45px] justify-center my-[40px]">
          <Button
            className="w-[50%] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#444] text-[16px] font-[500] !bg-[#fff] gap-[12px] "
            onClick={() => setPage(4)}
            style={{ border: "0.5px solid rgba(68,68,68,0.57" }}
          >
            <img src={BackIcon} alt="back" />
            Back
          </Button>
          <Button
            className="w-[50%] !border-[0.5px] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#116EB6] "
            onClick={() => setPage(6)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
