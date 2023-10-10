import React from "react";
import SearchBar from "../../global/SearchBar";
import HealthPlanCard from "./HealthPlanCard";

const HealthPlanPage = () => {
  return (
    <div className="mx-[16px]">
      <div className="mb-[20px]">
        <SearchBar filter />
      </div>
      <HealthPlanCard />
      <HealthPlanCard />
      <HealthPlanCard />
      <HealthPlanCard />
    </div>
  );
};

export default HealthPlanPage;
