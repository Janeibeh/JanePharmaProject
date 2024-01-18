import React from 'react'
import { Link} from 'react-router-dom'

const Services = () => {
  const services = [
    {
      image: " ./Media/stethoscope.jpg",
      name: "Medical Practitioner"
    },
    {
      image: " ./Media/pills.jpg",
      name: "Pharmacologist"
    },
    {
      image: " ./Media/lab tubes.jpg",
      name: "Lab Scientist"
    },
    {
      image: " ./Media/geriatric-padeatrics.jpg",
      name: "Geriatric and Padeatrics"
    },
    {
      image: "./Media/dermatologist.jpg",
      name: "Dermatologist"
    },
    {
      image: " ./Media/diet.jpg",
      name: "Dietician"
    },
    {
      image: " ./Media/heart.jpg",
      name: "Cardiologist"
    },
    {
      image: "./Media/eye.jpg",
      name: "Eye care"
    },
   
    {
      image: " ./Media/tooth.jpg",
      name: "Dentist"
    },
    {
      image: " ./Media/urinology.jpg",
      name: "Urology"
    },
  ]

  return (
    <>
      <div className="w-screen h-auto rounded-lg ">
      <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div> 
        <div className=" font-bold  h-[1.5rem] mt-10 text-[1rem]  ml-16 px-4 w-[35rem] "> Select a Medical Service </div>
        <p className=" text-[0.9rem] h-[2.5rem]  ml-16 px-4 " > Make your choice and you will recieve a list of specialised doctors in the selected department.</p>
        
      
      <div className="flex flex-wrap justify-center gap-[2rem] w-full "   >
      {services.map((params, index) => {
    return   <Link  key={index} className=" w-[16%]" to= "/doctors" > 
                <div className="flex flex-col items-center justify-center bg-black gap-[1rem] w-full h-[11rem] border rounded-lg ">
                    <div  className=" flex items-center justify-center"><img  src={params.image} alt="" /></div>
                      <p className="  text-[white]  text-[0.7rem]  "> {params.name}</p>
                </div>
              </Link>
    })}

  </div>
  </div>
  <div className='h-[4vw]'></div>
  <div class="h-14 bg-gradient-to-r from-teal-50 to-red-50 "></div>
 

      
    </>
  
  )
}

export default Services