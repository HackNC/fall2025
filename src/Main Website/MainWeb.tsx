// ScrollTestPage.tsx
import React, { useEffect } from "react";
import { useState } from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "../Pages/FrontPage";
import Navigation from "./Navigation";
import AboutPage from "../Pages/AboutPage";
import Countdown from "../Pages/Countdown";
import BottomDecor from "./BottomDecor";
// import FAQ from "../Pages/FAQPage";
import NewFaqPage from "../Pages/NewFaqPage";
import OurBoardPage from "../Pages/OurBoard/OurBoardPage";
import {
  Minh,
  Naga,
  Alicia,
  Jack,
  Paige,
  Amber,
  Ayush,
  Harsehaj,
  Sanay,
  Sky,
  Davyd,
  Ishitha,
  Sahasra,
  Mason,
  Rishi,
  Yahan,
  Robert,
  Oscar,
  Alex,
} from "../Pages/OurBoard/OurBoardInfo";
import Pages from "../Pages/OurBoard/PagesEnum";
import SponsorshipPage from "../Pages/Sponsors";
const ScreenWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className="
        mx-auto my-auto
        w-full md:w-[75vw] md:h-[80vh]
        px-[2.5vw] md:px-0
        w-full md:w-[75vw] md:h-[80vh]
        px-[2.5vw] md:px-0
        md:rounded-[140px] md:shadow-2xl md:bg-gradient-to-b md:from-gradient-top md:to-gradient-bottom
        overflow-x-hidden
        md:overflow-x-auto md:overflow-y-hidden
        overflow-x-hidden
        md:overflow-x-auto md:overflow-y-hidden
        overflow-y-auto
        drop-shadow-lg
        shadow-inner-lg
      "
    >
      {children}
    </div>
  );
};

export const SectionWrapper: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <section
      className="
        md:overflow-y-scroll 
        max-w-full 
        md:min-w-[var(--arcade-w)] 
        md:w-[var(--arcade-w)] 
        md:min-h-[var(--arcade-h)] 
        md:h-[var(--arcade-h)]
      "
    // bg-[url('/noise_bg.svg')]
    // bg-repeat
    // bg-blend-overlay
    >
      {children}
    </section>
  );
};

// Scrolls to the center of the Section:
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

// Scroll to the Start of the Section:
export const scrollToFrontSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }
};

const MainPage: React.FC = () => {
  const [page, setPage] = useState(Pages.LEADS);
  useEffect(() => {
    const handlePageSwitch = (event: Event) => {
      console.log("received event");
      const customEvent = event as CustomEvent<String>;
      switch (customEvent.detail) {
        case "leads":
          setPage(Pages.LEADS);
          console.log("Pages set to leads");
          break;
        case Pages.GRAPHICS:
          setPage(Pages.GRAPHICS);
          break;
        case Pages.EXPERIENCE:
          setPage(Pages.EXPERIENCE);
          break;
        case Pages.OPERATIONS:
          setPage(Pages.OPERATIONS);
          break;
        case Pages.SPONSORSHIP:
          setPage(Pages.SPONSORSHIP);
          break;
        case Pages.DEVELOPMENT:
          setPage(Pages.DEVELOPMENT);
          break;
        case Pages.MARKETING:
          setPage(Pages.MARKETING);
          break;
        default:
          setPage(Pages.EMPTY);
      }
    };
    window.addEventListener("leads" as any, handlePageSwitch);
    window.addEventListener("graphics" as any, handlePageSwitch);
    window.addEventListener("experience" as any, handlePageSwitch);
    window.addEventListener("operations" as any, handlePageSwitch);
    window.addEventListener("sponsorship" as any, handlePageSwitch);
    window.addEventListener("development" as any, handlePageSwitch);
    window.addEventListener("marketing" as any, handlePageSwitch);

    return () => {
      window.removeEventListener("leads" as any, handlePageSwitch);
      window.removeEventListener("graphics" as any, handlePageSwitch);
      window.removeEventListener("experience" as any, handlePageSwitch);
      window.removeEventListener("operations" as any, handlePageSwitch);
      window.removeEventListener("sponsorship" as any, handlePageSwitch);
      window.removeEventListener("development" as any, handlePageSwitch);
      window.removeEventListener("marketing" as any, handlePageSwitch);
    };
  }, []);
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center md:bg-primary-light max-md:bg-gradient-to-b from-gradient-top to-gradient-bottom">
        <div className="w-full h-full flex flex-col">
          <Navigation />
          <div className="bg-transparent -mt-50"></div>
          <ScreenWrapper>
            <ScrollBar>
              <SectionWrapper>
                <FrontPage scrollToSection={scrollToSection} />
              </SectionWrapper>

              <SectionWrapper>
                <Countdown />
              </SectionWrapper>

              <SectionWrapper>
                <AboutPage />
              </SectionWrapper>

              <SectionWrapper>
                <NewFaqPage />
              </SectionWrapper>

              <SectionWrapper>
                <SponsorshipPage />
              </SectionWrapper>

              {/* Not Ready Yet! */}
              <SectionWrapper>
                <OurBoardPage />
              </SectionWrapper>

              {/* Set default as leads when its ready */}
              {page === Pages.LEADS && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Minh />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Alicia />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Naga />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Jack />
                  </SectionWrapper>
                </>
              )}
              {page === Pages.GRAPHICS && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Paige />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Amber />
                  </SectionWrapper>
                </>
              )}
              {page === Pages.EXPERIENCE && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Ayush />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Harsehaj />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Alex />
                  </SectionWrapper>
                </>
              )}
              {page === Pages.OPERATIONS && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Sanay />
                  </SectionWrapper>
                  {/* <SectionWrapper>
                    <Sky />
                  </SectionWrapper> */}
                </>
              )}
              {page === Pages.SPONSORSHIP && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Davyd />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Ishitha />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Sahasra />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Mason />
                  </SectionWrapper>
                </>
              )}
              {page === Pages.DEVELOPMENT && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Rishi />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Yahan />
                  </SectionWrapper>
                </>
              )}
              {page === Pages.MARKETING && (
                <>
                  <SectionWrapper>
                    {" "}
                    <Robert />
                  </SectionWrapper>
                  <SectionWrapper>
                    <Oscar />
                  </SectionWrapper>
                </>
              )}
            </ScrollBar>
          </ScreenWrapper>
        </div>
        <BottomDecor />
      </div>
    </>
  );
};

export default MainPage;
