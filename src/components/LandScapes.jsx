import React from 'react'
import Landscape1 from '../assets/images/landscape1.png'
import Landscape2 from '../assets/images/landscape2.png'

const LandScapes = () => {
    return (
        <div className=' pt-12 sm:pt-16 md:pt-20 lg:pt-[125px]'>
            <div className="container lg:max-w-[1140px] px-3 mx-auto">
                <div className="flex flex-wrap -mx-3 justify-between items-center">
                    <div className="w-full lg:w-[45%] px-3 -mb-28 lg:mb-0">
                        <div className=' flex justify-end '>
                            <img className='w-8/12 sm:w-auto' src={Landscape1} alt="" />
                        </div>
                        <div className=' -translate-y-32 sm:-translate-y-40 '>
                            <img className='w-8/12 sm:w-auto ' src={Landscape2} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] px-3 pb-12 sm:pb-16 md:pb-20 lg:pb-[160px]">
                        <p className=' ff-libre font-medium  text-4xl leading-[42px] pb-[18px]'>Evergreen Landscapes is a full-service landscaping company servicing the <span className=' text-[#88C701] font-normal italic'>Chicago</span> land area.</p>
                        <p className=' leading-6 ff-poppins font-normal text-base opacity-50 '>Our team is dedicated to giving our clients the very best of landscaping in a safe and professional manner.</p>
                        <p className=' leading-6 ff-poppins font-normal text-base opacity-50 py-2 '>Founded in 2012, Evergreen Landscapes (formerly David's Lawn Care) has come a long way from its beginnings. When we first started out, our passion for providing quality and affordable services to our valuable clients drove us to take action and gave us the momentum to turn hard work and inspiration into a growing landscaping company. We now serve customers all over the Chicago land area and are thrilled to be a part of the landscaping industry.</p>
                        <p className=' leading-6 ff-poppins font-normal text-base opacity-50 '>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        <p className=' leading-6 ff-poppins font-normal text-base opacity-50 '>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        <p className=' leading-6 ff-poppins font-normal text-base opacity-50 '>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandScapes