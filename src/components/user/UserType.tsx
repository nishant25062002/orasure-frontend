import React from 'react'
import { Button } from '@mui/material'
import img from '../../assets/user/Group 48465.svg'

type Props = {}

const UserType = (props: Props) => {
  return (
    <div className='flex flex-col p-4  '>
    <img src={img} alt='img'/>
    <div className='flex p-4 w-full'>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>      
    </div>
    <div className='flex justify-around items-center text-center'>
       Tailored for individuals, our Single Person Plan offers comprehensive 
       coverage with affordable treatments. Enjoy the flexibility of a 
       plan designed specifically for your unique needs.
    </div>
    <Button
      style={{
        width: "228px",
        height: "40px",
        color: "#000",
        fontSize: "16px",
        fontWeight: 400,
        borderRadius: "8px",
        border: "1px solid rgba(22,48,86,0.71)",
      }}
    >
      View Plans
    </Button>
</div>
  )
}

export default UserType