import React from 'react';

// // Define the props interface here
// interface FrontPageProps {
//     scrollToSection: (id: string) => void;
// }

//the vertical space thing should be fixed after padding in section wrapper
// placeholder rn 
const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className="flex text-center items-center justify-center">
            <div className="flex flex-col text-center text-primary-light text-shadow-font-purple tracking-widest mb-60">
                <div className="items-start mb-10">
                    <h1 className="">About</h1>
                </div>
                <p className="text-shadow-none text-start max-w-[100vh] text-2xl">
                    HackNC is a weekend for students of all skill levels to broaden their talents.
                    Your challenge is to make an awesome project in just 24 hours. You will have
                    access to hands-on tech workshops, sponsor networking, as well as exciting talks
                    about the awesome things happening right now with computer science and technology –
                    not to mention all of the free food, shirts, stickers, and swag!
                </p>
            </div>

            {/* FIX THIS LATER<
            <button
                onClick={() => scrollToSection("FrontPage")} className="bg-[url('/pink_arrow.png')] bg-cover bg-center w-[8%] h-[8%] absolute center-10 right-10 flex items-center justify-center transition-shadow">
            </button> */}
        </div >
    )
};
export default AboutPage;