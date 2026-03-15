import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "./RevealSection";

interface RegionalNode {
  city: string;
  role: string;
  desc: string;
  /** SVG coordinates (percentage-based, 0-100) on a world map projection */
  x: number;
  y: number;
}

const nodes: RegionalNode[] = [
  { city: "Singapore", role: "Strategic Hub", desc: "Client leadership, strategy, capability oversight, regional coordination.", x: 71.5, y: 56 },
  { city: "India", role: "Scale & Execution Engine", desc: "Creative production, technology, demand operations, programme delivery at scale.", x: 62, y: 40 },
  { city: "Malaysia", role: "Market Node", desc: "Local market execution, events & activations, partner management.", x: 70.5, y: 53 },
  { city: "Indonesia", role: "Market Node", desc: "Indonesia market presence, local partnerships, consumer insights.", x: 73, y: 60 },
  { city: "USA", role: "Strategic Bridge", desc: "Global client bridge, US market access, cross-border partnership development.", x: 22, y: 34 },
];

const RegionalNodesMap = () => {
  const [active, setActive] = useState<number | null>(null);
  const sgIndex = 0; // Singapore is the hub

  return (
    <RevealSection blur>
      <div className="relative w-full">
        {/* SVG Map */}
        <svg
          viewBox="0 0 100 60"
          className="w-full h-auto"
          style={{ minHeight: 300 }}
        >
          {/* Subtle grid */}
          <defs>
            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Simplified continent outlines — very abstract landmass shapes */}
          {/* Americas */}
          <path
            d="M12,18 Q15,15 20,16 Q25,14 28,18 Q30,22 28,28 Q26,32 24,36 Q22,40 20,44 Q18,46 16,44 Q14,40 15,36 Q14,32 12,28 Q10,24 12,18Z"
            fill="hsl(210 20% 15%)"
            opacity="0.3"
          />
          {/* Europe + Africa */}
          <path
            d="M42,14 Q44,12 47,14 Q50,13 52,16 Q53,20 52,24 Q50,22 48,24 Q46,28 44,32 Q42,36 44,40 Q46,44 44,48 Q42,50 40,46 Q38,42 40,38 Q42,34 40,30 Q38,26 40,22 Q41,18 42,14Z"
            fill="hsl(210 20% 15%)"
            opacity="0.3"
          />
          {/* Asia */}
          <path
            d="M56,10 Q60,8 65,12 Q70,10 75,14 Q80,12 82,16 Q84,20 80,24 Q78,28 76,32 Q74,30 72,28 Q70,30 68,34 Q66,38 64,36 Q62,32 60,28 Q58,24 56,20 Q54,16 56,10Z"
            fill="hsl(210 20% 15%)"
            opacity="0.3"
          />
          {/* Southeast Asia / Indonesia archipelago */}
          <path
            d="M68,44 Q70,42 73,44 Q76,42 78,44 Q80,46 78,48 Q76,50 74,48 Q72,50 70,48 Q68,46 68,44Z"
            fill="hsl(210 20% 15%)"
            opacity="0.3"
          />
          {/* Australia */}
          <path
            d="M76,52 Q80,50 84,52 Q86,56 84,60 Q80,62 76,60 Q74,56 76,52Z"
            fill="hsl(210 20% 15%)"
            opacity="0.15"
          />

          {/* Connection lines from Singapore to other nodes */}
          {nodes.map((node, i) => {
            if (i === sgIndex) return null;
            const sg = nodes[sgIndex];
            return (
              <line
                key={`line-${i}`}
                x1={sg.x}
                y1={sg.y}
                x2={node.x}
                y2={node.y}
                stroke="hsl(210 100% 50%)"
                strokeOpacity={active === i ? 0.4 : 0.1}
                strokeWidth="0.15"
                strokeDasharray="0.6 0.4"
                className="transition-all duration-500"
              />
            );
          })}

          {/* Node dots */}
          {nodes.map((node, i) => {
            const isHub = i === sgIndex;
            const isActive = active === i;
            return (
              <g
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className="cursor-pointer"
              >
                {/* Glow circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHub ? 3 : 2}
                  fill={isHub ? "url(#hub-glow)" : "url(#node-glow)"}
                  className="transition-all duration-500"
                  style={{ opacity: isActive || isHub ? 1 : 0.5 }}
                />
                {/* Pulse ring for hub */}
                {isHub && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="2"
                    fill="none"
                    stroke="hsl(210 100% 50%)"
                    strokeWidth="0.1"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      from="1"
                      to="4"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                {/* Dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHub ? 0.7 : 0.5}
                  fill={isActive || isHub ? "hsl(210 100% 50%)" : "hsl(210 40% 60%)"}
                  className="transition-all duration-300"
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y - 1.8}
                  textAnchor="middle"
                  fill={isActive ? "hsl(210 100% 70%)" : "hsl(210 20% 60%)"}
                  fontSize="1.4"
                  fontFamily="var(--font-body)"
                  fontWeight={isActive || isHub ? "600" : "400"}
                  className="transition-all duration-300 select-none pointer-events-none"
                  style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {node.city}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Info tooltip */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none"
            >
              <div className="bg-card/95 backdrop-blur-sm border border-border/40 rounded-lg px-5 py-4 max-w-sm shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] text-primary uppercase tracking-[0.15em] font-body font-medium">
                    {nodes[active].role}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-foreground">
                  {nodes[active].city}
                </h4>
                <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed font-body">
                  {nodes[active].desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Node cards below map on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6 md:hidden">
          {nodes.map((node, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`text-left border rounded-md px-3 py-2.5 transition-all duration-300 ${
                active === i
                  ? "border-primary/30 bg-primary/5"
                  : "border-border/30 bg-transparent"
              }`}
            >
              <span className="text-[9px] text-dim uppercase tracking-wider font-body block">{node.role}</span>
              <span className="font-display text-xs font-semibold text-foreground block mt-0.5">{node.city}</span>
            </button>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default RegionalNodesMap;
