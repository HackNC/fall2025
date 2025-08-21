import React, { useEffect } from "react";
import { useState } from "react";
import OurBoardPage from "../Pages/OurBoard/OurBoardPage";
import { SectionWrapper } from "../Main Website/MainWeb";
import Pages from "../Pages/OurBoard/PagesEnum"

const ScreenWrapperTransparent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div
            className="
        bg-opacity-0 rounded-[140px] 
        mx-auto my-auto
        w-[75vw] h-[80vh]
        overflow-x-hidden 
        overflow-y-scroll
      "
            style={{
                width: "var(--arcade-w)", height: "var(--arcade-h)"
            } as React.CSSProperties}>
            {children}
        </div>
    );
};
const OurBoardPageComposed: React.FC = () => {
    const [page, setPage] = useState(Pages.LEADS)
    useEffect(() => {
        const handlePageSwitch = (event: Event) => {
            console.log("received event");
            const customEvent = event as CustomEvent<String>;
            switch (customEvent.detail) {
                case "leads":
                    setPage(Pages.LEADS)
                    console.log("Pages set to leads")
                    break;
                case Pages.GRAPHICS:
                    setPage(Pages.GRAPHICS)
                    break;
                case Pages.EXPERIENCE:
                    setPage(Pages.EXPERIENCE)
                    break;
                case Pages.OPERATIONS:
                    setPage(Pages.OPERATIONS)
                    break;
                case Pages.SPONSORSHIP:
                    setPage(Pages.SPONSORSHIP)
                    break;
                case Pages.DEVELOPMENT:
                    setPage(Pages.DEVELOPMENT)
                    break;
                case Pages.MARKETING:
                    setPage(Pages.MARKETING)
                    break;
                default:
                    setPage(Pages.EMPTY)
            }
        }
        window.addEventListener("leads" as any, handlePageSwitch);
        window.addEventListener("graphics" as any, handlePageSwitch);
        window.addEventListener("experience" as any, handlePageSwitch);
        window.addEventListener("operations" as any, handlePageSwitch);
        window.addEventListener("sponsorship" as any, handlePageSwitch);
        window.addEventListener("development" as any, handlePageSwitch);
        window.addEventListener("marketing" as any, handlePageSwitch);


        return () => {
            window.removeEventListener("leads" as any, handlePageSwitch);
            window.removeEventListener("graphics" as any, handlePageSwitch);
            window.removeEventListener("experience" as any, handlePageSwitch);
            window.removeEventListener("operations" as any, handlePageSwitch);
            window.removeEventListener("sponsorship" as any, handlePageSwitch);
            window.removeEventListener("development" as any, handlePageSwitch);
            window.removeEventListener("marketing" as any, handlePageSwitch);
        }
    }, []);
    return (
        <>
        </>
    )
}
export default OurBoardPageComposed;