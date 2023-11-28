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
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full flex flex-col items-center bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="w-full px-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Find My Clinic
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
