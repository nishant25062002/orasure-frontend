import React from "react";
import EnamelIcon from "../../../../src/assets/plans/EnamelIcon.svg";
import SliderPage from "../cards/SliderPage";

const MembershipPlanPage = () => {
  const data = [
    {
      name: "Enamel Member Plan",
      image: EnamelIcon,
    },
    {
      name: "Enamel Member Plan",
      image: EnamelIcon,
    },
    {
      name: "Enamel Member Plan",
      image: EnamelIcon,
    },
  ];

  return <SliderPage data={data} isHeading isMembership />;
};

export default MembershipPlanPage;
