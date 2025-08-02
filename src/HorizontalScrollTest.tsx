import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Mail,
} from "lucide-react";
import "@fontsource/jersey-15";
import "@fontsource/Poppins";

interface FAQItem {
  question: string;
  answer: string;
}

const HorizontalScrollTest: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is a weekend of fun and learning. You'll become a better programmer, meet awesome people, and make cool projects. There will also be opportunities to win fun prizes and network with our sponsors.",
    },
    {
      question: "Is this hackathon in-person or hybrid?",
      answer:
        "This year, we are running a completely in-person hackathon! We have lots of fun events and workshops for you all and most importantly, free food!",
    },
    {
      question: "Do I need extensive coding knowledge for HackNC?",
      answer:
        "Not at all! HackNC is a completely beginner friendly event, and we have a project track specifically for beginners. We'll have plenty of resources to help you get started, including beginner workshops, mentors, and more.",
    },
    {
      question: "Who can hack?",
      answer:
        "If you are a student at UNC, there is no age requirement. If you are coming from outside UNC, you must be 18 years of age or older to attend! High schoolers, undergraduates, and graduate students from any school are welcome to participate as hackers.",
    },
    {
      question: "How do teams work?",
      answer:
        "Teams can be organized prior to HackNC or during the event itself. If you are already in a team, then you're all set! If not, that's completely fine! We have a team building event on Friday (Nov 1st), where you can meet other participants and form your teams. We strongly recommend around 3-4 members.",
    },
    {
      question: "Where do I park?",
      answer:
        "Parking will be free over the weekend. Please find availability in Rams Deck, Craige Deck, or Cobb Deck.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle horizontal scroll effect
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const totalScrollWidth = container.scrollWidth; // total width of all sections combined
    const viewportWidth = window.innerWidth;
    const maxHorizontalScroll = totalScrollWidth - viewportWidth;

    // Set body height based on how much vertical scroll you need to cover full horizontal scroll
    document.body.style.height = `${
      maxHorizontalScroll + window.innerHeight
    }px`;

    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      // Calculate scroll progress as ratio of y to max horizontal scroll
      const progress = Math.min(y / maxHorizontalScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <>
      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className={`transition-transform duration-0 ease-linear ${
          isMobile
            ? "relative w-full flex flex-col"
            : "fixed top-0 left-0 h-screen w-max flex"
        } bg-gradient-to-l from-primary-light to-primary-dark text-primary-dark font-Poppins`}
        style={{
          transform: isMobile ? "none" : `translateX(-${scrollY}px)`,
        }}
      >
        {/* Hero Section */}
        <Section>
          <div className="pt-20 pb-16 text-center max-w-7xl mx-auto">
            <h1 className="text-9xl font-bold text-accent-blue mb-4">
              HackNC <span className="text-accent-yellow">2025</span>
            </h1>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              UNC-Chapel Hill's annual fall hackathon - the largest hackathon in
              the southeastern United States
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <InfoBlock icon={<Calendar size={20} />} text="November 2025" />
              <InfoBlock icon={<MapPin size={20} />} text="UNC Chapel Hill" />
              <InfoBlock icon={<Users size={20} />} text="24 Hours" />
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section>
          <div className="py-16 max-w-6xl mx-auto">
            <div className="bg-primary-dark bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-accent-green border-opacity-30">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="font-bold text-6xl text-accent-green mb-10">
                    What is HackNC?
                  </h1>
                  <p className="text-primary-light text-lg mb-6">
                    HackNC is a weekend for students of all skill levels to
                    broaden their talents. Your challenge is to make an awesome
                    project in just 24 hours.
                  </p>
                  <p className="text-primary-light text-lg mb-8">
                    You will have access to hands-on tech workshops, sponsor
                    networking, exciting tech talks — and all of the free food,
                    shirts, stickers, and swag!
                  </p>
                  <a
                    href="https://hacknc-2024.devpost.com/project-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-accent-green to-accent-blue text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg"
                  >
                    Explore Past Projects <ExternalLink className="ml-2" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/EventPhoto.jpg"
                    alt="HackNC2024"
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section>
          <div className="py-16 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-accent-pink text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-primary-dark bg-opacity-40 backdrop-blur-sm rounded-lg border border-accent-yellow border-opacity-30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-500 hover:bg-opacity-20 transition-all"
                  >
                    <span className="text-accent-yellow font-semibold text-lg italic">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="text-accent-yellow" />
                    ) : (
                      <ChevronDown className="text-accent-yellow" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 py-5 bg-primary-dark bg-opacity-20">
                      <p className="text-primary-light text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Sponsors Section */}
        <Section>
          <div className="py-16 max-w-6xl mx-auto text-center">
            <h2 className="text-6xl font-bold text-accent-blue mb-8">
              Past Sponsors
            </h2>
            <p className="text-primary-dark text-lg mb-12 max-w-3xl mx-auto">
              HackNC wouldn't be possible without the help of our sponsors. They
              help us give out cool prizes, and let us do our work smoothly.
            </p>
            <div className="font-jersey text-4xl text-accent-yellow mb-4 italic">
              Looking to sponsor HackNC 2025?
            </div>
            <a
              href="mailto:sponsorship@hacknc.com"
              className="inline-flex items-center bg-gradient-to-r from-accent-yellow to-accent-pink text-primary-light px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg"
            >
              <Mail className="mr-2" />
              Contact Us
            </a>
          </div>
        </Section>
      </div>

      {/* FAKE horizontal scroll bar with running character */}
      {!isMobile && (
        <div className="fixed bottom-4 left-0 w-full px-8 z-50">
          {/* Progress bar fill */}
          {/* <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-pink to-accent-yellow transition-all"
              style={{ width: `${scrollProgress * 100}%` }}
            /> */}
          {/* Running character */}
          <div
            className="absolute bottom-[-12px] transition-transform"
            style={{ left: `calc(${scrollProgress * 100}% - 16px)` }}
          >
            <img
              src="/runner.gif" // Replace with your own running character GIF or sprite
              alt="Running character"
              className="w-10 h-10 select-none pointer-events-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen w-screen flex-shrink-0 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {children}
    </section>
  );
};

const InfoBlock = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center bg-primary-dark bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-accent-pink border-opacity-50">
    <span className="mr-3 text-accent-pink">{icon}</span>
    <h3 className="text-primary-light font-semibold">{text}</h3>
  </div>
);

export default HorizontalScrollTest;
