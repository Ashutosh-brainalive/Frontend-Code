import React, { useState } from "react";
import { Check } from 'lucide-react';
import { tiers, nodePackages} from '../../constants/salesContent'



const SaleSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="sales" className="bg-black text-white py-8 sm:py-16 px-4 sm:px-8 lg:px-20 font-poppins">

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        {["Tier 1 - Closed", "Tier 2 - Closed", "Tier 3 - Live"].map((tier, i) => (
          <span
            key={i}
            className={`px-3 sm:px-4 py-1 rounded-full  text-xs sm:text-base ${
              tier.includes("Live")
                ? "border-[1px] border-solid border-[#25B021] text-white backdrop-blur-[24px] bg-gradient-to-r from-transparent via-[rgba(37,176,33,0)] to-[rgba(105,205,102,0.24)]"
                : "bg-[#FFFFFF0F]  text-[rgba(255,255,255,0.3)] backdrop-blur-[24px] bg-gradient-to-r from-transparent via-[rgba(37,176,33,0)] to-[#2d2f2d3d]"
            }`}
          >
            {tier}
          </span>
        ))}
        <h2 className="text-[64px] font-normal font-poppins leading-[120%] tracking-[0%] text-center w-[1240px] h-[80px]" style={{
        background: 'linear-gradient(360deg, #FFFFFF 30%, rgba(255, 255, 255, 0.6) 100%)',
        WebkitBackgroundClip: 'text',
      }}>
        Public Sale – In Progress
      </h2>
      </div>


      <div
        className="rounded-[32px] max-w-[1240px] mx-auto p-4 sm:p-8 mb-6 sm:mb-10 overflow-x-hidden"
        style={{
          background:
            "linear-gradient(195.05deg, rgba(37, 176, 33, 0.16) 0%, rgba(37, 176, 33, 0.08) 50%, rgba(37, 176, 33, 0.12) 100%)",
        }}
      >
        <div className="w-full rounded-[16px] bg-[#FFFFFF14] backdrop-blur-[40px] p-4 sm:p-6">
          <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-2">
            <p className="text-[24px] sm:text-[16px] font-medium font-poppins leading-tight tracking-normal text-[#FFFFFF] text-center">Tier 3</p>
            <p className="text-[16px] sm:text-[14px] font-normal font-poppins leading-tight tracking-normal text-[#FFFFFF] text-center">777/2777</p>
            <p className="text-[34px] sm:text-[24px] font-medium font-poppins leading-tight tracking-normal text-[#FFFFFF] text-center">$277</p>
            <p className="hidden sm:block text-[16px] font-medium font-poppins leading-tight tracking-normal text-[#FFFFFF] text-center">322% APY</p>
            <span className="hidden sm:block text-[14px] font-medium font-poppins leading-tight tracking-normal text-[#25B021] text-center">Ongoing</span>
          </div>

          <div className="mt-4 w-full h-[8px] rounded-full bg-[#FFFFFF1A]">
            <div className="h-full w-[35%] rounded-full bg-[#25B021]"/>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-[#25B021] w-[156px] h-[64px] whitespace-nowrap hover:bg-[#1e8d1a] rounded-[32px] px-6 sm:px-10 py-2 sm:py-3 text-white text-[16px] sm:text-[16px] font-normal leading-[180%] tracking-normal font-poppins">
            Get Started
          </button>
        </div>

        <p className="mt-6 w-full sm:w-[1176px] text-base sm:text-lg font-poppins font-normal leading-normal tracking-tight text-[#FFFFFF]">
          Special offers for you (Pick your choice):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[16px]">
        {nodePackages.map((pkg, idx) => {
          const selected = selectedIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer w-full flex flex-col items-center justify-center
                ${selected
                  ? "bg-gradient-to-br from-[#25B02133] via-[#25B0211F] to-[#25B02129] backdrop-blur-[40px] shadow-[4px_4px_8px_0px_#25B02140,_inset_0px_0px_24px_0px_#25B021A3] border-[#25B021]"
                  : "border-[#1a3f1a] bg-[#0f1f0f] hover:border-[#25B02166]"
                }`}
            >

              <div className="absolute top-4 left-4 w-5 h-5 rounded-full border-2 border-[#25B021] flex items-center justify-center">
                {selected && <Check className="text-[#25B021] w-3 h-3" />}
              </div>

              <div className="flex flex-col items-center justify-center w-full py-8">

                <div className="text-[#FFFFFF] text-[28px] font-poppins leading-tight tracking-normal font-bold text-center mb-1">{pkg.nodes}</div>

                <div className="text-[#FFFFFF] text-[16px] font-poppins leading-tight tracking-normal font-medium text-center mb-3">{pkg.title}</div>
                <hr className="border-[#FFFFFF3D] mb-3 w-full" />

                <ul className="text-[#FFFFFF] text-[14px] font-poppins leading-tight tracking-normal font-normal text-center space-y-1">
                  {pkg.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex justify-center items-center gap-1">
                      {benefit} 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`rounded-[16px] p-6 ${
              tier.comingSoon
                ? "bg-[#0D0D0D] backdrop-blur-lg"
                : "bg-[#0D0D0D]"
            }`}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-[24px] font-medium font-poppins leading-[120%] tracking-[0%] text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-[16px] font-normal font-poppins leading-[120%] tracking-[0%] text-[#CFCFCF] mb-4">
                  {tier.items}
                </p>
              <div className={i === 3 ? 'blur-sm my-4' : 'my-4'}>
                <p className="text-[34px] font-medium font-poppins leading-[120%] tracking-[0%] text-white mb-1">
                  {tier.price}
                </p>
                <hr className="border-[#FFFFFF3D] mb-3 w-full" />
                <p className="text-[16px] font-medium font-poppins leading-[120%] tracking-[0%] text-[#CFCFCF] w-[78px] h-[19px]">
                  {tier.apy}
                </p>
              </div>
              {tier.ongoing ? (
                <button className="w-full h-[44px] px-4 py-3 rounded-[12px] bg-[#25B0213D] flex items-center justify-center gap-[10px] text-[16px] font-medium font-poppins leading-normal tracking-[-0.01em] text-[#25B021] relative z-50">
                  Ongoing
                </button>
              ) : tier.comingSoon ? (
                <button className="w-full h-[44px] px-4 py-3 rounded-[12px] bg-[#141414] flex items-center justify-center gap-[10px] text-[16px] font-medium font-poppins leading-normal tracking-[-0.01em] text-[#CFCFCF] relative z-10">
                  Coming Soon
                </button>
              ) : (
                <button className="w-full h-[44px] px-4 py-3 rounded-[12px] bg-[#D80A0A3D] flex items-center justify-center gap-[10px] text-[16px] font-medium font-poppins leading-normal tracking-[-0.01em] text-[#FF0000] relative z-10">
                  Sold Out
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleSection;
