import React, { useState } from "react";
import BackIcon from "../../../assets/global/BackIcon.svg";
import FormHeader from "../Global/FormHeader";
import { Button } from "@mui/material";
import CustomInput from "../../input/CustomInput";
import Dropdown from "../../input/Dropdown";

const StepSix = ({ setPage }: { setPage: any }) => {
  const [name, setName] = useState();

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
      <FormHeader head="Bank Details " page={6} />
      <div className="px-[25px] pb-[30px] w-full">
        <CustomInput
          SetValue={setName}
          placeholder="Nishant Mainwal"
          fieldName="Account holder Name"
        />
        <CustomInput
          SetValue={setName}
          placeholder="xxxx xxxx xxxx"
          fieldName="Account Number"
        />
        <CustomInput
          SetValue={setName}
          placeholder="ABCD12341"
          fieldName="IFSC Code"
        />
        <Dropdown
          selectedValue={name}
          fieldName="Saving or Current"
          options={["Saving", "Current"]}
          setSelectedValue={setName}
        />
        <CustomInput SetValue={setName} placeholder="" fieldName="GST Number" />
        <div className="flex w-full gap-[45px] justify-center my-[40px]">
          <Button
            className="w-[50%] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#444] text-[16px] font-[500] !bg-[#fff] gap-[12px] "
            onClick={() => setPage(5)}
            style={{ border: "0.5px solid rgba(68,68,68,0.57" }}
          >
            <img src={BackIcon} alt="back" />
            Back
          </Button>
          <Button
            className="w-[50%] !border-[0.5px] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#116EB6] "
            onClick={() => setPage(6)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
