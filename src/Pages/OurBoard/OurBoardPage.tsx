import React from "react";
import Pages from "./PagesEnum"
import { scrollToSection } from "../../Main Website/MainWeb";

type TeamCardProps = {
  teamName: string;
  img: string;
  color: string;
  navID: string;
};

// console.log("Pages is:", Pages);
const leads = new CustomEvent("leads", { detail: "leads", bubbles: true });
const graphics = new CustomEvent("graphics", { detail: Pages.GRAPHICS, bubbles: true });
const experience = new CustomEvent("experience", { detail: Pages.EXPERIENCE, bubbles: true });
const operations = new CustomEvent("operations", { detail: Pages.OPERATIONS, bubbles: true });
const sponsorship = new CustomEvent("sponsorship", { detail: Pages.SPONSORSHIP, bubbles: true });
const development = new CustomEvent("development", { detail: Pages.DEVELOPMENT, bubbles: true });
const marketing = new CustomEvent("marketing", { detail: Pages.MARKETING, bubbles: true });

// const scrollToSection = (id: string) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
//   }
// };

const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color, navID }) => {
  // dispatch events for OurrPageComposed to listen and display appropriate pages
  const handleOurBoardClick = (navID: string) => {
    switch (navID) {
      case "leads":
        // console.log("handled button click leads")
        window.dispatchEvent(leads)
        // console.log("dispatched leads event")
        break;
      case "graphics":
        window.dispatchEvent(graphics)
        // console.log("dispatched graphics event")
        break;
      case "experience":
        window.dispatchEvent(experience)
        break;
      case "operations":
        window.dispatchEvent(operations)
        break;
      case "sponsorship":
        window.dispatchEvent(sponsorship)
        break;
      case "development":
        window.dispatchEvent(development)
        break;
      case "marketing":
        window.dispatchEvent(marketing)
        break;
      default:
        window.dispatchEvent(leads)
    }
    scrollToSection("MembersPage_1")
  };

  return (
    <button
      onClick={() => handleOurBoardClick(navID)}
      className={`w-48 h-24 flex items-center justify-center 
                text-center text-4xl font-jersey hover:bg-gradient-top
                bg-primary-dark bg-opacity-80 rounded-lg ${color} shadow-font-dark-blue`}
    >
      {teamName}
    </button>
  )
}

const OurBoardPage: React.FC = () => {
  return (
    <div id="OurBoardPage" className="w-full h-full py-20 md:p-4">
      <h1 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none tracking-[0.1em]">OUR BOARD</h1>
      <h3 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none mb-2 md:tracking-[0.1em]">
        <img className="inline-block h-[1em] mr-3 scale-x-[-1]" src="./ourBoardPageAssets/plain_arrow.png" />
        choose your faction
        <img className="inline-block h-[1em] ml-3" src="./ourBoardPageAssets/plain_arrow.png" />
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mt-[10vh]">
        <TeamCard teamName="leads" img="/EventPhoto.jpg" color="text-font-dark-blue text-shadow-font-dark-blue" navID="leads" />
        <TeamCard teamName="graphics" img="/EventPhoto.jpg" color="text-font-light-blue text-shadow-font-light-blue" navID="graphics" />
        <TeamCard teamName="hacker experience" img="/EventPhoto.jpg" color="text-font-cyan text-shadow-font-cyan" navID="experience" />
        <TeamCard teamName="event operations" img="/EventPhoto.jpg" color="text-font-green text-shadow-font-green" navID="operations" />
        <TeamCard teamName="sponsorship" img="/EventPhoto.jpg" color="text-font-orange text-shadow-font-orange" navID="sponsorship" />
        <TeamCard teamName="development" img="/EventPhoto.jpg" color="text-font-peach text-shadow-font-peach" navID="development" />
        <TeamCard teamName="marketing" img="/EventPhoto.jpg" color="text-font-pink text-shadow-font-pink" navID="marketing" />
      </div>
    </div>

  );
}

export default OurBoardPage;
