import React, { useState } from "react";
import MoreIcon from "../../assets/global/MoreIcon.svg";
import InvoiceComp from "./InvoiceComp";
import List from "../global/List";
import Divider from "../global/Divider";

const RecordComp = () => {
  const [open, setOpen] = useState(false);

  const details = [
    {
      title: "Chief Complaint ",
      points: ["Lorem ipsum dolor sit amet, consectetur adipiscing"],
    },
    {
      title: "Observation ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur ",
      ],
    },
    {
      title: "Diagnosis ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur ",
      ],
    },
    {
      title: "Notes ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur ",
      ],
    },
  ];

  const prescriptionData = {
    title: "Prescription",
    header: ["Medicine Name", "Dosage", "Duration"],
    arrData: [
      {
        first: "Routine Checkup",
        second: "1-0-1",
        third: "10 Days",
      },
      {
        first: "Orabase-HCA",
        second: "1-0-1",
        third: "10 Days",
      },
      {
        first: "Chloraseptic",
        second: "1-0-1 ",
        third: "2 Days",
      },
      {
        first: "PerioChip",
        second: "1-0-0 ",
        third: "1 Days",
      },
    ],
  };
  const invoiceData = {
    title: "Invoice",
    header: ["Completed Procedure", "Quantity", "Cost"],
    arrData: [
      {
        first: "Routine Checkup",
        second: "-",
        third: "-",
      },
      {
        first: "X Rays",
        second: "-",
        third: "-",
      },
      {
        first: "Routine Scaling",
        second: "1",
        third: "1090",
      },
      {
        first: "Restoration",
        second: "4",
        third: "2760",
      },
      {
        first: "Extraction",
        second: "2",
        third: "1980",
      },
    ],
  };

  return (
    <div
      className={`flex flex-col items-center w-full ease-linear transition-all duration-1500
       min-h-[78px] ${open ? "min-h-[300px]" : "h-[92px]"} `}
    >
      <div
        className="h-fit w-full rounded-[6px] border-l-[3px] border-[#9EC55B] bg-[#fff] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] mt-[16px] flex flex-col items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="h-[78px] w-full flex items-center justify-between ">
          <div className="gap-[20px] flex items-center pl-[15px]">
            <div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <div className="text-[#000] text-[14px] font-[700]">
                Orasure Healthcare
              </div>
              <div className="text-[#444] text-[10px] font-[400]">
                @Doctor name
              </div>
              <div className="text-[#888] text-[10px] font-[400] mt-[4px]">
                Monday, 30 August 2023{" "}
              </div>
            </div>
          </div>
          {/* <div className="pr-[17px]">
            <img src={MoreIcon} className="w-[19px] h-[15px]" />
          </div> */}
        </div>
        {open &&
          details.map((detail, index) => (
            <div key={index} className="w-full">
              <List data={detail} />
            </div>
          ))}
        {open && <Divider customStyle="pb-[16px]" />}
      </div>
      {open && <InvoiceComp data={prescriptionData} />}
      {open && <InvoiceComp data={invoiceData} />}
    </div>
  );
};

export default RecordComp;
