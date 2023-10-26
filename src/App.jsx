import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education } from "./components";

import { useEffect, useState, useRef } from 'react';
import TOPOLOGY from 'vanta/src/vanta.topology'
// import TOPOLOGY from 'vanta/dist/vanta.topology.min.js'
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
    // console.log("Width " + dims.width);
    // console.log("Height " + dims.height);
    // console.log("Vanta Effect " + vantaEffect);

    if(/*.height >= 250 && dims.width >= 250 && */!vantaEffect) {
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
      if(vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);

      }
    }
  }, [dims.height, dims.width]);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       TOPOLOGY({
  //         el: vantaRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         forceAnimate: true,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x8499e3,
  //         backgroundColor: 0x1011b
  //       }) 
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

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