import React from "react";
import Header from "../global/Header";
import { Route, Routes } from "react-router-dom";
import MembershipPlanPage from "./membership/MembershipPlanPage";
import HealthPlanPage from "../plan/health/HealthPlanPage";

const PlanPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[rgba(234,243,248,0.00)] to-transparent max-w-[420px] w-full flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<HealthPlanPage />} />
          <Route path="/membership" element={<MembershipPlanPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default PlanPage;
