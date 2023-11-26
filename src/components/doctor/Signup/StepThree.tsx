import React, { useState } from "react";
import FormHeader from "../Global/FormHeader";
import CustomInput from "../../input/CustomInput";
import Gender from "../../input/Gender";
import Dropdown from "../../input/Dropdown";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextArea from "../../input/TextArea";
import BackIcon from "../../../assets/global/BackIcon.svg";

const StepThree = ({ setPage }: { setPage: any }) => {
  const navigate = useNavigate();
  const [clinicName, setClinicName] = useState("");
  const [clinicNumber, setClinicNumber] = useState("");

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
      <FormHeader head="Clinic Detail" page={3} />
      <div className="px-[25px] pb-[30px] w-full">
        <CustomInput
          SetValue={setClinicName}
          placeholder="Orasure Dental Clinic"
          fieldName="Name of the Clinic"
        />
        <CustomInput
          type="number"
          SetValue={setClinicNumber}
          placeholder="+91"
          fieldName="Clinic Contact Number"
        />
        <CustomInput
          type="number"
          SetValue={setClinicNumber}
          placeholder="+91"
          fieldName="Clinic WhatsApp Number"
        />
        <CustomInput
          type="number"
          SetValue={setClinicNumber}
          placeholder="abc@gmail.com"
          fieldName="Clinic Email ID"
        />
        <CustomInput
          type="number"
          SetValue={setClinicNumber}
          placeholder="Consultation Fee"
          fieldName="Consultation Fee"
        />
        <CustomInput
          type="number"
          SetValue={setClinicNumber}
          placeholder="Treatment Offered 1"
          fieldName="Treatment Offered"
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

export default StepThree;
