
import React, { useState } from 'react'
import WorkHours from './WorkHours'
import Testimonials from './Testimonials'
import Faq from './Faq'

const Firsthome = () => {
  
  const [homies,setHomies] = useState([
    {
    image:"./Media/mandoc.jpg",
    description: "Find a Doctor",
    quote: " Discover a top-tier healthcare professional from our exceptional medical team  when all fails"
},
{
image:"./Media/female-pharmacist.jpg",
description: "Drugs Prescription and Purchase",
quote: "Obtain drug prescriptions for your health needs, and purchase from our virtual pharmacy"
},
{
image:"./Media/calendar.jpg",
description: "Book an Appointment",
quote: " Schedule a virtual health consultation for personalized care from the comfort of your space."
}])

    return (
      <>
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div>
        <div className="">
          <div className=" w-full  h-[1vw] ">
              <p className="  flex  align-center justify-center text-[1.3vw]  font-bold">Our team helps you get your life back on track</p>

          </div>
          <br></br>
          <div className=" mx-auto w-[60vw]  h-[7vw]">
              <div className=" flex  align-center justify-center text-[grey] text-[1vw] "> World-class care for everyone. Our team of highly trained proffessionals uses the latest measures to restore </div>
              <div className=" flex  align-center justify-center text-[grey] text-[1vw] ">  health quickly and easily. We thoroughly evaluate and treat all contributing root factors  </div>
              <div className=" flex  align-center justify-center text-[grey] text-[1vw] ">  related to your medical issue with our unmatched expert system. </div>
          </div>
          
          <div className="w-full  h-[30vw] gap-[1vw] flex items-center justify-center  ">
            {homies.map((element, index) => {
              return <div key={index} className="w-[28vw] h-[33vw] flex flex-col items-start justify-center">
                      <img src={element.image} className="w-[28vw] h-[19vw]  flex items-center justify-center  " alt=""/>
                      <div className="font-bold mx-auto mt-2 "> {element.description}</div>
                      <div className=" h-[3vw] w-[26vw] mx-auto flex items-center justify-center">
                        <p className="text-[1vw]  text-[grey]">  {element.quote}</p>
                      </div>
                      <div className="flex items-center justify-center w-[28vw] ">
                      <img src="./Media/icons8-arrow-50.png" alt="" className=" w-fit h-fit"/>
                      </div>
                  </div>
            })}

          </div>

      </div>
    
      <WorkHours/>
      <Testimonials/>
      <Faq/>
    
    </>
  )
}

export default Firsthome

