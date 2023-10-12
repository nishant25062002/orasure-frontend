import React from "react";
import Header from "../global/Header";
import TabHeader from "../global/TabHeader";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import PlanDetail from "../plan/PlanDetail";

const PaymentPage = () => {
  const tabData = [
    {
      label: "Full Payment",
      path: "/payment",
    },
    {
      label: "Monthly Plan",
      path: "/payment/monthly",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#EAF3F8] via-[rgba(234,243,248,0.00)] to-transparent">
      <Header />
      <TabHeader data={tabData} />
      <div className=" mt-[34px] mx-[8px]">
        <Routes>
          <Route path="" element={<PlanDetail payment />} />
          <Route path="/monthly" element={<PlanDetail monthly payment />} />
        </Routes>
      </div>
    </div>
  );
};

export default PaymentPage;
