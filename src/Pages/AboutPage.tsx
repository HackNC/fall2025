import React from 'react';

// // Define the props interface here
// interface FrontPageProps {
//     scrollToSection: (id: string) => void;
// }

//the vertical space thing should be fixed after padding in section wrapper
// placeholder rn 
const AboutBorder: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="relative w-full mx-auto my-auto">
            {/* Desktop version with border */}
            <div className="hidden md:block relative w-full h-[400px]">
                <img
                    src="./ourBoardPageAssets/lead_border.png"
                    alt="lead border"
                    className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-base">
                    <div className="text-center max-w-[80%] overflow-y-auto max-h-full">
                        {children}
                    </div>
                </div>
            </div>

            {/* Mobile version without border */}
            <div className="block md:hidden p-4 text-2xl text-center">
                {children}
            </div>
        </div>
    );
};


const AboutPage: React.FC = () => {
    return (
        <div
            id="AboutPage"
            className="flex items-center relative px-4 py-20 text-center"
        >
            <div className="flex flex-col text-primary-light text-shadow-font-purple tracking-widest max-w-3xl">
                {/* Page Title */}
                <div className="relative top-0 left-1/2 transform -translate-x-1/2">
                    <h1 className="">ABOUT</h1>
                </div>


                <div className="flex flex-row max-md:flex-col justify-evenly items-center mb-8">
                    <div className="mr-5">
                        <AboutBorder>
                            <p className="text-shadow-none text-center text-l">
                                HackNC is a weekend for students of all skill levels to broaden their talents.
                                Your challenge is to make an awesome project in just 24 hours. You will have
                                access to hands-on tech workshops, sponsor networking, as well as exciting talks
                                about the awesome things happening right now with computer science and technology –
                                not to mention all of the free food, shirts, stickers, and swag!
                            </p>
                        </AboutBorder>
                    </div>
                    <div className="-mr-20">
                        <img src="./about_page_graphic.svg" alt="About page graphic" className="max-w-[50vh] max-h-[50vh]" />
                    </div>
                </div>


            </div>
        </div>
    );
};



<AboutBorder>
    {/* Description Text */}
    <p className="text-shadow-none text-center text-l">
        HackNC is a weekend for students of all skill levels to broaden their talents.
        Your challenge is to make an awesome project in just 24 hours. You will have
        access to hands-on tech workshops, sponsor networking, as well as exciting talks
        about the awesome things happening right now with computer science and technology –
        not to mention all of the free food, shirts, stickers, and swag!
    </p>
</AboutBorder>

export default AboutPage;