import React from "react";
import SearchBar from "../../global/SearchBar";
import CompareCard from "./CompareCard";

const ComparePlan = () => {
  return (
    <div className="mx-[16px]">
      <div className="mb-[20px]">
        <SearchBar filter />
      </div>
      <CompareCard />
      <CompareCard />
      <CompareCard />
      <CompareCard />
    </div>
  );
};

export default ComparePlan;
