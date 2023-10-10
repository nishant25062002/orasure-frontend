import React from "react";
import Header from "../global/Header";
import TabHeader from "../global/TabHeader";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";

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
      <Routes>
        <Route path="" element={<Payment />} />
        <Route path="/monthly" element={<Payment monthly />} />
      </Routes>
    </div>
  );
};

export default PaymentPage;
