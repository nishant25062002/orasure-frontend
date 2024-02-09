import React, { useState } from "react";
import Divider from "../global/Divider";
import LocationIcon from "../../assets/global/LocationIcon.svg";
import Pannel from "../../assets/global/Pannel.svg";
import Star from "../../assets/global/Star.svg";
import CustomButton from "../global/CustomButton";
import UserPhoto from "../../assets/user/UserPhoto.png";
import PopUpAppointment from "./PopUpAppointment";
import { useNavigate } from "react-router-dom";

const ClinicComponent = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  return (
    <>
      {popup && <PopUpAppointment setPopup={setPopup} />}
      <div className="rounded-[6px] bg-[#fff] my-[12px] p-[17px] shadow-sm">
        <div onClick={() => navigate("/clinic-details")}>
          <div className="flex">
            <img src={UserPhoto} className="rounded-full h-[80px] w-[80px]" />
            <div className="pl-[19px]">
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
            <div className="flex flex-col text-[#116EB6] text-[8px] font-[700] pl-[30px]">
              <img src={Pannel} className="h-[26px]" />
              Paneled
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
          <div className="flex justify-between items-center">
            <div className="flex">
              <img src={LocationIcon} className="h-[16px] w-[11px]" />
              <div className="text-[#444] text-[12px] font-[400] pl-[9px]">
                G-49, Anand Vihar, Delhi , 288173
              </div>
            </div>
            <div className="text-[#000] text-[6px] font-[400] p-[6px] border-[0.3px] border-[#9EC55B]">
              1.3 KM
              <br />
              near you
            </div>
          </div>
          <Divider customStyle="h-[0.5px] bg-[#F1F1F1] my-[10px]" />
        </div>
        <div className="flex w-full">
          <div className="text-[14px] font-[700] text-[#9EC55B] min-w-[64px] w-[25%] text-center">
            Available Now
          </div>
          <CustomButton
            customStyle={"w-[75%]"}
            text={"Schedule an Appointments"}
            type="Appointment"
            clickfunction={() => setPopup(true)}
          />
        </div>
      </div>
    </>
  );
};

export default ClinicComponent;
