// import React, { useState } from "react";
// import Logo from "../../../assets/global/Logo.svg";
// import { Button } from "@mui/material";
// import CustomInput from "../../input/CustomInput";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-center w-full">
//       <div className="max-w-[420px] w-full px-[24px] flex flex-col items-center">
//         <img
//           src={Logo}
//           alt="logo"
//           className="w-[218px] h-[48px] mb-[50px] mt-[80px]"
//         />
//         <div className="flex">
//           <div className="text-[#9EC55B] text-[20px] font-[700] cursor-pointer">
//             Login /{" "}
//           </div>
//           <div
//             className="text-[rgba(68,68,68,0.70)] text-[20px] font-[400] pl-[4px] cursor-pointer"
//             onClick={() => navigate("/user-signup")}
//           >
//             Signup
//           </div>
//         </div>
//         <div className="w-full">
//           <CustomInput
//             SetValue={setNumber}
//             placeholder="Mobile Number"
//             fieldName="Enter Number"
//           />
//           <CustomInput
//             SetValue={setPassword}
//             placeholder="Your Password"
//             fieldName="Enter Password"
//           />
//         </div>
//         <div className="flex w-full gap-[45px] justify-center my-[24px]">
//           <Button className="w-full !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] ">
//             Login
//           </Button>
//         </div>
//         <div className="flex justify-between w-full">
//           <div className="text-[#222] text-[16px] font-[500] ">
//           </div>
//           <div
//             className="text-[#FFB45A] text-[16px] font-[400] cursor-pointer"
//             onClick={() => navigate("/doctor-signup")}
//           >
//             Register Here
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react'
// import { verifyOtp } from '../../api/authentication';
import { Button } from '@mui/material';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendOtp, verifyOtp, verifyPassword } from '../../api/authentication';
import CustomInput from '../input/CustomInput';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/global/Logo.svg';

type LoginData = {
  mobileNumber: string;
  password: string;
};

const schema = yup
  .object({
    mobileNumber: yup
      .string()
      .required("Mobile Number is required!")
      .max(10, "Mobile Number must be of 10 digit")
      .min(10, "Mobile Number must be of 10 digit"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password must be of 6 letters"),
  })
  .required();

const Login = ({ signup = false }: { signup?: boolean }) => {
  const [otp, setOtp] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [slide, setSlide] = useState(1);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const mobileNumber = watch("mobileNumber");
    const password = watch("password");
    if (signup) {

      if (slide === 1) {
        console.log("control", data);
        try {
          const res = await sendOtp({ mobileNumber });
          if (res.status) {
            console.log("done");
            setSlide(2);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await verifyOtp({ mobileNumber, otp, password });
          if (res?.token) {
            localStorage.setItem("orasure-user", res?.token);
            navigate('/create-account')
          }
        } catch (error) {
          console.log(error);
          setVerificationError('Invalid OTP. Please try again.');
        }
      }
    }
    else {
      try {
        const res = await verifyPassword({ mobileNumber, password });
        if (res?.token) {
          localStorage.setItem("orasure-user", res?.token);
          navigate('/profile');
        }
      } catch (error) {
        console.log(error);
        setVerificationError('Invalid OTP. Please try again.');
      }
    }
  };

  const handleSwitchToSignup = () => {
    navigate('/signup')
  }
  return (
    <>
      {slide === 1 && (
        <div className="w-full !h-[100vh] bg-[#F1F7FA] flex flex-col items-center">
          <img className='w-[212px] h-[48px] mb-[55px] mx-[74px] mt-[87px]' src={Logo} alt="" />
          <div className='mb-[48px] text-center text-[20px] leading-[117%] tracking-[-0.38px] '>
            {signup ? (
              <span className='text-[#444444] font-[400]'> Login /<span className='text-[#9EC55B] font-[700]'> Signup</span></span>
            ) : (
              <span className='text-[#9EC55B] font-[700]'>Login <span className='text-[#444444] font-[400]'>/ Signup</span></span>
            )}
          </div>
          <div className="px-[25px] pb-[30px] w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="mobileNumber"
                render={({ field: { onChange } }) => (
                  <CustomInput
                    placeholder="9xxxx xxxxx"
                    fieldName="Enter Number"
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                  <CustomInput
                    placeholder="Enter your Password"
                    fieldName=""
                    onChange={onChange}
                  />
                )}
              />
            </form>
          </div>
          {verificationError && <p style={{ color: 'red' }}>{verificationError}</p>}
          <div className="flex justify-center px-[24px] w-full">
            {signup ?
              (<Button
                type='submit'
                className="w-full h-[40px] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#9EC55B] gap-y-[45px]"
                onClick={handleSubmit(onSubmit)}
              > Sign up
              </Button>)
              :
              (<Button
                type='submit'
                className="w-full h-[40px] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#9EC55B] gap-y-[45px]"
                onClick={handleSubmit(onSubmit)}
              > Login
              </Button>)
            }
          </div>
          {!signup &&
            (<div className='flex text-center justify-between leading-none mt-[40px] px-[28px] tracking-[-0.304px] leading-[250%] text-[16px] w-full'>
              <div className='font-[500]' > </div>
              <div className="font-[400] text-[#FFB45A]" onClick={handleSwitchToSignup} >Register Here</div>
            </div >)
          }
        </div>
      )}
      {
        slide === 2 && (
          <div className="w-full bg-[#F1F7FA] flex flex-col w-full">
            <img className='w-[212px] h-[48px] mb-[55px] mx-[74px] mt-[87px]' src={Logo} alt="" />
            <div className='flex flex-col gap-y-[40px]'>
              <div className='text-center'>OTP has sent to {watch("mobileNumber")}</div>
              <div className="flex justify-center  mx-[24px]">
                <OTPInput
                  value={otp}
                  onChange={handleOtpChange}
                  numInputs={4}
                  inputStyle={{
                    flexShrink: "0",
                    width: '63px',
                    height: '63px',
                    margin: '0 20px',
                    color: '#000',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '117%',
                    letterSpacing: '-0.456px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    border: '1px solid rgba(68, 68, 68, 0.60)',
                    background: '#FFF',
                    outline: 'none',
                    // ':focus': {
                    //     border: 'border: 1px solid var(--BLUE, #116EB6)',
                    // }
                  }}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </div>
            <div className='text-center leading-none mt-[40px] mb-[40px]'>
              <div >Haven’t received the Verification Code?</div>
              <div className="text-[#9EC55B]">Resend</div>
            </div >

            {verificationError && <p style={{ color: 'red' }}>{verificationError}</p>}
            <div className="flex justify-center  mx-[38px]">
              <Button
                type='submit'
                className="w-full h-[40px] !border-[0.5px] !border-[rgba(68,68,68,0.57)] !rounded-[4px] !text-[#FFF] text-[16px] font-[500] !bg-[#9EC55B] gap-y-[45px]"
                onClick={handleSubmit(onSubmit)}
                disabled={otp.length != 4}
              > Verify
              </Button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Login