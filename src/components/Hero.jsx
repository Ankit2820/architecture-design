import React from 'react'
import header from '../assets/header.png';
const Hero = () => {
    return (
        <div id="home" className="w-full flex items-center justify-center bg-[#fff5ea] p-6 md:scroll-mt-24 scroll-mt-76">
            <div className=" w-[90%] mx-auto shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row mt-3">

                {/* Left Side - Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={header}
                        alt="Sample"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="md:w-1/2 w-full p-8 flex flex-col ">
                    <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins', color: '#8B4513' }}>
                        Crafting Timeless Spaces with purpose & precision
                    </h1>
                    <p className="text-2xl mb-4 mt-2" style={{ fontFamily: 'Poppins', color: '#8B4513' }}>
                        We design modern architecture interiors and landscapes the combine creativity, functionality, and affordability.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-2 mb-3">
                        <div className="inline-block bg-white text-[#8B4513] 
                border border-[#8B4513] 
                font-poppins px-6 py-2 rounded-full">
                            AFFORDABLE DESIGN
                        </div>
                        <div className="inline-block bg-white text-[#8B4513] 
                border border-[#8B4513] 
                font-poppins px-6 py-2 rounded-full">
                            PREMIUM PLANNING
                        </div>
                        <div className="inline-block bg-white text-[#8B4513] 
                border border-[#8B4513] 
                font-poppins px-6 py-2 rounded-full">
                            CLIENT FOCUSED
                        </div>
                    </div>

                    <p className="text-2xl font-semibold md:ml-3 md:mt-5" style={{ fontFamily: 'Poppins', color: '#8B4513' }}>
                        DESIGN STARTS FROM<span className='font-extrabold ml-1'>  ₹ 5/SQFT</span>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Hero;