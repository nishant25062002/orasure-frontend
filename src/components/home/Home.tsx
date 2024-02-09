import React from "react";
import Header from "../global/Header";
import HomeBackground from "../../assets/home/HomeBackground.svg";
import HealthPlan from "../../assets/home/HealthPlan.svg";
import Membership from "../../assets/home/Membership.svg";
import Offers from "../../assets/home/Offers.svg";
import BookAppointment from "../../assets/home/BookAppointment.svg";
import Tab from "./component/Tab";
import FAQs from "../global/Faqs/FAQs";
import ChooseUs from "../global/ChooseUs/ChooseUs";
import IdCard from "../user/IdCard";
import OfferComp from "../offers/OfferComp";
import Plan from "./component/Plan";
import { useNavigate } from "react-router-dom";
import OfferImage1 from "../../assets/offer/Offer1.svg";
import OfferImage2 from "../../assets/offer/Offer2.svg";
import OfferImage3 from "../../assets/offer/Offer3.svg";
import Heading from "../global/Heading";
import Benefits from "../benefits/Benefits";
import Episodes from "./component/Episodes";

const Home = () => {
  const navigate = useNavigate();

  const data = [
    {
      tab: "Dental Health Plan",
      link: "/plans",
      img: HealthPlan,
    },
    {
      tab: " Membership Plans",
      link: "/plans/membership",
      img: Membership,
    },
    {
      tab: "Exciting Dental Offers",
      link: "/offers",
      img: Offers,
    },
    {
      tab: "Book an Appointment",
      link: "/find-my-clinic",
      img: BookAppointment,
    },
  ];

  const Faqs = [
    {
      ques: "What is Alpha Money?",
      ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      ques: "Who can become an investor at Alpha Money?",
      ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      ques: "How to become an investor?",
      ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      ques: "How can I manage my risks with Alpha Money?",
      ans: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      <div className="relative z-[0] w-full">
        <img
          src={HomeBackground}
          alt="img"
          className="top-[10vh] z-[0] w-full"
        />
      </div>
      <div className="text-[#262626] text-center text-[16px] font-[300] !p-[40px_16px]">
        Choose our Dental health plans and clinics as your go-to destinations
        for the best Dental solutions
      </div>
      <div className="flex flex-col items-center  justify-centery w-full">
        <IdCard />
        <div
          className="text-[#116EB6] text-[12px] font-[400] flex justify-end w-full p-[12px_18px_20px_18px]"
          onClick={() => {
            navigate("/treatment");
          }}
        >
          Tap on card to view Details
        </div>
        <div className="px-[16px] flex flex-wrap items-center justify-center gap-[8px]">
          {data.map((tab, index) => (
            <Tab key={index} tab={tab.tab} link={tab.link} img={tab.img} />
          ))}
        </div>
        <Episodes />
        <div className="flex flex-col my-[32px] gap-[12px] max-w-full">
          <Heading heading={"Exiting"} highlistText={"Offers?"} number={2} />
          <div className="gap-[12px] p-[16px] pt-0 flex overflow-x-scroll max-w-full">
            <OfferComp img={OfferImage1} />
            <OfferComp img={OfferImage2} />
            <OfferComp img={OfferImage3} />
          </div>
        </div>
        <Benefits />
        <ChooseUs />
        <Plan />
        <div className="p-[16px] mb-[32px] flex overflow-x-scroll gap-[20px] scrollHide">
          <FAQs Faqs={Faqs} />
        </div>
        <ChooseUs founder />
      </div>
    </div>
  );
};

export default Home;
