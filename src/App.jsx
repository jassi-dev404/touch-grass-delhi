import EchoText from "./EchoText";
import PillNav from "./PillNav";
import LogoLoop from "./LogoLoop";
import FlexCarousel from './FlexCarousel';
import Title from "./assets/Title.ttf";
import cool_grass from "./assets/cool_grass.png";
import logo from "./assets/touch_hindi.png";
import our_sponsor from "./assets/our_sponsor.png";
import more_info from "./assets/more_info.png"
import organizers_t from "./assets/organizers_t.png"
import aditya1 from "./assets/pics/aditya1.png"
import jassi1 from "./assets/pics/jassi1.jpg"
import nitik1 from "./assets/pics/nitik1.JPG"
import jassi2 from "./assets/pics/jassi2.jpg"
import nitik2 from "./assets/pics/nitik2.jpg"


const items = [
  { src: aditya1, alt: 'Aditya with his kuchupuchu', title: 'aditya the head organizer' },
  { src: jassi1, alt: 'yes its me, same person coding this at 4am', title: 'jassi the chief tech officer' },
  { src: nitik1, alt: 'A clay bust in profile', title: 'nitik the vice-head organizer' },
  { src: jassi2, alt: 'yes its me, same person coding this at 4am', title: 'jassi the chief tech officer' },
  { src: nitik2, alt: 'yes its me, same person coding this at 4am', title: 'nitik the vice-head organizer' }
];

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    hoverColor: "#61dafb",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    hoverColor: "#3178c6",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    hoverColor: "#38bdf8",
  },
];

function App() {
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

      <div id="first" className="relative pb-32">
        <img
          id="logo"
          src={logo}
          alt="Touch Grass Delhi"
          style={{ position: "absolute", right: "1px", top: "0px" }}
          className="object-cover transition-transform duration-500 hover:rotate-10 z-30"
        />

        <div className="fixed top-0 left-1/2 -translate-x-1/2 pt-10 z-50 flex justify-center items-center">
          <PillNav
            items={[
              { label: "Start", href: "#first" },
              { label: "Sponsors", href: "#second" },
              { label: "Details", href: "#details"},
              { label: "Organizers", href: "#organizers" },
              { label: "Join Slack", href: "https://hackclub.enterprise.slack.com/archives/C0CBJT68171" },
              { label: "Register", href: "https://docs.google.com/forms/d/e/1FAIpQLScF8G5HjINZx5b4ulPnZ7N5Ly30h4t9xGdVaWk2UocRqsythg/viewform?pli=1" }
            ]}
            activeHref="/"
            itemStyle="plain"
            hoverEffect="glide"
            indicator="pill"
          />
        </div>

        <img src={cool_grass} alt="Grass" className="h-75 w-auto z-0" />

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center z-10">
            <EchoText
              text="TOUCHGRASS DELHI"
              className="[-webkit-text-stroke:5px_#012304]"
              fontSize="clamp(6rem, 19vw, 14rem)"
              font="Title, monospace"
              echoes={18}
              lag={0.23}
              offset={36}
              direction="right"
              fade={0.65}
              blur={3}
              tint={false}
              echoStyle="solid"
              echoScale={1}
              mode="pointer"
              trail="pointer"
              clickBurst={false}
              cursorRadius={320}
              duration={900}
              ease="ease-in-out"
              fontWeight={700}
              color="#b5ff00"
            />
          </div>
          <div className="flex flex-row pt-10 justify-center items-center">
            <EchoText
              text="CODE. CREATE. TOUCH GRASS."
              className="[-webkit-text-stroke:3px_#012304]"
              font="Title, monospace"
              fontSize="clamp(3rem, 6vw, 5rem)"
              echoes={18}
              lag={0.23}
              offset={36}
              direction="right"
              fade={0.65}
              blur={3}
              tint={false}
              echoStyle="solid"
              echoScale={1}
              mode="pointer"
              trail="pointer"
              clickBurst={false}
              cursorRadius={320}
              duration={900}
              ease="ease-in-out"
              fontWeight={700}
              color="#b5ff00"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br/>
      </div>

      <div id="second" className="flex flex-col justify-center items-center -mt-28 pb-5 w-full">
        <img src={our_sponsor} alt="Our sponsors" class="object-cover transition-transform duration-500 hover:rotate-10 hover:scale-125 z-30" />
        <p>just examples for now ;)</p>

        <div className="-mt-90 w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            layout="wave"
            direction="left"
            labels="hover"
            speed={100}
            hoverSpeed={0}
            logoHeight={44}
            gap={56}
            bend={0.5}
            focus={0.7}
            magnify={2}
            muted={1}
            tiltX={0}
            tiltY={0}
            fadeOutWidth={0}
            scrollBoost={0}
            fadeOut={true}
            step={true}
            draggable={false}
            scaleOnHover={false}
            intro={true}
            ariaLabel="Our Sponsors"
          />
        </div>
        <img src={more_info} class="object-cover transition-transform duration-500 hover:scale-110 z-30"></img>
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
        <br/>
      </div>
      <div id="organizers">
        <br></br>
        <br></br>
        <img src={organizers_t} alt="Our organizers" class="object-cover transition-transform duration-500 rotate-10 hover:-rotate-10 hover:scale-125 z-30" />
        <hr></hr>
        <div style={{ width: '100%', height: '560px', position: 'relative', backgroundColor: "#F9F6EE"}}>
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
        <hr></hr>
        <br></br>
        <h1 class="text-8xl pl-2 font-[monocraft] text-[#3d6c03]">CONTACT US:</h1>
        <ol id="cool_yes">
          <li class="text-3xl pl-2 font-[monocraft] text-[#b5ff00]"><u><span><a href="https://www.instagram.com/touchgrassdelhi?xtok=MWJmMTBzMW92ajU1cg==" target="_blank">INSTAGRAM</a></span></u></li>
          <li class="text-3xl pl-2 font-[monocraft] text-[#b5ff00]"><u><span><a href="mailto:touchgrasshackathon@gmail.com" target="_blank">EMAIL</a></span></u></li>
          <li class="text-3xl pl-2 font-[monocraft] text-[#b5ff00]"><u><span><a href="tel:+919354232874" target="_blank">PHONE/WHATSAPP</a></span></u></li>
        </ol>
        <hr></hr>
        <p class="bg-whitish flex justify-center items-center font-mono text-6xl">made with love by..<u><span class="text-zinc-500"><a href="https://github.com/jassi-dev404" target="_blank">jassi</a></span></u></p>
        <hr></hr>
      </div>
    </main>
  );
}


export default App;
