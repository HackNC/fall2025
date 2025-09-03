import OurDetailBoardPage from "./OurBoardDetailPage";
import { SectionWrapper } from "../../Main Website/MainWeb";

/* <<<============================ [START] BOARD INFORMATION================================>>> */

/* ============================================================
                            LEAD TEAM
   ============================================================ */
/* ------------------------------------------------------------
            Lead Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const leadMembers = {
  Baarbarian: "/underConstruction/traffic-barrier.png",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const leadOurBoardDetailStyles = {
  accentColor: "#82A8FA",
  border: "./ourBoardPageAssets/lead_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                            Minh
   ------------------------------------------------------------ */

const minhInfoCardProps = {
  name: "Minh Nguyen",
  position: "co-lead director",
  attack: 3,
  defense: 4,
  special_ability: "he will get back to you", // ToBeUpdated
};

const minhOurBoardDetailProps = {
  mainImage: "/memberPhotos/Minh_Nguyen.jpg",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: minhInfoCardProps,
  members: leadMembers,
};

/* ------------------------------------------------------------
                            Alicia
   ------------------------------------------------------------ */

const aliciaInfoCardProps = {
  name: "Alicia Bao",
  position: "co-lead director",
  attack: 2,
  defense: 2,
  special_ability: "intense frolicking",
};

const aliciaOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: aliciaInfoCardProps,
  members: leadMembers,
};

/* ------------------------------------------------------------
                                Naga
   ------------------------------------------------------------ */

const nagaInfoCardProps = {
  name: "Naga Ritvika Yeyuvuri",
  position: "co-lead director",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const nagaOurBoardDetailProps = {
  mainImage: "/memberPhotos/Rithwikmishra.png",
  drawingImage: "/underConstruction/work-in-progress-sign.png",
  infoCardProps: nagaInfoCardProps,
  members: leadMembers,
};

/* ------------------------------------------------------------
                                Jack
   ------------------------------------------------------------ */

const jackInfoCardProps = {
  name: "Jack Huo",
  position: "lead advisor",
  attack: 5,
  defense: 3,
  special_ability: "he will get back to you",
};

const jackOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png",
  drawingImage: "/underConstruction/work-in-progress-sign.png",
  infoCardProps: jackInfoCardProps,
  members: leadMembers,
};

/* ============================================================
                            GRAPHICS TEAM
   ============================================================ */
/* ------------------------------------------------------------
            Graphics Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const graphicsMembers = {
  AngLam: "/memberPhotos/Ang_Lam.jpg",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const graphicsOurBoardDetailStyles = {
  accentColor: "#82CCFA",
  border: "./ourBoardPageAssets/graphics_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                            Paige
   ------------------------------------------------------------ */

const paigeInfoCardProps = {
  name: "Paige Pan",
  position: "co-director of graphics",
  attack: 5,
  defense: 2,
  special_ability: "competitive cat petting",
};

const paigeOurBoardDetailProps = {
  mainImage: "/memberPhotos/Paige_Pan.jpg",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: paigeInfoCardProps,
  members: graphicsMembers,
};

/* ------------------------------------------------------------
                            Amber
   ------------------------------------------------------------ */

const amberInfoCardProps = {
  name: "Amber Zhen",
  position: "co-director of graphics",
  attack: 3,
  defense: 2,
  special_ability: "making asian cucumber salad",
};

const amberOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: amberInfoCardProps,
  members: graphicsMembers,
};

/* ============================================================
                    HACKERS EXPERIENCE TEAM
   ============================================================ */
/* ------------------------------------------------------------
        Hackers Experience Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const experienceMembers = {
  Baarbarian: "/underConstruction/traffic-barrier.png",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const experienceOurBoardDetailStyles = {
  accentColor: "#65E6DB",
  border: "./ourBoardPageAssets/hacker_exp_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                            Ayush
   ------------------------------------------------------------ */

