import React from "react";
import Header from "../global/Header";
import TabHeader from "../global/TabHeader";
import { Route, Routes } from "react-router-dom";
import MembershipPlanPage from "./membership/MembershipPlanPage";
import HealthPlanPage from "../plan/health/HealthPlanPage";

const PlanPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#EAF3F8] via-[rgba(234,243,248,0.00)] to-transparent">
      <Header />
      <Routes>
        <Route path="/" element={<MembershipPlanPage />} />
        <Route path="/dental-health-plan" element={<HealthPlanPage />} />
      </Routes>
    </div>
  );
};

export default PlanPage;
