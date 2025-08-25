import { useEffect, useState, useRef } from "react";

enum Directions {
    NEXT = "next",
    PREVIOUS = "previous",
    STATIC = "static",
}

const BottomDecor = () => {
    const [scrollDirection, setScrollDirection] = useState<Directions>(Directions.STATIC);
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        console.log("Scroll Direction Changed:", scrollDirection);
    }, [scrollDirection]);

    useEffect(() => {
        // const container = containerRef.current ?? document; // Or container if you're targeting specific ref

        // maybe just put Event as CustomEvent and get rid of type casting
        const handleScrollEvent = (event: Event) => {
            let timeout: ReturnType<typeof setTimeout>;
            timeout = 3000
            const customEvent = event as CustomEvent<String>;
            // console.log("Received scroll event:", customEvent.detail);

            if (customEvent.detail === "next") {
                setScrollDirection(Directions.NEXT);
            } else if (customEvent.detail === "previous") {
                setScrollDirection(Directions.PREVIOUS);
            } else if (customEvent.detail == "static") {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setScrollDirection(Directions.STATIC);
                }, 3000);
            }
        };

        window.addEventListener("scrollingNext", handleScrollEvent);
        window.addEventListener("scrollingPrev", handleScrollEvent);
        window.addEventListener("noScrollEvent", handleScrollEvent);


        return () => {
            window.removeEventListener("scrollingNext", handleScrollEvent);
            window.removeEventListener("scrollingPrev", handleScrollEvent);
            window.removeEventListener("noScrollEvent", handleScrollEvent);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex justify-evenly items-end mx-auto"
            style={{ width: "calc(var(--arcade-w) * 0.80)" }}
        >
            <img src="./frontPageAssets/arrows.svg" alt="game arrows" className="drop-shadow-2xl w-[12vh] h-[7vh] max-w-[100px] max-h-[80px]" />
            <img src="./frontPageAssets/button_green.svg" alt="green button" className="drop-shadow-2xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" />
            <img src="./frontPageAssets/button_pink.svg" alt="pink button" className="drop-shadow-2xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" />

            {scrollDirection === Directions.NEXT && (
                <img src="./frontPageAssets/joystick_pink_right.svg" alt="pink joystick leaning to right" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[150px] max-h-[150px] -mt-10" />
            )}
            {scrollDirection === Directions.PREVIOUS && (
                <img src="./frontPageAssets/joystick_pink_left.svg" alt="pink joystick leaning left" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[160px] max-h-[160px] -mt-10" />
            )}
            {scrollDirection === Directions.STATIC && (
                <img src="./frontPageAssets/joystick_vertical.svg" alt="joystick vertical" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[150px] max-h-[150px] -mt-10" />
            )}
        </div>
    );
};
export default BottomDecor;