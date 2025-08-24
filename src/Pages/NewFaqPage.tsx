import { useState } from "react";

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<{ props: FaqItemProps }> = ({ props }) => {
    const { question, answer } = props;
    const [isOpened, setIsOpened] = useState(false);

    function toggleIsOpened() {
        setIsOpened(!isOpened);
    }
    return (
        <div id="NewFaqPageMobile" className="flex flex-col">
            <div className="flex items-center gap-4">
                <button className="shrink-0" onClick={toggleIsOpened}>
                    {!isOpened && <img className="w-20 h-20" src="folder_open.png" alt="closed folder" />}
                    {isOpened && <img className="w-20 h-20" src="folder_closed.png" alt="opened folder" />}
                </button>
                <p className="text-white font-medium">{question}</p>
            </div>
            <div
                className={`flex gap-4 overflow-hidden transition-all duration-700 ease-in-out ${isOpened ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-gray-300 pl-16 mt-2">{answer}</p>
            </div>
        </div>
    );
};

const NewFaqPage: React.FC = () => {
    const q1 = {
        question: "What is a hackathon?",
        answer: "A hackathon is a weekend of fun and learning. You'll become a better programmer, meet awesome people, and make cool projects. There will also be opportunities to win fun prizes and network with our sponsors."
    };
    const q2 = {
        question: "Is this hackathon in-person or hybrid?",
        answer: "This year, we are running a completely in-person hackathon! We have lots of fun events and workshops for you all and most importantly, free food!"
    };
    const q3 = {
        question: "Do I need extensive coding knowledge for HackNC?",
        answer: "Not at all! HackNC is a completely beginner friendly event, and we have a project track specifically for beginners. We'll have plenty of resources to help you get started, including beginner workshops, mentors, and more."
    };
    const q4 = {
        question: "Who can hack?",
        answer: "If you are a student at UNC, there is no age requirement. If you are coming from outside UNC, you must be 18 years of age or older to attend! High schoolers, undergraduates, and graduate students from any school are welcome to participate as hackers."
    };
    const q5 = {
        question: "How do teams work?",
        answer: "Teams can be organized prior to HackNC or during the event itself. If you are already in a team, then you're all set! If not, that's completely fine! We have a team building event on Friday (Nov 1st), where you can meet other participants and form your teams. We strongly recommend around 3-4 members."
    };
    const q6 = {
        question: "Where do I park?",
        answer: "Parking will be free over the weekend. Please find availability in Rams Deck, Craige Deck, or Cobb Deck."
    };
    return (

        <div id="NewFaqPage" className="w-full h-full flex flex-col items-center pl-20 pr-20 py-20 ">
            <h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl text-center mb-10 -mt-12"
                style={{
                    filter: `drop-shadow(0 0 4px #ffffff)`
                }}>Frequently Asked Questions</h1>
            <div className="lg:p-4 lg:grid lg:grid-cols-2 md:gap-4 flex flex-col gap-5 ml-12">
                <FaqItem props={q1} />
                <FaqItem props={q2} />
                <FaqItem props={q3} />
                <FaqItem props={q4} />
                <FaqItem props={q5} />
                <FaqItem props={q6} />
            </div>
        </div>
    );
};

export default NewFaqPage;