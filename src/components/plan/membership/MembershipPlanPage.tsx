import React from "react";
import MembershipCard from "./MembershipCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Membership.css";
import MembershipCardDetail from "./MembershipCardDetail";

const MembershipPlanPage = () => {
  const data = [
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
    {
      name: "Enamel Member Plan",
    },
    {
      name: "Second Member Plan",
    },
    {
      name: "Premium Member Plan",
    },
  ];
  return (
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
        className="swiper_container !rounded-[16px]"
      >
        {data.map(() => (
          <SwiperSlide className="w-[281px] !rounded-[16px]">
            <MembershipCard />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* card details  */}
      <MembershipCardDetail />
    </div>
  );
};

export default MembershipPlanPage;
