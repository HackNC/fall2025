import React, { useState, useEffect } from 'react';
import { MAX_MOBILE_WIDTH } from '../Main Website/Utils';

// Type the imported images
type SponsorModule = { default: string };

const SponsorshipPage: React.FC = () => {
    // Import all sponsor images from the public directory
    const sponsors: Record<string, SponsorModule> = import.meta.glob(
        '/sponsors/*.{png,jpg,jpeg,svg}',
        { eager: true }
    );

    // Define the exact order of sponsor filenames
    const sponsorsOrder: string[] = [
        'microsoft.png', 'accenture.png', 'sdss.png',
        'fidelity.png', 'ddl.svg', 'lowes.png', // Corrected typo from .ong to .png
        'millennium.png', 'capitalone.png', 'pendo.png',
        'infosys.png', 'unc_cs_dept.png',
        // NOTE: The placeholder "/logos/pixel_ram128.png" is filtered out below.
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_MOBILE_WIDTH);

    const gridClass = isMobile ? 'grid grid-cols-1 gap-y-12' : 'grid grid-cols-3 gap-x-8';
    const divClass = 'px-4 sm:px-20 text-center';
    const imgClass = isMobile ? 'w-[50%] h-auto p-5 object-contain' : 'w-full h-auto px-5 py-2 object-contain';

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < MAX_MOBILE_WIDTH);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- NEW LOGIC FOR COLUMN DISTRIBUTION ---

    // 1. Define the logos for the prominent middle column
    const middleColumnSponsors = ['microsoft.png', 'fidelity.png', 'infosys.png'];

    // 2. Filter out the remaining logos for the side columns, removing placeholders
    const sideColumnSponsors = sponsorsOrder.filter(
        (fileName) => !middleColumnSponsors.includes(fileName) && !fileName.includes('pixel_ram')
    );

    // 3. Helper function to generate the JSX for a sponsor image
    // This avoids repetition and makes the code cleaner.
    const createSponsorImage = (fileName: string): JSX.Element | null => {
        const logo = Object.values(sponsors).find((s) => s.default.includes(fileName));

        if (!logo) {
            console.warn(`Sponsor logo not found for: ${fileName}`);
            return null; // Don't render if the logo isn't found
        }

        // Create cleaner alt text (e.g., "Microsoft" from "microsoft.png")
        const altText = fileName
            .split('/')
            .pop()! // Get final part of path
            .split('.')[0] // Remove extension
            .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

        return (
            <img
                key={fileName}
                src={logo.default}
                alt={`Sponsor: ${altText}`}
                className={imgClass}
            />
        );
    };

    // 4. Build the columns by mapping the arrays of filenames to JSX elements
    const columns: (JSX.Element | null)[][] = [[], [], []];

    // Populate the middle column (index 1) with its designated sponsors
    columns[1] = middleColumnSponsors.map(createSponsorImage);

    // Distribute the remaining sponsors evenly between the left (0) and right (2) columns
    sideColumnSponsors.forEach((fileName, index) => {
        if (index % 2 === 0) {
            columns[0].push(createSponsorImage(fileName)); // Even indices go to the left column
        } else {
            columns[2].push(createSponsorImage(fileName)); // Odd indices go to the right column
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
                {/* Column 2 (Middle) - This one is scaled up for emphasis */}
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