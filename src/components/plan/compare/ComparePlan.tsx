import React from "react";
import SearchBar from "../../global/SearchBar";
import CompareCard from "./CompareCard";
import Header from "../../global/Header";
import FixedBottom from "./FixedBottom";

const ComparePlan = () => {
  const data = [
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full flex flex-col items-center bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="w-full px-[16px]">
          <div className="mb-[20px]">
            <SearchBar filter />
          </div>
          {data.map((data, index) => (
            <CompareCard key={index} />
          ))}
        </div>
      </div>
      <FixedBottom />
    </div>
  );
};

export default ComparePlan;
