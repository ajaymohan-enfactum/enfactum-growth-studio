import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Megaphone, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface NodeData {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  href: string;
  x: number;
  y: number;
}

interface EdgeData {
  from: string;
  to: string;
  label: string;
}

const nodes: NodeData[] = [
  { id: "gi", label: "Growth Infrastructure", shortLabel: "Growth", icon: Layers, href: "/capabilities/growth-infrastructure", x: 0.5, y: 0.12 },
  { id: "bd", label: "Brand & Demand", shortLabel: "Brand", icon: Megaphone, href: "/capabilities/brand-demand", x: 0.88, y: 0.5 },
  { id: "le", label: "Live Experiences", shortLabel: "Live", icon: Sparkles, href: "/capabilities/live-experiences", x: 0.5, y: 0.88 },
  { id: "ai", label: "AI Ecosystems", shortLabel: "AI", icon: Brain, href: "/capabilities/ai-ecosystems", x: 0.12, y: 0.5 },
];

const edges: EdgeData[] = [
  { from: "gi", to: "bd", label: "GTM architecture feeds integrated demand programmes" },
  { from: "bd", to: "le", label: "Demand strategy shapes commercially designed activations" },
  { from: "ai", to: "gi", label: "Innovation partnerships feed new growth channels" },
  { from: "le", to: "ai", label: "Events surface ecosystem opportunities and startup deal flow" },
];

const getNodePos = (node: NodeData, w: number, h: number) => ({
  cx: node.x * w,
  cy: node.y * h,
});

const CapabilityGraph = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 600, h: 600 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const dim = Math.min(width, 600);
      setSize({ w: dim, h: dim });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { w, h } = size;
  const nodeRadius = w < 400 ? 36 : 48;

  const activeEdges = activeNode
    ? edges.filter((e) => e.from === activeNode || e.to === activeNode)
    : edges;

  const activeEdge = activeNode
    ? edges.find((e) => e.from === activeNode || e.to === activeNode)
    : null;

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        className="w-full h-auto"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210 100% 50% / 0.6)" />
            <stop offset="100%" stopColor="hsl(210 100% 50% / 0.15)" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const fromNode = nodes.find((n) => n.id === edge.from)!;
          const toNode = nodes.find((n) => n.id === edge.to)!;
          const from = getNodePos(fromNode, w, h);
          const to = getNodePos(toNode, w, h);

          const isActive = !activeNode || activeEdges.includes(edge);
          const opacity = isActive ? 1 : 0.12;

          // Curved path via center offset
          const mx = (from.cx + to.cx) / 2 + (to.cy - from.cy) * 0.15;
          const my = (from.cy + to.cy) / 2 - (to.cx - from.cx) * 0.15;
          const d = `M ${from.cx} ${from.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`;

          return (
            <g key={i}>
              <motion.path
                d={d}
                fill="none"
                stroke="hsl(210 100% 50% / 0.2)"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={animated ? { pathLength: 1, opacity } : {}}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
              />
              {/* Animated particle along path */}
              {animated && isActive && (
                <motion.circle
                  r={2.5}
                  fill="hsl(210 100% 50%)"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const pos = getNodePos(node, w, h);
          const isActive = !activeNode || activeNode === node.id;
          const isHovered = activeNode === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              {/* Outer ring on hover */}
              <motion.circle
                cx={pos.cx}
                cy={pos.cy}
                r={nodeRadius + 8}
                fill="none"
                stroke="hsl(210 100% 50%)"
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 0.4 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              />
              {/* Node circle */}
              <motion.circle
                cx={pos.cx}
                cy={pos.cy}
                r={nodeRadius}
                fill="hsl(225 14% 11%)"
                stroke={isHovered ? "hsl(210 100% 50%)" : "hsl(225 8% 20%)"}
                strokeWidth={isHovered ? 2 : 1}
                initial={{ scale: 0, opacity: 0 }}
                animate={animated ? { scale: 1, opacity: isActive ? 1 : 0.4 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i, type: "spring", stiffness: 200 }}
              />
              {/* Icon placeholder — rendered via foreignObject */}
              <motion.foreignObject
                x={pos.cx - 12}
                y={pos.cy - 20}
                width={24}
                height={24}
                initial={{ opacity: 0 }}
                animate={animated ? { opacity: isActive ? 1 : 0.4 } : {}}
                transition={{ delay: 0.3 + 0.15 * i }}
              >
                <node.icon className="w-6 h-6 text-primary" />
              </motion.foreignObject>
              {/* Label */}
              <motion.text
                x={pos.cx}
                y={pos.cy + 14}
                textAnchor="middle"
                className="fill-foreground font-display text-[11px] font-semibold select-none"
                initial={{ opacity: 0 }}
                animate={animated ? { opacity: isActive ? 1 : 0.3 } : {}}
                transition={{ delay: 0.4 + 0.15 * i }}
              >
                {w < 400 ? node.shortLabel : node.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Edge label tooltip */}
      <AnimatePresence>
        {activeEdge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-4 bg-card border border-border/50 rounded-lg px-4 py-3 shadow-xl max-w-xs text-center"
          >
            <p className="text-[13px] text-muted-foreground leading-relaxed">{activeEdge.label}</p>
            {activeNode && (
              <Link
                to={nodes.find((n) => n.id === activeNode)!.href}
                className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary hover:underline"
              >
                Explore {nodes.find((n) => n.id === activeNode)!.label} →
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CapabilityGraph;
