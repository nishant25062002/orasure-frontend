import React, { useState } from "react";
import FormHeader from "../Global/FormHeader";
import CustomInput from "../../input/CustomInput";
import Gender from "../../input/Gender";
import Dropdown from "../../input/Dropdown";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextArea from "../../input/TextArea";

const StepOne = ({ setPage }: { setPage: any }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [course, setCourse] = useState("");
  const [experience, setExperience] = useState("");

  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [address, setAddress] = useState("");

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
      <FormHeader head="Patients Detail" page={1} />
      <div className="px-[25px] pb-[30px] w-full">
        <CustomInput
          SetValue={setName}
          placeholder="Your Name"
          fieldName="Full Name"
        />
        <Gender SetValue={setGender} />
        <CustomInput
          SetValue={setNumber}
          placeholder="Mobile Number"
          fieldName="Mobile Number"
        />
        <TextArea fieldName={"About Section"} setValue={setAbout} />
        <Dropdown
          selectedValue={degree}
          fieldName="Degree"
          options={["MBBS", "BAMS"]}
          setSelectedValue={setDegree}
        />
        <Dropdown
          selectedValue={specialization}
          fieldName="Specialization"
          options={["MBBS", "BAMS"]}
          setSelectedValue={setSpecialization}
        />
        <Dropdown
          selectedValue={course}
          fieldName="Course"
          options={["MBBS", "BAMS", "Not done any"]}
          setSelectedValue={setCourse}
        />
        {/* <CustomInput
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
        /> */}
        <Dropdown
          selectedValue={experience}
          fieldName="Total Work Experience"
          options={[
            "1yrs",
            "2yrs",
            "3yrs",
            "4yrs",
            "5yrs",
            "6yrs",
            "7yrs",
            "8yrs",
            "9yrs",
            "10yrs",
            "11yrs",
          ]}
          setSelectedValue={setExperience}
        />
        <div className="flex w-full gap-[45px] justify-center my-[40px]">
          <Button
            className="w-full !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#116EB6]"
            onClick={() => setPage(2)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
