import {useState, useEffect} from 'react'
import DoctorList from '../Components/Doctor/DoctorList'
import { BASE_URL } from '../config';
import axios  from 'axios';


const Doctors = () => {
  const [filter, setFilter] = useState();
  const [doctors,  setDoctors] = useState();

 
  //TO DISPLAY ALL DOCTORS ON DOCTORS PAGE, CREATE AN ASYNC GET ALL DOCTORS FUNCTION 
  //IT WILL FETCH DOCTORS FROM THE doctors data in the mongoonse SCHEMA MENTIONED IN THE DOCTORS CONTROLLERS ON THE GET ALL DOCTORS FUNCTION
  const getAllDoctors = async () => {
    try {
      const {data} = await axios.get(`${BASE_URL}/doctors`); 
      
      setDoctors(data.doctors)
    } catch (error) {

    }
  }

   // CALL THE GET ALL DOCTORS AS A FUNCTION IN useEFFECT 
   useEffect(() => {
    getAllDoctors();
}, [])


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
          {/* doctors={doctors}  this is a key to access doctors from getalldoctors function in doctor controllers*/}
            <DoctorList  doctors={doctors} filter={filter} className="flex items-center justify-center "/>
          </section>

      </div>
      

      
    </>
  )
}

export default Doctors