const ayushInfoCardProps = {
  name: "Ayush Subramanian",
  position: "director of logistics",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const ayushOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: ayushInfoCardProps,
  members: experienceMembers,
};

/* ------------------------------------------------------------
                            Harsehaj
   ------------------------------------------------------------ */

const harsehajInfoCardProps = {
  name: "Harsehaj Dhami",
  position: "co-director of hacker experience",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const harsehajOurBoardDetailProps = {
  mainImage: "/memberPhotos/Harsehaj_Dhami.png",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: harsehajInfoCardProps,
  members: experienceMembers,
};

/* ------------------------------------------------------------
                            Alexander
   ------------------------------------------------------------ */

const alexInfoCardProps = {
  name: "Alexander Toney",
  position: "co-director of hacker experience",
  attack: 5,
  defense: 5,
  special_ability: "watching reels",
};

const alexOurBoardDetailProps = {
  mainImage: "/memberPhotos/Alexander_Toney.jpg",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: alexInfoCardProps,
  members: experienceMembers,
};

/* ============================================================
                    EVENT OPERATIONS TEAM
   ============================================================ */
/* ------------------------------------------------------------
        Event Operations Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const operationsMembers = {
  Baarbarian: "/underConstruction/traffic-barrier.png",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const operationsOurBoardDetailStyles = {
  accentColor: "#8AFAA6",
  border: "./ourBoardPageAssets/event_ops_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                        Sanay Vastani
   ------------------------------------------------------------ */

const sanayInfoCardProps = {
  name: "Sanay Vastani",
  position: "co-director of event operations",
  attack: 2,
  defense: 5,
  special_ability: "making the best chocolate cookies",
};

const sanayOurBoardDetailProps = {
  mainImage: "/memberPhotos/Sanay_Vastani.jpg",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: sanayInfoCardProps,
  members: operationsMembers,
};

/* ------------------------------------------------------------
                            Sky
   ------------------------------------------------------------ */

const skyInfoCardProps = {
  name: "Sky Wang",
  position: "co-director of event operations",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const skyOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png",
  drawingImage: "/underConstruction/work-in-progress-sign.png",
  infoCardProps: skyInfoCardProps,
  members: operationsMembers,
};

/* ============================================================
                        SPONSORS TEAM
   ============================================================ */
/* ------------------------------------------------------------
            Sponsors Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const sponsorshipMembers = {
  Baarbarian: "/underConstruction/traffic-barrier.png",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const sponsorshipOurBoardDetailStyles = {
  accentColor: "#FAD082",
  border: "./ourBoardPageAssets/sponsorship_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                            Davyd
   ------------------------------------------------------------ */

const davydInfoCardProps = {
  name: "Davyd Voloshyn",
  position: "director of finance",
  attack: 4,
  defense: 4,
  special_ability: "making dumplings in a teapot",
};

const davydOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: davydInfoCardProps,
  members: sponsorshipMembers,
};

/* ------------------------------------------------------------
                            Ishitha
   ------------------------------------------------------------ */

const ishithaInfoCardProps = {
  name: "Ishitha Jujjavarapu",
  position: "co-director of sponsorship",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const ishithaOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: ishithaInfoCardProps,
  members: sponsorshipMembers,
};

/* ------------------------------------------------------------
                            Sahasra
   ------------------------------------------------------------ */

