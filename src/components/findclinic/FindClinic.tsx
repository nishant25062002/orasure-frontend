import React from "react";
import Header from "../global/Header";
import SearchBarLocation from "../global/SearchBarLocation";
import ClinicComponent from "./ClinicComponent";

const FindClinic = () => {
  const clinic = [
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
    <div>
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="mx-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Dental Records
          </div>
          <div className="mb-[4px]">
            <SearchBarLocation />
          </div>
          <div>
            {clinic.map((clinicData, index) => (
              <ClinicComponent key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindClinic;
