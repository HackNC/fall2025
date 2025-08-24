// import React from "react";
// import "./Navigation.css";
// import { useState } from "react";

// const Navigation: React.FC = () => {
//   const [aboutOpen, setAboutOpen] = useState(false);

//   const toggleAboutDropdown = () => {
//     setAboutOpen((prev) => !prev);
//   };

//   return (
//     <header className="header">
//       {/* LOGO SECTION (LEFTSIDE) */}
//       <a href="#" className="logo-section">
//         <img src="/HackNC25.svg" alt="HackNC Logo" className="logo" />
//         <h1 className="nav-title">HACKNC 2025</h1>
//       </a>

//       {/* MAIN NAVIGATION (CENTER-RIGHT) */}
//       <nav className="main-nav">
//         <ul className="main-nav-list">
//           <li className="about-dropdown">
//             <button
//               className="about-toggle main-nav-list-items"
//               onClick={toggleAboutDropdown}
//             >
//               about
//               <span className={`arrow-icon ${aboutOpen ? "open" : ""}`}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="3"
//                   stroke="currentColor"
//                   className="dropdown-arrow"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//             {aboutOpen && (
//               <ul className="dropdown-menu">
//                 <li>
//                   <a href="#">overview</a>
//                 </li>
//                 <li>
//                   <a href="#">faq</a>
//                 </li>
//                 <li>
//                   <a href="#">team</a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#" className="main-nav-list-items">
//               sponsors
//             </a>
//           </li>
//           <li>
//             <a href="#" className="main-nav-list-items">
//               login
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* MLH BANNER (FAR RIGHT) */}
//       <img src="/MLHBanner.png" alt="MLH Banner" className="banner-img" />
//     </header>
//   );
// };

// export default Navigation;
