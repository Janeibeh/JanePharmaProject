import React, {useState} from 'react'
import DoctorList from '../Components/Doctor/DoctorList'


const Doctors = () => {
  const [filter, setFilter] = useState();
  return (
    <>
      <div className="h-[150vw]">
          <section className="">
              <div className="  bg-amber-50  w-screen h-[4vw] flex items-center justify-center"></div>
              <div className=" w-screen h-[10vw] flex items-center justify-center">
                  <div className="container mx-auto flex flex-col items-center justify-center ">
                      <h2 className="font-bold text-[1.15vw]  ">FIND A DOCTOR</h2>
                      <div className="w-[27rem] h-[3vw] mx-auto  bg-slate-300 mt-[2vw] text-[1.1vw] rounded-md flex items-center justify-between">
                          <input type="search"  
                          className="bg-transparent w-full h-[3vw] cursor-pointer placeholder:text-gray-700 px-[1vw]"
                          placeholder="Search Doctor"
                          onChange={e => setFilter(e.target.value)}
                          />
                          <button className='bg-blue-600 h-[3vw] text-gray-700 w-[8vw] rounded-r-lg '>Search</button>
                      </div>
                  </div>
              </div>
          </section>

          <section className='bg-blue-500'> 
            <DoctorList filter={filter} className="flex items-center justify-center "/>
          </section>

      </div>
      

      
    </>
  )
}

export default Doctors