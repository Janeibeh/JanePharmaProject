import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Signup = () => {
  const [hide_patient_mode, setHide_patient_mode] = useState(false)
  const [patient_text, setPatient_text] = useState("patient")
  const [file, setFile] = useState([])
  return (
    <>
    <div className="register" onClick={ () => {setHide_patient_mode(false)} } >
        <div className=" h-[6.5vw] flex items-center justify-center">
          <h1  className="font-bold  text-[1.4vw]"> ACCOUNT REGISTRATION FORM </h1>
        </div>
        <div className="w-[21.5vw] mx-auto flex  flex-col  gap-[1vw] items-start justify-start px-[1.6vw] h-[34vw] bg-black rounded-lg ">
          <div className=" flex items-center justify-center text-black text-[0.9vw] mt-5 ">
            <input className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw]  " id="name" name="name" type="text" placeholder="Enter your Full Name"/>
          </div>

          <div className=" flex items-center justify-center text-black text-[0.9vw]">
            <input className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="name" name="name" type="text" placeholder="Enter your Email"/>
          </div>
          
          <div className=" flex items-center justify-center text-black  text-[0.9vw]">
            <input className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="name" name="name" type="text" placeholder="Enter your Password"/>
          </div>
          
          <div className=" flex items-center justify-center text-black  text-[0.9vw]">
            <input className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="name" name="name" type="text" placeholder="Enter your Address"/>
          </div>
          <div className="flex text-[white] justify-between w-full text-[0.9vw]  px-[0.1vw]">
            <div className="flex  items-center gap-[0.5vw] "> 
              <p className="" >Are you a:</p> 
              
              <div className="  capitalize h-auto py-[0.5vw] flex items-center relative cursor-pointer text-[grey]" 
              onClick={(e) => {e.stopPropagation() ; setHide_patient_mode(!hide_patient_mode)} }>{patient_text} <img src="./Media/icons8-expand-arrow-24.png" alt=""/>
                  <div className=" flex flex-col border border-opacity-[50%] rounded-[0.2vw] bg-black opacity-[100%] text-white absolute bottom-[-3.4vw]  w-[5vw] h-auto " style={{display:hide_patient_mode ? "flex" :"none"}}>
                      <button className="text-center border-b-white border-b py-[0.3vw] hover:bg-[green] transition duration-[1s]" onClick={ ()=> {setPatient_text("patient")}}>Patient</button>
                      <button className=" text-center py-[0.3vw]  hover:bg-[green] transition duration-[1s]" onClick={ ()=> {setPatient_text("doctor")}}> Doctor</button>
                  </div>
              </div> 
            
            </div> 
            <div className=" flex items-center cursor-pointer gap-[0.4vw] "> 
              <p> Gender:</p> 
              <div className="h-auto py-[0.5vw] flex items-center justify-center  opacity-[70%]">Select <img src="./Media/icons8-expand-arrow-24.png" alt=""/></div> 
            </div>
          
          </div>
          <div className=" flex items-center justify-between w-full gap-[1vw] px-[0.5vw]"  >
            {file.length > 0 && <div className="rounded-full h-[4vw] w-[4vw] overflow-hidden ">
                                  <img src={URL.createObjectURL(file[0])} alt="" className="h-full w-full" />
                                </div>}
            
            <label className="flex items-center justify-center text-[white] bg-green-600 text-[0.9vw] w-[10.5vw] h-[3vw] rounded-lg  hover:bg-[green]" htmlFor="avatar"  > UPLOAD PHOTO</label> 
          <input type="file" id="avatar" accept="image/*" name="avatar" className="hidden" onChange={(e)=> { console.log(e.target.files); setFile(e.target.files) }} />
          </div>
          <button  id="submit" type="submit" className="text-[white] bg-green-600 text-[1vw] w-[18.5vw] h-[3vw] rounded-lg  hover:bg-[green]" > REGISTER</button>
          <div className="flex gap-[1.35vw] text-[1vw] text-[white]">
            <p className=" flex items-center "> Already registered?  </p> 
            <Link to= "login" id="submit" type="submit" className=" flex items-center justify-center bg-green-600 w-[8vw] h-[3vw] rounded-lg hover:bg-[green] ">LOG IN</Link>
          </div>
      
         
        </div>
        <div className="h-[5vw]"></div>
      
    </div>
    
    </>
    
    
  )
}

export default Signup