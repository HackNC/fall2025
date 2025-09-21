import React from 'react';

// // Define the props interface here
// interface FrontPageProps {
//     scrollToSection: (id: string) => void;
// }

//the vertical space thing should be fixed after padding in section wrapper
// placeholder rn 
const AboutBorder: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="relative max-w-[90%] mx-auto my-auto">
            {/* Desktop version with border */}
            <div className="hidden md:block relative w-full h-full">
                <img
                    src="./ourBoardPageAssets/lead_border.png"
                    alt="lead border"
                    className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-base">
                    <div className="text-center max-w-[80%] text-sm overflow-y-auto max-h-full">
                        {children}
                    </div>
                </div>
            </div>

            {/* Mobile version without border */}
            <div className="flex flex-col justify-center items-center w-full max-w-full px-4 md:hidden">
                {children}
            </div>
        </div>
    );
};


const AboutPage: React.FC = () => {
    return (
        <div
            id="AboutPage"
            className="md:flex flex-col items-center justify-center md:max-w-[90%]"
        >
            <div className="flex flex-col text-primary-light text-shadow-font-purple tracking-widest max-w-3xl">
                {/* Page Title */}
                <div className="flex justify-center mt-20 md:mt-0">
                    <h1 className="text-font-purple text-shadow-font-purple justify-center">ABOUT</h1>
                </div>


                <div className="flex md:flex-row flex-col justify-center items-center mb-4">
                    <div className="">
                        <AboutBorder>
                            <p className="justify-center">
                                HackNC is a weekend for students of all skill levels to broaden their talents.
                                Your challenge is to make an awesome project in just 24 hours. You will have
                                access to hands-on tech workshops, sponsor networking, as well as exciting talks
                                about the awesome things happening right now with computer science and technology –
                                not to mention all of the free food, shirts, stickers, and swag!
                            </p>
                        </AboutBorder>
                    </div>
                    <div className="flex flex-col mr-0 md:-mr-20">
                        <img src="./about_page_graphic.svg" alt="About page graphic" className="max-w-[50vh] max-h-[50vh]" />
                    </div>
                </div>


            </div>
        </div>
    );
};




export default AboutPage;