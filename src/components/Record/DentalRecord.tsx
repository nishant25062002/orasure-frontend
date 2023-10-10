import React from "react";
import Header from "../global/Header";
import SearchBar from "../global/SearchBar";
import RecordComp from "./RecordComp";

const DentalRecord = () => {
  const records = [
    {
      text: "Records",
    },
    {
      text: "Profile",
    },
    {
      text: "Cart",
    },
    {
      text: "More",
    },
    {
      text: "Records",
    },
    {
      text: "Profile",
    },
    {
      text: "Cart",
    },
    {
      text: "More",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#e6f5fd] via-[rgba(234,243,248,0.2)] to-transparent h-full">
      <Header />
      <div className="mx-[16px]">
        <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
          Dental Records
        </div>
        <div className="mb-[4px]">
          <SearchBar filter />
        </div>
        <div>
          {records.map((record, index) => (
            <RecordComp key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalRecord;
