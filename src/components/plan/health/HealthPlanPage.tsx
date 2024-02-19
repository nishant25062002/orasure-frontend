import React from "react";
import SliderPage from "../cards/SliderPage";
import  HealthPlanImage from '../../../../src/assets/plans/Frame 427318768.svg' 

const HealthPlanPage = () => {
  const data = [
    
    {
      name: "Second Member Plan",
      image:HealthPlanImage

    },


  
  ];
  return <SliderPage isHeading data={data} />;
};

export default HealthPlanPage;
