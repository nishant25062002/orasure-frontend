import React from "react";
import { Button } from "@mui/material";
import CallIcon from "../../assets/global/CallIcon.svg";
import WhatsappIcon from "../../assets/global/WhatsappIcon.svg";

const PopUpAppointment = ({ setPopup }: { setPopup: any }) => {
  return (
    <div className="fixed h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.70)] z-[1000] flex flex-col items-end justify-end top-0 left-0">
      <div
        className="h-[calc(100%-160px)] w-full"
        onClick={() => setPopup(false)}
      />
      <div className="bg-[#fff] w-full p-[21px_32px_50px_32px]">
        <div className="text-[#000] text-[16px] font-[500]">
          Schedule Your Appointment with
          <span className="text-[#116EB6]"> Dr. Sunil</span>
        </div>
        <div className="flex gap-[28px] mt-[28px] items-center w-full justify-center">
          {/* <CustomButton customStyle={""} text={"Call"} type="Appointment" /> */}
          <Button
            variant="contained"
            startIcon={<img src={CallIcon} />}
            className="!bg-[#116EB6]"
          >
            Call
          </Button>
          <Button
            variant="contained"
            startIcon={<img src={WhatsappIcon} />}
            className="!bg-[#5F9601]"
          >
            WhatsApp
          </Button>
          {/* <CustomButton customStyle={""} text={"WhatsApp"} type="Appointment" /> */}
        </div>
      </div>
    </div>
  );
};

export default PopUpAppointment;
