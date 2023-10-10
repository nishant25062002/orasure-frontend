import React from "react";
import Divider from "./Divider";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  show = false,
  setShow,
}: {
  show?: boolean;
  setShow: any;
}) => {
  const navigate = useNavigate();

  const tabs = [
    {
      tab: "Find My Clinic",
      path: "",
    },
    {
      tab: "Health Plan",
      path: "/plans/dental-health-plan",
    },
    {
      tab: "Membership Plan",
      path: "/plans",
    },
    {
      tab: "Offers",
      path: "",
    },
  ];

  return (
    <div
      className={`ease-linear transition-all duration-9000 fixed bg-[#ECF4F9] z-[10] w-full left-0 top-[90px] overflow-hidden ${
        show ? "h-[260px] shadow-md" : "h-[0]"
      } block`}
    >
      <div className="px-[17px]">
        {tabs.map((tab: any, index: number) => (
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
      </div>
      {/* {show && (
        <div className="fixed h-[100%] w-full top-[350px] bg-[rgba(0,0,0,0.30)]" />
      )} */}
    </div>
  );
};

export default Sidebar;
