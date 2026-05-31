import React from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  const locations = [
    {
      id: "agra",
      name: "Taj Mahal",
      label: "Enfactum India",
      cx: 240,
      cy: 117,
      imageSrc: "/assets/expected-taj-mahal.png",
      delay: 0.5,
    },
    {
      id: "kl",
      name: "Petronas Towers",
      label: "Enfactum Malaysia",
      cx: 615,
      cy: 422,
      imageSrc: "/assets/expected-petronas.png",
      delay: 1.5,
    },
    {
      id: "sg",
      name: "Merlion",
      label: "Enfactum Singapore",
      cx: 633,
      cy: 444,
      imageSrc: "/assets/expected-merlion.png",
      delay: 2.5,
    },
    {
      id: "jakarta",
      name: "Monas",
      label: "Enfactum Indonesia",
      cx: 698,
      cy: 528,
      imageSrc: "/assets/expected-monas.png",
      delay: 3.5,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-[#061938] overflow-hidden">
      <img
        src="/assets/expected-map-bg.png"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ objectPosition: "center top" }}
      />
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061938]/40 via-transparent to-[#061938]/70 pointer-events-none" />

      <div className="absolute inset-0 z-10">
        {locations.map((loc) => (
          <motion.div
            key={`info-${loc.id}`}
            className="absolute z-50 flex flex-col items-center justify-center group pointer-events-auto"
            style={{
              left: `${(loc.cx / 1000) * 100}%`,
              top: `${(loc.cy / 600) * 100}%`,
              transform: "translate(-50%, -100%)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: loc.delay + 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 h-20 md:w-28 md:h-28 flex items-end justify-center cursor-pointer"
            >
              <img
                src={loc.imageSrc}
                alt={loc.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.6)]"
              />
            </motion.div>

            <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.25rem)] z-50 -translate-x-1/2 -translate-y-1 rounded-md bg-[#061938]/95 px-3 py-1.5 text-xs font-medium tracking-wide text-[#00d8ff] opacity-0 drop-shadow-[0_0_10px_rgba(0,216,255,0.4)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm whitespace-nowrap border border-[#00d8ff]/40">
              {loc.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
