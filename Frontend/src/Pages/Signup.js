import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import {BASE_URL}  from "../config.js"
import {toast} from "react-toastify"
import HashLoader from 'react-spinners/HashLoader';
import axios from 'axios';

const Signup = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [loading, setLoading] = useState(false); // Should be boolean
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        photo: "file",
        address: "",
        gender: "",
        role: "patient",
    });
        
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });     
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Handle file upload first
        // if (file) {
        //     try {
        //         const data = await uploadImageToCloudinary(file);
        //         setPreviewUrl(data.url);
        //         formData.photo = data.url; // Update formData with the image URL
        //     } catch (error) {
        //         console.error('Error uploading to Cloudinary:', error);
        //         setLoading(false);
        //         return; // Stop further execution if file upload fails
        //     }
        // }

        try {
            console.log('Submitting...')
            // Now submit formData
            const res = await axios.post(`${BASE_URL}/auth/register`, formData);

            console.log('Res', res)
            setLoading(false);
            if (res.data.success === true) {
                toast.success(res.data.message);
                navigate("/login"); // Use navigate function for redirection
            }else{
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err?.response)
            setLoading(false);
            if(err?.response?.data?.success === false){
                toast.error(err.response.data.message);    
            }else{
                toast.error("Something went wrong now");
            }
        }
    };
    


    return (
    <>
    <div className="register" >
        <div className=" h-[6.5vw] flex items-center justify-center">
            <h1  className="font-bold  text-[1.4vw] mt-[3vw]"> Account Registration Form </h1>
        </div>
        <form className="w-[21.5vw] mx-auto flex mt-[1vw] flex-col  gap-[1vw] items-start justify-start px-[1.6vw] h-[37vw] register  rounded-lg "  onSubmit={handleSubmit}>
            <div className=" flex items-center justify-center text-black text-[0.9vw] mt-5 ">
                <input className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw]  " id="firstname" name="first_name" type="text" placeholder="Enter your First Name" value={formData.name} onChange={handleInputChange}/>
            </div>

            <div className=" flex items-center justify-center text-black text-[0.9vw] ">
                <input className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw]  " id="lastname" name="last_name" type="text" placeholder="Enter your Last Name" value={formData.name} onChange={handleInputChange}/>
            </div>


            <div className=" flex items-center justify-center text-black text-[0.9vw]">
                <input className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="email" name="email" type="email" placeholder="Enter your Email" value={formData.email} onChange={handleInputChange} />
            </div>

            <div className=" flex items-center justify-center text-black text-[0.9vw]">
                <input className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="phone" name="phone" type="tel" placeholder="Enter your Phone " value={formData.phone} onChange={handleInputChange}/>
            </div>

            <div className=" flex items-center justify-center text-black  text-[0.9vw]">
                <input className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="password" name="password"  type="password" placeholder="Enter your Password" value={formData.password} onChange={handleInputChange} />
            </div>
    
            <div className=" flex items-center justify-center text-black  text-[0.9vw]">
                <input className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw] " id="address" name="address" type="text" placeholder="Enter your Address" value={formData.address} onChange={handleInputChange}/>
            </div>

            <div className="flex text-[white] justify-between w-full text-[0.9vw]  px-[0.1vw]">
                <label  htmlFor="" className="flex  items-center gap-[0.5vw]  "> Are you a:
                    <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleInputChange}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    </select> 
                </label> 
                <label className="flex items-center gap-2 focus:outline-none">
                Gender:
                <select 
                    name="gender"
                    value={formData.gender} 
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </label>
            </div>        
                {/* <div className="  capitalize h-auto py-[0.5vw] flex items-center relative cursor-pointer text-[grey]" 
              onClick={(e) => {e.stopPropagation() ; setHide_patient_mode(!hide_patient_mode)} }>{patient_text} <img src="./Media/icons8-expand-arrow-24.png" alt=""/>
                  <div className=" flex flex-col border border-opacity-[50%] rounded-[0.2vw] bg-black opacity-[100%] text-white absolute bottom-[-3.4vw]  w-[5vw] h-auto " style={{display:hide_patient_mode ? "flex" :"none"}}>
                      <button className="text-center border-b-white border-b py-[0.3vw] hover:bg-[green] transition duration-[1s]" onClick={ ()=> {setPatient_text("patient")}}>Patient</button>
                      <button className=" text-center py-[0.3vw]  hover:bg-[green] transition duration-[1s]" onClick={ ()=> {setPatient_text("doctor")}}> Doctor</button>
                  </div>
              </div>    this is to show that u can customize your drop down and hide modes */}
            
            <div className=" flex items-center justify-between w-full gap-[1vw] px-[0.5vw]"  >
                    {file && <div className="rounded-full h-[4vw] w-[4vw] overflow-hidden ">
                            <img src={URL.createObjectURL(file)} alt="" className="h-full w-full" />
            </div>}

            <label className="flex items-center justify-center text-[white] bg-green-600 text-[0.9vw] w-[10.5vw] h-[3vw] rounded-lg  hover:bg-[green]" htmlFor="avatar"  > UPLOAD PHOTO</label> 
            <input type="file" id="avatar" accept="image/*" name="avatar" className="hidden" onChange={(e) => setFile(e.target.files[0])} />

          </div>
        
         {/*    if button is loading show hashloader otherwise/else show register */}
<button 
disabled={loading} 
id="submit" 
type="submit" 
className="text-[white] bg-green-600 text-[1vw] w-[18.5vw] h-[3vw] rounded-lg hover:bg-[green]"
>
{loading ? <HashLoader size="4rem" color="blue"/> : "REGISTER"}
</button>

          <div className="flex gap-[1.35vw] text-[1vw] text-[white]">
            <p className=" flex items-center "> Already registered?  </p> 
            <Link to= "/login" id="submit" type="submit" className=" flex items-center justify-center bg-green-600 w-[8vw] h-[3vw] rounded-lg hover:bg-[green] ">LOG IN</Link>
          </div>
        </form>
        <div className="h-[3.5vw]"></div>
      
    </div>
    
    </>
    
    
  )
}

export default Signup