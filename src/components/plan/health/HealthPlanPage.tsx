import React from "react";
import SliderPage from "../cards/SliderPage";
import EnamelIcon from "../../../../src/assets/plans/EnamelIcon.svg";
import DentinIcon from "../../../../src/assets/plans/DentinIcon.svg";

const HealthPlanPage = () => {
  const data = [
    {
      name: "Second Member Plan",
      image: EnamelIcon,
    },
    {
      name: "Second Member Plan",
      image: DentinIcon,
    },
  ];
  return <SliderPage isHeading data={data} />;
};

export default HealthPlanPage;
