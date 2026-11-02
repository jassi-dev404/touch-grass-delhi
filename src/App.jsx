import { useEffect } from "react";
import PillNav from "./PillNav";
import LogoLoop from "./LogoLoop";
import FlexCarousel from "./FlexCarousel";
import Title from "./assets/Title.ttf";
import logo from "./assets/touch_hindi.png";
import our_sponsor from "./assets/our_sponsor.png";
import more_info from "./assets/more_info.png";
import organizers_t from "./assets/organizers_t.png";
import aditya1 from "./assets/pics/aditya1.jpeg";
import jassi1 from "./assets/pics/jassi1.jpeg";
import jassi2 from "./assets/pics/jassi2.jpeg";
import nitik2 from "./assets/pics/nitik2.jpeg";
import aditya2 from "./assets/pics/aditya2.jpg";
import nitik3 from "./assets/pics/nitik3.jpeg"
import main_img from "./assets/main_head.png";
import vansh1 from "./assets/pics/vansh1.jpeg"
import vansh2 from "./assets/pics/vansh2.jpeg"
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
  { src: aadarsh1, alt: "yes he did something", title: "aadarsh from logistic department" },
  { src: vansh2, alt: "the designer (who is late many times)", title: "vansh the chief design organizer" },
  { src: vansh1, alt: "the designer (who is late many times)", title: "vansh the chief design organizer"}
];

const imageLogos = [
  { src: xyz, alt: ".XYZ", title: ".XYZ", href: "https://gen.xyz/" },
  { src: education, alt: "Shekunj Education", title: "Shekunj Education", href: "https://www.shekunj.com/" },
];

function App() {
  useEffect(() => {
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

      <div id="first" className="relative pb-32 min-h-screen">
        <img
          id="logo"
          src={logo}
          alt="Touch Grass Delhi"
          style={{ position: "absolute", right: "1px", top: "10px" }}
          className="object-cover transition-transform duration-500 hover:rotate-10 z-30"
        />

        <div className="fixed top-0 left-1/2 -translate-x-1/2 pt-6 z-50 flex justify-center items-center">
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
          />
        </div>

        <div className="relative flex flex-col justify-center items-center pt-20">
          <img src={main_img} className="object-cover transition-transform duration-500 hover:scale-120 z-30" />
        </div>
      </div>

      <div id="second" className="flex flex-col justify-center items-center -mt-28 pb-5 w-full">
        <img
          src={our_sponsor}
          alt="Our sponsors"
          className="object-cover transition-transform duration-500 hover:rotate-10 hover:scale-125 z-30"
        />
        <hr></hr>
        <div className="-mt-24 w-full overflow-hidden bg-whitish">
        <hr></hr>
          <LogoLoop
            logos={imageLogos}
            layout="wave"
            direction="left"
            labels="below"
            speed={100}
            hoverSpeed={0}
            logoHeight={40}
            gap={56}
            bend={0.5}
            focus={1}
            magnify={2}
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
          className="object-cover transition-transform duration-500 hover:scale-110 z-30 w-[80%]"
        />
      </div>

      <div id="details">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div id="organizers">
        <br />
        <br />

        <img
          src={organizers_t}
          alt="Our organizers"
          className="object-cover transition-transform duration-500 rotate-10 hover:-rotate-10 hover:scale-125 z-30"
        />

        <hr />

        <div style={{ width: "100%", height: "560px", position: "relative", backgroundColor: "#F9F6EE" }}>
          <FlexCarousel
            items={items}
            preset="liquid"
            intro="bloom"
            cardHeight={0.5}
            gap={12}
            squeeze={0.18}
            focusOnClick
            captions
            tilt={41}
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
        </div>

        <hr />
      </div>
    </main>
  );
}

export default App;
