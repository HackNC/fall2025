import React from "react";

type TeamCardProps = {
  teamName: string;
  img: string;
  color: string;
  navID: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color, navID }) => {

  // MAKE ENUM in Main(??) for all the teams, 
  // maybe put this func in main so that it can set page directly (did by passing in navID) 
  // make page and setPage that's a useState which will determine which board details page to render
  // this function will dispatch 
  const handleOurBoardClick = (navID: string) => {
    // window.dispatchEvent()
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
        <TeamCard teamName="hacker experience" img="/EventPhoto.jpg" color="text-font-cyan" navID="hacker experience" />
        <TeamCard teamName="event operations" img="/EventPhoto.jpg" color="text-font-green" navID="event operations" />
        <TeamCard teamName="sponsorship" img="/EventPhoto.jpg" color="text-font-orange" navID="sponsorship" />
        <TeamCard teamName="development" img="/EventPhoto.jpg" color="text-font-peach" navID="development" />
        <TeamCard teamName="marketing" img="/EventPhoto.jpg" color="text-font-pink" navID="marketing" />
      </div>
    </div>

  );
}

export default OurBoardPage;
