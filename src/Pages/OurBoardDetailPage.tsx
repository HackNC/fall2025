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

interface OurBoardDetailStyles {
    accentColor: string;
    whiteStar: string;
    blackStar: string;
}


const MemberCarousel: React.FC<{members: Record<string, string>, accentColor: string}> = ({members, accentColor}) => {
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
                className={`font-jersey text-[24px] tracking-[0.15rem] leading-none -my-2`}
                style={{ 
                    color: `${accentColor}`,
                    filter: `drop-shadow(0 0 4px ${accentColor})`, 
                }}
            >
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
            <div className="relative flex mt-1 w-[250px] h-[125px] items-center justify-center">
                {keys.map((key, i) => {
                const relative = i - 2;

                const positionClasses = {
                "-2": "opacity-0 scale-50 -translate-x-20 z-5",
                "-1": "opacity-100 scale-75 -translate-x-20 z-10",
                "0": "opacity-100 scale-100 translate-x-0 z-20",
                "1": "opacity-100 scale-75 translate-x-20 z-10",
                "2": "opacity-0 scale-50 translate-x-20 z-5",
                }[relative.toString()];

                return (
                    <div key={key} className={`absolute transition-all duration-1000 ease-in-out ${positionClasses}`}>
                        <div 
                            className="w-20 h-20 rounded-lg overflow-hidden bg-white"
                            style={{
                                filter: `drop-shadow(0 0 4px ${accentColor})`,
                            }}
                        >
                            <img
                                src={members[key]}
                                alt={`Portrait of ${key}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className={`mt-1 text-white text-center transition-opacity duration-700 ${relative === 0 ? "opacity-100" : "opacity-0"}`}>{key}</p>
                    </div>
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


const InfoCard: React.FC<{props: InfoCardProps, styles: OurBoardDetailStyles}> = ({props, styles}) => {
    const {name, position, laziness, strength, catchphrase, members} = props;
    const {accentColor, whiteStar, blackStar} = styles;

    return (
        <div className="w-[350px] py-6 border-4 border-t-0 border-indigo-200 rounded-3xl">
            <div className="-mt-10 flex flex-col items-center">
                <div 
                    className="text-white font-jersey text-[48px] tracking-[0.25rem] leading-none -my-2"
                    style={{
                        filter: `drop-shadow(0 0 4px ${accentColor})`,
                    }}
                >
                    {name}
                </div>
                <div 
                    className={`font-jersey text-[24px] tracking-[0.15rem] leading-none`}
                    style={{ 
                        color: `${accentColor}`,
                        filter: `drop-shadow(0 0 4px ${accentColor})`,
                    }}
                >
                    {position}
                </div>
                <dl className="w-[250px] pt-4 pb-8 grid grid-cols-[50%_50%] gap-2 text-white">
                    <dt>laziness</dt>
                    <dd className="flex gap-2">{
                        Array.from({ length: 5 }).map((_, i) => {
                            if (i < laziness) {
                                return <img key={i} className="w-4" src={whiteStar} alt="White Star" />
                            } else {
                                return <img key={i} className="w-4" src={blackStar} alt="Black Star" />
                            }
                        })
                    }</dd>
                    <dt>strength</dt>
                    <dd className="flex gap-2">{
                        Array.from({ length: 5 }).map((_, i) => {
                            if (i < strength) {
                                return <img key={i} className="w-4" src={whiteStar} alt="White Star" />
                            } else {
                                return <img key={i} className="w-4" src={blackStar} alt="Black Star" />
                            }
                        })
                    }</dd>
                    <dt>catchphrase</dt>
                    <dd>"{catchphrase}"</dd>
                </dl>
                <MemberCarousel members={members} accentColor={accentColor} />
            </div>
        </div>
    )
}

const OurBoardDetailPage: React.FC<{props: OurBoardDetailProps, styles: OurBoardDetailStyles}> = ({props, styles}) => {
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
        <div className="w-full flex md:flex-row justify-center gap-24 pb-6">
            <div className="flex justify-center items-center">
                <div className="w-[200px] h-[225px] relative">
                    <img
                    className="bg-white w-full h-full rounded-xl border-4 border-indigo-200"
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
            <InfoCard props={infoCardProps} styles={styles} />
        </div>
    )
}

export default OurBoardDetailPage;
