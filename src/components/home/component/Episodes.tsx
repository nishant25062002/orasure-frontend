import React from "react";
import Heading from "../../global/Heading";
import Episode from "./Episode";
import Episode1 from "../../../assets/home/Episode1.svg";
import Episode2 from "../../../assets/home/Episode2.svg";
import Episode3 from "../../../assets/home/Episode3.svg";
import Episode4 from "../../../assets/home/Episode4.svg";
import Episode5 from "../../../assets/home/Episode5.svg";

const Episodes = () => {
  const data = [
    {
      episode: "Episode 1",
      heading: "The Quest Begins",
      para: "Meet Rianya, a young professional on a quest for hassle-free dental care. She navigates to our website in search of the perfect dental plan for her and her family",
      img: Episode1,
    },
    {
      episode: "Episode 2",
      heading: "Selecting the Ideal Plan",
      para: "Rianya embarks on a journey through our website, exploring various dental plans. She compares coverage, examines benefits, and finally selects the ideal plan that suits her family's needs.",
      img: Episode2,
    },
    {
      episode: "Episode 3",
      heading: "Unlocking the Virtual Card",
      para: "After registering and purchasing the chosen plan, Rianya unlocks a virtual card instantly within her account. This magical card holds the power of allocated treatments for each family member.",
      img: Episode3,
    },
    {
      episode: "Episode 4",
      heading: "Discovering Nearby Clinics",
      para: "Rianya utilizes the website's locator tool to find a clinic near her. She's excited to see the array of dental professionals available within the plan's network",
      img: Episode4,
    },
    {
      episode: "Final Episode",
      heading: "A Seamless Visit",
      para: "At the clinic, Rianya scans the provided QR code, selects treatments from her virtual card, and sends her choices with a tap of a button. Voila! The dentists receive instant payment confirmation as Sarah enjoys her treatment without any payment worries.",
      img: Episode5,
    },
  ];
  return (
    <div
      className="flex flex-col w-full items-center justify-center my-[47px] px-[24px] py-[28px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(17, 110, 182, 0.10) 0%, rgba(17, 110, 182, 0.00) 71.1%)",
      }}
    >
      <Heading
        heading={"‘Dental Health "}
        highlistText={"Chronicles’"}
        number={2}
      />
      <div className="text-[#262626] text-center text-[16px] font-[300] py-[9px]">
        Lets Go through the Fine Series of 6 episodes to understand the user
        journey.
      </div>
      {data.map((item, index) => (
        <Episode
          episode={item.episode}
          heading={item.heading}
          para={item.para}
          img={item.img}
          key={index}
        />
      ))}
    </div>
  );
};

export default Episodes;
