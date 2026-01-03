import bgImg from "../assets/Hero-img1.avif";
import LightRays from "../components/LightRays";
import StarBorder from "../components/StarBorder";

import { useState, useEffect } from "react";

function Hero() {
  const [rayLength, setRayLength] = useState(1);

  useEffect(() => {
    const updateRayLength = () => {
      if (window.innerWidth < 640) {
        setRayLength(50);
      } else {
        setRayLength(1);
      }
    };

    updateRayLength();
    window.addEventListener("resize", updateRayLength);
    return () => window.removeEventListener("resize", updateRayLength);
  }, []);

  return (
    <>
      <section className="bg-black max-w-10xl h-screen relative flex justify-center items-center text-center">
        {/* Background Image */}
        <div className="w-screen h-full">
          <img
            src={bgImg}
            fetchPriority="high"
            alt="Hero-bg"
            className="w-screen pb-40 md:pb-0 h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 w-screen min-h-screen z-20 pointer-events-none">
          <LightRays
            raysOrigin="top-left"
            raysColor="#ffffff"
            raysSpeed={0.3}
            lightSpread={2.4}
            rayLength={1}
            pulsating
            fadeDistance={1}
            saturation={0.8}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0.1}
          />
        </div>

        <div className="absolute inset-0 w-screen min-h-screen z-20 pointer-events-none">
          <LightRays
            raysOrigin="top-right"
            raysColor="#ffffff"
            raysSpeed={0.3}
            lightSpread={2.4}
            rayLength={1}
            pulsating
            fadeDistance={1}
            saturation={0.8}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0.1}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/85 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-l from/85 via-black/50 to-transparent z-10"></div>

        {/* Hero Content */}
        <div
          className="absolute z-20 flex flex-col justify-evenly items-center w-[90%] h-[90%]
                   md:items-start md:w-full md:pl-6"
        >
          {/* Top Content */}
          <div className="w-full h-full flex justify-center items-end">
            <h1 className="font-montserrat text-3xl font-bold text-white xs:text-4xl sm:text-5xl md:font-extrabold lg:text-6xl xl:text-[130px]">
              Hardik Bambhaniya
            </h1>
            {/* <p className="animate-item text-md xs:text-lg sm:text-xl lg:text-2xl font-gilda text-gray-100 md:text-start">
              Find peace, recharge your mind, and <br /> reconnect with nature
              at our lakeside retreat
            </p> */}
            {/* <div className="w-full h-ful flex justify-center gap-2 ">
              <StarBorder
                as="button"
                color="white"
                speed="5s"
                thickness={3}
                className="w-38"
              >
                Hire Me!
              </StarBorder>

              <StarBorder as="button" color="white" speed="5s" thickness={3}>
                Resume
              </StarBorder>
            </div> */}
          </div>

          {/* Bottom Content */}
          {/* <div className="animate-item mt-40 text-center md:text-start">
            <p className="text-md xs:text-lg sm:text-xl lg:text-2xl font-gilda text-gray-400 ">
              Discover serenity at every lakeside retreat, <br />
              where every visit becomes a cherished memory
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
