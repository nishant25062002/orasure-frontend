import React from 'react'
import location from '../../assets/global/LocationIcon.svg'

type Props = {
    doctorPhoto: string,
    ClinicName: string,
    DoctorName: string,
    location: string,
}

const ClinicList = (props: Props) => {
  return (
    <div className='flex flex-col bg-[#FFF] w-[85%] border-b border-solid border-[#D9D9D9] '>
        <div className='flex justify-between items-center p-4'>
            <img  src={props.doctorPhoto} alt='img'
            className=' h-[45px] w-[45px] rounded-full'
            />
            <div className='flex flex-col justify-between items-start border-r-[0.5px] pr-6 ml-4 '>
               <p className='text-[14px] text-[#222] font-bold  '> {props.ClinicName}</p>
               <p className='text-[12px] text-[#116EB6] font-semibold'>{props.DoctorName}</p>
            </div>
            <div className='flex items-center '>
                <img src={location} alt='img'
                 className='h-[12px] w-[8px] mr-2 ml-2 '/>
                <p className='text-[12px] text-[#444] font-semibold'>{props.location}</p>
            </div>

        </div>
    </div>
  )
}

export default ClinicList