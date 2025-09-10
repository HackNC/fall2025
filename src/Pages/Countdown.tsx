import React, { useEffect, useState } from 'react';
import '@fontsource/jersey-15';
import { Calendar, MapPin, Users } from 'lucide-react';

const SECONDS_PER_DAY = 24 * 60 * 60;
const SECONDS_PER_HOUR = 60 * 60;
const SECONDS_PER_MINUTE = 60;

const Countdown: React.FC = () => {
    const [daysLeft, setDaysLeft] = useState("00");
    const [hoursLeft, setHoursLeft] = useState("00");
    const [minutesLeft, setMinutesLeft] = useState("00");
    const [secondsLeft, setSecondsLeft] = useState("00");
    let hackathonStartDate = new Date("October 10, 2025 00:00:00");

    useEffect(() => {
        const timeLeftHandler = () => {
            const toNewYorkTime = (date: Date) => {
                return new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
            }

            let currentDate = new Date();
            currentDate = toNewYorkTime(currentDate);
            hackathonStartDate = toNewYorkTime(hackathonStartDate);
            const diffMs = hackathonStartDate.getTime() - currentDate.getTime();
            const diffSec = diffMs / 1000;

            if (diffSec > 0) {
                const days = Math.floor(diffSec / SECONDS_PER_DAY);
                const hours = Math.floor((diffSec - (days * SECONDS_PER_DAY)) / SECONDS_PER_HOUR);
                const minutes = Math.floor((diffSec - (days * SECONDS_PER_DAY + hours * SECONDS_PER_HOUR)) / SECONDS_PER_MINUTE);
                const seconds = Math.floor(diffSec - (days * SECONDS_PER_DAY + hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE));

                const formatTime = (time: number) => {
                    return String(time).padStart(2, "0");
                };

                setDaysLeft(formatTime(days));
                setHoursLeft(formatTime(hours));
                setMinutesLeft(formatTime(minutes));
                setSecondsLeft(formatTime(seconds));
            } else {
                return (
                    <div
                        className='text-white font-jersey text-[75px]'
                        style={{
                            filter: `drop-shadow(0 0 4px #C3D6FF)`,
                        }}>
                        IT'S HACKING TIME!!!
                    </div>
                );
            }
        }
        const interval = setInterval(timeLeftHandler, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div id="CountdownPage" className="flex flex-col items-center mt-20">
            <div
                className='font-jersey text-[48px] text-primary-light text-shadow-font-purple'>
                HackNC in
            </div>
            <div
                className='font-jersey text-[75px] text-center text-primary-light text-shadow-font-purple leading-none flex flex-col items-start items-center'>
                <span className="text-9xl">
                    <span className="inline-block w-[120px] text-center">{daysLeft}</span>days<br />
                </span>
                <span className="text-8xl">
                    <span className="inline-block w-[100px] text-center">{hoursLeft}</span>hours<br />
                </span>
                <span className="text-6xl">
                    <span className="inline-block w-[80px] text-center">{minutesLeft}</span>minutes<br />
                </span>
                <span className="text-4xl">
                    <span className="inline-block w-[50px] text-center">{secondsLeft}</span>seconds
                </span>
            </div>
        </div>
    );
};

export default Countdown;