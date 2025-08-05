import React from "react";
import { useState } from "react";

interface InfoCardProps {
    name: string;
    position: string;
    laziness: number;
    strength: number;
    catchphrase: string;
}

interface OurBoardDetailProps {
    mainImage: string;
    drawingImage: string;
    infoCardProps: InfoCardProps;
    members: Record<string, string>;
}

const MemberCarousel: React.FC<{members: Record<string, string>}> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const members = props.members;
  const memberKeys = Object.keys(members);

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? memberKeys.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === memberKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentKey = memberKeys[currentIndex];
  const currentImg = members[currentKey];

  return (
    <div className="flex items-center gap-4">
      <button onClick={handleBack} aria-label="Previous member">
        <img
          className="transform rotate-180 w-6 h-6"
          src="/plain_arrow.png"
          alt="Back arrow"
        />
      </button>

      <div className="text-center">
        <img
          src={currentImg}
          alt={`Portrait of ${currentKey}`}
          className="w-24 h-24 object-cover mx-auto rounded"
        />
        <p className="mt-2 font-semibold">{currentKey}</p>
      </div>

      <button onClick={handleNext} aria-label="Next member">
        <img
          className="w-6 h-6"
          src="/plain_arrow.png"
          alt="Next arrow"
        />
      </button>
    </div>
  );
};


const InfoCard: React.FC<{props:InfoCardProps}> = (props) => {
    const {name, position, laziness, strength, catchphrase} = props.props;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white tracking-[0.2rem] drop-shadow-[0_350px_350px_rgba(0,0,255,0.25)]">{name}</h1>
            <h2>{position}</h2>
            <dl className="w-full px-10 grid grid-cols-[40%_60%] text-white">
                <dt>laziness</dt>
                <dd className="flex">{
                    Array.from({ length: 5 }).map((_, i) => {
                        if (i < laziness) {
                            return <img className="w-6" src="public/white_star_graphics.png" alt="White Star" />
                        } else {
                            return <img className="w-6" src="public/black_star_lead.png" alt="Black Star" />
                        }
                    })
                }</dd>
                <dt>strength</dt>
                <dd className="flex">{
                    Array.from({ length: 5 }).map((_, i) => {
                        if (i < strength) {
                            return <img className="w-6" src="public/white_star_graphics.png" alt="White Star" />
                        } else {
                            return <img className="w-6" src="public/black_star_lead.png" alt="Black Star" />
                        }
                    })
                }</dd>
                <dt>catchphrase</dt>
                <dd>"{catchphrase}"</dd>
            </dl>
        </div>
    )
}

const OurBoardDetailPage: React.FC<{props: OurBoardDetailProps}> = (props) => {
    const {mainImage, drawingImage, infoCardProps, members} = props.props;

    return (
        <div className="w-full flex justify-center gap-10">
            <div className="w-[30%] relative">
                <img 
                className="bg-white w-full h-auto rounded-xl border-4 border-indigo-200"
                src={mainImage} 
                alt={`Picture of ${infoCardProps.name}`} />
                <img 
                className="bg-white w-24 h-auto rounded-xl border-4 border-indigo-200 absolute -bottom-6 -right-12"
                src={drawingImage} 
                alt={`Drawing by ${infoCardProps.name}`} />
            </div>
            <div className="w-[50%] flex flex-col items-center">
                <InfoCard props={infoCardProps} />
                <MemberCarousel members={members} />
            </div>
        </div>
    )
}

export default OurBoardDetailPage;
