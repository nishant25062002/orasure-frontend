import React from "react";
import Divider from "./Divider";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  show = false,
  doctor = false,
  setShow,
}: {
  show?: boolean;
  doctor?: boolean;
  setShow: any;
}) => {
  const navigate = useNavigate();

  const tabs = [
    {
      tab: "Find My Clinic",
      path: "/find-my-clinic",
    },
    {
      tab: "Health Plan",
      path: "/plans",
    },
    {
      tab: "Membership Plan",
      path: "/plans/membership",
    },
    {
      tab: "Offers",
      path: "/offers",
    },
  ];

  const doctorTab = [
    {
      tab: "Ticket",
      path: "/doctor-ticket",
    },
    {
      tab: "Offers",
      path: "/doctor-offer/",
    },
  ];

  return (
    <div
      className={`flex justify-center w-full fixed left-0 top-[90px] overflow-hidden ease-linear transition-all duration-9000  z-[1000]  ${
        show ? "h-[260px]" : "h-[0]"
      } block`}
    >
      <div
        className={`max-w-[420px] flex flex-col items-center bg-[#ECF4F9] w-full shadow-md`}
      >
        <div className="px-[17px] w-full">
          {!doctor &&
            tabs.map((tab: any, index: number) => (
              <div key={index}>
                <Divider customStyle="bg-[#D9D9D9] h-[0.5px] w-full" />
                <div
                  className="text-[#444] text-[16px] font-[700] py-[17px]"
                  onClick={() => {
                    navigate(tab.path);
                    setShow(false);
                  }}
                >
                  {tab.tab}
                </div>
              </div>
            ))}
          {doctor &&
            doctorTab.map((tab: any, index: number) => (
              <div key={index}>
                <Divider customStyle="bg-[#D9D9D9] h-[0.5px] w-full" />
                <div
                  className="text-[#444] text-[16px] font-[700] py-[17px]"
                  onClick={() => {
                    navigate(tab.path);
                    setShow(false);
                  }}
                >
                  {tab.tab}
                </div>
              </div>
            ))}
          <Divider customStyle="bg-[#D9D9D9] h-[0.5px] w-full" />
        </div>
        {/* {show && (
        <div className="fixed h-[100%] w-full top-[350px] bg-[rgba(0,0,0,0.30)]" />
      )} */}
      </div>
    </div>
  );
};

export default Sidebar;
