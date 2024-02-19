import React from 'react'
import ClinicHeader from './ClinicHeader'

type Props = {}

const ChooseClinic = (props: Props) => {
  return (
   <>
    <ClinicHeader/>
    <div className="flex flex-col items-center justify-center border-b-[0.5px] border-[#D9D9D9] w-[85%] p-6">
        <div className="text-[32px] text-[#000] font-bold ">Implant Session</div>
        <div className="text-[24px] text-[#116EB6] font-bold m-1">₹17000/-</div>
        <div className="text-[12px] text-[#000] font-medium ">Valid till - 12 Dec 2023</div>
    </div>
    </>
  )
}

export default ChooseClinic