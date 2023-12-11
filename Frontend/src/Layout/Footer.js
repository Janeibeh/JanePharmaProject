import React from 'react'
import HealthArticles from '../Components/HealthArticles'



const Footer = () => {
    return (
    <>
        
        <div className="bg-teal-50 h-auto  ">
            <div className="flex items-center justify-center mx-auto font-bold  text-[black] w-[25vw] py-[2.2vw]  text-[1.15vw]"> WHY CHOOSE JANPEHARMA SOLUTIONS</div>
            <div className="flex items-center justify-center text-[grey]  text-[1vw]"> Opt for JanePharma Medical Solutions, a top-tier medical service for unparalleled </div>
            <div className="flex items-center justify-center text-[grey]  text-[1vw]">  expertise, cutting-edge care, and a commitment to your well-being.</div>
            <div className="flex items-center justify-center text-[#587C7B]  text-[1vw] w-full  p-[1.5vw]  "> 
                <div className=" w-[10vw] flex items-center justify-center ">
                    <img  src="./Media/icons8-checkmark-32.png"  alt="" /> <span >Skin conditions</span>
                    </div>
                <div className=" w-[14vw] flex items-center justify-center px-[1vw] ">
                    <img src="./Media/icons8-checkmark-32.png" alt="" /> <span >Drugs prescription</span>
                </div>
                <div className="  w-[16vw]  flex items-center justify-center">
                    <img src="./Media/icons8-checkmark-32.png" alt="" /> <span >Urinary tract infections (UTIs)</span>
                </div>
                <div className=" w-[20vw] flex items-center  px-[1vw] justify-center">
                <img src="./Media/icons8-checkmark-32.png" alt="" /> <span >Nutrition and weight management</span>
                </div>
            </div>


            <div className="flex items-center justify-center text-[#587C7B] text-[1vw] w-full gap-[0.3vw]  "> 
                <div className="  w-[11.5vw] flex items-center justify-center ">
                    <img  src="./Media/icons8-checkmark-32.png" alt="" /> <span >Respiratory issues </span>
                    </div>
                <div className="  w-[19vw]  flex items-center justify-center">
                    <img src="./Media/icons8-checkmark-32.png" alt="" /> <span >Birth control consultations </span>
                </div>
                
                <div className="  w-[10vw] flex mr-[6vw] items-center justify-center">
                <img src="./Media/icons8-checkmark-32.png" alt="" /> <span >Sleep disorders</span>
                </div>
            </div>
            
            <div   className="h-[9vw]"></div>
        </div>
        <HealthArticles/>
    
    </>
    )
}

export default Footer



