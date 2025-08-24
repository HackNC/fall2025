import React from 'react';
import ReactDOM from 'react-dom';

const SponsorshipPage: React.FC = () => {
    var sponsors = import.meta.glob('/public/sponsors/*.{png,jpg,jpeg,svg}', { eager: true });

    console.log(sponsors)

    return (
        <div id="SponsorshipPage" className="px-40 text-center">
            <h1 className="text-[#F6B1B1] text-shadow-font-pink">Past Sponsors</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 grid-auto-col gap-x-8 sm:gap-y-4'>
                <div className="bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 0 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className="w-full h-auto px-10 py-5 object-contain"
                        />) : null
                    ))}
                </div>
                <div className="bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 1 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className="w-full h-auto px-10 py-5 object-contain"
                        />) : null
                    ))}
                </div>
                <div className="bg-font-orange bg-opacity-50 rounded-xl shadow-font-orange shadow-md">
                    {Object.values(sponsors).map((logo: any, index: number) => (
                       index % 3 === 2 ? (
                        <img
                            key={index}
                            src={logo.default}
                            alt={`Sponsor ${index + 1}`}
                            className="w-full h-auto px-10 py-5 object-contain"
                        />) : null
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SponsorshipPage