import React, { useEffect, useRef, useState } from "react";

interface HorizontalScrollerProps {
  children: React.ReactNode;
}

const SPRITE_WIDTH = 100; // width of the character sprite file
const HORIZONTAL_OFFSET = 30; // padding from left and right side
const VERTICAL_OFFSET = 0; // adjusts banner and character vertical placement

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [maxSpriteTravel, setMaxSpriteTravel] = useState(0);

  useEffect(() => {
    const updateTravel = () => {
      const maxTravel =
        window.innerWidth - 2 * HORIZONTAL_OFFSET - SPRITE_WIDTH;
      setMaxSpriteTravel(maxTravel);
      setIsMobile(window.innerWidth <= 768);
    };

    updateTravel();
    window.addEventListener("resize", updateTravel);
    return () => window.removeEventListener("resize", updateTravel);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Update scroll progress and any UI
    const totalScrollWidth = el.scrollWidth;
    const viewportWidth = el.offsetWidth;
    const maxHorizontalScroll = totalScrollWidth - viewportWidth;

    document.body.style.height = `${maxHorizontalScroll + window.innerHeight
      }px`;

    const onScroll = (event: Event) => {
      const y = window.scrollY;
      setScrollY(y);
      const progress = Math.min(y / maxHorizontalScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    // window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [isMobile]);

  const spriteLeft = HORIZONTAL_OFFSET + scrollProgress * maxSpriteTravel;
  const bannerVisibleWidth = spriteLeft + SPRITE_WIDTH / 2;

  return (
    <>
      {/* Horizontally Scrolling Container */}
      <div
        ref={containerRef}
        id="screens-container"
        className={`transition-transform duration-0 ease-linear ${isMobile
          ? "relative w-full flex flex-col"
          : "flex flex-row"
          }`}
        style={{
          transform: isMobile ? "none" : `translateX(-${scrollY}px)`,
        }}
      >
        {children}
      </div>

      {/* Banner (reveals itself behind the character) */}
      {!isMobile && (
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            bottom: `calc(16px + ${VERTICAL_OFFSET}px)`,
            left: `${HORIZONTAL_OFFSET}px`,
            right: `${HORIZONTAL_OFFSET}px`,
            height: "32px",
          }}
        >
          <div
            className="h-full overflow-hidden absolute left-0"
            style={{ width: `${bannerVisibleWidth}px` }}
          >
            <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center flex items-center justify-start pl-4 font-semibold tracking-widest uppercase"></div>
          </div>
        </div>
      )}

      {/* Character */}
      {!isMobile && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            bottom: `calc(2px + ${VERTICAL_OFFSET}px)`,
            left: `${HORIZONTAL_OFFSET}px`,
            right: `${HORIZONTAL_OFFSET}px`,
          }}
        >
          <div
            className="absolute transition-transform"
            style={{
              bottom: "3px",
              left: `${spriteLeft}px`,
              width: `${SPRITE_WIDTH}px`,
            }}
          >
            <img
              src="/HackNC_Sprite.gif"
              alt="Horizontal Scroll Bar Character"
              className="select-none"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HorizontalScroller;