const sahasraInfoCardProps = {
  name: "Sahasra Boga",
  position: "co-director of sponsorship",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const sahasraOurBoardDetailProps = {
  mainImage: "/memberPhotos/Sahasra_Boga.JPEG",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: sahasraInfoCardProps,
  members: sponsorshipMembers,
};

/* ------------------------------------------------------------
                            Mason
   ------------------------------------------------------------ */

const masonInfoCardProps = {
  name: "Mason Mines",
  position: "sponsor engagement lead",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const masonOurBoardDetailProps = {
  mainImage: "/memberPhotos/Mason.jpeg",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: masonInfoCardProps,
  members: sponsorshipMembers,
};

/* ============================================================
                        DEVELOPMENT TEAM
   ============================================================ */
/* ------------------------------------------------------------
            Development Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const devMembers = {
  Rachel: "/memberPhotos/Rachel_Lin.png",
  Aidan: "/underConstruction/traffic-barrier.png",
  Luca: "/underConstruction/traffic-barrier.png",
  Vuong: "/underConstruction/traffic-barrier.png",
  Siddhant: "/underConstruction/traffic-barrier.png",
  Sai: "/underConstruction/traffic-barrier.png",
  Rithwik: "/underConstruction/traffic-barrier.png",
  Jason: "/underConstruction/traffic-barrier.png",
};

const devOurBoardDetailStyles = {
  accentColor: "#FA9E82",
  border: "./ourBoardPageAssets/dev_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                        Yahan Yang
   ------------------------------------------------------------ */

const yahanInfoCardProps = {
  name: "Yahan Yang",
  position: "director of development",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const yahanOurBoardDetailProps = {
  mainImage: "/memberPhotos/Yahan_Yang.JPG",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: yahanInfoCardProps,
  members: devMembers,
};

/* ------------------------------------------------------------
                        Rishyendra
   ------------------------------------------------------------ */

const rishiInfoCardProps = {
  name: "Rishyendra Medamanuri",
  position: "advisor of development",
  attack: 5,
  defense: 3,
  special_ability: "summon the sacred goat",
};

const rishiOurBoardDetailProps = {
  mainImage: "/memberPhotos/Rishyendra.JPG",
  drawingImage: "/underConstruction/work-in-progress-sign.png",
  infoCardProps: rishiInfoCardProps,
  members: devMembers,
};

/* ============================================================
                        MARKETING TEAM
   ============================================================ */
/* ------------------------------------------------------------
            Marketing Team Details (Photos + Styles)
   ------------------------------------------------------------ */

const marketingMembers = {
  Baarbarian: "/underConstruction/traffic-barrier.png",
  Goataclysm: "/underConstruction/traffic-barrier.png",
  Baarserker: "/underConstruction/traffic-barrier.png",
  Shearlock: "/underConstruction/traffic-barrier.png",
  Ramurai: "/underConstruction/traffic-barrier.png",
  Baaard: "/underConstruction/traffic-barrier.png",
  GoatLord: "/underConstruction/traffic-barrier.png",
};

const marketingOurBoardDetailStyles = {
  accentColor: "#FA8282",
  border: "./ourBoardPageAssets/marketing_border.png",
  filledStar: "./ourBoardPageAssets/white_star_graphics.png",
  emptyStar: "./ourBoardPageAssets/black_star_lead.png",
};

/* ------------------------------------------------------------
                          Robert
   ------------------------------------------------------------ */

const robertInfoCardProps = {
  name: "Robert Battle",
  position: "co-director of marketing",
  attack: 5, // ToBeUpdated
  defense: 3, // ToBeUpdated
  special_ability: "summon the sacred goat", // ToBeUpdated
};

const robertOurBoardDetailProps = {
  mainImage: "/underConstruction/work-in-progress-barrier.png", // ToBeUpdated
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: robertInfoCardProps,
  members: marketingMembers,
};

/* ------------------------------------------------------------
                            Oscar
   ------------------------------------------------------------ */

const oscarInfoCardProps = {
  name: "Oscar Cheung",
  position: "co-director of marketing",
  attack: 3,
  defense: 5,
  special_ability: "wok hei",
};

const oscarOurBoardDetailProps = {
  mainImage: "/memberPhotos/Oscar.JPG",
  drawingImage: "/underConstruction/work-in-progress-sign.png", // ToBeUpdated
  infoCardProps: oscarInfoCardProps,
  members: marketingMembers,
};

/* <<<============================ [END] BOARD INFORMATION================================>>> */

/* ============================================================
                            LEADS
   ============================================================ */

export const Minh = () => {
  return (
    <div id="leads">
      <OurDetailBoardPage
        props={minhOurBoardDetailProps}
        styles={leadOurBoardDetailStyles}
      />
    </div>
  );
};

export const Alicia = () => {
  return (
    <OurDetailBoardPage
      props={aliciaOurBoardDetailProps}
      styles={leadOurBoardDetailStyles}
    />
  );
};

export const Naga = () => {
  return (
    <OurDetailBoardPage
      props={nagaOurBoardDetailProps}
      styles={leadOurBoardDetailStyles}
    />
  );
};

export const Jack = () => {
  return (
    <OurDetailBoardPage
      props={jackOurBoardDetailProps}
      styles={leadOurBoardDetailStyles}
    />
  );
};

/* ============================================================
                            GRAPHICS
   ============================================================ */

export const Paige = () => {
  return (
    <div id="graphics">
      <OurDetailBoardPage
        props={paigeOurBoardDetailProps}
        styles={graphicsOurBoardDetailStyles}
      />
    </div>
  );
};

export const Amber = () => {
  return (
    <OurDetailBoardPage
      props={amberOurBoardDetailProps}
      styles={graphicsOurBoardDetailStyles}
    />
  );
};

/* ============================================================
                            EXPERIENCE
   ============================================================ */

export const Ayush = () => {
  return (
    <div id="experience">
      <OurDetailBoardPage
        props={ayushOurBoardDetailProps}
        styles={experienceOurBoardDetailStyles}
      />{" "}
    </div>
  );
};

export const Harsehaj = () => (
  <OurDetailBoardPage
    props={harsehajOurBoardDetailProps}
    styles={experienceOurBoardDetailStyles}
  />
);

export const Alex = () => (
  <OurDetailBoardPage
    props={alexOurBoardDetailProps}
    styles={experienceOurBoardDetailStyles}
  />
);

/* ============================================================
                            OPERATIONS
   ============================================================ */

export const Sanay = () => {
  return (
    <div id="operations">
      <OurDetailBoardPage
        props={sanayOurBoardDetailProps}
        styles={operationsOurBoardDetailStyles}
      />
    </div>
  );
};

export const Sky = () => (
  <OurDetailBoardPage
    props={skyOurBoardDetailProps}
    styles={operationsOurBoardDetailStyles}
  />
);

/* ============================================================
                            SPONSORSHIP
   ============================================================ */
export const Davyd = () => {
  return (
    <div id="sponsorship">
      <OurDetailBoardPage
        props={davydOurBoardDetailProps}
        styles={sponsorshipOurBoardDetailStyles}
      />
    </div>
  );
};

export const Ishitha = () => (
  <OurDetailBoardPage
    props={ishithaOurBoardDetailProps}
    styles={sponsorshipOurBoardDetailStyles}
  />
);

export const Sahasra = () => (
  <OurDetailBoardPage
    props={sahasraOurBoardDetailProps}
    styles={sponsorshipOurBoardDetailStyles}
  />
);

export const Mason = () => (
  <OurDetailBoardPage
    props={masonOurBoardDetailProps}
    styles={sponsorshipOurBoardDetailStyles}
  />
);

/* ============================================================
                            DEVELOPMENT
   ============================================================ */

export const Rishi = () => {
  return (
    <div id="development">
      <OurDetailBoardPage
        props={rishiOurBoardDetailProps}
        styles={devOurBoardDetailStyles}
      />
    </div>
  );
};

export const Yahan = () => (
  <OurDetailBoardPage
    props={yahanOurBoardDetailProps}
    styles={devOurBoardDetailStyles}
  />
);

/* ============================================================
                            MARKETING
   ============================================================ */

export const Robert = () => {
  return (
    <div id="marketing">
      <OurDetailBoardPage
        props={robertOurBoardDetailProps}
        styles={marketingOurBoardDetailStyles}
      />
    </div>
  );
};

export const Oscar = () => (
  <OurDetailBoardPage
    props={oscarOurBoardDetailProps}
    styles={marketingOurBoardDetailStyles}
  />
);
