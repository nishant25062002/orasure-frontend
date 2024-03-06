import React, { useState } from "react";
import FormHeader from "../global/FormHeader";
import Header from "../global/Header";
import CustomInput from "../input/CustomInput";
import Dropdown from "../input/Dropdown";
import Gender from "../input/Gender";
import TextArea from "../input/TextArea";
import CustomButton from "../global/CustomButton";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../api/authentication";
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  name: string;
  maritalStatus: string;
  gender: string;
  mobileNumber: string;
  nationality: string;
  bloodGroup: string;
  email: string;
  dob: string;
  aadhar: string;
  pan: string;
  address: string;
};

const schema = yup
  .object({
    name: yup.string(),
    maritalStatus: yup.string(),
    gender: yup.string(),
    mobileNumber: yup.string(),
    nationality: yup.string(),
    bloodGroup: yup.string(),
    email: yup.string(),
    dob: yup.string(),
    aadhar: yup.string(),
    pan: yup.string(),
    address: yup.string(),
  })
  ;

const DetailForm = () => {
  const navigate = useNavigate();

  const handleUpdateUser = async (data: any) => {
    try {
      const res = await updateUser(data);
    } catch (err) {
      console.log(err)
    }
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) })


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data")
    console.log(data)
    // handleUpdateUser(data);
  };

  return (
    <div className="w-full">
      <Header />
      <FormHeader head="Patients Detail" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-[25px] pb-[30px]">
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <CustomInput
                onChange={onChange}
                placeholder="Your Name"
                fieldName="Full Name"
              />
            )}
          />
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange } }) => (
              <Gender onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="dob"
            render={({ field: { onChange } }) => (
              <CustomInput
                onChange={onChange}
                placeholder="DOB"
                fieldName="Date of Birth"
                type="date"
              />
            )}
          />
          <Controller
            control={control}
            name="maritalStatus"
            render={({ field: { onChange } }) => (
              <Dropdown
                fieldName={"Marital Status"}
                options={["Married", "Unmarried"]}
                selectedValue="maritalStatus"
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="bloodGroup"
            render={({ field: { onChange } }) => (
              <CustomInput
                onChange={onChange}
                placeholder="Blood Group"
                fieldName="Blood Group"
              />
            )}
          />
          <Controller
            control={control}
            name="nationality"
            render={({ field: { onChange } }) => (
              <Dropdown
                selectedValue={"nationality"}
                fieldName="Nationality"
                options={["India", "Out of India"]}
                onChange={onChange}
              />
            )}
          />
        </div>
        <FormHeader head="Contact Detail" />
        <div className="px-[25px] pb-[30px]">
          <Controller
            control={control}
            name="mobileNumber"
            render={({ field: { onChange } }) => (
              <CustomInput
                onChange={onChange}
                placeholder="+91 9999999999"
                fieldName="Phone Number"
                type="number"
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <CustomInput
                onChange={onChange}
                placeholder="example@gmail.com"
                fieldName="Email Id"
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange } }) => (
              <TextArea fieldName={"Address"} onChange={onChange} />
            )}
          />
        </div>
        <CustomButton
          text={"Submit"}
          clickfunction={() => handleSubmit(onSubmit)}
          customStyle={"p-[20px_38px]"}
        // clickfunction={() => navigate("/payment")}
        />
      </form>
    </div>
  );
};

export default DetailForm;
