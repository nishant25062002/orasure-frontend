import React, { useState } from "react";
import Logo from "../../../assets/global/Logo.svg";
import { Button } from "@mui/material";
import CustomInput from "../../input/CustomInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full px-[24px] flex flex-col items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[218px] h-[48px] mb-[50px] mt-[80px]"
        />
        <div className="flex">
          <div className="text-[#116EB6] text-[20px] font-[700] cursor-pointer">
            Login /{" "}
          </div>
          <div
            className="text-[rgba(68,68,68,0.70)] text-[20px] font-[400] pl-[4px] cursor-pointer"
            onClick={() => navigate("/user-signup")}
          >
            Signup
          </div>
        </div>
        <div className="w-full">
          <CustomInput
            SetValue={setNumber}
            placeholder="Mobile Number"
            fieldName="Enter Number"
          />
          <CustomInput
            SetValue={setPassword}
            placeholder="Your Password"
            fieldName="Enter Password"
          />
        </div>
        <div className="flex w-full gap-[45px] justify-center my-[24px]">
          <Button className="w-full !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#116EB6]">
            Continue
          </Button>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-[#222] text-[16px] font-[500] ">
            Are you a Doctor ?{" "}
          </div>
          <div
            className="text-[#FFB45A] text-[16px] font-[400] cursor-pointer"
            onClick={() => navigate("/doctor-signup")}
          >
            Register Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
