import React, { useEffect, useRef, useState } from "react";
// for a standardized implementation of the isMobile state, use this:
/*
const [isMobile, setIsMobile] = makeIsMobileState((nextValue) => {
    state change handler
}, <dependencies>);
*/
// this will have it update automatically and call the state change handler 
// when there is an update to the isMobile state

// coordinate with screens.md in tailwind config
const MAX_MOBILE_WIDTH = 1024;

// get new instance of isMobile state. Calls onChange(nextValue) when isMobile 
// is recalculated. On initialization, onChange is called with the initial 
// value. onChange is optional. deps is the dependencies that the onChange 
// handler adds
function makeIsMobileState(onChange: { (): void; (nextValue: any): void; } | undefined, deps: React.DependencyList | undefined) {
  const getNextIsMobile = () => window.innerWidth < MAX_MOBILE_WIDTH;
  const [isMobile, setIsMobile] = useState(getNextIsMobile());
  const update = (onChange != undefined) ? onChange : () => null;

  // Update isMobile and scrollable width on resize
  useEffect(() => {
    const isMobileHandler = () => {
      const nextIsMobile = getNextIsMobile();
      setIsMobile(nextIsMobile);
      return nextIsMobile;
    }
    const composedFunction = () => {
      const nextValue = isMobileHandler();
      update(nextValue);
    };

    update(isMobile);

    window.addEventListener("resize", composedFunction);
    return () => window.removeEventListener("resize", composedFunction);
  }, deps);

  return [isMobile, setIsMobile];
}

export {
  MAX_MOBILE_WIDTH,
  makeIsMobileState,
}
