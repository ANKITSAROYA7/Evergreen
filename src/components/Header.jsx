import React from 'react'
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx"
import { BiMenu } from "react-icons/bi"
import logo from '../assets/images/logo.png'


const Header = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    } else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div>
            <div className="container xl:max-w-[1440px] mx-auto">
                <nav className=' flex justify-between items-center'>
                    <img className=' w-[50%] md:w-[30%] lg:w-[25%] xl:w-auto' src={logo} alt="" />
                    <div>
                        <ul className={`${show ? " !left-[0px]" : ""} z-40 flex  flex-col min-h-screen w-full top-0 bottom-0 fixed  bg-white  justify-center items-center left-full lg:static lg:w-auto lg:min-h-full lg:flex-row transition-all duration-500 gap-[20px] xl:gap-[28px]`}>
                            <li className=' text-black ff-poppins font-normal text-base leading-5'>Home</li>
                            <li className=' text-black ff-poppins font-normal text-base leading-5'>About us</li>
                            <li className=' text-black ff-poppins font-normal text-base leading-5'>Our Services</li>
                            <li className=' text-black ff-poppins font-normal text-base leading-5'>Gallery</li>
                            <li className=' text-black ff-poppins font-normal text-base leading-5'>Contact Us</li>
                            <button className=' ff-poppins font-medium text-basee leading-5 text-white xl:py-[38px] xl:px-6 px-5 py-7 bg-[#88C701] xl:ms-[13px]'>Request a quote</button>

                        </ul>
                        <label className=' relative z-[41] lg:hidden  text-[#88C701] text-3xl' onClick={() => setShow(!show)}>
                            {show ? <RxCross1 /> : <BiMenu />}
                        </label>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header