import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#fff", // Dots are white
              },
              links: {
                enable: false, // Disable connecting lines for a cleaner look
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true, // Dots move randomly
                speed: 0.5, // Slow movement for a subtle effect
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 200, // Number of dots
              },
              opacity: {
                value: { min: 0.4, max: 1 }, // Dots with slight transparency
              },
              shape: {
                type: "circle", // Circle shapes for dots
              },
              size: {
                value: { min: 1, max: 2 }, // Small dot sizes
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
