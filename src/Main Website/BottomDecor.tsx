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

        const handleScrollEvent = (event: Event) => {
            let timeout: NodeJS.Timeout;
            const customEvent = event as CustomEvent<String>;
            console.log("Received scroll event:", customEvent.detail);

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
            <img src="/arrows.svg" alt="game arrows" className="drop-shadow-2xl w-[12vh] h-[7vh] max-w-[100px] max-h-[80px]" />
            <img src="/button_green.svg" alt="green button" className="drop-shadow-2xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" />
            <img src="/button_pink.svg" alt="pink button" className="drop-shadow-2xl w-[10vh] h-[7vh] max-w-[80px] max-h-[80px]" />

            {scrollDirection === Directions.NEXT && (
                <img src="/joystick_pink.svg" alt="pink joystick" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[150px] max-h-[150px] -mt-10" />
            )}
            {scrollDirection === Directions.PREVIOUS && (
                <img src="/joystick_pink.svg" alt="pink joystick" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[150px] max-h-[150px] -mt-10 scale-x-[-1]" />
            )}
            {scrollDirection === Directions.STATIC && (
                <img src="/runner.gif" alt="running" className="drop-shadow-2xl w-[15vh] h-[15vh] max-w-[150px] max-h-[150px] -mt-10" />
            )}
        </div>
    );
};
export default BottomDecor;