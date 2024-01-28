import React, { useState } from "react";
import FormHeader from "../global/FormHeader";
import Header from "../global/Header";
import CustomInput from "../input/CustomInput";
import Dropdown from "../input/Dropdown";
import Gender from "../input/Gender";
import TextArea from "../input/TextArea";
import CustomButton from "../global/CustomButton";
import { useNavigate } from "react-router-dom";

const DetailForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="w-full">
      <Header />
      <FormHeader head="Patients Detail" />
      <div className="px-[25px] pb-[30px]">
        <CustomInput
          SetValue={setName}
          placeholder="Your Name"
          fieldName="Full Name"
        />
        <Gender SetValue={setGender} />
        <CustomInput
          SetValue={setName}
          placeholder="DOB"
          fieldName="Date of Birth"
          type="date"
        />
        <Dropdown
          fieldName={"Marital Status"}
          options={["Married", "Unmarried"]}
          selectedValue={maritalStatus}
          setSelectedValue={setMaritalStatus}
        />
        <CustomInput
          SetValue={setName}
          placeholder="Blood Group"
          fieldName="Blood Group"
        />
        <Dropdown
          selectedValue={nationality}
          fieldName="Nationality"
          options={["India", "Out of India"]}
          setSelectedValue={setNationality}
        />
        {/*  */}
      </div>
      <FormHeader head="Contact Detail" />
      <div className="px-[25px] pb-[30px]">
        <CustomInput
          SetValue={setName}
          placeholder="+91 9999999999"
          fieldName="Phone Number"
          type="number"
        />
        <CustomInput
          SetValue={setName}
          placeholder="example@gmail.com"
          fieldName="Email Id"
        />
        <TextArea fieldName={"Address"} setValue={setAddress} />
      </div>
      <CustomButton
        text={"Submit"}
        customStyle={"p-[20px_38px]"}
        clickfunction={() => navigate("/payment")}
      />
    </div>
  );
};

export default DetailForm;
