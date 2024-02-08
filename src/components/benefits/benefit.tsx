import React from 'react'

type Props = {
    title: string;
    desc:  string;
    img: any;
}


const Benefit = (props: Props) => {
  return (
    <>
    <div className='flex flex-col p-4 justify-center items-center
     rounded-md border-[.85px] border-[#116EB6] min-w-[300px] m-4' >
     <div className=' text-[fato] text-[20px] font-[700] text-[#116EB6] m-2'>{props.title}</div>
     <div className='text[14px] font-[300] leading-[19px] text-[#262626] text-center m-2 '>{props.desc}  
     </div>
     <div>
        <img src={props.img} alt='img'/>
     </div>
    </div>
    </>
    
  )
}

export default Benefit