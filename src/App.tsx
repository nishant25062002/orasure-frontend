import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import PlanPage from "./components/plan/PlanPage";
import SwipeComp from "./components/test/SwipeComp";
import PaymentPage from "./components/payment/PaymentPage";
import TreatmentPage from "./components/treatment/TreatmentPage";
import DentalRecord from "./components/Record/DentalRecord";
import DetailForm from "./components/user/DetailForm";
import FindClinic from "./components/findclinic/FindClinic";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/plans/*" element={<PlanPage />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/find-my-clinic" element={<FindClinic />} />
        <Route path="/payment/*" element={<PaymentPage />} />
        <Route path="/records" element={<DentalRecord />} />
        <Route path="/detail-form" element={<DetailForm />} />
        <Route path="/test" element={<SwipeComp />} />
      </Routes>
    </Router>
  );
}

export default App;
