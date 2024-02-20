import React from 'react'
import ClinicHeader from './ClinicHeader'
import ClinicList from './ClinicList'
import photo from '../../assets/global/Photo.svg'


type Props = {}

const ChooseClinic = (props: Props) => {

  return (
   <>
    <ClinicHeader/>
   
    <ClinicList
      doctorPhoto={photo}
      ClinicName="Smily Clinic"
      DoctorName={"Dr Sunil"}
      location={"Anand Vihar Delhi"}
    
    />
    <ClinicList
      doctorPhoto={photo}
      ClinicName="Smily Clinic"
      DoctorName={"Dr Sunil"}
      location={"Anand Vihar Delhi"}
    
    />
    <ClinicList
    doctorPhoto={photo}
    ClinicName="Smily Clinic"
    DoctorName={"Dr Sunil"}
    location={"Anand Vihar Delhi"}
  
    />
 
    </>
  )
}

export default ChooseClinic