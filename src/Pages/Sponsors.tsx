import React, { useState, useEffect, type JSX } from 'react';
import { MAX_MOBILE_WIDTH } from '../Main Website/Utils';

const SponsorshipPage: React.FC = () => {
    // Define the exact order of sponsor filenames
    const sponsorsOrder: string[] = [
        'microsoft.png', 'accenture.png', 'sdss.png',
        'fidelity.png', 'ddl.svg', 'lowes.png',
        'millennium.png', 'capitalone.png', 'pendo.png',
        'infosys.png', 'unc_cs_dept.png',
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_MOBILE_WIDTH);

    const gridClass = isMobile ? 'grid grid-cols-1 gap-y-12' : 'grid grid-cols-3 gap-x-8';
    const divClass = 'px-4 sm:px-20 text-center';
    const imgClass = isMobile
        ? 'w-[50%] h-auto p-5 object-contain'
        : 'w-full h-auto px-5 py-2 object-contain';

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < MAX_MOBILE_WIDTH);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- NEW LOGIC FOR COLUMN DISTRIBUTION ---

    // 1. Define the logos for the prominent middle column
    const middleColumnSponsors = ['microsoft.png', 'fidelity.png', 'infosys.png'];

    // 2. Filter out the remaining logos for the side columns
    const sideColumnSponsors = sponsorsOrder.filter(
        (fileName) => !middleColumnSponsors.includes(fileName) && !fileName.includes('pixel_ram')
    );

    // 3. Helper function to generate the JSX for a sponsor image
    const createSponsorImage = (fileName: string): JSX.Element => {
        // Generate alt text
        const altText = fileName
            .split('.')[0]
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        return (
            <img
                key={fileName}
                src={`/sponsors/${fileName}`} // ✅ Direct reference to public folder
                alt={`Sponsor: ${altText}`}
                className={imgClass}
            />
        );
    };

    // 4. Build the columns
    const columns: JSX.Element[][] = [[], [], []];

    // Populate the middle column
    columns[1] = middleColumnSponsors.map(createSponsorImage);

    // Distribute side sponsors
    sideColumnSponsors.forEach((fileName, index) => {
        if (index % 2 === 0) {
            columns[0].push(createSponsorImage(fileName)); // Left
        } else {
            columns[2].push(createSponsorImage(fileName)); // Right
        }
    });

    return (
        <div id="SponsorshipPage" className={divClass}>
            <h1 className="text-[#F6B1B1] text-shadow-font-pink mb-10">SPONSORS</h1>
            <div className={gridClass}>
                {/* Column 1 (Left) */}
                <div className="flex flex-col items-center justify-around scale-95 bg-font-peach bg-opacity-65 rounded-xl shadow-font-purple shadow-md">
                    {columns[0]}
                </div>
                {/* Column 2 (Middle) */}
                <div className="flex flex-col items-center justify-around scale-110 bg-font-peach bg-opacity-65 rounded-xl shadow-font-light-blue shadow-md">
                    {columns[1]}
                </div>
                {/* Column 3 (Right) */}
                <div className="flex flex-col items-center justify-around scale-95 bg-font-peach bg-opacity-65 rounded-xl shadow-font-purple shadow-md">
                    {columns[2]}
                </div>
            </div>
        </div>
    );
};

export default SponsorshipPage;
