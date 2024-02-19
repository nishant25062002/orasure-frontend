import React from 'react'
import { Button } from '@mui/material'
import img from '../../assets/user/Group 48465.svg'

type Props = {}

const UserType = (props: Props) => {
  return (
    <div className='flex flex-col p-4 items-center  '>
    <img src={img} alt='img'/>
    {/* <div className='flex justify-evenly items-center w-full'>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>      
    </div> */}
    <div className='flex justify-around text-center text-[12px]
     font-light text-[#000] border-b-[1px] border-gray-300 mb-4 mt-2 pb-6 leading-1' >
       Tailored for individuals, our Single Person Plan offers comprehensive 
       coverage with affordable treatments. Enjoy the flexibility of a 
       plan designed specifically for your unique needs.
    </div>
    
     <Button 
      style={{
        width: "228px",
        height: "40px",
        color: "#000000",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "8px",
        border: "1px solid #000",
      }}
    >
      button
    </Button>

   
</div>
  )
}

export default UserType