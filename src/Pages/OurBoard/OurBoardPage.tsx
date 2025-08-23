import React from "react";
import Pages from "./PagesEnum"

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

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
};

const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color, navID }) => {
  // dispatch events for OurrPageComposed to listen and display appropriate pages
  const handleOurBoardClick = (navID: string) => {
    switch (navID) {
      case "leads":
        // console.log("handled button click leads")
        window.dispatchEvent(leads)
        // console.log("dispatched leads event")
        scrollToSection(navID)
        break;
      case "graphics":
        window.dispatchEvent(graphics)
        scrollToSection(navID)
        // console.log("dispatched graphics event")
        break;
      case "experience":
        window.dispatchEvent(experience)
        scrollToSection(navID)
        break;
      case "operations":
        window.dispatchEvent(operations)
        scrollToSection(navID)
        break;
      case "sponsorship":
        window.dispatchEvent(sponsorship)
        scrollToSection(navID)
        break;
      case "development":
        window.dispatchEvent(development)
        scrollToSection(navID)
        break;
      case "marketing":
        window.dispatchEvent(marketing)
        scrollToSection(navID)
        break;
      default:
        window.dispatchEvent(leads)
        scrollToSection(navID)
    }
  };

  return (
    <button
      onClick={() => handleOurBoardClick(navID)}
      className={`w-48 h-24 flex items-center justify-center 
                text-center text-4xl font-jersey 
                bg-primary-dark rounded-full ${color}`}
    >
      {teamName}
    </button>
  )
}

const OurBoardPage: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none tracking-[0.1em]">OUR BOARD</h1>
      <h3 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none mb-2 tracking-[0.1em]">
        <img className="inline-block h-[1em] mr-3 scale-x-[-1]" src="/ourBoardPageAssets/plain_arrow.png" />
        choose your faction
        <img className="inline-block h-[1em] ml-3" src="/ourBoardPageAssets/plain_arrow.png" />
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mt-[10vh]">
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
