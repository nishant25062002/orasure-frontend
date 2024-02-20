import React from 'react'
import barcode from "../../assets/global/BarcodeIcon.svg"
import menu from "../../assets/global/menuIcon.svg"
import search from "../../assets/global/SearchIcon.svg"
import back from "../../assets/global/BackIcon.svg"

type Props = {}

const ClinicHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-6 w-full border-b border-solid border-[#D9D9D9]
                     shadow-[0_1px_8px_0_rgba(0,0,0,0.12)] mb-4 ">
      <div className='flex items-center text-[20px] text-[#000] font-bold mt-2'>
      <img
         src={back}
         className="w-[20px] h-[20px] mr-4" />
        Choose Clinic 
      </div>
      <div className='flex justify-around items-center min-w-[100px] mt-2'>
        <img
         src={search}
         className="w-[16px] h-[16px] " />
        <img
         src={menu}
         className="w-[16px] h-[16px] " />
        <img
         src={barcode}
         className="w-[16px] h-[16px] " />   
      </div>
        
    </div>
  )
}

export default ClinicHeader