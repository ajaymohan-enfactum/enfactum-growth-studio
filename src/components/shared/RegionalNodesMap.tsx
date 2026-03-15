import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "./RevealSection";

interface RegionalNode {
  city: string;
  role: string;
  desc: string;
  x: number;
  y: number;
  size: "hub" | "engine" | "node" | "bridge";
}

const nodes: RegionalNode[] = [
  { city: "Singapore", role: "Strategic Hub", desc: "Client leadership, strategy, capability oversight, regional coordination.", x: 71.5, y: 56, size: "hub" },
  { city: "India", role: "Scale & Execution Engine", desc: "Creative production, technology, demand operations, programme delivery at scale.", x: 62, y: 40, size: "engine" },
  { city: "Malaysia", role: "Market Node", desc: "Local market execution, events & activations, partner management.", x: 70.5, y: 53, size: "node" },
  { city: "Indonesia", role: "Market Node", desc: "Indonesia market presence, local partnerships, consumer insights.", x: 73, y: 60, size: "node" },
  { city: "USA", role: "Strategic Bridge", desc: "Global client bridge, US market access, cross-border partnership development.", x: 22, y: 34, size: "bridge" },
];

const SG = 0;

/** Curved path from Singapore hub to each node */
const getConnectionPath = (from: RegionalNode, to: RegionalNode) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  // Control point offset — curves upward for visual elegance
  const cx = from.x + dx * 0.5 + dy * 0.15;
  const cy = from.y + dy * 0.5 - Math.abs(dx) * 0.12;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
};

/** Signal particle along a connection path */
const SignalParticle = ({ path, delay, duration }: { path: string; delay: number; duration: number }) => (
  <circle r="0.25" fill="hsl(210 100% 60%)" opacity="0">
    <animateMotion path={path} dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.8;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
  </circle>
);

