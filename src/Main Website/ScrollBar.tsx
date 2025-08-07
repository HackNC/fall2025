import React, { useEffect, useMemo, useRef, useState } from "react";

interface HorizontalScrollerProps {
  children: React.ReactNode;
}

const SPRITE_WIDTH = 100; // width of the character sprite file
const HORIZONTAL_OFFSET = 130; // padding from left and right side
const VERTICAL_OFFSET = 0; // adjusts banner and character vertical placement

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState(0);

  // Handle isMobile and scrollableWidth when the window resizes
  useEffect(() => {
    const el = containerRef.current;
      if (!el) return;

    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 768);
      setScrollLeft(el.scrollLeft)
      setScrollableWidth(el.scrollWidth - el.clientWidth);
    }

    resizeHandler();

    const resizeObserver = new ResizeObserver(resizeHandler);
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [])

  // Handle horizontal scrolling and scrollLeft
  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;
    // enabling horizontal vs vertical scrolling depending on screen size
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      el.scrollLeft += event.deltaX - event.deltaY;
      setScrollLeft(el.scrollLeft);
    };

    if (!isMobile) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => el.removeEventListener("wheel", handleWheel);
  }, [isMobile]);

  // Handle changes to the scrollbar
  const [spriteLeft, bannerVisibleWidth] = useMemo(() => {
    const el = scrollRef.current;
    let newSpriteLeft, newBannerVisibleWidth;

    if (!el) return [0, 0];
    newSpriteLeft = (scrollLeft / scrollableWidth) * (el.scrollWidth - 2 * HORIZONTAL_OFFSET) - SPRITE_WIDTH / 2;
    newBannerVisibleWidth = newSpriteLeft + SPRITE_WIDTH / 2;

    return [newSpriteLeft, newBannerVisibleWidth];
  }, [scrollLeft, scrollableWidth, scrollRef]);

  return (
    <div ref={scrollRef} className="w-100 h-100 relative">
      {/* Horizontally Scrolling Container */}
      <div
        ref={containerRef}
        className={`transition-transform duration-0 ease-linear ${isMobile
          ? "relative w-full flex flex-col"
          : "flex flex-row overflow-x-scroll"
          }`}
      >
        {children}
      </div>
      <div className={isMobile ? "hidden" : ""}>
        {/* Banner (reveals itself behind the character) */}
        <div
          className="absolute z-40 pointer-events-none"
          style={{
            bottom: `calc(16px + ${VERTICAL_OFFSET}px)`,
            left: `${HORIZONTAL_OFFSET}px`,
            right: `${HORIZONTAL_OFFSET}px`,
            height: "32px",
          }}>
          <div
            className="h-full overflow-hidden absolute left-0"
            style={{ width: `${bannerVisibleWidth}px` }}>
            <div className="h-full w-full bg-gradient-to-r from-gradient-top via-accent-purple to-accent-pink text-primary-light flex items-center justify-start pl-4 tracking-widest uppercase rounded-3xl"></div>
          </div>
        </div>
        {/* Character */}
        <div
          className="absolute z-50 pointer-events-none"
          style={{
            bottom: `calc(2px + ${VERTICAL_OFFSET}px)`,
            left: `${HORIZONTAL_OFFSET}px`,
            right: `${HORIZONTAL_OFFSET}px`,
          }}>
          <div
            className="absolute transition-transform"
            style={{
              bottom: "3px",
              left: `${spriteLeft}px`,
              width: `${SPRITE_WIDTH}px`,
            }}>
            <img
              src="/HackNC_Sprite.gif"
              alt="Horizontal Scroll Bar Character"
              className="select-none"
              style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
