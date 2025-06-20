import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Users, Code, Award, Mail, ExternalLink } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const App: React.FC = () => {
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

  // const sponsors: string[] = [
  //   'Bandwidth', 'Capital One', 'Infosys', 'Fidelity', 
  //   'Lowes', 'Pendo', 'Nutanix', 'ResNET'
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-30 backdrop-blur-sm fixed w-full z-50 border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              HackNC <span className="text-purple-400">2025</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#faq" className="text-white hover:text-purple-300 transition-colors">FAQ</a>
              <a href="#sponsors" className="text-white hover:text-purple-300 transition-colors">Sponsors</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">
              HackNC <span className="text-purple-400">2025</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              UNC-Chapel Hill's annual fall hackathon - the largest hackathon in the southeastern United States
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-400 border-opacity-50">
              <Calendar className="mr-3 text-purple-400" size={20} />
              <span className="text-white font-semibold">October 10-12</span>
            </div>
            <div className="flex items-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-400 border-opacity-50">
              <MapPin className="mr-3 text-purple-400" size={20} />
              <span className="text-white font-semibold">Fetzer Gym at UNC Chapel Hill</span>
            </div>
            <div className="flex items-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-400 border-opacity-50">
              <Users className="mr-3 text-purple-400" size={20} />
              <span className="text-white font-semibold">36 Hours</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <button className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg">
              Registration Opens Soon <ExternalLink className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400 border-opacity-30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">What is HackNC?</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  HackNC is a weekend for students of all skill levels to broaden their talents. Your challenge is to make an awesome project in just 36 hours.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  You will have access to hands-on tech workshops, sponsor networking, as well as exciting talks about the awesome things happening right now with computer science and technology - not to mention all of the free food, shirts, stickers, and swag!
                </p>
                <a 
                  href="https://hacknc-2024.devpost.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Past Projects <ExternalLink className="ml-2" size={18} />
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award size={64} className="mx-auto mb-4" />
                    <p className="text-xl font-semibold">Build. Learn. Win.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq: FAQItem, index: number) => (
              <div key={index} className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg border border-purple-400 border-opacity-30 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-500 hover:bg-opacity-20 transition-all rounded-lg"
                >
                  <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? 
                      <ChevronUp className="text-purple-400" size={24} /> : 
                      <ChevronDown className="text-purple-400" size={24} />
                    }
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 bg-black bg-opacity-20">
                    <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Our Sponsors</h2>
          <p className="text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            HackNC wouldn't be possible without the help of our sponsors. They help us give out cool prizes, and let us do our work smoothly. Please contact us at sponsorship@hacknc.com if you are interested in sponsoring this amazing event!
          </p>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {sponsors.map((sponsor: string, index: number) => (
              <div key={index} className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-6 border border-purple-400 border-opacity-40 flex items-center justify-center hover:bg-opacity-50 hover:border-opacity-60 transition-all transform hover:scale-105 shadow-lg">
                <span className="text-white font-semibold text-center">{sponsor}</span>
              </div>
            ))}
          </div> */}

          <div className="text-center">
            <p className="text-gray-300 mb-4">Looking to sponsor HackNC 2025?</p>
            <a 
              href="mailto:sponsorship@hacknc.com" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2" size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-white">&copy; HackNC 2025</p>
              <a 
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                MLH Code of Conduct
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="mailto:hello@hacknc.com" className="text-white hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;