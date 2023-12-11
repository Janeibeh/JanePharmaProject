import React from 'react'

const HealthArticles = () => {
    const healthArticles_items = [
        { image:"./Media/sec_photo (1).png",
          date: "01 DECEMBER 2023",
          quote: "The Best Way to Ensure Good Dental Health for Yourself",
          read:"Read More"
        },
        { image:"./Media/Photo.png ",
          date: "05 DECEMBER 2023",
          quote: "The Best Way to Ensure Good Dental Health for Yourself",
          read:"Read More"
        },
   
    
]
  return (
    <>
        <div className=" h-[40vw] w-full">
            <div className="h-[12.5vw] w-full flex py-[5vw] justify-center ">
                <div className=" w-[88vw] h-[5vw] flex items-start justify-start gap-[54vw]">
                    <div className="flex flex-col items-start justify-start "> 
                        <div className=" border w-[8vw] text-[0.9vw] "> NEWS UPDATE</div>
                        <div className=" w-[20vw] text-[1.3vw] py-[0.7vw] font-bold ">Latest Healthcare Articles</div>
                    </div>
                    <div className=" border w-[12vw] h-[3.5vw] mt-2 flex items-center justify-center ">
                        <div className=" font-bold  text-[0.9vw]  text-teal-300"> Recieve All News</div>      
                    </div>
                </div>
            </div>
            <div className=" flex w-[100%]  items-center justify-center gap-[11%] px-[9vw] ">
                { healthArticles_items.map((params, index)=> {
                    return   <div className="flex  items-center justify-center w-[25%] gap-[1vw] mx-auto  ">
                                    <img src={params.image} alt="" className=" flex items-center justify-center "/>
                                    <div className="flex flex-col gap-[0.7vw]">
                                        <div className=" border  w-[9vw] text-[0.9vw] flex items-center justify-center ">{params.date}  </div>
                                        <div className="  w-[24vw] text-[1vw] font-bold ">{params.quote}</div>
                                        <div className=" font-bold  text-[0.85vw]  text-teal-300">{params.read} </div>      
                                    </div>
                                </div>
                })}
                
            </div>

        </div>

    </>
  )
}

export default HealthArticles