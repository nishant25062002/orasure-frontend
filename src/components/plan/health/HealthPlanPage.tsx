import React from "react";
import SliderPage from "../cards/SliderPage";

const HealthPlanPage = () => {
  const data = [
    
    {
      name: "Second Member Plan",
      image:"/src/assets/plans/Frame 427318768.svg"

    },


  
  ];
  return <SliderPage isHeading data={data} />;
};

export default HealthPlanPage;
