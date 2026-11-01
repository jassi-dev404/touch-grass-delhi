import EchoText from "./EchoText";
import PillNav from "./PillNav";
import Title from "./assets/Title.ttf";
import cool_grass from "./assets/cool_grass.png";
import logo from "./assets/touch_hindi.png";

function App() {
  return (
    <main className="relative z-10 isolate">
      <link rel="icon" type="image/x-icon" href={logo}></link>
      <style>{`
        @font-face {
          font-family: 'Title';
          src: url('${Title}') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Added relative positioning to parent container */}
      <div id="first" className="relative">
        <img
          id="logo"
          src={logo}
          style={{ position: "absolute", right: "1px", top: "0px" }}
          className="object-cover transition-transform duration-500 hover:rotate-10 z-30"
        ></img>

        {/* Absolutely positioned PillNav float container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-10 z-20 flex justify-center items-center">
          <PillNav
            items={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/journal" },
              { label: "Photos", href: "/photos" },
              { label: "About", href: "/about" },
            ]}
            activeHref="/"
            itemStyle="plain"
            hoverEffect="glide"
            indicator="pill"
          />
        </div>

        <img src={cool_grass} className="h-75 w-auto z-0"></img>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
        <p className="text-8xl">hi</p>
      </div>
    </main>
  );
}

export default App;
