import React, { useState } from "react";
import FormHeader from "../Global/FormHeader";
import CustomInput from "../../input/CustomInput";
import Gender from "../../input/Gender";
import Dropdown from "../../input/Dropdown";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextArea from "../../input/TextArea";
import BackIcon from "../../../assets/global/BackIcon.svg";

const StepTwo = ({ setPage }: { setPage: any }) => {
  const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [medicalDegree, setMedicalDegree] = useState("");
  const [registrationCertificate, setRegistrationCertificate] = useState("");

  return (
    <div className="w-full">
      {" "}
      <div className="w-full pl-[31px] my-[32px]">
        <div className="text-[#000] font-[700] text-[24px] ">
          Hello Doctor!!
        </div>
        <div className="text-[#000] font-[400] text-16px] ">
          Lets Build your dedicated profile.
        </div>
      </div>
      <FormHeader head="Medical Registration " page={2} />
      <div className="px-[25px] pb-[30px] w-full">
        <CustomInput
          SetValue={setRegistrationNumber}
          placeholder="Registration Number"
          fieldName="Enter Registration Number"
        />

        <CustomInput
          type="file"
          SetValue={setMedicalDegree}
          placeholder="Medical Degree"
          fieldName="Medical Degree"
        />

        <CustomInput
          type="file"
          SetValue={setRegistrationCertificate}
          placeholder="Registration Certificate"
          fieldName="Registration Certificate"
        />
        <CustomInput
          type="file"
          SetValue={setRegistrationCertificate}
          placeholder="Proof"
          fieldName="Proof of Certificate Course"
        />

        <div className="flex w-full gap-[45px] justify-center my-[40px]">
          <Button
            className="w-[50%] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#444] text-[16px] font-[500] !bg-[#fff] gap-[12px] "
            onClick={() => setPage(1)}
            style={{ border: "0.5px solid rgba(68,68,68,0.57" }}
          >
            <img src={BackIcon} alt="back" />
            Back
          </Button>
          <Button
            className="w-[50%] !border-[0.5px] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#116EB6] "
            onClick={() => setPage(3)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
