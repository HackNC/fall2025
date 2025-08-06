import React from "react";

type TeamCardProps = {
  teamName: string;
  img: string;
  color: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color }) => {
  return (
    <div className="m-2">
      <p className={ "text-center " + color }>{teamName}</p>
      <img src={img} alt={ teamName + " team picture" } className="m-auto w-[12rem] h-[9rem] rounded-3xl" />
    </div>
  );
}

const OurBoardPage: React.FC = () => {
    return (
        <div class="w-full h-full p-4">
            <h1 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none tracking-[0.1em]">OUR BOARD</h1>
            <h3 className="text-font-light-blue text-shadow-font-light-blue text-center leading-none mb-2 tracking-[0.1em]">
              <img className="inline-block h-[1em] mr-3 scale-x-[-1]" src="/page assets/plain arrow.png" />
              choose your faction
              <img className="inline-block h-[1em] ml-3" src="/page assets/plain arrow.png" />
            </h3>
            <div className="flex justify-center flex-wrap align-center">
              <TeamCard teamName="leads" img="/EventPhoto.jpg" color="text-font-dark-blue" />
              <TeamCard teamName="graphics" img="/EventPhoto.jpg" color="text-font-light-blue" />
              <TeamCard teamName="hacker experience" img="/EventPhoto.jpg" color="text-font-cyan" />
              <TeamCard teamName="event operations" img="/EventPhoto.jpg" color="text-font-green" />
              <TeamCard teamName="sponsorship" img="/EventPhoto.jpg" color="text-font-orange" />
              <TeamCard teamName="development" img="/EventPhoto.jpg" color="text-font-peach" />
              <TeamCard teamName="marketing" img="/EventPhoto.jpg" color="text-font-pink" />
            </div>
        </div>

    );
}

export default OurBoardPage;
