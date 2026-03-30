import { motion } from "framer-motion";

interface CapabilityIconProps {
  type: "growth" | "brand" | "ai" | "live";
  className?: string;
}

/**
 * 3D-style gradient icons for the four capabilities.
 * Each icon uses layered gradients and subtle shadows for depth.
 */
const CapabilityIcon = ({ type, className = "" }: CapabilityIconProps) => {
  const configs = {
    growth: {
      gradient: "from-blue-400 via-cyan-400 to-blue-600",
      shadow: "shadow-[0_8px_24px_-6px_rgba(59,130,246,0.5)]",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="g-growth" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Stacked layers — infrastructure metaphor */}
          <rect x="6" y="20" width="20" height="4" rx="1.5" fill="url(#g-growth)" opacity="0.4" />
          <rect x="6" y="14" width="20" height="4" rx="1.5" fill="url(#g-growth)" opacity="0.65" />
          <rect x="6" y="8" width="20" height="4" rx="1.5" fill="url(#g-growth)" opacity="0.9" />
          {/* Rising arrow */}
          <path d="M22 7L26 4L26 10" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    brand: {
      gradient: "from-violet-400 via-fuchsia-400 to-violet-600",
      shadow: "shadow-[0_8px_24px_-6px_rgba(139,92,246,0.5)]",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="g-brand" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* Megaphone / broadcast shape */}
          <path d="M8 14L8 18L12 20L24 26V6L12 12L8 14Z" fill="url(#g-brand)" opacity="0.85" />
          <circle cx="24" cy="16" r="3" fill="#C4B5FD" opacity="0.5" />
          {/* Sound waves */}
          <path d="M26 11C28 12.5 28 19.5 26 21" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    ai: {
      gradient: "from-emerald-400 via-teal-400 to-emerald-600",
      shadow: "shadow-[0_8px_24px_-6px_rgba(16,185,129,0.5)]",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="g-ai" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Neural network nodes */}
          <circle cx="16" cy="16" r="4" fill="url(#g-ai)" opacity="0.9" />
          <circle cx="8" cy="10" r="2.5" fill="url(#g-ai)" opacity="0.5" />
          <circle cx="24" cy="10" r="2.5" fill="url(#g-ai)" opacity="0.5" />
          <circle cx="8" cy="22" r="2.5" fill="url(#g-ai)" opacity="0.5" />
          <circle cx="24" cy="22" r="2.5" fill="url(#g-ai)" opacity="0.5" />
          {/* Connections */}
          <line x1="10" y1="11" x2="14" y2="14" stroke="#6EE7B7" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="11" x2="18" y2="14" stroke="#6EE7B7" strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="21" x2="14" y2="18" stroke="#6EE7B7" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="21" x2="18" y2="18" stroke="#6EE7B7" strokeWidth="1" opacity="0.5" />
        </svg>
      ),
    },
    live: {
      gradient: "from-amber-400 via-orange-400 to-amber-600",
      shadow: "shadow-[0_8px_24px_-6px_rgba(245,158,11,0.5)]",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="g-live" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Sparkle / starburst */}
          <path d="M16 4L18.5 12.5L27 10L20 16L27 22L18.5 19.5L16 28L13.5 19.5L5 22L12 16L5 10L13.5 12.5L16 4Z" fill="url(#g-live)" opacity="0.85" />
          <circle cx="16" cy="16" r="3" fill="#FDE68A" opacity="0.7" />
        </svg>
      ),
    },
  };

  const config = configs[type];

  return (
    <motion.div
      className={`relative w-12 h-12 ${className}`}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Glow behind */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${config.gradient} opacity-20 blur-lg`} />
      {/* Icon container */}
      <div className={`relative w-full h-full rounded-xl bg-gradient-to-br ${config.gradient} p-0.5 ${config.shadow}`}>
        <div className="w-full h-full rounded-[10px] bg-background/80 backdrop-blur-sm flex items-center justify-center p-2">
          {config.icon}
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilityIcon;
