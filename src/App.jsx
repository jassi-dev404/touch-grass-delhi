import EchoText from "./EchoText";
import PillNav from "./PillNav";
import LogoLoop from "./LogoLoop";
import Title from "./assets/Title.ttf";
import cool_grass from "./assets/cool_grass.png";
import logo from "./assets/touch_hindi.png";
import our_sponsor from "./assets/our_sponsor.png";
import more_info from "./assets/more_info.png"
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
              { label: "Photos", href: "/photos" },
              { label: "About", href: "/about" },
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
    </main>
  );
}

export default App;
