import React, { useState } from 'react';

const Navbarss = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="max-w-screen-xl px-4 mx-auto sticky top-0 left-0 w-full bg-black shadow-md z-[100]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between">
      
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <img
              src="/media/mainLogo.svg"
              alt="BrainAlive Logo"
              className="sm:h-8 md:h-10 w-[106px] h-[55px]"
            />
          </a>
        </div>

        
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10 w-[277px] h-[24px]">
          <a
            href="/"
            className="font-poppins text-base font-normal text-[#25B021] "
          >
            Home
          </a>
          <a
            href="/about"
            className="font-poppins text-base font-normal text-white "
          >
            About
          </a>
          <a
            href="/docs"
            className="font-poppins text-base font-normal text-white "
          >
            Docs
          </a>
          <a
            href="#faq"
            className="font-poppins text-base font-normal text-white transition-colors"
          >
            FAQ's
          </a>
        </nav>

        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 rounded-full w-[143px] h-[52px] bg-[#25B021] text-white font-medium hover:opacity-90 transition-opacity">
            Buy Nodes
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-sm">AS</span>
          </div>
        </div>

        
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full px-6 py-4 shadow-lg border-t border-gray-800 z-50">
          <nav className="flex flex-col items-center gap-4">
            <a
              href="/"
              className="font-poppins text-base text-custom-green w-full text-center py-2"
              style={{ fontWeight: '400' }}
            >
              Home
            </a>
            <a
              href="/about"
              className="font-poppins text-base text-white hover:text-custom-green transition-colors w-full text-center py-2"
              style={{ fontWeight: '400' }}
            >
              About
            </a>
            <a
              href="/docs"
              className="font-poppins text-base text-white hover:text-custom-green transition-colors w-full text-center py-2"
              style={{ fontWeight: '400' }}
            >
              Docs
            </a>
            <a
              href="#faq"
       font-normal        className="font-poppins text-base text-white hover:text-custom-green transition-colors w-full text-center py-2"
              style={{ fontWeight: '400' }}
            >
              FAQ's
            </a>
            <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-800">
              <button className="bg-custom-green text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-colors w-full">
                Buy Nodes
              </button>
              <button className="border border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors w-full">
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbarss;
