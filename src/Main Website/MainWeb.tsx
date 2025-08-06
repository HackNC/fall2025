// ScrollTestPage.tsx
import React from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "../Pages/FrontPage";
import OurBoardPage from "../Pages/OurBoardPage";
import Navigation from "../Pages/NavigationBar";

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
    <section className="w-[var(--arcade-w)] h-[var(--arcade-h)] flex flex-shrink-0 items-center justify-center bg-transparent pb-16">
      {children}
    </section>
  );
}

const BottomDecor: React.FC = () => {
  return (
    <div
      className="flex justify-evenly items-end mx-auto"
      style={{ width: "calc(var(--arcade-w) * 0.80)" }}
    >
      <img src="/arrows.svg" alt="game arrows" className="drop-shadow-xl w-[12vh] h-[7vh] max-w-[100px] max-h-[80px]" style={{ display: 'block' }} />
      <img src="/button_green.svg" alt="green button" className="drop-shadow-xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" style={{ display: 'block' }} />
      <img src="/button_pink.svg" alt="pink button" className="drop-shadow-xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" style={{ display: 'block' }} />
      <img src="/joystick_pink.svg" alt="pink joystick" className="drop-shadow-xl w-[12vh] h-[10vh] max-w-[100px] max-h-[80px]" style={{ display: 'block' }} />
    </div>
  );
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
