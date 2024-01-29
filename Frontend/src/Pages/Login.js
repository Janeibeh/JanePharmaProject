import React, { useState, useContext } from 'react';
// import {useDispatch} from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import { toast } from 'react-toastify'; 
import {AuthContext} from '../Context/AuthContext.js';
import HashLoader from 'react-spinners/HashLoader.js';

const BASE_URL = 'http://localhost:8000/api/v1'; // Replace with your actual base URL

const Login = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);  // Should be boolean
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Corrected axios post request
      console.log('Login in...')
      const res = await axios.post(`${BASE_URL}/auth/login`, formData);
      console.log('Res', res)
      if (res.data.success === true) { // Ensure you're checking res.data.status
        toast.success(res.data.message);
        
        // Dispatch Redux action, modify as per your state management
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: res.data.user,
            token: res.data.token,
          }
        });
        navigate("/"); 
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }

    setLoading(false);
  };




    return (
    <>
      <div className="register">
        <div className=" h-[86.6vh] flex flex-col items-center justify-center  "  >
            <div className=" h-[6.5vw] flex gap-[3vw] items-center justify-center  mt-[6vw] w-[22vw] mx-auto">
                <h1  className="font-bold  text-[1.4vw]"> Hello <span className='text-[green]'>Welcome!</span> </h1>
            </div>
            <form className="w-[22vw] mx-auto flex  flex-col  gap-[1vw] items-start justify-center px-[1.6vw]  h-[30vw] register rounded-lg "
                onSubmit={handleSubmit}
                >
                <div className=" flex items-center justify-center text-black text-[0.9vw]">
                  <input
                    className=" rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw]"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className=" flex items-center justify-center text-black text-[0.9vw]">
                  <input
                    className="rounded-lg w-[18.5vw] h-[2.7vw] px-[3.5vw]"
                    id="password"
                    name="password"
                    type="password" // Changed type to 'password' for better UX
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

          
                <button  id="submit" type="submit" className="text-[white] bg-green-600 text-[1vw] w-[18.5vw] h-[3vw] rounded-lg  hover:bg-[green]" onClick={handleSubmit} > { loading ? <HashLoader size={25} color='#fff'/> : " LOG IN "} </button>
                <button  id="submit" type="submit" className="text-[white] bg-green-600 text-[1vw] w-[18.5vw] h-[3vw] rounded-lg  hover:bg-[green]" >FORGOT PASSWORD? </button>
                <div className="flex gap-[1.35vw]  ml-[1.6vw] items-center justify-center text-[0.9vw] text-[white]">
                  <p className=" "> Dont have an account? </p> 
                  <Link to="/sign" className=" text-[green] " > Register</Link>
            
                
                </div>
        </form>
        <div className="h-[13.5vw]"></div>
      
      </div>
    </div>
    </>
    )
}

export default Login