import React from "react";
import Header from "../global/Header";
import TabHeader from "../global/TabHeader";
import { Route, Routes } from "react-router-dom";
import MembershipPlanPage from "../plan/membership/MembershipPlanPage";
import HealthPlanPage from "../plan/health/HealthPlanPage";

const Home = () => {
  const tabData = [
    {
      label: "Membership Plan",
      path: "/membership-plan",
    },
    {
      label: "Dental Health Plan",
      path: "/dental-health-plan",
    },
  ];
  return (
    <div className="m-[12px]">
      <Header />
      <TabHeader data={tabData} />
      <Routes>
        <Route path="/membership-plan" element={<MembershipPlanPage />} />
        <Route path="/dental-health-plan" element={<HealthPlanPage />} />
      </Routes>
    </div>
  );
};

export default Home;
