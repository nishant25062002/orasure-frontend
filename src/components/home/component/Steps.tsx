import React from "react";
import VirtualCard from "../../../assets/home/VirtualCard.svg";
import PlusCard from "../../../assets/home/PlusCard.svg";
import TickCard from "../../../assets/home/TickCard.svg";
import BucketCard from "../../../assets/home/BucketCard.svg";
import Step from "./Step";
import Heading from "../../global/Heading";

const Steps = () => {
  const data = [
    {
      img: VirtualCard,
      cardText: "Create an Virtual Account to get your virtual Card",
      buttonText: "Create Now",
    },
    {
      img: PlusCard,
      cardText: "Search of the dental clinic and book an appointment",
      buttonText: "Book Now",
    },
    {
      img: TickCard,
      cardText:
        "Confirmation from the dentist after successful claiming of the ticket",
      buttonText: "View Confirmation",
    },
    {
      img: BucketCard,
      cardText: "Add to cart all the treatments follows under your health plan",
      buttonText: "View Treatments",
    },
  ];
  return (
    <div className="mt-[40px]">
      <Heading
        heading={"Complete in Just 4 simple steps."}
        highlistText={"Dental Coverage"}
        number={2}
      />
      {data.map((step, index) => (
        <Step
          key={index}
          img={step.img}
          cardText={step.cardText}
          index={index}
          buttonText={step.buttonText}
        />
      ))}
    </div>
  );
};

export default Steps;
