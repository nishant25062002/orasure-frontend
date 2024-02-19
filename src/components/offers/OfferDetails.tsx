import React from "react";
import Header from "../global/Header";
import OfferImage from "../../assets/offer/OfferImage.svg";
import Implantimage from "../../assets/offer/Impalntimage.svg"
import FixedBottom from "./FixedBottom";
import { Button } from '@mui/material'


const OfferDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      
        <Header />
        <img src={Implantimage} alt="img"/>
        {/* <FixedBottom /> */}
          <div className="flex flex-col items-center justify-center border-b-[0.5px] border-[#D9D9D9] w-[85%] p-6">
            <div className="text-[32px] text-[#000] font-bold ">Implant Session</div>
            <div className="text-[24px] text-[#116EB6] font-bold m-1">₹17000/-</div>
            <div className="text-[12px] text-[#000] font-medium ">Valid till - 12 Dec 2023</div>
          </div>

          <div className="flex flex-col p-4 border-b-[0.5px] border-[#D9D9D9] ">
            <div className="text-[14px] text-[#000] font-bold  mb-3">Description: </div>
            <ul className="flex flex-col list-disc list-outside text-[14px] text-[#444] p-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            </ul>
          </div>

          <div className="flex flex-col p-4 border-b-[0.5px] border-[#D9D9D9] ">
            <div className="text-[14px] text-[#000] font-bold  mb-3">Terms & Conditions: </div>
            <ul className="flex flex-col list-disc list-outside text-[14px] text-[#444] p-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            </ul>
          </div>
          

          {/* <div className="rounded-[16px] bg-[#fff] p-[20px] relative shadow-sm">
            <div className="text-[20px] leading-[20px] font-[600]">
              RCT price has gone down
            </div>
            <div className="text-[12px] font-[500] w-[60%] pt-[9px]">
              Now get the RCT done in the most affordable price.{" "}
            </div>
            <div className="text-[24px] font-[700] py-[10px]">₹2000/</div>
            <div className="text-[14px] font-[700] ">Claim now </div>
            <div className="text-[7px] font-[400] pt-[6px]">
              *For first ever recharge on Vi, T&C apply
            </div> */}
            {/* <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Description -
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul>
             */}
            {/* <div className="text-[#222] text-[12px] font-[700] mt-[16px]">
              Associate Clinics
            </div>
            <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
              <li className="text-[#444] text-[12px] font-[400]">
                Lorem ipsum dolor
              </li>
            </ul> */}
            {/*  */}
           

            {/* <img src={OfferImage} className="absolute top-[50px] right-0" /> */}
            
        
        
        
         <div className="mt-4 mb-4 ">
         <Button 
          style={{
          width: "300px",
          height: "40px",
          color: "#000000",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "8px",
          border: "1px solid #000",
         }}
         >
          Claim Now
         </Button>
         </div>
    
    </div>
  );
};

export default OfferDetails;
