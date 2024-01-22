import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import AboutDoctor from './AboutDoctor'
import FeedbackDoc from './FeedbackDoctor'

const BASE_URL = 'http://localhost:8000/api/v1';

const DoctorDetails = () => {
  const [tab, setTab] = useState("about")
  const params = useParams();
  const { id } = params;
  const [doctor, setDoctor] = useState({})


  //INITIAL DOCTOR DETAILS
  useEffect(() => {
    if (id) {
      getDoctor();
    }
  }, [id])


  //GET DOCTOR
  const getDoctor = async () => {
    try {
      const {data} = await axios.get(`${BASE_URL}/doctors/${id}`);
      
    
      setDoctor(data.doctor)
    } catch (error) {
      // console.log('Error', error)
    }
  }
  return (
    <>
        <div className=' w-[80vw]  items-start justify-center '>
            <div className=''>
              {
                tab === "about" && <AboutDoctor data={doctor}/>
              }
              {
                tab === "feedback" && <FeedbackDoc/>
              }
            </div>
        </div>
    </>
  )
}

export default DoctorDetails