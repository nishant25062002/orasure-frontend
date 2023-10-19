import React from "react";
import Header from "../global/Header";
import Doctor from "../../assets/doctor/DoctorImg.svg";
import UserPhoto from "../../assets/user/UserPhoto.png";
import FormHeader from "../global/FormHeader";
import FormField from "../global/FormField";
import FormDocumentField from "../global/FormDocumentField";

const Profile = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)]">
        <Header />
        <div className="mx-[16px]">
          <div className="text-[#000] text-[20px] font-[700] mb-[19px]">
            Profile
          </div>
          <div className="mb-[4px]">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center relative">
                <img
                  src={Doctor}
                  className="rounded-full h-[122px] w-[122px] z-[10] border-[2px] border-[#9EC55B]"
                />
                <img
                  src={UserPhoto}
                  className="rounded-full h-[80px] w-[80px] ml-[-20px] absolute  left-[98%]"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-[700] leading-[22px] text-[16px] text-[#000] mt-[11px] text-center">
                  Rajeev Kumar
                </div>
                <div className="font-[400] leading-[10px] text-[10px] text-[#888] py-[6px] text-center">
                  Primary Beneficiary
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <FormHeader head="Patients Detail" />
          <div className="p-[18px_44px]">
            <div className="flex justify-between">
              <FormField fieldLabel={"Gender"} fieldValue={"Male"} />
              <FormField
                fieldLabel={"Date of Birth"}
                fieldValue={"2020-11-08"}
              />
            </div>
            <div className="flex justify-between mt-[15px]">
              <FormField fieldLabel={"Marital Status"} fieldValue={"Married"} />
              <FormField fieldLabel={"Blood Group"} fieldValue={"B+"} />
            </div>
            <div className="flex justify-between mt-[15px]">
              <FormField fieldLabel={"Nationality"} fieldValue={"India"} />
            </div>
          </div>
          {/* section-1 */}
          <FormHeader head="Contact Detail" />
          <div className="p-[18px_44px]">
            <div className="flex justify-between">
              <FormField
                fieldLabel={"Phone Number"}
                fieldValue={"+91 6396894543"}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <FormField
                fieldLabel={"Email Id"}
                fieldValue={"mainwalnishant9@gmail.com"}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <FormField
                fieldLabel={"Address"}
                fieldValue={"G-49, Anand Vihar, Delhi , 288173"}
              />
            </div>
          </div>
          {/* section-2 */}
          <FormHeader head="Documents Verification" />
          <div className="p-[18px_44px]">
            <div className="flex justify-between">
              <FormDocumentField
                fieldLabel={"Aadhar Card"}
                fieldValue={"Aadhar.pdf"}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <FormDocumentField
                fieldLabel={"Medical History/Condition"}
                fieldValue={"Medical Contition.pdf"}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <FormField
                fieldLabel={"Pan Card Number"}
                fieldValue={"ABCTY1234D"}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <FormDocumentField
                fieldLabel={"Cancelled Cheque"}
                fieldValue={"Cancelled Cheques.pdf"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