const RegionalNodesMap = () => {
  const [active, setActive] = useState<number | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);

  // Auto-cycle through nodes to keep it feeling alive
  useEffect(() => {
    if (active !== null) return; // don't auto-cycle when user is interacting
    const timer = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % nodes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [active]);

  const highlightedIndex = active ?? cycleIndex;

  const dotRadius = (node: RegionalNode, isHighlighted: boolean) => {
    const base = node.size === "hub" ? 0.9 : node.size === "engine" ? 0.65 : 0.5;
    return isHighlighted ? base * 1.3 : base;
  };

  const glowRadius = (node: RegionalNode) => {
    switch (node.size) {
      case "hub": return 5;
      case "engine": return 3.5;
      default: return 2.5;
    }
  };

  return (
    <RevealSection blur>
      <div className="relative w-full">
        <svg
          viewBox="0 0 100 70"
          className="w-full h-auto"
          style={{ minHeight: 320 }}
        >
          <defs>
            {/* Hub glow — larger, brighter */}
            <radialGradient id="hub-glow-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 55%)" stopOpacity="0.5" />
              <stop offset="40%" stopColor="hsl(210 100% 50%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
            </radialGradient>
            {/* Standard node glow */}
            <radialGradient id="node-glow-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 55%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
            </radialGradient>
            {/* Active highlight glow */}
            <radialGradient id="active-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(210 100% 50%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
            </radialGradient>
            {/* Connection line gradient */}
            <linearGradient id="conn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(210 100% 50%)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="hsl(210 100% 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(210 100% 50%)" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Abstract continent shapes — very subtle */}
          <g opacity="0.2">
            {/* Americas */}
            <path d="M12,18 Q15,15 20,16 Q25,14 28,18 Q30,22 28,28 Q26,32 24,36 Q22,40 20,44 Q18,46 16,44 Q14,40 15,36 Q14,32 12,28 Q10,24 12,18Z" fill="hsl(210 15% 16%)" />
            {/* Europe + Africa */}
            <path d="M42,14 Q44,12 47,14 Q50,13 52,16 Q53,20 52,24 Q50,22 48,24 Q46,28 44,32 Q42,36 44,40 Q46,44 44,48 Q42,50 40,46 Q38,42 40,38 Q42,34 40,30 Q38,26 40,22 Q41,18 42,14Z" fill="hsl(210 15% 16%)" />
            {/* Asia */}
            <path d="M56,10 Q60,8 65,12 Q70,10 75,14 Q80,12 82,16 Q84,20 80,24 Q78,28 76,32 Q74,30 72,28 Q70,30 68,34 Q66,38 64,36 Q62,32 60,28 Q58,24 56,20 Q54,16 56,10Z" fill="hsl(210 15% 16%)" />
            {/* Southeast Asia archipelago */}
            <path d="M68,44 Q70,42 73,44 Q76,42 78,44 Q80,46 78,48 Q76,50 74,48 Q72,50 70,48 Q68,46 68,44Z" fill="hsl(210 15% 16%)" />
            {/* Australia */}
            <path d="M76,52 Q80,50 84,52 Q86,56 84,60 Q80,62 76,60 Q74,56 76,52Z" fill="hsl(210 15% 16%)" opacity="0.5" />
          </g>

          {/* Connection curves from Singapore to each node */}
          {nodes.map((node, i) => {
            if (i === SG) return null;
            const sg = nodes[SG];
            const path = getConnectionPath(sg, node);
            const isHighlighted = highlightedIndex === i;
            return (
              <g key={`conn-${i}`}>
                {/* Base connection line */}
                <path
                  d={path}
                  fill="none"
                  stroke="hsl(210 100% 50%)"
                  strokeOpacity={isHighlighted ? 0.25 : 0.06}
                  strokeWidth={isHighlighted ? 0.2 : 0.12}
                  strokeDasharray={isHighlighted ? "none" : "0.8 0.5"}
                  className="transition-all duration-700"
                />
                {/* Signal particles — travelling dots */}
                <SignalParticle path={path} delay={i * 1.2} duration={3 + i * 0.5} />
                <SignalParticle path={path} delay={i * 1.2 + 1.5} duration={3 + i * 0.5} />
              </g>
            );
          })}

          {/* Node rendering */}
          {nodes.map((node, i) => {
            const isHub = i === SG;
            const isHighlighted = highlightedIndex === i;
            const gr = glowRadius(node);
            const dr = dotRadius(node, isHighlighted);

            return (
              <g
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                className="cursor-pointer"
              >
                {/* Ambient glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHighlighted ? gr * 1.5 : gr}
                  fill={isHub ? "url(#hub-glow-2)" : isHighlighted ? "url(#active-glow)" : "url(#node-glow-2)"}
                  className="transition-all duration-700"
                />

                {/* Hub multi-ring pulse */}
                {isHub && (
                  <>
                    <circle cx={node.x} cy={node.y} r="1.5" fill="none" stroke="hsl(210 100% 50%)" strokeWidth="0.08">
                      <animate attributeName="r" values="1;5;1" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={node.x} cy={node.y} r="1.5" fill="none" stroke="hsl(210 100% 50%)" strokeWidth="0.06">
                      <animate attributeName="r" values="1;3.5;1" dur="3s" begin="0.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" begin="0.8s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* Active ring */}
                {isHighlighted && !isHub && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="1.8"
                    fill="none"
                    stroke="hsl(210 100% 55%)"
                    strokeWidth="0.08"
                    opacity="0.3"
                  >
                    <animate attributeName="r" values="1;3;1" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Core dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={dr}
                  fill={isHighlighted || isHub ? "hsl(210 100% 55%)" : "hsl(210 30% 50%)"}
                  className="transition-all duration-500"
                />
                {/* Inner bright dot */}
                {(isHub || isHighlighted) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={dr * 0.4}
                    fill="hsl(210 100% 85%)"
                    opacity="0.8"
                  />
                )}

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y - (isHub ? 2.5 : 2)}
                  textAnchor="middle"
                  fill={isHighlighted ? "hsl(210 50% 80%)" : "hsl(210 15% 50%)"}
                  fontSize={isHub ? "1.6" : "1.3"}
                  fontFamily="var(--font-body)"
                  fontWeight={isHighlighted || isHub ? "600" : "400"}
                  className="transition-all duration-500 select-none pointer-events-none"
                  style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  {node.city}
                </text>

                {/* Role sub-label for hub */}
                {isHub && (
                  <text
                    x={node.x}
                    y={node.y + 2.8}
                    textAnchor="middle"
                    fill="hsl(210 100% 55%)"
                    fontSize="0.9"
                    fontFamily="var(--font-body)"
                    fontWeight="500"
                    opacity="0.4"
                    className="select-none pointer-events-none"
                    style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
                  >
                    {node.role}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Info tooltip */}
        <AnimatePresence mode="wait">
          {highlightedIndex !== null && (
            <motion.div
              key={highlightedIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-2 left-0 right-0 flex justify-center pointer-events-none"
            >
              <div className="bg-background/90 backdrop-blur-md border border-border/20 rounded-sm px-6 py-4 max-w-xs shadow-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  <span className="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-body font-medium">
                    {nodes[highlightedIndex].role}
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold text-foreground tracking-tight">
                  {nodes[highlightedIndex].city}
                </h4>
                <p className="text-[11px] text-foreground/30 mt-1.5 leading-relaxed font-body">
                  {nodes[highlightedIndex].desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile node selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6 md:hidden">
          {nodes.map((node, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`text-left border rounded-sm px-3 py-2.5 transition-all duration-500 ${
                highlightedIndex === i
                  ? "border-primary/25 bg-primary/[0.04]"
                  : "border-border/15 bg-transparent"
              }`}
            >
              <span className="text-[9px] text-foreground/20 uppercase tracking-wider font-body block">{node.role}</span>
              <span className="font-display text-xs font-semibold text-foreground block mt-0.5">{node.city}</span>
            </button>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default RegionalNodesMap;
