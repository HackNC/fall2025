import React, { useEffect, useRef, useState } from "react";

interface HorizontalScrollerProps {
  children: React.ReactNode;
}

const SPRITE_WIDTH = 100; // width of the character sprite file
const HORIZONTAL_OFFSET = 130; // padding from left and right side
const VERTICAL_OFFSET = 0; // adjusts banner and character vertical placement

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState(0);

  // These are now state variables so updates trigger re-render
  const [spriteLeft, setSpriteLeft] = useState(0);
  const [bannerVisibleWidth, setBannerVisibleWidth] = useState(0);

  // Update isMobile and scrollable width on resize
  useEffect(() => {
    const isMobileHandler = () => setIsMobile(window.innerWidth <= 768);
    const scrollHandler = () => {
      const el = containerRef.current;
      if (!el) return;
      setScrollLeft(el.scrollLeft);
      setScrollableWidth(el.scrollWidth - el.clientWidth);
    };

    const composedFunction = () => {
      isMobileHandler();
      scrollHandler();
    };

    scrollHandler();

    window.addEventListener("resize", composedFunction);
    return () => window.removeEventListener("resize", composedFunction);
  }, []);

  // Handle wheel scroll for horizontal scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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

  // Update spriteLeft and bannerVisibleWidth whenever scrollLeft or scrollableWidth changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || scrollableWidth === 0) {
      setSpriteLeft(0);
      setBannerVisibleWidth(0);
      return;
    }
    const newSpriteLeft =
      (scrollLeft / scrollableWidth) * (el.scrollWidth - 2 * HORIZONTAL_OFFSET) -
      SPRITE_WIDTH / 2;
    const newBannerVisibleWidth = newSpriteLeft + SPRITE_WIDTH / 2;

    setSpriteLeft(newSpriteLeft);
    setBannerVisibleWidth(newBannerVisibleWidth);
  }, [scrollLeft, scrollableWidth]);

  // Listen for custom scroll events to update progress bar
  useEffect(() => {
    const handleCustomScroll = (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>;
      const targetId = customEvent.detail.id;
      const target = document.getElementById(targetId);
      console.log("target", target);
      console.log("containerRef.current", containerRef.current);
      console.log("scrollRef.current", scrollRef.current);

      if (target && scrollRef.current && containerRef.current) {
        // update scrollLeft based on target position to update progress bar
        setTimeout(() => {
          if (containerRef.current) {
            setScrollLeft(containerRef.current.scrollLeft);
          }
        }, 0);
      }
    };

    window.addEventListener("customScrollTo", handleCustomScroll);
    return () => window.removeEventListener("customScrollToPage", handleCustomScroll);
  }, []);

  return (
    <div ref={scrollRef} className="w-full h-full relative">
      {/* Horizontally Scrolling Container */}
      <div
        ref={containerRef}
        className={`transition-transform duration-0 ease-linear ${isMobile ? "relative w-full flex flex-col" : "flex flex-row overflow-x-scroll"
          }`}
      >
        {children}
      </div>

      {/* Banner and Sprite, hidden on mobile */}
      <div className={isMobile ? "hidden" : ""}>
        {/* Banner */}
        <div
          className="absolute z-40 pointer-events-none"
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
          }}
        >
          <div
            className="absolute transition-transform"
            style={{
              bottom: "9px",
              left: `${spriteLeft}px`,
              width: `${SPRITE_WIDTH}px`,
            }}
          >
            <img
              src="/pixel_ram128.png"
              alt="Horizontal Scroll Bar Character"
              className="select-none"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
