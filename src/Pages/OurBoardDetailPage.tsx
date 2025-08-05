import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import '@fontsource/jersey-15';


interface InfoCardProps {
    name: string;
    position: string;
    laziness: number;
    strength: number;
    catchphrase: string;
    members: Record<string, string>;
}


interface OurBoardDetailProps {
    mainImage: string;
    drawingImage: string;
    infoCardProps: InfoCardProps;
}


const MemberCarousel: React.FC<{members: Record<string, string>}> = ({members}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const memberKeys = Object.keys(members);

    const handleNext = () => {
        setCurrentIndex(currentIndex === 0 ? memberKeys.length - 1 : currentIndex - 1);
    };
    const handlePrev = () => {
        setCurrentIndex(currentIndex === memberKeys.length - 1 ? 0 : currentIndex + 1);
    };

    const keys = useMemo(() => {
        const idxs = [
            currentIndex - 2,
            currentIndex - 1,
            currentIndex,
            currentIndex + 1,
            currentIndex + 2,
        ]
        const newKeys = idxs.map((idx) => {
            if (idx < 0) {
                return memberKeys[idx + memberKeys.length];
            } else if (idx > memberKeys.length - 1) {
                return memberKeys[idx - memberKeys.length];
            } else {
                return memberKeys[idx];
            }
        })
        return newKeys;
    }, [currentIndex]);

    return (
        <>
            <div 
            className="text-white font-jersey text-[24px] tracking-[0.2rem] leading-none">
                team members
            </div>
            <div className="flex items-center gap-4">
            <button onClick={handlePrev}>
                <img
                className="transform rotate-180 w-6 h-6"
                src="/plain_arrow.png"
                alt="Back arrow"
                />
            </button>
            <div className="relative flex w-[250px] h-[125px] items-center justify-center overflow-hidden">
                {keys.map((key, i) => {
                    const relative = i - 2;

                    const positionClasses = {
                    "-2": "opacity-0 scale-50 -translate-x-20 z-0",
                    "-1": "opacity-100 scale-75 -translate-x-20 z-10",
                    "0": "opacity-100 scale-100 translate-x-0 z-20",
                    "1": "opacity-100 scale-75 translate-x-20 z-10",
                    "2": "opacity-0 scale-50 translate-x-20 z-0",
                    }[relative.toString()];

                    return (
                    <img
                        key={key}
                        src={members[key]}
                        alt={`Portrait of ${key}`}
                        className={`absolute transition-all duration-500 ease-in-out w-24 h-24 object-cover rounded-full ${positionClasses}`}
                    />
                    );
                })}
                </div>
            <button onClick={handleNext}>
                <img
                className="w-6 h-6"
                src="/plain_arrow.png"
                alt="Next arrow"
                />
            </button>
            </div>
        </>
    );
};


const InfoCard: React.FC<{props:InfoCardProps}> = ({props}) => {
    const {name, position, laziness, strength, catchphrase, members} = props;

    return (
        <div className="flex flex-col items-center rounded-3xl border-4 border-t-0 border-indigo-200">
            <div 
            className="text-white font-jersey text-[48px] tracking-[0.2rem] leading-none -my-2">
                {name}
            </div>
            <div 
            className="text-white font-jersey text-[24px] tracking-[0.2rem] leading-none">
                {position}
            </div>
            <dl className="w-full px-10 pt-5 pb-5 grid grid-cols-[40%_60%] text-white">
                <dt>laziness</dt>
                <dd className="flex">{
                    Array.from({ length: 5 }).map((_, i) => {
                        if (i < laziness) {
                            return <img key={i} className="w-6" src="public/white_star_graphics.png" alt="White Star" />
                        } else {
                            return <img key={i} className="w-6" src="public/black_star_lead.png" alt="Black Star" />
                        }
                    })
                }</dd>
                <dt>strength</dt>
                <dd className="flex">{
                    Array.from({ length: 5 }).map((_, i) => {
                        if (i < strength) {
                            return <img key={i} className="w-6" src="public/white_star_graphics.png" alt="White Star" />
                        } else {
                            return <img key={i} className="w-6" src="public/black_star_lead.png" alt="Black Star" />
                        }
                    })
                }</dd>
                <dt>catchphrase</dt>
                <dd>"{catchphrase}"</dd>
            </dl>
            <MemberCarousel members={members} />
        </div>
    )
}

const OurBoardDetailPage: React.FC<{props: OurBoardDetailProps}> = ({props}) => {
    const {mainImage, drawingImage, infoCardProps} = props;
    const drawingRef = useRef<HTMLImageElement>(null);
    const [drawingSize, setDrawingSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
    const el = drawingRef.current;
    if (el) {
        const updateSize = () => {
        setDrawingSize({
            width: el.offsetWidth,
            height: el.offsetHeight,
        });
        };

        // Wait for image to load
        if (el.complete) {
        updateSize();
        } else {
        el.onload = updateSize;
        }
    }
    }, []);

    return (
        <div className="w-full flex justify-center gap-5">
            <div className="flex justify-center items-center">
                <div className="w-[200px] h-fit relative">
                    <img
                    className="bg-white w-full h-[250px] rounded-xl border-4 border-indigo-200"
                    src={mainImage}
                    alt={`Picture of ${infoCardProps.name}`} />
                    <img
                    ref={drawingRef}
                    className={`bg-white w-24 h-24 rounded-xl border-4 border-indigo-200 absolute`}
                    style={{
                        bottom: `-${drawingSize.height * 0.5}px`,
                        right: `-${drawingSize.width * 0.25}px`,
                    }}
                    src={drawingImage}
                    alt={`Drawing by ${infoCardProps.name}`} />
                </div>
            </div>
            <div className="w-[400px] flex flex-col items-center">
                <InfoCard props={infoCardProps} />
            </div>
        </div>
    )
}

export default OurBoardDetailPage;
