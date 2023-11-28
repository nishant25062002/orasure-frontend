import React from "react";
import Header from "../global/Header";
import ClinicPhotos from "./ClinicPhotos";
import FixedBottom from "../global/FixedBottom";
import Divider from "../global/Divider";
import DoctorImg from "../../assets/doctor/DoctorImg.svg";
import Star from "../../assets/global/Star.svg";
import ServiceOffered from "./ServiceOffered";
import PatientReview from "./PatientReview";

const ClinicDetailPage = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full flex flex-col items-center bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] mb-[100px]">
        <Header />
        <ClinicPhotos />
        <FixedBottom />
        <div className="mx-[16px]">
          <div className="flex">
            <img
              src={DoctorImg}
              className="rounded-full h-[130px] w-[130px] border-[2px] border-[#9EC55B] mt-[-30px] z-[10]"
            />
            <div className="pl-[19px] mt-[10px]">
              <div className="font-[700] leading-[16px] text-[16px] text-[#000]">
                Smiley Clinic
              </div>
              <div className="font-[400] leading-[14px] text-[14px] text-[#116EB6] pt-[8px]">
                Dr. Sunil
              </div>
              <div className="font-[400] leading-[12px] text-[12px] text-[#444] py-[6px]">
                BDS MDS
              </div>
              <div className="font-[700] leading-[12px] text-[12px] text-[#444]">
                22 years of experience
              </div>
              <div className="font-[400] leading-[12px] text-[12px] text-[#444] pt-[8px] flex items-center gap-[9px] ">
                <span className="font-[700] flex items-center">
                  4.5{" "}
                  <img src={Star} className="rounded-full h-[14px] w-[14px]" />
                </span>
                (234 Reviews)
              </div>
            </div>
            <div className="flex flex-col text-[#116EB6] text-[8px] font-[700] pl-[30px]  mt-[10px]">
              {/* <img src={Pannel} className="h-[26px]" /> */}
              <div className="text-[#000] text-[6px] font-[400] p-[6px] border-[0.3px] border-[#9EC55B]">
                1.3 KM
                <br />
                near you
              </div>
            </div>
          </div>
          <Divider customStyle="h-[0.5px] bg-[#F1F1F1] my-[16px]" />
          <div className="flex justify-between">
            <div className="flex flex-col text-[#444] text-[12px] font-[400]">
              Consultation Fee
              <br />
              <span>₹500/-</span>
            </div>
            <div className="flex flex-col text-[#116EB6] text-[12px] font-[400]">
              9:00 AM - 5:00 PM
              <br />
              <span>(Mon to Sat)</span>
            </div>
          </div>
          <Divider customStyle="h-[0.5px] bg-[#F1F1F1]  my-[12px]" />
          <div className="flex flex-col">
            <div className="text-[#222] text-[12px] font-[700] mb-[6px]">
              Know More About Dr. Sunil
            </div>
            <div className="text-[#444] text-[12px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
              dolor sit amet, consectetur.
            </div>
            <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Specialized In
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
          <ServiceOffered />
          <PatientReview />
        </div>
      </div>
    </div>
  );
};

export default ClinicDetailPage;
