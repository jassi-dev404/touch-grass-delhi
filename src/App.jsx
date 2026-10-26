import { useState } from 'react'
import EchoText from './EchoText';
import monocraft from './assets/Monocraft.ttf';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <style>{`
        @font-face {
          font-family: 'Monocraft';
          src: url('${monocraft}') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      
      <div className="flex flex-row pt-10 justify-center items-center">
        <EchoText
          text="Touch Grass Delhi"
          echoes={10}
          lag={0.2}
          offset={44}
          direction="diagonal"
          fade={0.84}
          blur={0}
          tint={false}
          echoStyle="outline"
          echoScale={1}
          mode="both"
          trail="auto"
          font="Monocraft, monospace"
          clickBurst
          cursorRadius={320}
          duration={1100}
          ease="snappy"
          fontSize="clamp(3rem, 9vw, 7rem)"
          fontWeight={800}
          echoColors={["currentColor", "#10b981"]}
          color="#f4f4f4"
        />
      </div>
    </main>
  )
}

export default App