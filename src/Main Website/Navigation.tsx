import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleAboutDropdown = () => setAboutOpen((prev) => !prev);

  return (
    <nav className="sticky bg-primary-light w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center -mt-10">
          {/* Logo */}
          <a href="FrontPage" className="flex items-center no-underline px-12 py-10">
            <img
              src="/logos/HackNC25.svg"
              alt="HackNC Logo"
              className="w-[66px] h-[66px]"
            />
            <h1 className="text-[47px]">HACKNC 2025</h1>
          </a>

          {/* Main Navigation */}
          <ul className="flex gap-[100px] list-none">
            {/* About Dropdown */}
            <li className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="font-jersey bg-none border-none cursor-pointer flex items-center gap-[6px] p-0 text-[35px]"
              >
                about
                <span
                  className={`inline-flex items-center transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>

              {aboutOpen && (
                <ul
                  className="absolute top-full left-0 mt-2 py-[10px] px-4 list-none
                             bg-[#f9f5f2] border-2 border-black rounded-md shadow-[2px_2px_0_black] z-10"
                >
                  {["overview", "faq", "team"].map((item) => (
                    <li key={item} className="py-[6px]">
                      <a
                        href="#"
                        className="font-jersey text-black no-underline text-[30px]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <a href="#" className="text-[35px] no-underline font-jersey">
                sponsors
              </a>
            </li>
            <li>
              <a href="#" className="text-[35px] no-underline font-jersey">
                login
              </a>
            </li>
          </ul>

          {/* MLH Banner */}
          <img
            src="/logos/MLHBanner.png"
            alt="MLH Banner"
            className="w-[112px] h-auto mr-12 pt-[10px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
