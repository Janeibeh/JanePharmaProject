import React, { useState } from 'react'

const Appointments = () => {

  const [tab, setTab] = useState("about")
  return (
    <>
    <div className='w-[100vw] flex items-center justify-center'>
      <div className=' h-[34vw] w-[65vw] flex flex-col mt-[2vw] items-start justify-center '>
        <div className='flex flex-col'>
          <div className='flex gap-[1.5vw] h-[25vw] w-[62vw]'>
              <img src="./Media/daniel-okoha.jpg" alt="" className='bg-[white] flex items-center justify-center h-[24vw] w-fit'/>
              <div className='flex flex-col gap-[0.4vw] mt-[6vw] '>
                  <h2 className='font-bold text-[0.92vw] text-white font-semibold bg-yellow-600  h-[3vw] flex items-center justify-center w-[10vw] rounded-lg '>Dermatologist </h2>
                  <div className='font-bold text-[1.15vw]'>Dr. Daniel Okoha</div>
                  <div className='flex items-start justify-start w-[8vw] gap-[0.2vw] '>
                      <img src="./Media/icons8-star-24.png" alt="" className=" flex items-center justify-center h-fit "/>  
                      <h2 className='font-bold text-[0.92vw]'> 4.8</h2>
                      <h2 className='text-[0.95vw] text-[gray] '>(272) </h2>                
                  </div>
                  <p className='text-[gray] text-[0.95vw] '>As a dermatologist, Dr. Okoha offers a wide range of treatments for various skin conditions: acne, eczema, psoriasis, and skin cancer. He stays up-to-date with the latest advancements in dermatology, continuously expanding his knowledge and skills to provide the best possible care to his patients.</p>
              </div>
          </div>
          <div className=" flex border-t border-solid border-blue w-[62vw] ">
            <div className=' flex gap-[4vw]  w-[19vw]'>
              <button className={` ${tab=== "about" && "border-b border-solid border-blue" }ml-[2vw]`}
                onClick={()=> setTab('about')}
                >About
              </button>
              <button
                className={` ${tab === "feedback" && "border-b border-solid border-blue" }ml-[2vw]`}
                onClick={()=> setTab('feedback')}>Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appointments