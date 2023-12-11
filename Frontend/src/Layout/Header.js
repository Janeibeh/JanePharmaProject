import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {
    return (
    <> 
        <div className=" flex justify-center mx-auto w-[100%] bg-[#fafafa] z-[999] fixed top-0  " >
            <nav className=" flex items-center gap-[6rem] justify-between w-[80rem] h-[6rem] " >
                <div className="logo">
                    <div className=" w-[8rem] h-[4rem] "> 
                        <h2 className="text-[1.3rem] text-[black] font-bold mt-3 h-[1.2rem]">JanePharma </h2>    
                        <div className="flex  w-[7rem] h-[1.7rem] ">
                        <p className=" text-[black] text-[1.3rem] w-[4.5rem] mb-7" > Solutions </p>
                        <img src="./Media/cross-icon.jpg" alt ="logo" className="flex items-center justify-center w-[1.2rem] h-[1.2rem]"/> 
                        </div>
                    </div>
                    
                </div>
                <div className="nav-list-items  ">
                    <ul className="flex items-center justify-center gap-[4rem] uppercase  text-[0.95rem] "> 
                        <li>
                            <Link to= "/" className=" text-cyan-800 " > HOME </Link>
                        </li>

                        <li >
                            <Link to= "services" className=" hover:underline hover:decoration-[green] "> SERVICES</Link>
                        </li>

                        <li >
                            <Link to= "doctors" className=" hover:underline hover:decoration-[green] "> DOCTORS</Link>
                        </li>


                        <li >
                            <Link to= "pharmacy" className=" hover:underline hover:decoration-[black]">  Pharmacy</Link>
                        </li>

                        
                    </ul>
                    <ul className="flex items-center ">
                        <li >
                            <Link to= "login" className=" flex items-center justify-center border bg-black w-[10.5rem] h-[2.4rem] text-[0.8rem] text-[white] font-bold rounded-lg  mb-1 px-10 ml-16 hover:bg-blue-950 "> SIGN IN</Link>
                        </li>

                        <li >
                            <Link to= "appointments" className=" flex items-center justify-center border bg-black w-[10.5rem] h-[2.4rem] text-[0.8rem] text-[white] font-bold rounded-lg mb-1  px-10  hover:bg-red-600 "> Appointments</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>



    <div>< Outlet/></div>
    < Footer/>
    </>
  )
}

export default Header





