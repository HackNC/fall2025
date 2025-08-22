import React from "react";

// Define the props interface 
interface FrontPageProps {
    scrollToSection: (id: string) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ scrollToSection }) => {

    return (
        <div id="FrontPage" className="flex text-center items-center justify-center">
            <div className="flex flex-col text-center items-center font-jersey tracking-widest"
                style={{ gap: "2.5rems" }}>
                <h1 className="text-9xl text-font-light-blue text-shadow-accent-blue">HACKNC 2025</h1>
                <h3 className="text-2xl text-primary-light">Oct 10-13, 2025 • In-person at UNC Chapel Hill</h3>
                <img src="/logos/hacknc_logo_no_text_ glow.svg" alt="hacknc 2025 logo" className="scale-x-[-1] max-w-[90%] max-h-[90%]" />
                <div className="flex items-center justify-center space-x-4">
                    <img src="/frontPageAssets/plain_arrow_pink.png" alt="pink arrow" className="max-w-[4%] max-h-[4%]" />
                    <button id="play-now" onClick={() => scrollToSection("AboutPage")} className="text-7xl tracking-widest text-primary-light text-shadow-accent-pink hover:text-shadow-font-dark-blue font-thin mb-1">
                        play now
                    </button>
                    <img src="/frontPageAssets/plain_arrow_pink.png" alt="pink arrow" className="max-w-[4%] max-h-[4%] scale-x-[-1]" />
                </div>
            </div>
        </div >
    );
}
export default FrontPage;