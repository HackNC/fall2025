import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Users, Code, Award, Mail, ExternalLink, Container } from 'lucide-react';
import { useEffect, useRef } from "react";
import '@fontsource/jersey-15'; // npm install @fontsource/jersey-15 if not already installed
import "@fontsource/Poppins";

interface FAQItem {
  question: string;
  answer: string;
}

const Navigation: React.FC = () => {
    return (
        <nav className="font-Poppins bg-primary-dark bg-opacity-40 backdrop-blur-sm fixed w-full z-50 border-b border-primary-light border-opacity-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="text-2xl font-bold text-primary-light font-Poppins">
                HackNC <span className="text-accent-yellow">2025</span>
                </div>
                <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-primary-light hover:text-purple-300 transition-colors">About</a>
                <a href="#faq" className="text-primary-light hover:text-purple-300 transition-colors">FAQ</a>
                <a href="#sponsors" className="text-primary-light hover:text-purple-300 transition-colors">Sponsors</a>
                </div>
            </div>
            </div>
        </nav>
    );
};

const FrontPage: React.FC = () => {
    return (
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-accent-blue mb-4">
                    HackNC <span className="text-accent-yellow">2025</span>
                    </h1>
                    <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
                    UNC-Chapel Hill's annual fall hackathon - the largest hackathon in the southeastern United States
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center bg-primary-dark bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-accent-pink border-opacity-50">
                    <Calendar className="mr-3 text-accent-pink" size={20} />
                    <h3 className="text-primary-light font-semibold">November 2025</h3>
                    </div>
                    <div className="flex items-center bg-primary-dark bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-accent-pink border-opacity-50">
                    <MapPin className="mr-3 text-accent-pink" size={20} />
                    <h3 className="text-primary-light font-semibold">UNC Chapel Hill</h3>
                    </div>
                    <div className="flex items-center bg-primary-dark bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-accent-pink border-opacity-50">
                    <Users className="mr-3 text-accent-pink" size={20} />
                    <h3 className="text-primary-light font-semibold">24 Hours</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    return (
        <div id="about" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-primary-dark bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-accent-green border-opacity-30">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="font-bold text-6xl text-accent-green mb-10 text-stroke">What is HackNC?</h1>
                            <p className="text-primary-light text-lg leading-relaxed mb-6">
                            HackNC is a weekend for students of all skill levels to broaden their talents. Your challenge is to make an awesome project in just 24 hours.
                            </p>
                            <p className="text-primary-light text-lg leading-relaxed mb-8">
                            You will have access to hands-on tech workshops, sponsor networking, as well as exciting talks about the awesome things happening right now with computer science and technology - not to mention all of the free food, shirts, stickers, and swag!
                            </p>
                            <a
                            href="https://hacknc-2024.devpost.com/project-gallery?_gl=1*csu56c*_gcl_au*MTA5MTg0ODQ1MC4xNzUwNzAzNzQy*_ga*OTgzOTA5MTg2LjE3NTA3MDM3NDI.*_ga_0YHJK3Y10M*czE3NTA3MDM3NDIkbzEkZzEkdDE3NTA3MDM3OTIkajEwJGwwJGgw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-accent-green to-accent-blue text-white px-6 py-3 rounded-lg font-semibold hover:from-accent-green hover:to-accent-blue transition-all transform hover:scale-105 shadow-lg"
                            >
                            Explore Past Projects <ExternalLink className="ml-2" size={18} />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <img 
                            src="/EventPhoto.jpg" 
                            alt="HackNC2024 Event Photo" 
                            className="rounded-lg shadow-lg w-full max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FaqPage: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData: FAQItem[] = [
        {
        question: "What is a hackathon?",
        answer: "A hackathon is a weekend of fun and learning. You'll become a better programmer, meet awesome people, and make cool projects. There will also be opportunities to win fun prizes and network with our sponsors."
        },
        {
        question: "Is this hackathon in-person or hybrid?",
        answer: "This year, we are running a completely in-person hackathon! We have lots of fun events and workshops for you all and most importantly, free food!"
        },
        {
        question: "Do I need extensive coding knowledge for HackNC?",
        answer: "Not at all! HackNC is a completely beginner friendly event, and we have a project track specifically for beginners. We'll have plenty of resources to help you get started, including beginner workshops, mentors, and more."
        },
        {
        question: "Who can hack?",
        answer: "If you are a student at UNC, there is no age requirement. If you are coming from outside UNC, you must be 18 years of age or older to attend! High schoolers, undergraduates, and graduate students from any school are welcome to participate as hackers."
        },
        {
        question: "How do teams work?",
        answer: "Teams can be organized prior to HackNC or during the event itself. If you are already in a team, then you're all set! If not, that's completely fine! We have a team building event on Friday (Nov 1st), where you can meet other participants and form your teams. We strongly recommend around 3-4 members."
        },
        {
        question: "Where do I park?",
        answer: "Parking will be free over the weekend. Please find availability in Rams Deck, Craige Deck, or Cobb Deck."
        }
    ];

    return (
        <div id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-accent-pink text-center mb-12 text-stroke">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((faq: FAQItem, index: number) => (
                <div key={index} className="bg-primary-dark bg-opacity-40 backdrop-blur-sm rounded-lg border border-accent-yellow border-opacity-30 overflow-hidden">
                    <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-500 hover:bg-opacity-20 transition-all rounded-lg"
                    >
                    <span className="text-accent-yellow font-semibold text-lg pr-4 italic">{faq.question}</span>
                    <div className="flex-shrink-0">
                        {openFAQ === index ? 
                        <ChevronUp className="text-accent-yellow" size={24} /> : 
                        <ChevronDown className="text-accent-yellow" size={24} />
                        }
                    </div>
                    </button>
                    {openFAQ === index && (
                    <div className="px-6 pb-4 py-5 bg-primary-dark bg-opacity-20">
                        <p className="text-primary-light text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

const SponsorPage: React.FC = () => {
    // const sponsors: string[] = [
    //     'Bandwidth', 'Capital One', 'Infosys', 'Fidelity', 
    //     'Lowes', 'Pendo', 'Nutanix', 'ResNET'
    // ];

    return (
        <div id="sponsors" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl font-bold text-accent-blue text-center mb-8 text-stroke">Past Sponsors</h2>
                <p className="text-primary-dark text-center text-lg mb-12 max-w-3xl mx-auto">
                HackNC wouldn't be possible without the help of our sponsors. They help us give out cool prizes, and let us do our work smoothly.
                </p>
                
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {sponsors.map((sponsor: string, index: number) => (
                    <div key={index} className="bg-primary-dark bg-opacity-30 backdrop-blur-sm rounded-lg p-6 border border-accent-purple border-opacity-40 flex items-center justify-center hover:bg-opacity-50 hover:border-opacity-60 transition-all transform hover:scale-105 shadow-lg">
                    <h3 className="text-primary-light font-semibold text-center">{sponsor}</h3>
                    </div>
                ))}
                </div> */}

                <div className="text-center">
                    <div className="font-jersey text-4xl text-accent-yellow mb-4 italic">Looking to sponsor HackNC 2025?</div>
                    <a 
                        href="mailto:sponsorship@hacknc.com" 
                        className="inline-flex items-center bg-gradient-to-r from-accent-yellow to-accent-pink text-primary-light px-6 py-3 rounded-lg font-semibold hover:from-accent-yellow hover:to-accent-pink transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Mail className="mr-2" size={18} />
                        <h3>Contact Us</h3>
                    </a>
                </div>
            </div>  
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-black bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-20 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <p className="text-primary-light">&copy; HackNC 2025</p>
                    <a 
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-purple-300 transition-colors"
                    >
                    MLH Code of Conduct
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="mailto:hello@hacknc.com" className="text-primary-light hover:text-accent-blue transition-colors">
                    <Mail size={24} />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    );
};

const PageWrapper: React.FC<{children: React.ReactNode}> = (props) => {
    return (
        <div className="max-w-[100vw] min-h-[100vh] md:min-w-[100vw] md:max-h-[100vh]">
            { props.children }
        </div>
    );
}

const PageContainer: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;

        if (!el) return;

        const handleWheel = (event: WheelEvent) => {
            if (window.innerWidth < 768) return;
            event.preventDefault();
            el.scrollLeft += event.deltaX - event.deltaY;
        };

        el.addEventListener("wheel", handleWheel, {passive: false});

        return () => {
            el.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="bg-gradient-to-l from-primary-light to-primary-dark text-primary-dark font-Poppins">
            <Navigation />
            <div
            ref={scrollRef} 
            className="flex flex-col overflow-x-scroll md:flex-row md:overflow-y-hidden"
            >
                <PageWrapper>
                    <FrontPage />
                </PageWrapper>
                <PageWrapper>
                    <AboutPage />
                </PageWrapper>
                <PageWrapper>
                    <FaqPage />
                </PageWrapper>
                <PageWrapper>
                    <SponsorPage />
                    <Footer />
                </PageWrapper>
            </div>
        </div>
    );
};

export default PageContainer;
