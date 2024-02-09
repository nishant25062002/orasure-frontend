import React from "react";
import Affordable from "../../assets/benefits/img1.svg";
import Universal from "../../assets/benefits/img2.svg";
import Wellness from "../../assets/benefits/img3.svg";
import Comprehensive from "../../assets/benefits/img4.svg";
import Cashless from "../../assets/benefits/img5.svg";
import Choice from "../../assets/benefits/Choice.svg";
import BenefitCard from "./BenefitCard";
import Heading from "../global/Heading";

const benefitcard = [
  {
    title: "Universal Acceptance",
    decs: "Our dental insurance guarantees acceptance for all, irrespective of age or location, with no waiting periods.",
    img: Universal,
  },
  {
    title: "Affordable and Clear-cut Plans",
    decs: "Experience budget-friendly coverage with flexible installments and transparent plan details, ensuring the perfect fit for your needs",
    img: Affordable,
  },
  {
    title: "Comprehensive Coverage",
    decs: "Our policies cover major dental procedures and previous diseases, ensuring comprehensive protection",
    img: Comprehensive,
  },
  {
    title: "Cashless Treatment",
    decs: "We offer cashless treatments to promote regular dental visits, fostering optimal oral health for our policyholders.",
    img: Cashless,
  },
  {
    title: "Freedom of Choice",
    decs: "Choose your dentist from our extensive network, giving you the freedom to access quality dental care.",
    img: Choice,
  },
  {
    title: "Wellness Focus",
    decs: "Receive regular dental tips to maintain your oral health, ensuring a proactive approach to dental well-being",
    img: Wellness,
  },
];

const Benefits = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center my-[47px]  px-[24px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(17, 110, 182, 0.10) 0%, rgba(17, 110, 182, 0.00) 71.1%)",
      }}
    >
      <div className="max-w-[200px] mt-[47px] mb-[30px]">
        <Heading
          heading={"Why You should choose"}
          highlistText={"Orasure?"}
          number={5}
        />
      </div>
      <div className="flex gap-[16px] !overflow-x-scroll w-full">
        {benefitcard.map((ourbenifit, index) => {
          return (
            <BenefitCard
              key={index}
              title={ourbenifit.title}
              desc={ourbenifit.decs}
              img={ourbenifit.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
