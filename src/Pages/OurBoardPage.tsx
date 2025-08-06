import React from "react";

type TeamCardProps = {
  teamName: string;
  img: string;
  color: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ teamName, img, color }) => {
  return (
    <div className="m-2">
      <h3 className={ "text-center text-accent-" + color }>{teamName}</h3>
      <img src={img} alt={ teamName + " team picture" } className="w-[12rem] h-[9rem] rounded-3xl" />
    </div>
  );
}

const OurBoardPage: React.FC = () => {
    return (
        <div class="w-full h-full p-4">
            <h1 className="text-primary-light text-center leading-none tracking-[0.1em]">OUR BOARD</h1>
            <h2 className="text-primary-light text-center leading-none mb-2 tracking-[0.1em]">
              <img className="inline-block h-[1em] mr-3 scale-x-[-1]" src="/page assets/plain arrow.png" />
              choose your faction
              <img className="inline-block h-[1em] ml-3" src="/page assets/plain arrow.png" />
            </h2>
            <div className="flex justify-center flex-wrap">
              <TeamCard teamName="leads" img="/EventPhoto.jpg" color="blue" />
              <TeamCard teamName="graphics" img="/EventPhoto.jpg" color="blue" />
              <TeamCard teamName="hacker experience" img="/EventPhoto.jpg" color="blue" />
              <TeamCard teamName="event operations" img="/EventPhoto.jpg" color="green" />
              <TeamCard teamName="sponsorship" img="/EventPhoto.jpg" color="yellow" />
              <TeamCard teamName="development" img="/EventPhoto.jpg" color="yellow" />
              <TeamCard teamName="marketing" img="/EventPhoto.jpg" color="pink" />
            </div>
        </div>

    );
}

export default OurBoardPage;
