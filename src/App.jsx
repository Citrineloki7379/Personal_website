import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import { useEffect, useState, useRef } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

const App = () => {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          forceAnimate: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8499e3,
          backgroundColor: 0x1011b
        }) 
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="bg z-0" id="vanta">
    <BrowserRouter> 
        <div className="relative z-5">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-5">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App