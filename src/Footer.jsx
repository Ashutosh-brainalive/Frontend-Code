import React from 'react';
import { footerLinks,socialIcons } from './constants/footerContent';

export default function Footer() {
  return (
    <footer className="bg-[rgba(208, 213, 221, 0.32)] w-full text-white py-10 px-5 sm:px-10 md:px-20 mt-[25px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="md:w-1/2 flex flex-col gap-6">

          <div className="flex items-center">
            <img
              src="/media/brainalive.png"
              alt="logo"
              className="w-[200px] sm:w-[260px] md:w-[299px] h-auto"
            />
          </div>

          <p className="text-base font-light leading-normal max-w-xl">
            BrainAlive AI is committed to developing innovative products that leverage neuroscience, computer vision and NLP to analyze and understand human health, engagement and intent. We intend to create the largest data layer of medical and health data with the help of BAAI health nodes, which are technological modules linked to state-of-art smart wearables.
          </p>

          <div className="flex gap-3 flex-wrap">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white text-black w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-400 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-medium font-poppins mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-base font-normal font-poppins">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8  text-lg font-light">
        © All Rights Reserved 2025 | BrainAlive Research Pvt. Ltd.
      </div>
    </footer>
  );
}
