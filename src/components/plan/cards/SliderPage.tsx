import React, { useState } from "react";
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
import clsx from "clsx";

const SliderPage = ({
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

  const [show, setShow] = useState(1);

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

        <PlanBenefits isHeading="PULP HEALTH PLAN" justPrice="₹11,000/Year  " />

        {pathname === "/plans" && (
          <div className="space-x-4  flex justify-center items-center ">
            <Button
              onClick={() => setShow(1)}
              className={clsx(
                `!p-[10px_22px_10px_22px] !text-[#444444] !border !border-[#444444] `,
                show === 1 ? "!bg-[#116EB6] !text-white " : "!bg-transparent"
              )}
              variant={"contained"}
              style={{
                // height: "39px",
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                // width: "162px",
                borderRadius: "21px",
              }}
            >
              Full Cover
            </Button>
            <Button
              onClick={() => setShow(2)}
              className={clsx(
                `!p-[10px_16px_10px_16px]  !text-[#444444] !border !border-[#444444] `,
                show === 2 ? "!bg-[#116EB6] !text-white " : "!bg-transparent"
              )}
              variant={"contained"}
              style={{
                // height: "39px",
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                // width: "162px",
                borderRadius: "21px",
              }}
            >
              Co-Pay 20%
            </Button>
            <Button
              onClick={() => setShow(3)}
              className={clsx(
                `!p-[10px_16px_10px_16px]  !text-[#444444] !border !border-[#444444]  `,
                show === 3 ? " !bg-[#116EB6] !text-white " : " !bg-transparent"
              )}
              variant={"contained"}
              style={{
                // height: "39px",
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                // width: "162px",
                borderRadius: "21px",
              }}
            >
              Co-Pay 30%
            </Button>
          </div>
        )}

        {show === 1 && (
          <>
            <PlanBenefitsnew priceworth="₹17,000/-" isHeading="Plan Benefits" />
            <PlanHighlights
              isHeading="Plan Highlights"
              paragraph="Best suited plan for all age with maximum cover of 1Lac+ includes multiple RCTs & Crown, Gum Care, Surgical Extraction and 1 Removable Partial Denture and other benefits"
            />
          </>
        )}
        {show === 2 && (
          <>
            <PlanBenefitsnew priceworth="₹17,000/-" isHeading="Plan Benefits" />
            <PlanHighlights
              isHeading="Plan Highlights"
              paragraph="We cover your 80% expenses with this CO-PAY plans and you pay 20 % . You PAY LESS NOW FOR THE SAME BENEFITS & ONLY PAY FOR THE SERVICE(s) YOU AVAIL"
            />
          </>
        )}
        {show === 3 && (
          <>
            <PlanBenefitsnew priceworth="₹17,000/-" isHeading="Plan Benefits" />
            <PlanHighlights
              isHeading="Plan Highlights"
              paragraph="We cover your 70% expenses with this CO-PAY plans and you pay 30% . You PAY LESS NOW FOR THE SAME BENEFITS & ONLY PAY FOR THE SERVICE(s) YOU AVAIL"
            />
          </>
        )}

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

export default SliderPage;
