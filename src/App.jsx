import { useEffect, useState } from "react";
import PillNav from "./PillNav";
import LogoLoop from "./LogoLoop";
import FlexCarousel from "./FlexCarousel";
import Title from "./assets/Title.ttf";
import info_d from "./assets/info_d.png";
import kv from "./assets/kv.png";
import logo from "./assets/touch_hindi.png";
import our_sponsor from "./assets/our_sponsor.png";
import more_info from "./assets/more_info.png";
import organizers_t from "./assets/organizers_t.png";
import aditya1 from "./assets/pics/aditya1.jpeg";
import jassi1 from "./assets/pics/jassi1.jpeg";
import jassi2 from "./assets/pics/jassi2.jpeg";
import nitik2 from "./assets/pics/nitik2.jpeg";
import aditya2 from "./assets/pics/aditya2.jpg";
import nitik3 from "./assets/pics/nitik3.jpeg";
import grass_h from "./assets/grass_hand.png";
import details_h from "./assets/details_head.png";
import main_img from "./assets/main_head.png";
import vansh1 from "./assets/pics/vansh1.jpeg";
import vansh2 from "./assets/pics/vansh2.jpeg";
import xyz from "./assets/xyz.png";
import education from "./assets/education.png";
import aadarsh1 from "./assets/pics/aadarsh1.jpeg";

const items = [
  { src: aditya1, alt: "Aditya very nice", title: "aditya the head organizer" },
  { src: aditya2, alt: "Aditya with flowers", title: "aditya the head organizer" },
  { src: jassi1, alt: "yes its me, same person coding this at 4am now with nitik", title: "jassi the chief tech organizer (with nitik)" },
  { src: nitik3, alt: "nitik wow very cool guy", title: "nitik the vice-head organizer" },
  { src: jassi2, alt: "yes its me, same person coding this at 4am", title: "jassi the chief tech organizer" },
  { src: nitik2, alt: "nitik wow very cool guy", title: "nitik the vice-head organizer" },
  { src: aadarsh1, alt: "yes he did something", title: "aadarsh from logistics department" },
  { src: vansh2, alt: "the designer (who is late many times)", title: "vansh the chief design organizer" },
  { src: vansh1, alt: "the designer (who is late many times)", title: "vansh the chief design organizer" }
];

