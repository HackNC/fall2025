// ScrollTestPage.tsx
import React from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "./FrontPage";
import Navigation from "./NavigationBar";

const ScreenWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className="
        flex items-center justify-center
        bg-primary-dark bg-opacity-90 rounded-[140px] shadow-2xl
        mx-auto my-auto
        w-[75vw] max-w-screen h-[80vh] max-h-screen
        p-10 sm:p-10 md:p-12
      ">
      {children}
    </div>
  );
};

const SectionWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-transparent px-4">
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
            </ScrollBar>
          </ScreenWrapper>
        </div>
      </div>
    </>
  );
};

export default ScrollTestPage;
