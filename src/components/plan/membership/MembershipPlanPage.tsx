import React from "react";
import SliderPage from "../cards/SliderPage";

const MembershipPlanPage = () => {
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

  return <SliderPage data={data} isHeading isMembership />;
};

export default MembershipPlanPage;