const imageLogos = [
  { src: xyz, alt: ".xyz", title: ".xyz", href: "https://gen.xyz/" },
  { src: education, alt: "Shekunj Education", title: "Shekunj Education", href: "https://www.shekunj.com/" },
  { src: kv, alt: "Kv", title: "Kendriya Vidyalaya Sangathan", href: "https://no1delhicantt.kvs.ac.in/" }
];

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    const updateViewportHeight = () => {
      document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    window.addEventListener("orientationchange", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("orientationchange", updateViewportHeight);
    };
  }, []);

  return (
    <main className="relative z-10 isolate min-h-screen">
      <link rel="icon" type="image/png" href={logo} />

      <style>{`
        @font-face {
          font-family: 'Title';
          src: url('${Title}') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div id="first" className="relative pb-16 md:pb-32 min-h-screen">
        <img
          id="logo"
          src={logo}
          alt="Touch Grass Delhi"
          style={{ position: "absolute", right: "1px", top: "10px" }}
          className="hidden md:block object-cover transition-transform duration-500 hover:rotate-10 z-30"
        />

        <div className="fixed top-0 inset-x-0 pt-4 md:pt-6 z-50 flex justify-center items-center px-2 pointer-events-none">
          <div className="pointer-events-auto max-w-full overflow-x-auto scrollbar-none flex justify-center items-center mx-auto">
            <PillNav
              items={[
                { label: "Start", href: "#first" },
                { label: "Sponsors", href: "#second" },
                { label: "Details", href: "#details" },
                { label: "Organizers", href: "#organizers" },
                { label: "Connect", href: "https://hackclub.enterprise.slack.com/archives/C0CBJT68171" },
                { label: "Register", href: "https://docs.google.com/forms/d/e/1FAIpQLScF8G5HjINZx5b4ulPnZ7N5Ly30h4t9xGdVaWk2UocRqsythg/viewform?pli=1" }
              ]}
              activeHref="/"
              itemStyle="plain"
              hoverEffect="glide"
              indicator="pill"
              collapse="never"
              size="md"
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center pt-24 md:pt-20">
          <img src={main_img} className="object-cover transition-transform duration-500 hover:scale-120 z-30 max-w-full md:max-w-full" />
        </div>
      </div>

      <div id="second" className="flex flex-col justify-center items-center mt-0 md:-mt-28 pb-5 w-full">
        <img
          src={our_sponsor}
          alt="Our sponsors"
          className="object-cover transition-transform duration-500 hover:rotate-10 hover:scale-125 z-30 mb-8 md:mb-0 max-w-[95%] md:max-w-full"
        />
        <hr className="w-full" />
        <div className="mt-0 md:-mt-24 w-full overflow-hidden bg-whitish h-24 md:h-auto flex flex-col justify-center">
          <hr></hr>
          <LogoLoop
            logos={imageLogos}
            layout={isMobile ? "straight" : "wave"}
            direction="left"
            labels="below"
            speed={100}
            hoverSpeed={0}
            logoHeight={isMobile ? 35 : 40}
            gap={isMobile ? 24 : 56}
            bend={0.5}
            focus={isMobile ? 0.2 : 1}
            magnify={isMobile ? 0 : 2}
            muted={1}
            tiltX={0}
            tiltY={0}
            fadeOutWidth={0}
            scrollBoost={0}
            fadeOut={true}
            step={true}
            draggable={false}
            scaleOnHover={true}
            intro={true}
            ariaLabel="Our Sponsors"
          />
          <hr></hr>
        </div>

        <img
          src={more_info}
          className="object-cover transition-transform duration-500 hover:scale-110 z-30 w-[95%] md:w-[80%] mt-6 md:mt-0"
        />
        <br></br>
        <br></br>
      </div>

      <div id="details" className="flex flex-col justify-center items-center mt-0 md:-mt-28 pb-5 w-full">
        <br />
        <br />
        <br />
        <img
          src={details_h}
          className={`object-cover transition-transform duration-500 rotate-3 hover:scale-150 z-30 pt-10 md:pt-20 max-w-[95%] md:max-w-full ${
            isMobile ? "blur-none" : "blur-xs hover:blur-none"
          }`}
        />
        <img src={info_d} className="object-cover transition-transform duration-500 z-30 hover:scale-110 max-w-[90%] md:max-w-full" id="info_d"></img>
        <img src={grass_h} className="object-cover transition-transform duration-500 z-30 hover:scale-110 md:rotate-12 hover:-rotate-12 max-w-[95%] md:max-w-full"></img>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div id="organizers">
        <br />
        <br />

        <img
          src={organizers_t}
          alt="Our organizers"
          className="object-cover transition-transform duration-500 md:rotate-10 hover:-rotate-10 hover:scale-125 z-30 max-w-[95%] md:max-w-full mx-auto"
        />

        <hr />

        <div style={{ width: "100%", height: isMobile ? "450px" : "560px", position: "relative", backgroundColor: "#F9F6EE" }}>
          <FlexCarousel
            items={items}
            preset={isMobile ? "arch" : "liquid"}
            intro="bloom"
            cardHeight={isMobile ? 0.4 : 0.5}
            gap={isMobile ? 15 : 12}
            squeeze={isMobile ? 1 : 0.18}
            focusOnClick
            captions
            tilt={isMobile ? 10 : 41}
            autoplay
            interval={2}
          />
        </div>

        <hr />

        <div className="flex flex-col justify-center items-center gap-6 py-10 px-4 w-full">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <a
              href="https://www.instagram.com/touchgrassdelhi?xtok=MWJmMTBzMW92ajU1cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-mono text-[#b5ff00] hover:underline hover:underline-offset-4 transition-all duration-300"
            >
              INSTAGRAM
            </a>
            <a
              href="mailto:touchgrasshackathon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-mono text-[#b5ff00] hover:underline hover:underline-offset-4 transition-all duration-300"
            >
              EMAIL
            </a>
            <a
              href="tel:+919354232874"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-mono text-[#b5ff00] hover:underline hover:underline-offset-4 transition-all duration-300"
            >
              PHONE/WHATSAPP
            </a>
          </div>

          <hr className="w-full border-t-2 border-[#3d6c03]/30" />

          <p className="text-xl md:text-2xl font-mono text-[#3d6c03]">
            made with love by{" "}
            <a
              href="https://github.com/jassi-dev404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b5ff00] hover:text-[#3d6c03] underline underline-offset-4 transition-all duration-300"
            >
              jassi
            </a>
          </p>

          <img
            src={logo}
            alt="Touch Grass Delhi"
            className="block md:hidden object-cover transition-transform duration-500 hover:rotate-10 z-30 h-16 mt-2 scale-400"
          />
        </div>

        <hr />
      </div>
    </main>
  );
}

export default App;
