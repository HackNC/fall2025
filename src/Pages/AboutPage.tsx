import React from 'react';

// placeholder rn 
const AboutPage: React.FC = () => {
    return (
        <div id="AboutPage" className="flex flex-col text-center items-center" style={{ gap: "10%" }}>
            <h1 className="text-xl font-bold mb-4" style={{ color: "var(--font-light-blue)", textShadow: "2px 2px 4px var(--font-dark-blue)" }}>
                About HackNC 2025
            </h1>
            <p className="text-lg mb-4" style={{ color: "var(--font-cyan)" }}>
                HackNC is the largest hackathon in North Carolina, bringing together students from all over to innovate and create.
            </p>
            <a href="/register" className="text-2xl font-semibold mb-2" style={{ color: "var(--font-green)" }}>
                Register Now!
            </a>
        </div>
    );
}

export default AboutPage;