
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const { id, name, specialization, averageRating, totalRating, photo, totalPatients, hospital } = doctor;

  return (
    <>
      <div className='container flex px-[4vw]  mt-[4vw]'>
        <Link to={`/doctors/${id}`}>
          <div className=' h-[34vw] w-[25vw] flex flex-col mt-[2vw] items-start justify-center '>
            <img src={photo} alt="" className='bg-[white] flex items-center justify-center h-[24vw] w-[17vw]'/>
            <h2 className='font-bold text-[1.2vw] mt-[1vw] flex items-start justify-start'>{name} </h2>
            <div className='w-[20vw] flex mt-[1vw] flex justify-between'>
                <div className=" flex  items-center justify-center bg-[white] w-[9vw] h-[2.5vw]">
                    <h2 className='font-bold text-[0.9vw] text-yellow-600 '>{specialization} </h2>
                </div>
              
                <div className='flex items-center justify-center w-[8vw] mr-[2vw] gap-[0.2vw] '>
                    <img src="./Media/icons8-star-24.png" alt="" className=" flex items-center justify-center h-fit "/>  
                    <h2 className='font-bold text-[0.9vw]  '>{averageRating} </h2>
                    <h2 className='text-[0.9vw]  '>({totalRating}) </h2>
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-[0.2vw] ml-[0.5vw] mt-[0.9vw] text-black items-start justify-center '>
                    <h2 className='font-bold text-[0.9vw]  '>+{totalPatients} patients </h2>
                    <h2 className='text-[0.8vw]  '>At {hospital} </h2>    
                </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DoctorCard;
