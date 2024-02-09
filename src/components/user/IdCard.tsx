import React from "react";
import UserPhoto from "../../assets/user/UserPhoto.png";
import IdBackground from "../../assets/user/IdBackground.svg";
import IdStripe from "../../assets/user/IdStripe.svg";

const IdCard = () => {
  return (
    <div
      className="h-[206px] w-full max-w-[350px] min-w-[329px] !relative bg-cover rounded-[12px]"
      style={{ backgroundImage: `url(${IdBackground})` }}
    >
      <div className="flex items-center justify-between pt-[17px] pb-[11px] px-[28px]">
        <div className="flex">
          <img src={UserPhoto} className="w-[79px] h-[89px] " />
        </div>
        <div className="flex flex-col gap-y-[4px]">
          <div>
            {" "}
            <div className="text-[#fff] text-[8px] font-[400]">
              Primary Beneficiary
            </div>
            <div
              className="text-[#fff] text-[12px] font-[500] uppercase"
              style={{ textShadow: "-0.2px 0.2px 0px #116EB6" }}
            >
              Dhruv Bhatia
            </div>
          </div>
          <div>
            <div className="text-[#fff] text-[8px] font-[400]">
              Secondary Beneficiary
            </div>
            <div
              className="text-[#fff] text-[12px] font-[500] uppercase"
              style={{ textShadow: "-0.2px 0.2px 0px #116EB6" }}
            >
              Nishant M.
            </div>
          </div>
          <div className="w-[171px] h-[25px] text-[#0A4470] text-[14px] font-[700] bg-[#fff] flex items-center justify-center">
            ID - OHC 1234 5607
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-[28px] pb-[14px]">
        <div className="">
          <div className="text-[#fff] text-[6px] font-[400]">Valid From</div>
          <div className="text-[#fff] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          <div className="text-[#fff] text-[6px] font-[400]">Valid Upto</div>
          <div className="text-[#fff] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          <div className="text-[#fff] text-[6px] font-[400]">Next Checkup</div>
          <div className="text-[#fff] text-[12px] font-[700]">12/08/23</div>
        </div>
      </div>
      <div className="flex relative w-full">
        <img src={IdStripe} className="w-full" />
        <div className="right-[20px] absolute text-[#0D2B48] text-[12px] font-[500] leading-[21px]">
          Enamel Health Plan
        </div>
      </div>
      <div className="text-[#68A400] text-[12px] font-[700] flex justify-end pr-[10px]">
        Active
      </div>
    </div>
  );
};

export default IdCard;
