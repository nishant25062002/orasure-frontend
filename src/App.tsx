import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import PlanPage from "./components/plan/PlanPage";
import SwipeComp from "./components/test/SwipeComp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans/*" element={<PlanPage />} />
        <Route path="/test" element={<SwipeComp />} />
      </Routes>
    </Router>
  );
}

export default App;
