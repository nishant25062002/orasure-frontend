import React from "react";
import SliderPage from "../cards/SliderPage";

const HealthPlanPage = () => {
  const data = [
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
  ];

  return <SliderPage isHeading data={data} />;
};

export default HealthPlanPage;
