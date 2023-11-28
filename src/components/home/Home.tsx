import React from "react";
import Header from "../global/Header";
import HomeBackground from "../../assets/global/HomeBackground.svg";
import AddFrame from "../../assets/home/AddFrame.svg";
import MedicineFrame from "../../assets/home/MedicineFrame.svg";
import ToothFrame from "../../assets/home/ToothFrame.svg";
import Tab from "./component/Tab";
import Steps from "./component/Steps";
import FAQs from "../global/Faqs/FAQs";
import ChooseUs from "../global/ChooseUs/ChooseUs";
import IdCard from "../user/IdCard";
import OfferComp from "../offers/OfferComp";
import Plan from "./component/Plan";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      tab: "Dental Health Plan",
      link: "/plans",
      img: AddFrame,
    },
    {
      tab: " Membership Plans",
      link: "/plans/membership",
      img: AddFrame,
    },
    {
      tab: "Exciting Dental Offers",
      link: "/offers",
      img: ToothFrame,
    },
    {
      tab: "Book an Appointment",
      link: "/find-my-clinic",
      img: MedicineFrame,
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
    <div className="flex justify-center">
      <div className="!max-w-[420px] w-full flex flex-col items-center">
        <Header />
        <div className="relative z-[0] w-full !h-[290px]">
          <img
            src={HomeBackground}
            alt="img"
            className="top-[10vh] z-[0] w-full brightness-50 !h-[290px]"
          />
          <div className="absolute top-0 bg-[#031d448d] z-[0] w-full !h-full"></div>
        </div>
        <div className="flex flex-col items-center  justify-centery mt-[-140px] bg-[#F7F8FC] w-full">
          <IdCard />
          <div
            className="text-[#116EB6] text-[12px] font-[400] flex justify-end w-full p-[12px_18px_20px_18px]"
            onClick={() => {
              navigate("/treatment");
            }}
          >
            Tap on card to view Details
          </div>
          <div className="px-[16px] flex flex-wrap items-center justify-center gap-[18px]">
            {data.map((tab, index) => (
              <Tab key={index} tab={tab.tab} link={tab.link} img={tab.img} />
            ))}
          </div>
          <div className="px-[16px] flex items-center justify-center">
            <Steps />
          </div>
          {/* oofers */}
          <div className="my-[32px] p-[16px] flex overflow-x-scroll gap-[20px] max-w-full">
            <div className="bg-[#116EB6] rounded-[16px]">
              <OfferComp />
            </div>
            <div className="bg-[#9EC55B] rounded-[16px]">
              <OfferComp />
            </div>
            <div className="bg-[#ED2D3C] rounded-[16px]">
              <OfferComp />
            </div>
            {/* ))} */}
          </div>
          <ChooseUs />
          <Plan />
          <div className="p-[16px] mb-[32px] flex overflow-x-scroll gap-[20px]">
            <FAQs Faqs={Faqs} />
          </div>
          <ChooseUs founder />
        </div>
      </div>
    </div>
  );
};

export default Home;
