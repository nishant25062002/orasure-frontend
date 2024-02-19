import React from "react";
import SliderCardPage from "../cards/SliderCardPage";


const MembershipPlanPage = () => {
  const data = [
    {
      name: "Enamel Member Plan",
      image:"/src/assets/plans/Dentin.svg"

    },
 
  
  ];

  return <SliderCardPage data={data} isHeading isMembership />;
};

export default MembershipPlanPage;
