import React from 'react'

const WorkHours = () => {
  return (
    <>
       <div className="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div>
<div className="h-[34vw] w-full flex items-center justify-center" style={{
  backgroundImage: 'url("./Media/work-hrs.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
  <div className="bg-[white] w-[25vw] h-[17vw]" >
        <div className="border flex items-center justify-center w-[5vw] ml-[9vw] mt-[4vw] py-[0.2vw] text-[1vw] ">TIME </div>
        <div className="flex items-center justify-center w-[13vw] ml-[6vw] mt-[1vw] py-[0.2vw] font-bold text-[1.8vw]">Working Hours </div>
        <div className="flex items-center justify-center w-[25vw]  py-[0.2vw] text-[1.2vw] text-[grey] ">Sunday to Friday 9:00am- 10:00pm </div>
        <div className="flex items-center justify-center w-[25vw]  py-[0.2vw] text-[1.2vw] text-[grey] ">Saturday closed </div>
    </div>
  
      </div>
    </>
  )
}

export default WorkHours