import React from "react";
import Header from "../global/Header";
import TabHeader from "../global/TabHeader";
import { Route, Routes } from "react-router-dom";
import MembershipPlanPage from "./membership/MembershipPlanPage";
import HealthPlanPage from "../plan/health/HealthPlanPage";

const PlanPage = () => {
  const tabData = [
    {
      label: "Membership Plan",
      path: "/plans/membership-plan",
    },
    {
      label: "Dental Health Plan",
      path: "/plans/dental-health-plan",
    },
  ];
  return (
    <div className="">
      <Header />
      <TabHeader data={tabData} />
      <Routes>
        <Route path="/membership-plan" element={<MembershipPlanPage />} />
        <Route path="/dental-health-plan" element={<HealthPlanPage />} />
      </Routes>
    </div>
  );
};

export default PlanPage;
