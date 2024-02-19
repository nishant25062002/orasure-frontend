import React from "react";
import SliderCardPage from "../cards/SliderCardPage";
import MembershipPlanImage from "../../../../src/assets/plans/Dentin.svg"


const MembershipPlanPage = () => {
  const data = [
    {
      name: "Enamel Member Plan",
      image:MembershipPlanImage

    },
 
  
  ];

  return <SliderCardPage data={data} isHeading isMembership />;
};

export default MembershipPlanPage;
