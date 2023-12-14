import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {
    return (
    <> 
        <div className=" flex justify-center mx-auto w-[100%]  bg-[#fafafa] z-[999] fixed top-0   " >
            <nav className=" flex items-center justify-center w-[100%]  gap-[14vw]  h-[6rem]  " >
                <div className="logo  ">
                    <Link to= "/" className="text-[1.3rem] text-[black] font-bold mt-[5rem] ">JanePharma </Link>
                        <div className="flex"> 
                            <span to= "/" className="  text-[1.3rem]  "> Solutions</span><img src="./Media/cross-icon.jpg" alt ="logo" className="flex items-center justify-center w-[1.2rem] h-[1.2rem]"/>
                        </div>     
                </div>
                <div className="nav-list-items gap-[5vw]  flex items-center justify-center  ">
                    <ul className="menu flex items-center justify-center gap-[4.5rem] uppercase  text-[1rem] "> 
                        <li>
                            <Link to= "/" className=" text-cyan-800  " > HOME </Link>
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
                    <ul className="menu flex items-center justify-center gap-[0.3rem] uppercase  text-[1rem] "> 
                        <li className="flex items-center justify-center border bg-black w-[10rem] h-[2.4rem]  rounded-lg  hover:bg-blue-950 ">
                            <Link to= "/login" className=" text-[0.8rem] text-[white] font-bold">  SIGN IN</Link>
                        </li>

                        <figure className="w-[3vw] h-[3vw] rounded-full cursor-pointer border2 md:hidden">
                                <img src="" alt="" className="w-full rounded-full"/>
                        </figure>

                        <li className="flex items-center justify-center border bg-black w-[10.5rem] h-[2.4rem] rounded-lg  hover:bg-red-600 ">
                            <Link to= "appointments" className=" text-[0.8rem] text-[white] font-bold"> Appointments</Link>
                        </li>
                        
                        {/* <span className="md:hidden">
                            <BiMenu className="w-6 h-6 cursor pointer"/>
                        </span> */}

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





