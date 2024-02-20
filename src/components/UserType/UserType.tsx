import React, { useState  } from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material'
import img1 from '../../assets/user/Personimage.svg'
import img2 from '../../assets/user/CoupleImage.svg'
import img3 from '../../assets/user/Familyimage.svg'
import Cross from "../../assets/header/Cross.svg";


import clsx from "clsx";

type Props = {}

const UserType = (props: Props) => {

  const [index, setindex] = useState(0)
  const navigate = useNavigate();


  
  return (
    <div className='flex flex-col items-center  '>
      <div className='flex justify-between items-center m-4 p-6 w-full'>
        <div className='text-[16px] text-[#000] font-bold '>Choose User Type</div>
        <img
            src={ Cross}
            className="h-[16px] w-[16px]"
            onClick={() => {
              navigate("/")
            }}
           
          />
      </div>

      { index === 0 && (
        <img src={img1} alt='img'/>
      )
      }
      { index === 1 && (
        <img src={img2} alt='img'/>
      )
      }{ index === 2 && (
        <img src={img3} alt='img'/>
      )
      }
    
    {/* <div className='flex justify-evenly items-center w-full'>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>
        <button className='flex p-2 rounded-xl bg-blue-gray-500'>individual </button>      
    </div> */}
      <div className="mb-5 flex justify-evenly items-center w-full">
            <Button        
              onClick={() => setindex(0)}
              className={clsx(
                `!p-[10px_22px_10px_22px] !text-[#444444] !border !border-[#444444] `,
                index === 0 ? "!bg-[#116EB6] !text-white " : "!bg-transparent"
              )}
              variant={"contained"}
              style={{
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                borderRadius: "21px",
                width: "95px",
              }}
            >
              Single
            </Button>
            <Button
              onClick={() => setindex(1)}
              className={clsx(
                `!p-[10px_16px_10px_16px]  !text-[#444444] !border !border-[#444444] `,
                index === 1 ? "!bg-[#116EB6] !text-white " : "!bg-transparent"
              )}
              variant={"contained"}
              style={{
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                borderRadius: "21px",
                width: "95px",

              }}
            >
              Couple
            </Button>
            <Button
              onClick={() => setindex(2)}
              className={clsx(
                `!p-[10px_16px_10px_16px]  !text-[#444444] !border !border-[#444444]  `,
                index === 2 ? " !bg-[#116EB6] !text-white " : " !bg-transparent"
              )}
              variant={"contained"}
              style={{
                marginTop: "40px",
                gap: "10px",
                fontWeight: "500",
                fontSize: "12px",
                borderRadius: "21px",
                width: "95px",

              }}
            >
              Family
            </Button>
      </div>

    { index === 0 && ( 
    <div className='flex justify-around text-center text-[12px]
     font-light text-[#000] border-b-[1px] border-gray-300 mb-4 mt-2 pb-6 leading-1' >
       Tailored for individuals, our Single Person Plan offers comprehensive 
       coverage with affordable treatments. Enjoy the flexibility of a 
       plan designed specifically for your unique needs.
    </div>
    ) 
    }
    { index === 1 && ( 
    <div className='flex justify-around text-center text-[12px]
     font-light text-[#000] border-b-[1px] border-gray-300 mb-4 mt-2 p-6 leading-1' >
       Dual Plan, a specialized offering designed for two individuals. 
       Benefit from shared advantages, streamlined costs,
        and tailored protection for both.
    </div>

    ) 
    }{ index === 2 && ( 
      <div className='flex justify-around text-center text-[12px]
       font-light text-[#000] border-b-[1px] border-gray-300 mb-4 mt-2 p-6 leading-1' >
         A plan for families offers tailored coverage for all, 
         promoting well-being with preventive care, 
         extensive benefits, and peace of mind.
      </div>
  
      ) 
      }
    
    
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