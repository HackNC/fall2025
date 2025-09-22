import React, { useState, useEffect } from "react";
import { scrollToSection } from "./MainWeb";
import { scrollToFrontSection } from "./MainWeb";
import { makeIsMobileState } from "./Utils.tsx"


const Navigation: React.FC = () => {
  /* ============================================================
     STATE MANAGEMENT
     ------------------------------------------------------------
     Description: Controls open/close states for menus and animations.
     - aboutOpen: toggles desktop "about" dropdown menu
     - mobileMenuOpen: toggles mobile menu open/closed states
     - bgVisible: controls visibility of mobile menu background
     - showAbout/showFaq/etc.: control sequential appearance of 
       each menu item in mobile menu animation
     ============================================================ */
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Default Animation States:
  const [bgVisible, setBgVisible] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showOurBoard, setShowOurBoard] = useState(false);
  const [showSponsors, setShowSponsors] = useState(false);
  const [showDivider, setShowDivider] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  /* ============================================================
     EVENT HANDLERS
     ------------------------------------------------------------
     - toggleAboutDropdown: toggles desktop "about" dropdown menu
     - handleMobileItemClick: closes mobile menu when link is clicked
     - handleDesktopItemClick: closes desktop dropdown if open
     ============================================================ */
  const toggleAboutDropdown = () => setAboutOpen((p) => !p);

  const handleMobileItemClick = () => {
    setMobileMenuOpen(false); // triggers mobile menu closing animation
  };
  const handleDesktopItemClick = () => {
    if (aboutOpen) setAboutOpen(false); // closes "about" dropdown if open
  };

  /* ============================================================
     RESPONSIVE MENU BEHAVIOR
     ------------------------------------------------------------
     Description: Automatically closes mobile menu if mobile view 
     is exited
     ============================================================ */
  const [isMobile, setIsMobile] = makeIsMobileState((nextValue = false) => {
    if (!nextValue && mobileMenuOpen) {
      setMobileMenuOpen(false);
      resetAnimations();
    }
  }, [mobileMenuOpen]);


  /* ============================================================
     RESET ANIMATIONS
     ------------------------------------------------------------
     Description: Resets all animation states to hidden.
     Useful when switching from mobile to desktop instantly.
     ============================================================ */
  const resetAnimations = () => {
    setShowGlow(false);
    setShowLogin(false);
    setShowDivider(false);
    setShowSponsors(false);
    setShowOurBoard(false);
    setShowFaq(false);
    setShowAbout(false);
    setBgVisible(false);
  };

  /* ============================================================
     MOBILE MENU ANIMATION SEQUENCE
     ------------------------------------------------------------
     Description: Controls staggered fade/slide animations for mobile menu items.
     - delay: adjust this number to change animation speed.
       Higher = slower, Lower = faster.
     - Order of setTimeout calls = order of appearance/disappearance.
     ============================================================ */
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const delay = 50; // <--- CHANGE TO CONTROL SPEED

    if (mobileMenuOpen) {
      // Opening sequence animation (top-to-bottom):
      setBgVisible(true);
      timers.push(setTimeout(() => setShowAbout(true), delay * 1));
      timers.push(setTimeout(() => setShowFaq(true), delay * 2));
      timers.push(setTimeout(() => setShowOurBoard(true), delay * 3));
      timers.push(setTimeout(() => setShowSponsors(true), delay * 4));
      timers.push(setTimeout(() => setShowDivider(true), delay * 5));
      timers.push(setTimeout(() => setShowLogin(true), delay * 6));
      timers.push(setTimeout(() => setShowGlow(true), delay * 7));
    } else {
      // Closing sequence animation (bottom-to-top):
      timers.push(setTimeout(() => setShowGlow(false), delay * 1));
      timers.push(setTimeout(() => setShowLogin(false), delay * 2));
      timers.push(setTimeout(() => setShowDivider(false), delay * 3));
      timers.push(setTimeout(() => setShowSponsors(false), delay * 4));
      timers.push(setTimeout(() => setShowOurBoard(false), delay * 5));
      timers.push(setTimeout(() => setShowFaq(false), delay * 6));
      timers.push(setTimeout(() => setShowAbout(false), delay * 7));
      timers.push(setTimeout(() => setBgVisible(false), delay * 8));
    }

    return () => timers.forEach(clearTimeout);
  }, [mobileMenuOpen]);

  const getShowLightNavColor = () => (!bgVisible && isMobile);

  return (
    <>
      {/* ============================================================
          HEADER
          ------------------------------------------------------------
          Description: Contains logo, site title, desktop nav links, MLH banner,
          and hamburger menu button for mobile.
          ============================================================ */}
      <header
        className="flex items-start justify-between sticky top-0 w-full text-primary-dark z-[3000] h-[70px]"
        style={{ fontFamily: "'Jersey 15', sans-serif" }}
      >
        {/* ------------------------------------------------------------
            LOGO + TITLE (click closes menus)
           ------------------------------------------------------------ */}
        <a
          href="#"
          className="flex items-center gap-3 py-[10px] px-[48px] max-[1047px]:px-[38px]"
          onClick={() => {
            setMobileMenuOpen(false);
            setAboutOpen(false);
            scrollToSection("FrontPage");

          }}
        >
          <img
            src="./HackNC25.svg"
            alt="HackNC Logo"
            className="w-[66px] h-[66px] max-[1047px]:w-[56px] max-[1047px]:h-[56px] max-[455px]:h-[46px] max-[375px]:h-[40px]"
          />
          <h1
            className={`text-[48px] max-[1047px]:text-[38px] max-[455px]:text-[28px] max-[375px]:text-[22px] whitespace-nowrap
              ${getShowLightNavColor() ? "text-primary-light" : "text-primary-dark"
              }`}
          >
            HACKNC 2025
          </h1>

        </a>

        {/* ------------------------------------------------------------
            DESKTOP NAVIGATION (visible above md)
           ------------------------------------------------------------ */}
        <nav className="pt-[20px] max-md:hidden">
          <ul className="flex gap-[100px] max-[1047px]:gap-[60px] list-none items-center m-0">
            {/* <li>
              <a
                href="#"
                onClick={() => {
                  handleDesktopItemClick();
                  scrollToSection("AboutPage");
                }}
                className="text-[36px] max-[1047px]:text-[26px] no-underline"
                style={{ fontFamily: "'Jersey 15', sans-serif" }}
              >
                about
              </a>
            </li> */}
            {/* FAQ link */}
            {/* <li>
              <a
                href="#"
                onClick={() => {
                  handleDesktopItemClick();
                  scrollToSection("NewFaqPage");
                }}
                className="text-[36px] max-[1047px]:text-[26px] no-underline"
                style={{ fontFamily: "'Jersey 15', sans-serif" }}
              >
                faq
              </a>
            </li> */}

            <li className="relative">
              {/* About dropdown toggle */}
              <button
                onClick={toggleAboutDropdown}
                className="inline-flex items-center gap-2 p-0 bg-transparent border-0 cursor-pointer text-[36px] max-[1047px]:text-[26px] leading-none"
                style={{ fontFamily: "'Jersey 15', sans-serif" }}
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
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-5 h-5 max-[1047px]:w-4 max-[1047px]:h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>

              {/* Dropdown menu */}
              <div
                className={`mt-2 absolute left-1/2 top-[calc(100%+3px)] -translate-x-1/2 z-50 transition-all duration-200 ${aboutOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
              >
                <div
                  className="relative"
                  style={{
                    filter: "drop-shadow(0px 4px 6px rgba(85, 86, 122, 0.6))",
                  }}
                >
                  {/* Dropdown pointer triangle */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-[10px]"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderBottom: "10px solid #E0E6EF",
                    }}
                  />
                  {/* Dropdown links */}
                  <ul
                    className="bg-[#E0E6EF] rounded-xl py-3 px-5 text-center min-w-[200px] max-[1047px]:min-w-[180px]"
                    role="menu"
                  >

                    <li className="py-1">
                      <a
                        href="#"
                        onClick={() => {
                          handleDesktopItemClick();
                          scrollToSection("FrontPage");
                        }}
                        className="block text-primary-dark no-underline text-[36px] max-[1047px]:text-[26px]"
                        style={{ fontFamily: "'Jersey 15', sans-serif" }}
                      >
                        home
                      </a>
                    </li>

                    <li className="py-1">
                      <a
                        href="#"
                        onClick={() => {
                          handleDesktopItemClick();
                          scrollToSection("AboutPage");
                        }}
                        className="block text-primary-dark no-underline text-[36px] max-[1047px]:text-[26px]"
                        style={{ fontFamily: "'Jersey 15', sans-serif" }}
                      >
                        about
                      </a>
                    </li>

                    <li className="py-1">
                      <a
                        href="#"
                        onClick={() => {
                          handleDesktopItemClick();
                          scrollToSection("OurBoardPage");
                        }}
                        className="block text-primary-dark no-underline text-[36px] max-[1047px]:text-[26px]"
                        style={{ fontFamily: "'Jersey 15', sans-serif" }}
                      >
                        our board
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Link */}
            <li>
              <a
                href="#"
                onClick={() => {
                  handleDesktopItemClick();
                  scrollToSection("NewFaqPage");
                }}
                className="text-[36px] max-[1047px]:text-[26px] no-underline"
                style={{ fontFamily: "'Jersey 15', sans-serif" }}
              >
                faq
              </a>
            </li>

            {/* Sponsors link */}
            <li>
              <a
                href="#"
                onClick={() => {
                  handleDesktopItemClick();
                  scrollToSection("SponsorshipPage");
                }}
                className="text-[36px] max-[1047px]:text-[26px] no-underline"
                style={{ fontFamily: "'Jersey 15', sans-serif" }}
              >
                sponsors
              </a>
            </li>

          </ul>
        </nav>

        {/* ------------------------------------------------------------
            BANNER + HAMBURGER MENU (mobile)
           ------------------------------------------------------------ */}
        <div className="flex items-center max-md:relative max-md:w-full">
          {/* Mobile banner */}
          <div className="hidden max-[794px]:flex items-center absolute top-0 right-16">
            <a href="https://mlh.io/seasons/2026/events" target="_blank" rel="noopener noreferrer">
              <img
                src="./MLHBanner.png"
                alt="MLH Banner"
                className="w-[72px] h-auto max-[1047px]:w-[62px] mr-2 max-[455px]:w-[48px] max-[394px]:w-[38px] max-[375px]:w-[32px] max-[340px]:w-[28px] max-[323px]:w-[20px]"
              />
            </a>

          </div>
          {/* Desktop banner */}
          <a href="https://mlh.io/seasons/2026/events" target="_blank" rel="noopener noreferrer">
            <img
              src="./MLHBanner.png"
              alt="MLH Banner"
              className="w-[112px] h-auto mr-[48px] max-[1047px]:w-[102px] max-[1047px]:mr-[38px] max-md:hidden"
            />
          </a>
          {/* Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="hidden max-md:flex justify-center items-center p-2 absolute top-4 right-4 z-[3500] bg-transparent transition-transform duration-150 ease-in-out max-[455px]:p-[0.3rem] max-[375px]:p-[0.2rem]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                className="w-8 h-8 transform transition-transform duration-150 ease-in-out rotate-90 max-[455px]:h-6 stroke-primary-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                className={`w-8 h-8 transform transition-transform duration-150 ease-in-out max-[455px]:h-6 ${getShowLightNavColor() ? "stroke-primary-light" : "stroke-primary-dark"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ============================================================
          MOBILE MENU OVERLAY
          ------------------------------------------------------------
          Description: Fullscreen mobile menu with staggered animations for items.
          Includes background, menu links, divider, login, and glow image.
          ============================================================ */}
      <div
        className={`fixed inset-0 z-[2000] flex flex-col max-md:flex ${mobileMenuOpen || bgVisible ? "" : "pointer-events-none"
          }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-white transition-transform duration-500 ease-out origin-top ${bgVisible ? "scale-y-100" : "scale-y-0"
            }`}
        />

        {/* Menu content */}
        <nav
          className="relative z-[2500] flex flex-col justify-center items-center w-full h-full px-6"
          style={{ fontFamily: "'Jersey 15', sans-serif" }}
        >
          {/* Main menu links */}
          <ul className="flex flex-col items-center gap-6 text-center text-primary-dark text-[32px] font-semibold max-[455px]:text-[30px] max-[375px]:text-[25px]">
            <li
              className={`transition-all duration-300 ${showAbout
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#"
                onClick={() => {
                  handleMobileItemClick();
                  scrollToSection("FrontPage");
                }}>
                home
              </a>
            </li>

            <li
              className={`transition-all duration-300 ${showAbout
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#"
                onClick={() => {
                  handleMobileItemClick();
                  scrollToFrontSection("AboutPage");
                }}>
                about
              </a>
            </li>
            <li
              className={`transition-all duration-300 ${showFaq
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#"
                onClick={() => {
                  handleMobileItemClick();
                  scrollToSection("NewFaqPageMobile");
                }}>
                faq
              </a>
            </li>
            <li
              className={`transition-all duration-300 ${showOurBoard
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#"
                onClick={() => {
                  handleMobileItemClick();
                  scrollToFrontSection("OurBoardPage");
                }}>
                our board
              </a>
            </li>
            <li
              className={`transition-all duration-300 ${showSponsors
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#" onClick={() => {
                handleMobileItemClick();
                scrollToFrontSection("SponsorshipPage");
              }}>
                sponsors
              </a>
            </li>
          </ul>

          {/* Divider */}
          <div
            className={`w-[60%] border-t-2 border-gray-300 my-6 transition-all duration-300 ${showDivider ? "opacity-100" : "opacity-0"
              }`}
          ></div>

          {/* Login */}
          {/* <ul className="flex flex-col items-center text-center text-primary-dark text-[32px] font-semibold max-[455px]:text-[30px] max-[375px]:text-[25px]">
            <li
              className={`transition-all duration-300 ${showLogin
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <a href="#" onClick={handleMobileItemClick}>
                login
              </a>
            </li>
          </ul> */}

          {/* HackNC Logo */}
          <div
            className={`mt-[50px] transition-all duration-300 ${showGlow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <img
              src="./HackNC_Glow.png"
              alt="HackNC Glow"
              className="max-w-[150px] mx-auto max-[455px]:max-w-[120px] max-[375px]:max-w-[100px]"
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
