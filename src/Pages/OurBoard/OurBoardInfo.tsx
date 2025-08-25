import OurDetailBoardPage from "./OurBoardDetailPage";
import { SectionWrapper } from "../../Main Website/MainWeb";

// Lead Details 
const leadMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/ourBoardPageAssets/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const leadOurBoardDetailStyles = {
    accentColor: "#82A8FA",
    border: "./ourBoardPageAssets/lead_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Minh
const minhInfoCardProps = {
    name: "Minh Nguyen",
    position: "co-lead director",
    attack: 5,
    defense: 3,
    special_ability: "he will get back to you",
}
const minhOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: minhInfoCardProps,
    members: leadMembers,
}
// Alicia 
const aliciaInfoCardProps = {
    name: "Alicia Bao",
    position: "co-lead director",
    attack: 5,
    defense: 3,
    special_ability: "TBD",
}
const aliciaOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logo/HackNC_Sprite.gif",
    infoCardProps: aliciaInfoCardProps,
    members: leadMembers,
}
// Naga
const nagaInfoCardProps = {
    name: "Naga Ritvika Yeyuvuri",
    position: "co-lead director",
    attack: 5,
    defense: 3,
    special_ability: "TBD",
}
const nagaOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./ourBoardPageAssets/HackNC_Sprite.gif",
    infoCardProps: nagaInfoCardProps,
    members: leadMembers,
}
// Jack
const jackInfoCardProps = {
    name: "Jack Huo",
    position: "lead advisor",
    attack: 5,
    defense: 3,
    special_ability: "he will get back to you",
}
const jackOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: jackInfoCardProps,
    members: leadMembers,
}

