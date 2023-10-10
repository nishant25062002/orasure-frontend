import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import PlanPage from "./components/plan/PlanPage";
import SwipeComp from "./components/test/SwipeComp";
import PaymentPage from "./components/payment/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/plans/*" element={<PlanPage />} />
        <Route path="/payment/*" element={<PaymentPage />} />
        <Route path="/test" element={<SwipeComp />} />
      </Routes>
    </Router>
  );
}

export default App;
