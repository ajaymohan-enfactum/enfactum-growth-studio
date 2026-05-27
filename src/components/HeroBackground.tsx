import React from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  const locations = [
    {
      id: "agra",
      name: "Taj Mahal",
      country: "India",
      label: "Enfactum India",
      cx: 247,
      cy: 92,
      imageSrc: "/assets/expected-taj-mahal.png",
      delay: 0.5,
    },
    {
      id: "kl",
      name: "Petronas Towers",
      country: "Malaysia",
      label: "Enfactum Malaysia",
      cx: 773,
      cy: 414,
      imageSrc: "/assets/expected-petronas.png",
      delay: 1.5,
    },
    {
      id: "sg",
      name: "Merlion",
      country: "Singapore",
      label: "Enfactum Singapore",
      cx: 820,
      cy: 419,
      imageSrc: "/assets/expected-merlion.png",
      delay: 2.5,
    },
    {
      id: "jakarta",
      name: "Monas",
      country: "Indonesia",
      label: "Enfactum Indonesia",
      cx: 852,
      cy: 519,
      imageSrc: "/assets/expected-monas.png",
      delay: 3.5,
    },
  ];

  const connectionPath = `M ${locations[0].cx} ${locations[0].cy} 
                          Q 450 250 ${locations[1].cx} ${locations[1].cy} 
                          Q 660 435 ${locations[2].cx} ${locations[2].cy} 
                          Q 720 510 ${locations[3].cx} ${locations[3].cy}`;

  return (
    <div className="relative w-full h-screen bg-[#061938] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2a52_1px,transparent_1px),linear-gradient(to_bottom,#0f2a52_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative w-full max-w-6xl aspect-[16/9] z-10">
        <img
          src="/assets/expected-map-bg.png"
          alt="Map"
          className="absolute inset-0 w-full h-full object-fill opacity-60"
        />
        <svg
          className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,195,255,0.5)]"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <motion.path
            d={connectionPath}
            fill="transparent"
            stroke="#00d8ff"
            strokeWidth="3"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.circle
            r="5"
            fill="#ffffff"
            className="drop-shadow-[0_0_10px_#ffffff]"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
            style={{ offsetPath: `path('${connectionPath}')` }}
          />

          {locations.map((loc) => (
            <g key={loc.id}>
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r="12"
                fill="transparent"
                stroke="#00d8ff"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0, 0.8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: loc.delay,
                }}
              />
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r="6"
                fill="#00d8ff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: loc.delay }}
              />
            </g>
          ))}
        </svg>

        {locations.map((loc) => (
          <motion.div
            key={`info-${loc.id}`}
            className="absolute flex flex-col items-center justify-center group"
            style={{
              left: `${(loc.cx / 1000) * 100}%`,
              top: `${(loc.cy / 600) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: loc.delay + 0.2,
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-x-3 bottom-2 h-1/2 bg-[#00d8ff]/10 rounded-full blur-xl border border-[#00d8ff]/30" />

              <img
                src={loc.imageSrc}
                alt={loc.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.6)]"
              />
            </motion.div>

            <div className="pointer-events-none absolute top-full mt-1 px-3 py-1.5 rounded-md bg-[#061938]/90 border border-[#00d8ff]/40 text-[#00d8ff] text-xs md:text-sm font-medium tracking-wide whitespace-nowrap opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 drop-shadow-[0_0_10px_rgba(0,216,255,0.4)] z-30">
              {loc.label}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default HeroBackground;
