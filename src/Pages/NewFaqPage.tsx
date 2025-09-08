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
            <div className="flex items-center gap-2">
                <button className="shrink-0" onClick={toggleIsOpened}>
                    {!isOpened && <img className="w-16" src="./folder_open.png" alt="closed folder" />}
                    {isOpened && <img className="w-16" src="./folder_closed.png" alt="opened folder" />}
                </button>
                <p className="text-white font-medium">{question}</p>
            </div>
            <div
                className={`flex gap-4 overflow-y-scroll transition-all duration-700 ease-in-out ${isOpened ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-gray-300 text-sm pl-10 mt-2 overflow-y-scroll">{answer}</p>
            </div>
        </div>
    );
};

const NewFaqPage: React.FC = () => {
    const q1 = {
        question: "What is a hackathon?",
        answer: "A hackathon is a weekend of fun and learning. You'll become a better builder, meet awesome people, and make cool projects. There will also be opportunities to win fun prizes and network with our sponsors."
    };
    const q2 = {
        question: "Who can hack?",
        answer: "If you are a student at UNC, there is no age requirement. Otherwise, you must be 18 years of age or older to attend. High schoolers, undergraduates, and graduate students from any school are welcome to participate as hackers."
    };
    const q3 = {
        question: "Do I need extensive coding knowledge for HackNC?",
        answer: "Not at all! HackNC is a completely beginner friendly event, with a project track specifically for beginners. We'll have plenty of resources to help you get started, including beginner workshops, mentors, and more."
    };
    const q4 = {
        question: "Is this hackathon in-person or hybrid?",
        answer: "HackNC is fully in-person! We'll have fun events, free food, and workshops for everyone!"
    };
    const q5 = {
        question: "How do teams work?",
        answer: "You can come in with or without a team- we recommend 3-4 members. We'll have a team building event if you're looking for teammates!"
    };
    const q6 = {
        question: "Where do I park?",
        answer: "Parking will be free over the weekend. Please find availability in Rams Deck, Craige Deck, or Cobb Deck."
    };
    const q7 = {
        question: "Will travel be reimbursed?",
        answer: "Unfortunately, we will not be able to offer travel reimbursements this year. We encourage students to reach out to their CS departments for potential funding."
    };
    return (

        <div id="NewFaqPage" className="w-full h-full flex flex-col items-center pl-10 pr-10 py-20 ">
            <h1
                className="text-primary-light text-2xl text-shadow-primary-light sm:text-5xl lg:text-6xl text-center mb-5 -mt-12">FAQ</h1>
            <div className="lg:p-4 lg:grid lg:grid-cols-2 md:gap-4 flex flex-col gap-5 ml-4">
                <FaqItem props={q1} />
                <FaqItem props={q2} />
                <FaqItem props={q3} />
                <FaqItem props={q4} />
                <FaqItem props={q5} />
                <FaqItem props={q6} />
                <FaqItem props={q7} />
            </div>
        </div>
    );
};

export default NewFaqPage;