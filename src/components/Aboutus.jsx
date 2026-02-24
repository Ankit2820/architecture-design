import React from 'react'

function Aboutus() {
  return (
    <section id="about" className="w-full bg-[#fff5ea] py-12 px-6 md:px-20 font-poppins md:scroll-mt-24 scroll-mt-76">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
          About Us
        </h1>

        {/* Text */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        ADS architects is a design-driven architectural firm dedicated to creating functional, sustainable, and aesthetically inspiring spaces. We specialize in providing end-to-end architectural solutions, including planning, designing, vastu consultancy, 3D visualization, and project management.
        Our approach combines modern design principles with vastu-based spatial harmony, ensuring that every project is both innovative and culturally rooted. We work across a diverse range of projects including residential, commercial, institutional, and urban developments, delivering designs that balance creativity, practicality, and client vision."
        </p>

      </div>
      
    </section>
  );
};
export default Aboutus