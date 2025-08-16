import React from "react";
import { Pages } from "./OurBoardPageComposed"

type TeamCardProps = {
  teamName: string;
  img: string;
  color: string;
  navID: string;
};

const leads = new CustomEvent("leads", { detail: Pages.LEADS, bubbles: true });
const graphics = new CustomEvent("graphics", { detail: Pages.GRAPHICS, bubbles: true });
const experience = new CustomEvent("experience", { detail: Pages.EXPERIENCE, bubbles: true });
const operations = new CustomEvent("operations", { detail: Pages.OPERATIONS, bubbles: true });
const sponsorship = new CustomEvent("sponsorship", { detail: Pages.SPONSORSHIP, bubbles: true });
const development = new CustomEvent("development", { detail: Pages.DEVELOPMENT, bubbles: true });
const marketing = new CustomEvent("marketing", { detail: Pages.MARKETING, bubbles: true });






const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color, navID }) => {
  const handleOurBoardClick = (navID: string) => {
    switch (navID) {
      case "leads":
        window.dispatchEvent(leads)
      case "graphics":
        window.dispatchEvent(graphics)
      case "experience":
        window.dispatchEvent(experience)
      case "operations":
        window.dispatchEvent(operations)
      case "sponsorship":
        window.dispatchEvent(sponsorship)
      case "development":
        window.dispatchEvent(development)
      case "marketing":
        window.dispatchEvent(marketing)
      default:
        window.dispatchEvent(leads)
    }
  };

  return (
    <button onClick={() => handleOurBoardClick(navID)} >
      <div className="m-2">
        <p className={"text-center " + color}>{teamName}</p>
        <img src={img} alt={teamName + " team picture"} className="m-auto w-[15rem] h-[10rem] rounded-3xl" />
      </div>
    </button>
  );
}

const OurBoardPage: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none tracking-[0.1em]">OUR BOARD</h1>
      <h3 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none mb-2 tracking-[0.1em]">
        <img className="inline-block h-[1em] mr-3 scale-x-[-1]" src="/page assets/plain arrow.png" />
        choose your faction
        <img className="inline-block h-[1em] ml-3" src="/page assets/plain arrow.png" />
      </h3>
      <div className="flex justify-center flex-wrap align-center">
        <TeamCard teamName="leads" img="/EventPhoto.jpg" color="text-font-dark-blue" navID="leads" />
        <TeamCard teamName="graphics" img="/EventPhoto.jpg" color="text-font-light-blue" navID="graphics" />
        <TeamCard teamName="hacker experience" img="/EventPhoto.jpg" color="text-font-cyan" navID="experience" />
        <TeamCard teamName="event operations" img="/EventPhoto.jpg" color="text-font-green" navID="operations" />
        <TeamCard teamName="sponsorship" img="/EventPhoto.jpg" color="text-font-orange" navID="sponsorship" />
        <TeamCard teamName="development" img="/EventPhoto.jpg" color="text-font-peach" navID="development" />
        <TeamCard teamName="marketing" img="/EventPhoto.jpg" color="text-font-pink" navID="marketing" />
      </div>
    </div>

  );
}

export default OurBoardPage;
