// ScrollTestPage.tsx
import React from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "../Pages/FrontPage";
import Navigation from "../Pages/NavigationBar";

const ScreenWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className="
        bg-primary-dark bg-opacity-90 rounded-[140px] shadow-2xl
        mx-auto my-auto
        w-[75vw] h-[80vh]
        overflow-x-hidden 
        overflow-y-scroll
      "
      style={{ "--arcade-w": "75vw", "--arcade-h": "80vh" } as React.CSSProperties}>
      {children}
    </div>
  );
};

const SectionWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section className="w-[var(--arcade-w)] h-[var(--arcade-h)] flex flex-shrink-0 items-center justify-center bg-transparent px-4">
      {children}
    </section>
  );
}

const ScrollTestPage: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-primary-light fixed">
        <div className="flex flex-col">
          <Navigation />
          <ScreenWrapper>
            <ScrollBar>
              <SectionWrapper>
                <FrontPage />
              </SectionWrapper>
              <SectionWrapper>
                <FrontPage />
              </SectionWrapper>
              <SectionWrapper>
                <FrontPage />
              </SectionWrapper>
              <SectionWrapper>
                <FrontPage />
              </SectionWrapper>
            </ScrollBar>
          </ScreenWrapper>
        </div>
      </div>
    </>
  );
};

export default ScrollTestPage;
