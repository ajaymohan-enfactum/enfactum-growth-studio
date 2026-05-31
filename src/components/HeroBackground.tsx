import React from "react";

const HeroBackground = () => {
  return (
    <div className="relative w-full h-screen bg-[#061938] overflow-hidden">
      <img
        src="/assets/expected-map-bg.png"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061938]/40 via-transparent to-[#061938]/70 pointer-events-none" />
    </div>
  );
};

export default HeroBackground;
