import React from 'react'
import Benefit from './benefit'
import img1 from "../../assets/benefits/img1.svg";



const benefitcard = [
     {
        title:"Universal Acceptance",
        decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iste ab itaque laudantium tempore provident delectus harum quasi deleniti natus ad.",
        img: img1

     },
     {
        title:"Universal Acceptance",
        decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iste ab itaque laudantium tempore provident delectus harum quasi deleniti natus ad.",
        img: img1

     },
     {
        title:"Universal Acceptance",
        decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iste ab itaque laudantium tempore provident delectus harum quasi deleniti natus ad.",
        img: img1

     },
     {
        title:"Universal Acceptance",
        decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iste ab itaque laudantium tempore provident delectus harum quasi deleniti natus ad.",
        img: img1

     }


]

const Benefits = (props: any) => {
  return (
    <>

    { benefitcard.map( (ourbenifit , index) => {
       return (
        <Benefit key ={index} title={ourbenifit.title} desc={ourbenifit.decs} img={ourbenifit.img} />
       )
    }
    ) 
    }
    {/* <Benefit title="Universal Acceptance"
     desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Iste ab itaque laudantium tempore provident delectus
       harum quasi deleniti natus ad. " 
       img={img1}/> */}
    </>
  )
}

export default Benefits