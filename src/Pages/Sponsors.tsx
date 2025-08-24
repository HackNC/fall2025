import React, { useState, useEffect } from 'react';
import { makeIsMobileState, MAX_MOBILE_WIDTH } from '../Main Website/Utils';

const SponsorshipPage: React.FC = () => {
    var sponsors = import.meta.glob('/public/sponsors/*.{png,jpg,jpeg,svg}', { eager: true });
    const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_MOBILE_WIDTH);

    var gridClass = isMobile ? 'grid grid-cols-1 gap-x-8 gap-y-4' : 'grid grid-cols-3 gap-x-8'
    var divClass = isMobile ? 'px-20 text-center' : 'px-40 text-center' 
    var imgClass = isMobile ? 'w-[60%] h-auto p-5 object-contain': 'w-full h-auto px-8 py-5 object-contain'
    

    useEffect(() => {
        const handleResize = (()=> {
            setIsMobile(window.innerWidth < MAX_MOBILE_WIDTH);
        });
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    });


    return (
        <div id="SponsorshipPage" className={divClass}>
            <h1 className="text-[#F6B1B1] text-shadow-font-pink">Past Sponsors</h1>
            <div className={gridClass}>
                <div className="flex flex-col items-center bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 0 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className={imgClass}
                        />) : null
                    ))}
                </div>
                <div className="flex flex-col items-center bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 1 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className={imgClass}
                        />) : null
                    ))}
                </div>
                <div className="flex flex-col items-center bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 2 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className={imgClass}
                        />) : null
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SponsorshipPage

function getWindowDimensions() {
    throw new Error('Function not implemented.');
}
