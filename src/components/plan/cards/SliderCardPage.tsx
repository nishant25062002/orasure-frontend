import React from "react";
import SliderCard from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TabHeader from "../../global/TabHeader";
import PlanDetail from "../PlanDetail";
import PlanDetailService from "../PlanDetailService";
import PlanBenefits from "../PlanBenefits";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import PlanBenefitsnew from "../PlanBenefitsnew";
import PlanHighlights from "../PlanHighlights";

const SliderCardPage = ({
  data,
  isMembership = false,
  isHeading = false,
}: {
  data: any;
  isMembership?: boolean;
  isHeading?: boolean;
}) => {
  const tabData = [
    {
      label: "Membership Plan",
      path: "/plans/membership",
    },
    {
      label: "Dental Health Plan",
      path: "/plans",
    },
  ];
  const data2 = [
    {
      service: "Routine Checkup",
      treatment: "-",
      cost: "-",
    },
    {
      service: "X Rays",
      treatment: "-",
      cost: "-",
    },
    {
      service: "Routine Scaling",
      treatment: "1",
      cost: "1090",
    },
    {
      service: "Restoration",
      treatment: "4",
      cost: "2760",
    },
    {
      service: "Extraction",
      treatment: "2",
      cost: "1980",
    },
    {
      service: "Fluoride Application",
      treatment: "2",
      cost: "1980",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="w-full">
      <TabHeader data={tabData} />
      <div className=" mt-[34px] mx-[8px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container !rounded-[16px] max-w-[420px] w-full "
        >
          {data.map((item: any) => (
            <SwiperSlide className="min-w-[500px] w-[70%] !rounded-[16px]">
              {/* <SliderCard /> */}
              <div className="flex justify-center items-center">
                <img src={item.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PlanBenefits */}

        <PlanBenefits
          isHeading="ENAMEL HEALTH PLAN"
          justPrice="Just At ₹3999 "
        />



        <PlanBenefitsnew priceworth="₹17,000/-" isHeading="Plan Benefits" />
        {/* card details  */}

        <PlanHighlights
          isHeading="Plan Highlights"
          paragraph="Best Oral Hygiene Maintenance Plan suited for those who does not have any/less cavities, this plan gives you regular checkups and teeth cleaning"
        />

        <PlanDetailService
          data={data2}
          Services={"Basic Services"}
          Treatments="Treatments"
          MarketCost="Market Cost"
          isActive={false}
        />
      </div>
    </div>
  );
};

export default SliderCardPage;
