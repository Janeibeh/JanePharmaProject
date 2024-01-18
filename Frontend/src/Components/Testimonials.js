import React, { useState } from 'react'

const Testimonials = () => {
    
    const feedback  = [
        {     
            image: "./Media/man-image.jpg",
                name:" Ojo Davis",
                patientDept: " Medical Patient",
                review: " Top-notch medical doctors—knowledgeable, compassionate, and dedicated."
        },
        {     
            image: "./Media/women.jpg",
                name:" Tonia Chukwu",
                patientDept: "Pharmaceutical Patient",
                review: "The pharmacists provided quick drug prescriptions and friendly assistance. I love them. "
        },
        {     
            image: "./Media/mum-baby.jpg",
                name:"Fatima Abdullahi",
                patientDept: "Pediatric Patient",
                review: "Exceptional pediatric care! The doctor's expertise brought comfort during my baby's treatment.. "
        },
        {     
            image: "./Media/yup.jpg",
                name:" Moses Isaiah",
                patientDept: "Dental Patient",
                review: "The dental professionals guided me through the process seamlessly, with clear instructions. "
        },
        {     
            image: "./Media/image.jpg",
                name:"Hauwa Bello",
                patientDept: "Dermatology Patient",
                review: "I highly recommend the dermatologist who advocates against skin bleaching. Grateful for the empowering advice and healthier approach to skincare. "
    
        },
        

        {     
            image: "./Media/oldwomanpic.jpg",
                name:"Chinenye Doris",
                patientDept: "Geriatric Patient",
                review: "I have taken medical services from them, they treat so well and they are providing the best medical services"
        },

        {     
            image: "./Media/dietman.jpg",
                name:"Efe Jacob",
                patientDept: "Dietetic Patient",
                review: "Virtual dietitian nailed it! Grateful for the guidance on my journey to eating better."
        },

        {     
            image: "./Media/ladyimg.jpeg",
                name:"Susan Ola ",
                patientDept: "Laboratory patient ",
                review: "Impressed with the medical lab's efficiency! The staff made the testing process smooth, and the results were delivered promptly.  "
        },

]

// javascript function for button slider
const [translateX, setTranslateX] = useState(0);
const [currentIndex, setCurrentIndex] = useState(0);

const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslateX(translateX + 100 / feedback.length); // Adjust 100 to your container width
    }
 };

const handleRightClick = () => {
    if (currentIndex < feedback.length - 3){  // Adjust based on the no of feedback you want displayed at once
      setCurrentIndex(currentIndex + 1);
      setTranslateX(translateX - 100 / feedback.length); // Adjust 100 to your container width
    }
  };
// javascript function for button slider ends here


return (
    <>
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50 w-full "></div>
        <div className=" bg-white  w-full h-auto py-[2vw] "> 
            <div className="border flex mx-auto w-[6vw] text-[0.9vw] items-center justify-center  "> FEEDBACK</div>
            <div className=" flex mx-auto w-[30vw] font-bold text-[1.32vw] mt-6 items-center justify-center "> Feedbacks about our service  </div>
            <div className=" flex mx-auto w-[26vw] font-bold text-[1.3vw]  items-center justify-center "> from our patients</div>
            <div className="w-full   px-[5vw] h-[25vw]  flex  items-center justify-center ">
        
        <div className=" relative overflow-hidden w-full h-full">

        <div className="flex items-center justify-start h-[28vw] absolute  top-0 left-0 w-auto gap-[1vw] px-[1vw]  rounded-lg overflow-hidden "  
            //styling buttonslider div as translateX to transform and transition as
        style={{
            transform: `translateX(${translateX}%)`,
            transition: "0.8s ease",
            }}
             //styling ends here beside closing div tag
            >

            {feedback.map((params, index) => { 
            return  <div  key={index} className="flex flex-col gap-[1vw] border rounded-lg px-[2vw] py-[1vw] w-[29vw] bg-[whitesmoke] h-[14vw]   relative">
            <img src={params.image} alt="geriatric patient"   className=" flex items-center  justify-center h-[4vw] w-[4vw] rounded-[100%] absolute top-[-3.2vw] left-[-1.2vw]" />   
                <div  className=" flex  items-center justify-start w-full">
                    <div className=" flex flex-col gap-[0.5vw] w-full "> 
                        <div className=" flex  items-center justify-start  text-[1.2vw] font-bold "> {params.name}</div>
                        <p className= " flex  items-center justify-start  text-[grey] text-[1vw] "> {params.patientDept}</p>
                    </div>
                    <img src="./Media/clip.png" alt="" className=" flex  items-center justify-center h-fit  w-[2.2vw] "/>
                </div>
                {/* line */}
                <div className="h-[0.05vw] w-full bg-[grey]"> </div>
                <p className="  flex  items-center justify-center  text-[grey]  text-[0.96vw] ">{params.review} </p>
                <img src="./Media/reviewstars.png" alt="" className=" flex items-center justify-center h-fit w-[10vw]"/>   
            </div> 
        })}
            
        
        </div> 
        </div>

        </div>
            
            {/*  initializing buttons with the java button slider functions */}
            <div className="flex items-center justify-center  ">
                <button onClick={handleLeftClick}><img src="./Media/icons8-rewind-button-66 (1).png" alt=""/></button>   <button onClick={handleRightClick}><img src="./Media/yuj.png" alt=""/></button>
            </div>

            
        </div>
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50 w-full "></div>
        
    </>
    )
}

export default Testimonials
