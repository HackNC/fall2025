// ScrollTestPage.tsx
import React, { useEffect } from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "../Pages/FrontPage";
import OurBoardPage from "../Pages/OurBoardPage";
import Navigation from "../Pages/NavigationBar";
import AboutPage from "../Pages/AboutPage";
import BottomDecor from "./BottomDecor";

const ScreenWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className="
        bg-gradient-to-b from-gradient-top to-gradient-bottom bg-opacity-90 rounded-[140px] shadow-2xl
        mx-auto my-auto
        w-[75vw] h-[80vh]
        overflow-x-hidden 
        overflow-y-scroll
        drop-shadow-lg
        shadow-inner-lg
      "
      style={{
        width: "var(--arcade-w)", height: "var(--arcade-h)"
      } as React.CSSProperties}>
      {children}
    </div>
  );
};

const SectionWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <section className="w-[var(--arcade-w)] h-[var(--arcade-h)] flex flex-shrink-0 items-center justify-center bg-transparent pb-[5vh]">
        {children}
      </section>
    </>
  );
}

// "Play Now" Button scroll handler
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
};




const MainPage: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center bg-primary-light">
        <div className="flex flex-col">
          <Navigation />
          <ScreenWrapper>
            <ScrollBar>
              <SectionWrapper>
                <FrontPage scrollToSection={scrollToSection} />
              </SectionWrapper>
              <SectionWrapper>
                <AboutPage />
              </SectionWrapper>
              <SectionWrapper>
                <AboutPage />
              </SectionWrapper>
              <SectionWrapper>
                <FrontPage scrollToSection={scrollToSection} />
              </SectionWrapper>
              <SectionWrapper>
                <OurBoardPage />
              </SectionWrapper>
            </ScrollBar>
          </ScreenWrapper>
        </div>
        <BottomDecor />
      </div>
    </>
  );
};

export default MainPage;
