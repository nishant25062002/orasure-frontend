import React from "react";
import Logo from "../../assets/global/Logo.svg";
import Tooth from "../../assets/global/Tooth.svg";
import IdImageDown from "../../assets/user/IdImageDown.svg";
import IdImageUp from "../../assets/user/IdImageUp.svg";
import CurvedLines from "../../assets/user/CurvedLines.svg";
import CurvedLine from "../../assets/user/CurvedLine.svg";
import UserPhoto from "../../assets/user/UserPhoto.svg";

const IdCard = () => {
  return (
    <div className="h-[205px] w-full max-w-[350px] min-w-[329px] shadow-md bg-[#fff] p-[11px_36px] !relative">
      {/* images for background */}
      <img src={IdImageUp} className="top-0 left-0 z-[0] absolute" />
      <img src={IdImageDown} className="bottom-0 right-0 z-[0] absolute" />
      <img src={CurvedLines} className="bottom-0 left-0 z-[0] absolute" />
      <img src={Tooth} className="bottom-[10px] left-[10px] z-[1] absolute" />
      <img src={Tooth} className="top-[50px] right-[10px] z-[1] absolute" />
      <img src={CurvedLine} className="bottom-0 right-0 z-[0] absolute" />

      <div className="flex items-center mb-[20px] justify-between !z-[1]">
        <div className="flex">
          <img src={Logo} className="w-[104px] h-[23.57px] z-[1]" />
        </div>
        <div className="text-[#116EB6] text-[14px] font-[700]">
          ID - ORA123456
        </div>
      </div>
      <div className="flex items-center justify-between mb-[18px] z-[1]">
        <div className="flex">
          <img src={UserPhoto} className="w-[55px] h-[55px]" />
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">
            Primary Beneficiary
          </div>
          <div className="text-[#000] text-[14px] font-[700]">Dhruv Bhatia</div>
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">
            Primary Beneficiary
          </div>
          <div className="text-[#000] text-[14px] font-[700]">Dhruv Bhatia</div>
        </div>
      </div>
      <div className="flex mb-[12px] items-end gap-[9px] z-[1]">
        <div className="text-[#116EB6] text-[16px] font-[700] ">
          Enamel Health Plan
        </div>
        <div className="text-[#68A400] text-[12px] font-[700] ">Active</div>
      </div>
      <div className="flex justify-between items-center z-[1]">
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">Valid From</div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">Valid Upto</div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">
            Next Checkup
          </div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
