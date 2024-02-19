import React, { FC } from "react";
import CheckIcon from "../../assets/global/Check.svg";
import { useNavigate } from "react-router-dom";
type PlanDetailServiceProps = {
  Services: string;
  Treatments: string;
  MarketCost?: string;
  heading?: string;
  isActive?: Boolean;
  data: any;
};

const PlanDetailService: FC<PlanDetailServiceProps> = ({
  Services,
  Treatments,
  MarketCost,
  heading,
  isActive,
  data,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col items-center justify-center mb-[20px]`}>
      <div className="max-w-[350px] w-[98%] rounded-[16px]   py-[24px]">
        {isActive && (
          <div className="bg-[#116EB6] p-[10px]  text-[#FFFFFF] text-[14px] font-['Lato']">
            {heading}
          </div>
        )}

        <div className="">
          <div className="mt-[38px]">
            <div className="flex items-center mb-[22px]">
              {/* heading */}
              <div className="text-[#116EB6] text-[14px] font-[700] leading-[14px] w-[45%]">
                {Services}
              </div>
              <div className="text-[#116EB6] text-[14px] font-[700] leading-[14px] w-[35%] text-center">
                {Treatments}
              </div>
              <div className="text-[#116EB6] text-[14px] font-[700] leading-[14px] w-[20%] text-center">
                {MarketCost}
              </div>
              {/* <div className="text-[#116EB6] text-[14px] font-[700] leading-[14px] w-[20%] text-center">
                {MarketCost}
              </div> */}
            </div>
            {/* body */}
            {data.map((item: any, index: number) => (
              <div className="flex mb-[16px] " key={index}>
                <div className="text-[#555] text-[14px] font-[600] leading-[14px] w-[45%]  gap-[4px] border-b  border-[#888888] p-[9px_0px_9px_0px] flex items-center  ">
                  <img
                    src={CheckIcon}
                    alt="check"
                    className="h-[12.5px] w-[12.5px]"
                  />
                  {item.service}
                </div>
                <div className="text-[#000] text-[14px] font-[600] leading-[14px]  flex items-center  w-[35%] text-center border-b  border-[#888888]">
                  {item.treatment}
                </div>
                <div className="text-[#000] text-[16px] font-[600] leading-[14px] w-[20%]  text-center flex items-center   border-b border-[#888888]">
                  {item.cost !== "-" && "₹"}
                  {item.cost}
                </div>
      
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailService;
