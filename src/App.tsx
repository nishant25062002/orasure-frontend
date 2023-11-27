import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import PlanPage from "./components/plan/PlanPage";
import PaymentPage from "./components/payment/PaymentPage";
import TreatmentPage from "./components/treatment/TreatmentPage";
import DentalRecord from "./components/Record/DentalRecord";
import DetailForm from "./components/user/DetailForm";
import FindClinic from "./components/findclinic/FindClinic";
import ClinicDetailPage from "./components/findclinic/ClinicDetailPage";
import OfferPage from "./components/offers/OfferPage";
import OfferDetails from "./components/offers/OfferDetails";
import Profile from "./components/user/Profile";
import Home from "./components/home/Home";
import ComparePlan from "./components/plan/compare/ComparePlan";
import PaymentPortal from "./components/payment/PaymentPortal";
import Scanner from "./components/QR/Scanner";
import TokenTransfer from "./components/token/TokenTransfer";
import Login from "./components/global/Login/Login";
import Signup from "./components/doctor/Signup/Signup";
import TicketPage from "./components/doctor/Ticket/TicketPage";
import DoctorOfferPage from "./components/doctor/Offer/OfferPage";
import TermsPage from "./components/doctor/Offer/Cards/TermsPage";

function App() {
  const [path, setPath] = useState("");

  const scrollTop = () => {
    if (path != window.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setPath(window.location.pathname);
  };

  return (
    <Router>
      <div onClick={scrollTop}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/plans/*" element={<PlanPage />} />
          <Route path="/compare-plan" element={<ComparePlan />} />
          <Route path="/treatment" element={<TreatmentPage />} />
          <Route path="/token-transfer" element={<TokenTransfer />} />
          <Route path="/qr-scanner" element={<Scanner />} />
          <Route path="/find-my-clinic" element={<FindClinic />} />
          <Route path="/clinic-details" element={<ClinicDetailPage />} />
          <Route path="/payment/*" element={<PaymentPage />} />
          <Route path="/payment-portal" element={<PaymentPortal />} />
          <Route path="/records" element={<DentalRecord />} />
          <Route path="/user-signup" element={<DetailForm />} />
          <Route path="/doctor-signup" element={<Signup />} />
          <Route path="/doctor-ticket" element={<TicketPage />} />
          <Route path="/doctor-offer/*" element={<DoctorOfferPage />} />
          <Route path="/doctor-offer-terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
