import React from 'react'

const Pharmacy = () => {
  const antibiotics =[
    {
      image: "./Media/ampiclox-500mg-capsules.jpg",
      name: "Ampiclox Bechaam 500mg",
      naira: "₦500",
      category: "antibiotics"
      
  },
  {
    image: "/Media/Amoxicillin.jpg",
    name: "Amoxicillin Tablets 500mg",
    naira: "₦500",
    category: "antibiotics"
  },
  
  {
    image: "./Media/Doxycycline-Capsules.jpg",
    name: "Doxycycline Hydrochloride ",
    naira: "₦500",
    category: "antibiotics"
  },
  {
    image: "./Media/Erythromycin-Stearate-Tablet-USP-removebg-preview.png",
    name: "Erythromycin-Stearate",
    naira: "₦2500",
    category: "antibiotics"
},

{
  image: "./Media/Penicillin.jpg",
  name: "Penicillin Skin Ointment",
  naira: "₦1000",
  category: "antibiotics"
},
{
  image: "./Media/ibuprofen mini gel capsules.jpeg",
  name: "Ibuprofen Mini Gel capsules 200mg",
  naira: "₦5000",
  category: "pain-relieve"
}




]
  return (
    <>
      <div className="w-full " >
        <div  className="w-full h-[9.5vw] fixed "style={{
          backgroundImage: 'url(./Media/medplus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>

          <div className="w-full items-center justify-center " >
    
              <div className="flex items-center justify-between px-[5.5vw] py-[3.5vw] w-full  ">
  
                <div className="font-bold flex items-center justify-center  text-[1rem]  "> SHOP BY CATEGORY</div>
                <div className="flex items-center justify-center  ml-[8vw]   gap-[1vw] ">
                    <input type="text" placeholder="Search drugs, products, categories" className="w-[35vw] h-[2.8vw] border rounded-lg  "
            style={{ 
                backgroundImage: 'url(/Media/icons8-search-24 (1).png)',
                backgroundSize: '20px',
                backgroundPosition: '10px center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '40px', 
            }}
                  />
                  <button className='h-[2.5vw]  w-[9vw] text-[green] border border-[green] rounded-lg '>SEARCH</button>
                </div>
                <div className="font-bold flex items-center justify-center ml-[2vw] text-[0.92rem]  ">CART(0)</div> 
              </div>

              <div className=" w-[15vw] ml-[5.5vw]  ">
                <input type="checkbox" id="antibiotics" name="antibiotics" value="antibiotics"/>
                <label for="antibiotics"> All products</label><br></br>

                <input type="checkbox" id="antibiotics" name="antibiotics" value="antibiotics"/>
                <label for="antibiotics"> Antibiotics</label><br></br>

                <input type="checkbox" id="pain-relief" name="pain-relief" value="pain-relief"/>
                <label for="pain-relief"> Pain relief</label><br></br>
    
                <input type="checkbox" id="dietary-supplements" name="dietary-supplements" value="dietary-supplements"/>
                <label for="dietary-supplements"> Dietary Supplements</label><br></br>

                <input type="checkbox" id="vitamin-supplements" name="vitamin-supplements" value="vitamin-supplements"/>
                <label for="vitamin-supplements"> Vitamin Supplements</label><br></br>

                <input type="checkbox" id="contraceptives" name="contraceptives" value="contraceptives"/>
                <label for="contraceptives"> Contraceptives</label><br></br>
      
                <input type="checkbox" id="contraceptives" name="contraceptives" value="contraceptives"/>
                <label for="contraceptives"> Sanitary pads</label><br></br>

                <input type="checkbox" id="contraceptives" name="contraceptives" value="contraceptives"/>
                <label for="contraceptives"> Skincare</label><br></br>    
              </div>

              <p className="font-bold flex items-center justify-center mt-[3vw] w-fit ml-[5.5vw] text-[1rem]  "> FILTER BY PRICE</p>
                <div className=" w-[20vw]  pl-[5.5vw] mt-[1vw] ">

                  <input type="checkbox" id="zero-ninecube" name="zero-ninecube" value="zero-ninecube"/>
                  <label for="zero-ninecube">  ₦0 to  ₦999 </label><br></br>
        
                  <input type="checkbox" id="zero-ninecube" name="zero-ninecube" value="zero-ninecube"/>
                  <label for="zero-ninecube">  ₦1000 to  ₦9999 </label><br></br>

                  <input type="checkbox" id="zero-ninecube" name="zero-ninecube" value="zero-ninecube"/>
                  <label for="zero-ninecube">  ₦10000 or more </label><br></br>

                </div>

                <button className="flex items-center justify-center w-[11.5vw] ml-[5vw] mt-[2vw] h-[2.5vw] border bg-[red] text-[1rem] rounded-lg text-[white]   "> RESET FILTERS</button>
              </div>
            
        </div>
      
        <div className="w-full flex items-center justify-center  ">
                <p className="font-bold text-[1.5vw] ">OUR BEST SELLERS</p>
        </div>
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50  flex items-center justify-center font-bold text-[1.1vw]"> ALL PRODUCTS</div>
      
        <div className="w-[80%] gap-[2%] flex flex-wrap p-[0.5vw] ml-[19vw] flex items-center justify-center  border2 h-[50vw] ">
        {antibiotics.map( (params, index)=> {
          return <div className="bg-[white] flex flex-col items-center  justify-center w-[15vw] h-[23vw] border  bg-[grey]">
          <img src={params.image} alt="" className="w-fit h-fit"/>
          <p className="">{params.name}</p>
          <p className="font-bold text-[green]">{params.naira}</p>
          <button className="border rounded-lg w-[8vw] mt-[2vw] border-[green] ">Buy now</button>
        </div>
        })}



        </div>
     
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div>
     
        <div className="h-[3vw]"></div>
    



        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50 flex items-center justify-center font-bold text-[1.1vw]"></div> 
        <div class="h-4 bg-gradient-to-r from-red-50 to-teal-50"></div>
        <div>
      
        </div>
        <div class="h-4 bg-gradient-to-r from-red-50 to-teal-50"></div>
      
      </div>
    </>
  )
}

export default Pharmacy
