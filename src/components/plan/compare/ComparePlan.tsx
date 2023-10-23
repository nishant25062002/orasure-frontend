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
    <div>
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="mx-[16px]">
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
