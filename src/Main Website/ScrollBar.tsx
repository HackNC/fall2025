import React, { useEffect, useRef, useState } from "react";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  // scrollToSection: (id: string) => void;
}

const SPRITE_WIDTH = 100; // width of the character sprite file
const HORIZONTAL_OFFSET = 130; // padding from left and right side
const VERTICAL_OFFSET = 0; // adjusts banner and character vertical placement

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  // arcade screen things
  // Get the computed value of --arcade-w
  const rootStyles = getComputedStyle(document.documentElement);
  const width = parseFloat(rootStyles.getPropertyValue('--arcade-w'));

  // If not set or invalid, fallback
  if (isNaN(width)) {
    console.error('Invalid --arcade-w value');
    return;
  }
  const arcadeW = (width / 100) * window.innerWidth;

  // useStates
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState(0);
  const [spriteLeft, setSpriteLeft] = useState(0);
  const [bannerVisibleWidth, setBannerVisibleWidth] = useState(0);

  // pink arrow navigation consts
  const [currentPage, setCurrentPage] = useState(0);
  const [startOfPage, setStartOfPage] = useState(true);
  const [endOfPage, setEndOfPage] = useState(false);

  // Custom events and useState for joystick scroll direction
  const prevScroll = useRef(0);
  const scrollingNext = new CustomEvent("scrollingNext", { detail: "next", bubbles: true });
  const scrollingPrev = new CustomEvent("scrollingPrev", { detail: "previous", bubbles: true });
  const noScrollEvent = new CustomEvent("noScrollEvent", { detail: "static", bubbles: true });
  const [isScrolling, setIsScrolling] = useState(false);


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

  // Handle wheel scroll, button scroll, and scroll direction for horizontal scroll 
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout>;


    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      el.scrollLeft += event.deltaX - event.deltaY;
      setScrollLeft(el.scrollLeft);
    };

    // Update pink arrow navigation existence
    // Track scroll position and determine if at end
    const handleButtonScroll = () => {
      setScrollLeft(el.scrollLeft);
      const visibleWidth = el.clientWidth;
      const scrollableWidth = el.scrollWidth;
      const scrolled = el.scrollLeft;

      // Check if at the end
      if (scrolled + visibleWidth >= scrollableWidth - 1) {
        setEndOfPage(true);
        setStartOfPage(false);
      } else if (scrolled == 0) {
        setStartOfPage(true);
      } else {
        setEndOfPage(false);
        setStartOfPage(false);
      }

      // Update current page based on scroll position
      const page = Math.round(scrolled / arcadeW);
      setCurrentPage(page);
    };

    const handleScrollDirection = () => {

      const currentScroll = el.scrollLeft;

      setIsScrolling(true);

      if (prevScroll.current < currentScroll) {
        window.dispatchEvent(scrollingNext);
        console.log("dispatching next")
      } else if (prevScroll.current > currentScroll) {
        window.dispatchEvent(scrollingPrev);
        console.log("dispatching prev");
      } else if (!isScrolling) {
        window.dispatchEvent(noScrollEvent);
      }
      // handleNoScrollEvent();

      console.log("dispatching static");
      prevScroll.current = currentScroll;

    }

    // const handleNoScrollEvent = () => {
    //   // Detect activity
    //   clearTimeout(timeout);
    //   timeout = setTimeout(() => {
    //     setIsScrolling(false);
    //   }, 30000);
    // };

    if (!isMobile) {
      el.addEventListener("wheel", handleWheel, { passive: false });
      el.addEventListener("scroll", handleButtonScroll);
      el.addEventListener("scroll", handleScrollDirection);
    }

    return () => {
      clearTimeout(timeout);
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleButtonScroll);
      el.removeEventListener("scroll", handleScrollDirection);
    };
  }, [isMobile, prevScroll]);

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
  }, [scrollLeft, scrollableWidth, arcadeW]);

  // Handle pink navigation button next
  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nextScrollLeft = container.scrollLeft + arcadeW;

    // Scroll one page forward (even if it reaches the end)
    container.scrollTo({
      left: nextScrollLeft,
      behavior: "smooth",
    });

    // Restrict currentPage to max
    const clampedPage = Math.min(currentPage + 1, Math.floor(maxScrollLeft / arcadeW));
    setCurrentPage(clampedPage);
  };
  // handle previous button
  const handlePrevious = () => {
    const container = containerRef.current;
    if (!container) return;

    const prevScrollLeft = Math.max(container.scrollLeft - arcadeW, 0);

    container.scrollTo({
      left: prevScrollLeft,
      behavior: 'smooth',
    });

    // Decrease currentPage, but not below 0
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <div className="flex justify-evenly items-center relative w-full h-full">
        {/* Previous Button */}
        {!isMobile && !startOfPage && (
          // Previous Pink Arrow Navigation 
          <button
            onClick={handlePrevious}
            className="bg-[url('/pink_arrow.png')] bg-cover bg-center w-[8%] h-[8%] absolute left-10 flex items-center justify-center transition-shadow scale-x-[-1] z-50"
          />
        )}
        {/* Scroll Container */}
        <div ref={scrollRef} className="w-full h-full">
          <div
            ref={containerRef}
            className={`transition-transform duration-0 ease-linear ${isMobile
              ? "relative w-full flex flex-col"
              : "flex flex-row overflow-x-scroll"}`}
          >
            {children}
          </div>
        </div>

        {/* Next Button */}
        {!isMobile && !endOfPage && (
          <button
            onClick={handleNext}
            className="bg-[url('/pink_arrow.png')] bg-cover bg-center w-[8%] h-[8%] absolute right-10 flex items-center justify-center transition-shadow"
          />
        )}
      </div>

      {/* Banner - hidden on mobile */}
      {!isMobile && (
        <div className="absolute z-40 pointer-events-none"
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
      )}

      {/* Character - hidden on mobile */}
      {!isMobile && (
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
      )}
    </>
  );
};
export default HorizontalScroller;