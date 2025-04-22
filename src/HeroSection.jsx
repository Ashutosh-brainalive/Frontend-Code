import React from "react";
import Navbarss from "./Navbarss";

const HeroSection = () => {
  return (        
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbarss />

      <div className="absolute inset-0 z-2 flex justify-end items-start pointer-events-none mt-8 sm:mt-4 md:mt-0">
        <div className="relative mr-4 sm:mr-8 md:mr-12 lg:mr-16">
          <img
            src="/media/div.solar-system.png"
            alt="Smart Ring Orbit"
            className="w-[450px] sm:w-[550px] md:w-[650px] lg:w-[750px] xl:w-[850px] 2xl:w-[950px] h-auto object-contain transform -translate-x-[0%] translate-y-[8%] transition-all duration-300"
          />
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-16 flex flex-col min-h-screen">
        <div 
          className="w-[728px] h-[558px] mt-[180px] space-y-6 flex flex-col justify-start"
          style={{ minHeight: '558px' }}
        >
          <h1 className="sm:text-[52px] md:text-[64px] lg:text-[96px] font-semibold font-mullish leading-[110%] tracking-normal">
            BAAI Health<br />Node Sale
          </h1>

          <p className="text-[#CFCFCF] text-lg sm:text-xl leading-[180%] font-poppins font-medium traking-normal">
            BAAI Health Node comes with a complimentary Smart Ring<br />
            that converts your everyday health activity into{" "}
            <span className="text-[#25B021] font-medium">REWARDS</span>.
          </p>

          <p className="text-base leading-none sm:text-xl tracking-normal font-poppins font-normal">
            Grab your nodes now to get:{" "}
            <span className="text-[#25B021] font-bold leading-none tracking-normal font-xl font-mullish">1400% APY</span>
          </p>

          <div className="flex gap-4 pt-4 w-[315px] h-[52px] items-center">
            <button className="w-[133px] h-[52px] bg-[#25B021] hover:bg-green-600 text-[#FFFFFF] px-8 py-3 rounded-[88px] text-base font-medium transition-colors whitespace-nowrap">
            Buy Nodes
            </button>
            <button className=" w-[170px] border-1 border-[#FFFFFF] text-[#FFFFFF] px-8 py-3 rounded-[99px] text-base font-normal hover:bg-white hover:text-black transition-colors">
              Docs
            </button>
          </div>
          </div>

          <div className="mt-auto w-full max-w-[475px] px-4 sm:px-0 mb-8 sm:mb-0">
            <h3 className="text-[#25B021] text-xl sm:text-2xl font-semibold font-poppins leading-none tracking-normal mb-4 sm:mb-6">
              Backers & Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8">
              <img src="/media/qualcomm.png" alt="Qualcomm" className="h-5 sm:h-7" />
              <img src="/media/10000startups.png" alt="10000 startups" className="h-5 sm:h-7" />
              <img src="/media/tdefi.png" alt="TDeFi" className="h-5 sm:h-7" />
              <img src="/media/taim.png" alt="T-AIM" className="h-5 sm:h-7" />
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
