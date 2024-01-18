import React from 'react'
import { Link } from 'react-router-dom'
import Firsthome from '../Components/Firsthome'



const Home = () => {
  return (
    <>
      <div class="h-14 bg-gradient-to-r from-cyan-50 to-red-50 "></div>
      <div className="bg-cyan-800 h-auto  border  ">
        <div className="  flex items-center justify-center mx-auto h-[40rem] gap-[5vw] w-[80rem] ">

          <div className="  h-[20rem] w-[39rem] rounded-lg "  >
            <div className="flex flex-col h-[17rem] w-[38vw] gap-[0.7vw]   " >
              <p   className=" text-[1.5rem] " >Quick, Accessible and Complete</p>
              <h3 className="text-white  text-[1.45rem] font-bold "> Medical Solutions  for everyone at Home! </h3>
              <h6 >At JanePharma Solutions, you can easily consult professional healthcare specialists from your comfort zone. You can purchase medicines and get free presciptions from our licensed pharmacists. 
              Our purpose is solely to improve the health for everyone at ease.</h6>
              <Link to= "services" className=" flex items-center justify-start px-[2vw] border bg-[white] w-[10rem] h-[2.4rem] text-[0.85rem] text-cyan-800 font-bold rounded-lg hover:bg-cyan-800  hover:text-[white]"> Get Services</Link> 
            </div>
          </div>
            <div className="h-[39vw] w-[39vw] rounded-full overflow-hidden">
              <img className="flex items-center justify-center bg-black h-full w-full" src= "./Media/healthcare-career-1.jpg" alt=""/>
            </div>
              
          </div>
      </div>
      
      <Firsthome/>
    
    
      
    </>
  )
}

export default Home