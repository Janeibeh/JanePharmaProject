import React from 'react'

// import {doctors} from "./../../data/doctors"
import DoctorCard from './DoctorCard';

const DoctorList = ({doctors, filter}) => {


  console.log('Filter', filter, doctors);
  const trimmedFilter = filter?.trim().toLowerCase() || "";
  const result = !filter ? doctors : doctors.filter(doctor => doctor.name.toLowerCase().includes(trimmedFilter))
  console.log('Result', result)
  // const result = /*filter && filter.length >= 3 ? 
      // doctors.find(doctor => doctor.name.toLowerCase() === trimmedFilter) :*/doctors;

  return (
    <>
        <div className=" container w-[90vw] flex items-center justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[4vw]  mt-[2vw]">
            {result && result.map(doctor=> (
              
                <DoctorCard key={doctor.id} doctor={doctor}/>
            ))}

        </div>
    </>
  )
}

export default DoctorList


