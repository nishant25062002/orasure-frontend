import React from "react";
import Logo from "../../assets/global/Logo.svg";
import UserPhoto from "../../assets/user/UserPhoto.png";

const IdCard = () => {
  return (
    <div className="h-[205px] w-full max-w-[350px] sm:min-w-[329px] shadow-md bg-[#fff] p-[11px_20px] sm:p-[11px_36px]">
      <div className="flex items-center mb-[20px] justify-between">
        <div className="flex">
          <img src={Logo} className="w-[104px] h-[23.57px]" />
        </div>
        <div className="text-[#116EB6] text-[14px] font-[700]">
          ID - ORA123456
        </div>
      </div>
      <div className="flex items-center justify-between mb-[18px]">
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
      <div className="flex mb-[12px] items-end gap-[9px]">
        <div className="text-[#116EB6] text-[16px] font-[700] ">
          Enamel Health Plan
        </div>
        <div className="text-[#68A400] text-[12px] font-[700] ">Active</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">Valid From</div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">Valid From</div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
        <div className="">
          {/* ID - ORA123456 */}
          <div className="text-[#116EB6] text-[8px] font-[400]">Valid From</div>
          <div className="text-[#000] text-[12px] font-[700]">12/08/23</div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
