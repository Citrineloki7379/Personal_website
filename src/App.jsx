import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education } from "./components";

import { useEffect, useState, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min'
const App = () => {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  const[dims, setDims] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    window.addEventListener('unload', function () {
      document.documentElement.innerHTML = '';
    });

    return () => {
      window.removeEventListener('unload', function () {
        document.documentElement.innerHTML = '';
      });
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setDims({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    setVantaEffect(
      WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        forceAnimate: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x90f20,
        shininess: 20.00,
        waveHeight: 15.50,
        waveSpeed: 0.15,
        zoom: 0.70
      }) 
    );

    return () => {
      if(vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);

      }
    }
  }, []);

  return (
    <div ref={vantaRef} className="bg z-0" id="vanta">
    <BrowserRouter> 
        <div className="relative z-5">
          <Navbar />
          <div className="relative z-5">
            <Hero />
            <About />
            <StarsCanvas />
          </div>
          <Experience />
          {/* <Tech /> */}
          <Education />
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