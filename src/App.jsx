import EchoText from './EchoText';
import monocraft from './assets/Monocraft.ttf';
import icon from './assets/icon.jpeg';
import cool_grass from './assets/cool_grass.png'

function App() {
  return (
    <main className="relative z-10 isolate">
      <style>{`
        @font-face {
          font-family: 'Monocraft';
          src: url('${monocraft}') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <link rel="icon" type="image/x-icon" href={icon}></link>
      <img src={cool_grass} class="h-90 w-{auto}"></img>
      <div className="flex flex-col pt-20 justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <EchoText
            text="TouchGrass Delhi"
            echoes={10}
            lag={0.2}
            offset={44}
            direction="diagonal"
            fade={0.84}
            blur={0}
            tint={false}
            echoStyle="outline"
            echoScale={1}
            mode="pointer"
            trail="pointer"
            font="Monocraft, monospace"
            clickBurst={false}
            cursorRadius={320}
            duration={1100}
            ease="snappy"
            fontSize="clamp(3rem, 9vw, 7rem)"
            fontWeight={800}
            echoColors={["currentColor", "#10b981"]}
            color="#ECE9DF"
          />
        </div>
        <div className="flex flex-row pt-10 justify-center items-center">
          <EchoText
            text="Code. Create. Touch Grass."
            echoes={10}
            lag={0.2}
            offset={44}
            direction="diagonal"
            fade={0.84}
            blur={0}
            tint={false}
            echoStyle="outline"
            echoScale={1}
            mode="pointer"
            trail="pointer"
            font="Monocraft, monospace"
            clickBurst={false}
            cursorRadius={320}
            duration={1100}
            ease="snappy"
            fontSize="clamp(1.5rem, 4.5vw, 3.5rem)"
            fontWeight={800}
            echoColors={["currentColor", "#10b981"]}
            color="#ECE9DF"
          />
        </div>
      </div>
    </main>
  )
}

export default App