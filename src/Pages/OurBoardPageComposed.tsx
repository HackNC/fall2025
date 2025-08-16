import React, { useEffect } from "react";
import { useState } from "react";
import OurBoardPage from "./OurBoardPage";
import OurDetailBoardPage from "./OurBoardDetailPage";
import { SectionWrapper } from "../Main Website/MainWeb";

const [page, setPage] = useState(Pages.LEADS)
export const enum Pages {
    LEADS = "Leads",
    GRAPHICS = "Graphics",
    EXPERIENCE = "Hacker Experience",
    OPERATIONS = "Event Operations",
    SPONSORSHIP = "Sponsorship",
    DEVELOPMENT = "Development",
    MARKETING = "Marketing"

}

// Lead Details 
const Leadmembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/HackNC_Sprite.gif",
    "harrison": "/white_star_graphics.png",
}
const MinhinfoCardProps = {
    name: "Minh Nguyen",
    position: "co-lead director",
    laziness: 5,
    strength: 3,
    catchphrase: "he will get back to you",
}
const MinhourBoardDetailProps = {
    mainImage: "/HackNC24.png",
    drawingImage: "/HackNC_Sprite.gif",
    infoCardProps: MinhinfoCardProps,
    members: Leadmembers,
}
const LeadourBoardDetailStyles = {
    accentColor: "#82A8FA",
    border: "/lead_border.png",
    filledStar: "/white_star_graphics.png",
    emptyStar: "/black_star_lead.png"
}


const OurBoardPageComposed: React.FC = () => {
    useEffect(() => {
        const handlePageSwitch = (event: CustomEvent) => {
            switch (event.detail) {
                case Pages.LEADS:
                    setPage(Pages.LEADS)
                case Pages.
            }
        };

        window.addEventListener()

    }, []);

    const LeadsPage = () => {
        return (
            <>
                <OurDetailBoardPage props={MinhourBoardDetailProps} styles={LeadourBoardDetailStyles} />
            </>
        )
    }









    return (
        <>
            <SectionWrapper>
                <OurBoardPage />
            </SectionWrapper>
            <SectionWrapper>
                {page === Pages.LEADS && (<LeadsPage />)}

            </SectionWrapper>

        </>
    )
}
export default OurBoardPageComposed;