// Graphics
const graphicsMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const graphicsOurBoardDetailStyles = {
    accentColor: "#82CCFA",
    border: "./ourBoardPageAssets/graphics_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Paige
const paigeInfoCardProps = {
    name: "Paige Pan",
    position: "co-director of graphics",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const paigeOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: paigeInfoCardProps,
    members: graphicsMembers,
}
// Amber
const amberInfoCardProps = {
    name: "Amber Zhen",
    position: "co-director of graphics",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const amberOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: amberInfoCardProps,
    members: graphicsMembers,
}


// Hacker Experience
const experienceMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const experienceOurBoardDetailStyles = {
    accentColor: "#65E6DB",
    border: "./ourBoardPageAssets/hacker_exp_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Ayush
const ayushInfoCardProps = {
    name: "Ayush Subramanian",
    position: "director of logistics",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const ayushOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: ayushInfoCardProps,
    members: experienceMembers,
}
// Harsehaj 
const harsehajInfoCardProps = {
    name: "Harsehaj Dhami",
    position: "co-director of hacker experience",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const harsehajOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: harsehajInfoCardProps,
    members: experienceMembers,
}
// Alex
const alexInfoCardProps = {
    name: "Alexander Toney",
    position: "co-director of hacker experience",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const alexOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: alexInfoCardProps,
    members: experienceMembers,
}


// Event Operations
const operationsMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const operationsOurBoardDetailStyles = {
    accentColor: "#8AFAA6",
    border: "./ourBoardPageAssets/event_ops_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Sanay Vastani 
const sanayInfoCardProps = {
    name: "Sanay Vastani",
    position: "co-director of event operations",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const sanayOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: sanayInfoCardProps,
    members: operationsMembers,
}
// Sky 
const skyInfoCardProps = {
    name: "Sky Wang",
    position: "co-director of event operations",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const skyOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: skyInfoCardProps,
    members: operationsMembers,
}


// Sponsorship
const sponsorshipMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const sponsorshipOurBoardDetailStyles = {
    accentColor: "#FAD082",
    border: "./ourBoardPageAssets/sponsorship_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Davyd 
const davydInfoCardProps = {
    name: "Davyd Voloshyn",
    position: "director of finance",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const davydOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: davydInfoCardProps,
    members: sponsorshipMembers,
}

// Ishitha 
const ishithaInfoCardProps = {
    name: "Ishitha Jujjavarapu",
    position: "co-director of sponsorship",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const ishithaOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: ishithaInfoCardProps,
    members: sponsorshipMembers,
}

// Sahasra  
const sahasraInfoCardProps = {
    name: "Sahasra Boga",
    position: "co-director of sponsorship",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const sahasraOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: sahasraInfoCardProps,
    members: sponsorshipMembers,
}
// Mason 
const masonInfoCardProps = {
    name: "Mason Mines",
    position: "sponsor engagement lead",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const masonOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: masonInfoCardProps,
    members: sponsorshipMembers,
}

// Development 
const devMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const devOurBoardDetailStyles = {
    accentColor: "#FA9E82",
    border: "./ourBoardPageAssets/dev_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Yahan Yang
const yahanInfoCardProps = {
    name: "Yahan Yang",
    position: "director of development",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const yahanOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: yahanInfoCardProps,
    members: devMembers,
}

// Rishi
const rishiInfoCardProps = {
    name: "Rishyendra Medamanuri",
    position: "advisor of development",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const rishiOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: rishiInfoCardProps,
    members: devMembers,
}

// Marketing 
const marketingMembers = {
    "aidan": "/joystick_pink.svg",
    "daniel": "/HackNC24.png",
    "lai": "/ourBoardPageAssets/black_star_lead.png",
    "jodi": "/runner.gif",
    "scott": "/pixelRam6400.png",
    "jade": "/logos/HackNC_Sprite.gif",
    "harrison": "/ourBoardPageAssets/white_star_graphics.png",
}
const marketingOurBoardDetailStyles = {
    accentColor: "#FA8282",
    border: "./ourBoardPageAssets/marketing_border.png",
    filledStar: "./ourBoardPageAssets/white_star_graphics.png",
    emptyStar: "./ourBoardPageAssets/black_star_lead.png"
}
// Robert
const robertInfoCardProps = {
    name: "Robert Battle",
    position: "co-director of marketing",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const robertOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: robertInfoCardProps,
    members: marketingMembers,
}
// Oscar
const oscarInfoCardProps = {
    name: "Oscar Cheung",
    position: "co-director of marketing",
    attack: 5,
    defense: 3,
    special_ability: "meow",
}
const oscarOurBoardDetailProps = {
    mainImage: "./HackNC24.png",
    drawingImage: "./logos/HackNC_Sprite.gif",
    infoCardProps: oscarInfoCardProps,
    members: marketingMembers,
}

// Leads
export const Minh = () => {
    return (
        <div id="leads">
            <OurDetailBoardPage props={minhOurBoardDetailProps} styles={leadOurBoardDetailStyles} />
        </div>)
}
export const Alicia = () => {
    return (<OurDetailBoardPage props={aliciaOurBoardDetailProps} styles={leadOurBoardDetailStyles} />)
}
export const Naga = () => {
    return (<OurDetailBoardPage props={nagaOurBoardDetailProps} styles={leadOurBoardDetailStyles} />)
}
export const Jack = () => {
    return (<OurDetailBoardPage props={jackOurBoardDetailProps} styles={leadOurBoardDetailStyles} />)
}

// Graphics
export const Paige = () => {
    return (<div id="graphics">
        <OurDetailBoardPage props={paigeOurBoardDetailProps} styles={graphicsOurBoardDetailStyles} />
    </div >)
}
export const Amber = () => {
    return (<OurDetailBoardPage props={amberOurBoardDetailProps} styles={graphicsOurBoardDetailStyles} />
    )
}

// EXPERIENCE
export const Ayush = () => {
    return (
        <div id="experience">
            <OurDetailBoardPage props={ayushOurBoardDetailProps} styles={experienceOurBoardDetailStyles} /> </div >
    )
}
export const Harsehaj = () => <OurDetailBoardPage props={harsehajOurBoardDetailProps} styles={experienceOurBoardDetailStyles} />;
export const Alex = () => <OurDetailBoardPage props={alexOurBoardDetailProps} styles={experienceOurBoardDetailStyles} />;

// OPERATIONS
export const Sanay = () => {
    return (
        <div id="operations">
            <OurDetailBoardPage props={sanayOurBoardDetailProps} styles={operationsOurBoardDetailStyles} /></div>
    )
}
export const Sky = () => <OurDetailBoardPage props={skyOurBoardDetailProps} styles={operationsOurBoardDetailStyles} />;

// SPONSORSHIP
export const Davyd = () => {
    return (
        <div id="sponsorship">
            <OurDetailBoardPage props={davydOurBoardDetailProps} styles={sponsorshipOurBoardDetailStyles} /></div>
    )
}
export const Ishitha = () => <OurDetailBoardPage props={ishithaOurBoardDetailProps} styles={sponsorshipOurBoardDetailStyles} />;
export const Sahasra = () => <OurDetailBoardPage props={sahasraOurBoardDetailProps} styles={sponsorshipOurBoardDetailStyles} />;
export const Mason = () => <OurDetailBoardPage props={masonOurBoardDetailProps} styles={sponsorshipOurBoardDetailStyles} />;

// DEV
export const Rishi = () => {
    return (
        <div id="development">
            <OurDetailBoardPage props={rishiOurBoardDetailProps} styles={devOurBoardDetailStyles} /></div>
    )
};
export const Yahan = () => <OurDetailBoardPage props={yahanOurBoardDetailProps} styles={devOurBoardDetailStyles} />;

// MARKETING
export const Robert = () => {
    return (
        <div id="marketing">
            <OurDetailBoardPage props={robertOurBoardDetailProps} styles={marketingOurBoardDetailStyles} /></div>
    )
}
export const Oscar = () => <OurDetailBoardPage props={oscarOurBoardDetailProps} styles={marketingOurBoardDetailStyles} />;
