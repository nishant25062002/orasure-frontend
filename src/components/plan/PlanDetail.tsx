import React from "react";
import CheckIcon from "../../assets/global/Check.svg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../global/CustomButton";
import Divider from "../global/Divider";

const PlanDetail = ({
  isHeading = false,
  isMembership = false,
  monthly = false,
  payment = false,
}: {
  isHeading?: boolean;
  isMembership?: boolean;
  monthly?: boolean;
  payment?: boolean;
}) => {
  const navigate = useNavigate();

  const data = [
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
  ];
  return (
    <div
      className={`flex flex-col items-center justify-center mb-[20px] ${
        !isHeading ? "mt-[33px]" : ""
      }`}
    >
      {isHeading && (
        <div className="mt-[33px] mb-[13px] text-center text-[#444] text-[20px] font-[700] ">
          Plan Benefits
        </div>
      )}
      <div className="max-w-[350px] w-[98%] rounded-[16px] border-[1px] border-[#9EC55B] py-[24px]">
        <div className="p-[0_22px]">
          <div className=" mb-[30px] text-[#222] text-[20px] font-[700] uppercase">
            Enamel Health Plan
          </div>
          {isMembership && (
            <>
              <div className="text-[#222] text-[16px] font-[600] leading-[16px] mb-[16px]">
                This Plan Includes :
              </div>
              <div className="text-[#555] text-[14px] font-[600] leading-[16px] mb-[17px] gap-[10px] flex items-center">
                <img
                  src={CheckIcon}
                  alt="check"
                  className="h-[12.5px] w-[12.5px]"
                />
                <div>
                  <span className="text-[#146EB7] ">1 Year </span>Plan Period
                </div>
              </div>
              <div className="text-[#555] text-[14px] font-[600] leading-[16px] mb-[17px] flex gap-[10px] items-center">
                <img
                  src={CheckIcon}
                  alt="check"
                  className="h-[12.5px] w-[12.5px]"
                />
                <div>
                  Max Benefits upto{" "}
                  <span className="text-[#146EB7] ">₹6830</span>
                </div>
              </div>
              <div className="text-[#555] text-[14px] font-[600] leading-[16px] flex gap-[10px] items-center">
                <img
                  src={CheckIcon}
                  alt="check"
                  className="h-[12.5px] w-[12.5px]"
                />
                <div>
                  {" "}
                  Discount of{" "}
                  <span className="text-[#146EB7] ">10% on Service</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="p-[0_13px]">
          <div className="mt-[38px]">
            <div className="flex mb-[22px]">
              {/* heading */}
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[45%]">
                Basic Services :
              </div>
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[35%] text-center">
                Treatments
              </div>
              <div className="text-[#222] text-[14px] font-[700] leading-[14px] w-[20%] text-center">
                Cost
              </div>
            </div>
            {/* body */}
            {data.map((data, index) => (
              <div className="flex mb-[16px]" key={index}>
                <div className="text-[#555] text-[12px] font-[600] leading-[14px] w-[45%] flex gap-[4px]">
                  <img
                    src={CheckIcon}
                    alt="check"
                    className="h-[12.5px] w-[12.5px]"
                  />
                  {data.service}
                </div>
                <div className="text-[#000] text-[14px] font-[600] leading-[14px] w-[35%] text-center">
                  {data.treatment}
                </div>
                <div className="text-[#000] text-[14px] font-[600] leading-[14px] w-[20%] text-center">
                  {data.cost !== "-" && "₹"}
                  {data.cost}
                </div>
              </div>
            ))}
            <Divider customStyle={"mt-[8px] !h-[1px] bg-[#888]"} />
            <div className="flex justify-between items-center mt-[12px]">
              <div className="text-[#000] text-[16px] font-[600] ">
                Total Cost
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[#444] text-[16px] font-[400] leading-[16px]">
                  ₹ 2990
                </div>
                <div className="text-[#444] text-[12px] font-[400] line-through">
                  ₹ 4990
                </div>
              </div>
            </div>
            <Divider customStyle={"mt-[12px] mb-[30px] !h-[1px] bg-[#888]"} />
            {monthly && (
              <div className="flex justify-between items-center ">
                <div className="text-[#000] text-[16px] font-[600] ">
                  Monthly Cost
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[#444] text-[16px] font-[400] leading-[16px]">
                    ₹ 299/month
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* buttons */}
          {payment ? (
            <>
              {" "}
              <CustomButton
                customStyle={"w-full mb-[16px] mt-[47px]"}
                text={"Proceed payment"}
                clickfunction={() => navigate("/payment-portal")}
              />
            </>
          ) : (
            <>
              {" "}
              <CustomButton
                customStyle={
                  monthly ? "w-full mb-[16px] mt-[47px]" : "w-full mb-[16px]"
                }
                text={"Apply now"}
                clickfunction={() => navigate("/detail-form")}
              />
              <CustomButton
                customStyle={"w-full "}
                text={"Compare Plans"}
                clickfunction={() => navigate("/compare-plan")}
                cancel
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
