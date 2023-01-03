import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper fixed top-0 left-0">
      {headerToggle && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-60 z-[88]"></div>
      )}
      <div className="contain h-[100px] justify-between items-center">
        <img className="object-contain w-[164px]" src="/logo.png" alt="" />
        <nav
          className={`flex z-[89] lg:static fixed top-0 transition-all duration-1000 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } lg:flex-row flex-col justify-start items-center sm:items-start lg:p-0 py-28 px-8 overflow-y-auto lg:w-auto lg:h-auto w-full lg:max-w-none max-w-full sm:max-w-[400px] lg:bg-transparent bg-white border-solid border-l-[4px] lg:border-none border-orange h-full lg lg:items-center gap-7 lg:gap-4 xl:gap-[35px]`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
            href="#home"
          >
            How it Works
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#service"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            For Fans
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#about"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            For Artist
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#work"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            Our Artist
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#work"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            Drop Schedule
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#work"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            FAQ
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#work"
            className="text-orange lg:text-white font-normal text-lg lg:text-base"
          >
            Login
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#contact"
            className="orange-btn grid place-items-center no-underline w-[125px]"
          >
            Get Started
          </a>
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF5A00"
            className="w-7 cursor-pointer h-7 relative z-[90] lg:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 cursor-pointer h-7 relative z-[90] lg:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Header;
