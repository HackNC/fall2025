import React from 'react';

// // Define the props interface here
// interface FrontPageProps {
//     scrollToSection: (id: string) => void;
// }

//the vertical space thing should be fixed after padding in section wrapper
// placeholder rn 
const AboutPage: React.FC = () => {
    return (
        <div
            id="AboutPage"
            className="flex items-center justify-center relative px-4 py-20 text-center"
        >
            <div className="flex flex-col text-primary-light text-shadow-font-purple tracking-widest max-w-4xl">
                {/* Page Title */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <h1 className="">About</h1>
                </div>

                {/* Description Text */}
                <p className="text-shadow-none text-left text-2xl max-w-[100vh] leading-relaxed pt-[5vh]">
                    HackNC is a weekend for students of all skill levels to broaden their talents.
                    Your challenge is to make an awesome project in just 24 hours. You will have
                    access to hands-on tech workshops, sponsor networking, as well as exciting talks
                    about the awesome things happening right now with computer science and technology –
                    not to mention all of the free food, shirts, stickers, and swag!
                </p>
            </div>

            {/* Scroll Button Placeholder */}
            {/*
            <button
                onClick={() => scrollToSection("FrontPage")}
                className="bg-[url('/pink_arrow.png')] bg-cover bg-center w-[8%] h-[8%] absolute right-10 top-1/2 transform -translate-y-1/2 transition-shadow"
            />
            */}
        </div>
    );
};
export default AboutPage;