import React from 'react'
import { WcCard1, WcCard2, WcCard3 } from './comman/Icon'

const WhyChoose = () => {
    return (
        <div>
            <div>
                <p className=' text-whit ff-libre font-medium text-4xl  leading-[42px] text-center mx-auto italic py-24'>Licensed <span className='text-[#88C701]'>-</span> Bonded <span className='text-[#88C701]'>-</span> Insured</p>
            </div>
            <div className='Whychoose_bg bg-no-repeat bg-center bg-cover'>
                <div className=' container md:max-w-[850px] mx-auto pb-[76px] px-3'>
                    <p className=' ff-libre  text-4xl leading-[42px] text-center max-w-[474px] mx-auto font-normal pt-[76px] pb-[44px] '>Why <span className=' text-[#88C701] italic font-medium'>customers choose</span> Evergreen Landscapes LLC</p>
                    <div className=' flex flex-wrap justify-center   -mx-2  '>
                        <div className=' w-full group sm:w-[50%] lg:w-[33.33%]  flex flex-col justify-center items-center  px-2  '>
                            <div className=' w-full  h-[235px] border border-[#DEEDD6] group-hover:bg-white  rounded-[10px] bg-[#f0f8ec] pt-10 ps-[24px] pe-4  transition-all duration-300'>
                                <span className=' group-hover:'><WcCard1 /></span>
                                <p className=' ff-libre font-medium text-xl leading-6 text-black pb-3 pt-7'>Creative Solutions</p>
                                <p className=' ff-poppins font-normal text-base leading-6 text-black opacity-50 '>Landscape Design & Build</p>
                            </div>
                        </div>
                        <div className=' w-full group  sm:w-[50%] lg:w-[33.33%]  flex flex-col justify-center items-center  px-2  my-5 sm:my-0 '>
                            <div className=' w-full   h-[235px] border border-[#DEEDD6]  rounded-[10px] bg-[#f0f8ec] pt-10 ps-[24px] group-hover:bg-white transition-all duration-300  '>
                                <WcCard2/>
                                <p className=' ff-libre font-medium text-xl leading-6 text-black pb-3 pt-7'>Customer Service</p>
                                <p className=' ff-poppins font-normal text-base leading-6 text-black opacity-50 '>Our team is on call to deliver excellence to our clients</p>
                            </div>
                        </div>
                        <div className=' w-full group sm:w-[50%] lg:w-[33.33%]  flex flex-col justify-center items-center  px-2  sm:mt-4 lg:mt-0 '>
                            <div className=' w-full   h-[235px] border border-[#DEEDD6]  rounded-[10px] bg-[#f0f8ec] pt-10 ps-[24px] pe-4 group-hover:bg-white transition-all duration-300  '>
                                <WcCard3 />
                                <p className=' ff-libre font-medium text-xl leading-6 text-black pb-3 pt-7'>Peace of mind</p>
                                <p className=' ff-poppins font-normal text-base leading-6 text-black opacity-50 '>Proven Proactive Approach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose