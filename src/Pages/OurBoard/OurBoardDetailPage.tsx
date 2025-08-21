import React, { useMemo } from "react";
import { useState } from "react";
import '@fontsource/jersey-15';


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

interface OurBoardDetailStyles {
    accentColor: string;
    border: string;
    filledStar: string;
    emptyStar: string;
}

interface BorderAttrs {
    width: string;
    height: string;
    borderWidth: string;
    imageSlice: number;
    imageWidth: number;
}

// Add custom border to items
const BorderItem: React.FC<{ border: string, borderAttrs: BorderAttrs, className?: string, children: React.ReactNode, image?: boolean }> = ({ border, borderAttrs, className = "", children, image = false }) => {
    const { width, height, borderWidth, imageSlice, imageWidth } = borderAttrs;

    return (
        <div className={`relative ${className}`} style={{ width: width, height: height }}>
            <div
                className={`${image ? "z-10" : ""} w-full h-full absolute`}
                style={{
                    borderStyle: "solid",
                    borderWidth: borderWidth,
                    borderImageSource: `url(${border})`,
                    borderImageRepeat: "repeat",
                    borderImageSlice: imageSlice,
                    borderImageWidth: imageWidth,
                }} />
            <div className={`${image ? "w-full h-full flex justify-center items-center" : ""} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                {children}
            </div>
        </div>
    );
}

// Add glow to items and text
const GlowItem: React.FC<{ accentColor: string, className?: string, children: React.ReactNode, glowOnly?: boolean, cutout?: boolean }> = ({ accentColor, className, children, glowOnly = false, cutout = false }) => {
    if (cutout) {
        return (
            <div className="relative h-fit overflow-hidden">
                <div className="absolute w-full h-[80vh] bg-gradient-to-b from-gradient-top to-gradient-bottom bg-opacity-90 z-15 -translate-y-5"></div>
                <div
                    className={`z-15 ${className}`}
                    style={{
                        ...glowOnly ? {} : { color: `${accentColor}` },
                        filter: `drop-shadow(0 0 4px ${accentColor})`,
                    }}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            className={className}
            style={{
                ...glowOnly ? {} : { color: `${accentColor}` },
                filter: `drop-shadow(0 0 4px ${accentColor})`,
            }}>
            {children}
        </div>
    );
}

const CarouselItem: React.FC<{ relativeIdx: number, name: string, image: string, accentColor: string, styles: string }> = ({ relativeIdx, name, image, accentColor, styles }) => {
    return (
        <div className={`absolute transition-all duration-500 ease-in-out ${styles}`}>
            <GlowItem accentColor={accentColor} className="w-20 h-20 overflow-hidden rounded-lg bg-white">
                <img
                    src={image}
                    alt={`Portrait of ${name}`}
                    className="w-full h-full object-cover" />
            </GlowItem>
            <p className={`transition-opacity duration-700 ${relativeIdx === 0 ? "opacity-100" : "opacity-0"} text-white text-center`}>{name}</p>
        </div>
    );
}

const Carousel: React.FC<{ members: Record<string, string>, accentColor: string }> = ({ members, accentColor }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const memberNames = Object.keys(members);

    const handleNext = () => {
        setCurrentIndex(currentIndex === 0 ? memberNames.length - 1 : currentIndex - 1);
    };
    const handlePrev = () => {
        setCurrentIndex(currentIndex === memberNames.length - 1 ? 0 : currentIndex + 1);
    };

    const names = useMemo(() => {
        const idxs = [
            currentIndex - 2,
            currentIndex - 1,
            currentIndex,
            currentIndex + 1,
            currentIndex + 2,
        ]
        const newNames = idxs.map((idx) => {
            if (idx < 0) {
                return memberNames[idx + memberNames.length];
            } else if (idx > memberNames.length - 1) {
                return memberNames[idx - memberNames.length];
            } else {
                return memberNames[idx];
            }
        })
        return newNames;
    }, [currentIndex]);

    return (
        <>
            <GlowItem accentColor={accentColor} className="-mb-6 font-jersey text-[24px] text-center tracking-[0.15rem] leading-none">
                team members
            </GlowItem>
            <div className="flex justify-center items-center mb-12">
                <button onClick={handlePrev}>
                    <img
                        className="w-6 h-6 mr-3 transform rotate-180"
                        src="/ourBoardPageAssets/plain_arrow.png"
                        alt="Prev arrow"
                    />
                </button>
                <div className="w-[275px] h-[125px] mt-4 scale- -mx-2 flex items-center justify-center relative">
                    {names.map((name, idx) => {
                        const relativeIdx = idx - 2;

                        const positionClasses = {
                            "-2": "opacity-0 scale-[60%] -translate-x-[80px] z-5",
                            "-1": "opacity-100 scale-[80%] -translate-x-[80px] z-10",
                            "0": "opacity-100 scale-[100%] translate-x-0 z-20",
                            "1": "opacity-100 scale-[80%] translate-x-[80px] z-10",
                            "2": "opacity-0 scale-[60%] translate-x-[80px] z-5",
                        }[relativeIdx.toString()];

                        if (positionClasses) {
                            return <CarouselItem key={name} relativeIdx={relativeIdx} name={name} image={members[name]} accentColor={accentColor} styles={positionClasses} />;
                        }
                    })}
                </div>
                <button onClick={handleNext}>
                    <img
                        className="w-6 h-6 ml-2"
                        src="/ourBoardPageAssets/plain_arrow.png"
                        alt="Next arrow"
                    />
                </button>
            </div>
        </>
    );
};

const InfoCardStarField: React.FC<{ fieldName: string, value: number, max: number, filledStar: string, emptyStar: string }> = ({ fieldName, value, max, filledStar, emptyStar }) => {
    return (
        <>
            <dt>{fieldName}</dt>
            <dd className="flex gap-2">{
                Array.from({ length: max }).map((_, i) => {
                    return <img key={i} className="w-4" src={i < value ? filledStar : emptyStar} alt={i < value ? "Filled star" : "Empty star"} />
                })
            }</dd>
        </>
    );
};

const InfoCard: React.FC<{ props: InfoCardProps, styles: OurBoardDetailStyles }> = ({ props, styles }) => {
    const { name, position, laziness, strength, catchphrase } = props;
    const { accentColor, border, filledStar, emptyStar } = styles;

    return (
        <div>
            <div className="flex flex-col items-center">
                <GlowItem accentColor={accentColor} className="w-fit px-6 font-jersey text-[63px] text-white text-center tracking-[0.20rem] leading-none" glowOnly cutout>{name}</GlowItem>
                <GlowItem accentColor={accentColor} className={`-mt-2 font-jersey text-[21px] text-white text-center tracking-[0.10rem] leading-none`}>{position}</GlowItem>
            </div>
            <dl className="mx-4 mt-2 mb-6 grid grid-cols-2 gap-2 text-white">
                <InfoCardStarField fieldName="laziness" value={laziness} max={5} filledStar={filledStar} emptyStar={emptyStar} />
                <InfoCardStarField fieldName="strength" value={strength} max={5} filledStar={filledStar} emptyStar={emptyStar} />
                <dt>catchphrase</dt>
                <dl>"{catchphrase}"</dl>
            </dl>
        </div>
    );

};

const OurBoardDetailPage: React.FC<{ props: OurBoardDetailProps, styles: OurBoardDetailStyles }> = ({ props, styles }) => {
    const portraitBorderAttrs = { width: "270px", height: "300px", borderWidth: "32px", imageSlice: 384, imageWidth: 32 };
    const drawingBorderAttrs = { width: "160px", height: "150px", borderWidth: "32px", imageSlice: 256, imageWidth: 32 };
    const infoBorderAttrs = { width: "400px", height: "350px", borderWidth: "32px", imageSlice: 384, imageWidth: 32 };

    return (
        <div className="flex flex-row gap-4 mb-20">
            <div className="flex justify-center items-center">
                <div className="relative mt-12">
                    <BorderItem border={styles.border} borderAttrs={portraitBorderAttrs} image>
                        <img className="bg-white w-[220px] h-[270px] rounded-3xl object-cover" src={props.mainImage} alt={`Picture of ${props.infoCardProps.name}`} />
                    </BorderItem>
                    <div className="absolute -bottom-8 -right-8">
                        <BorderItem border={styles.border} borderAttrs={drawingBorderAttrs} className="z-30" image>
                            <img className="bg-white w-[120px] h-[120px] rounded-xl object-cover" src={props.drawingImage} alt={`Drawing by ${props.infoCardProps.name}`} />
                        </BorderItem>
                    </div>
                    <div className="flex gap-2 absolute bottom-[2px] left-4">{
                        Array.from({ length: 3 }).map((_, i) => {
                            return <img key={i} className="w-7 z-20" src={styles.filledStar} alt="Filled star" />
                        })
                    }</div>
                    <div className="flex gap-2 absolute top-[2px] right-4">{
                        Array.from({ length: 3 }).map((_, i) => {
                            return <img key={i} className="w-7 z-20" src={styles.filledStar} alt="Filled star" />
                        })
                    }</div>
                </div>
            </div>
            <div className="mt-12">
                <BorderItem border={styles.border} borderAttrs={infoBorderAttrs} className="border-t-transparent">
                    <InfoCard props={props.infoCardProps} styles={styles} />
                    <Carousel members={props.members} accentColor={styles.accentColor} />
                </BorderItem>
            </div>
        </div>
    );
};

export default OurBoardDetailPage;
