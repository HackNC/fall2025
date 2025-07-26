// ScrollTestPage.tsx
import React from "react";
import ScrollBar from "./ScrollBar";

const ScrollTestPage: React.FC = () => {
  return (
    <ScrollBar>
      {/* Generate white-space filler across horizontal scroll */}
      {[...Array(10)].map((_, index) => (
        <section
          key={index}
          className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-white border-r border-gray-200"
        >
          <div className="text-gray-400 text-4xl font-bold">
            Page {index + 1}
          </div>
        </section>
      ))}
    </ScrollBar>
  );
};

export default ScrollTestPage;
