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
      label: "Dental Health Plan",
      path: "/plans",
    },
    {
      label: "Membership Plan",
      path: "/plans/membership",
    },
  ];

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
          {data.map(() => (
            <SwiperSlide className="min-w-[300px] w-[92%] !rounded-[16px]">
              <SliderCard />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* card details  */}
        <PlanDetail isHeading={isHeading} isMembership={isMembership} />
      </div>
    </div>
  );
};

export default SliderPage;
