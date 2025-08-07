// ScrollTestPage.tsx
import React from "react";
import ScrollBar from "./ScrollBar";
import FrontPage from "../Pages/FrontPage";
import Navigation from "../Pages/NavigationBar";
import OurDetailBoardPage from "../Pages/OurBoardDetailPage";

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
    <section className="w-[var(--arcade-w)] h-[var(--arcade-h)] flex flex-shrink-0 items-center justify-center bg-transparent px-4">
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
  const members = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/HackNC_Sprite.gif",
    "harrison": "/white_star_graphics.png",
  }
  const infoCardProps = {
    name: "UNI",
    position: "co-lead director",
    laziness: 4,
    strength: 5,
    catchphrase: "i am the strongest",
  }
  const ourBoardDetailProps = {
    mainImage: "/HackNC24.png",
    drawingImage: "/HackNC_Sprite.gif",
    infoCardProps: infoCardProps,
    members: members,
  }
  const ourBoardDetailStyles = {
    accentColor: "#c3d6ff",
    border: "/lead_border.png",
    filledStar: "/white_star_graphics.png",
    emptyStar: "/black_star_lead.png"
  }
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center bg-primary-light">
        <div className="flex flex-col">
          <Navigation />
          <ScreenWrapper>
            <ScrollBar>
              <SectionWrapper>
                <OurDetailBoardPage props={ourBoardDetailProps} styles={ourBoardDetailStyles} />
              </SectionWrapper>
              <SectionWrapper>
                <OurDetailBoardPage props={ourBoardDetailProps} styles={ourBoardDetailStyles} />
              </SectionWrapper>
              <SectionWrapper>
                <OurDetailBoardPage props={ourBoardDetailProps} styles={ourBoardDetailStyles} />
              </SectionWrapper>
              <SectionWrapper>
              <OurDetailBoardPage props={ourBoardDetailProps} styles={ourBoardDetailStyles} />
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
