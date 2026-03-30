import { motion } from "framer-motion";

/**
 * Living mesh gradient background with slow-moving blobs + noise overlay.
 * Renders behind page content — pointer-events: none, fixed position.
 */
const LivingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Base layer — deep navy */}
    <div className="absolute inset-0" style={{ background: "hsl(220 16% 7%)" }} />

    {/* Blob 1 — midnight blue, top-left */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: "60vw",
        height: "60vh",
        top: "-10%",
        left: "-10%",
        background: "radial-gradient(circle, #020617 0%, transparent 70%)",
        filter: "blur(140px)",
        opacity: 0.7,
      }}
      animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
      transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Blob 2 — deep indigo, bottom-right */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: "55vw",
        height: "55vh",
        bottom: "-15%",
        right: "-10%",
        background: "radial-gradient(circle, #1e1b4b 0%, transparent 70%)",
        filter: "blur(150px)",
        opacity: 0.5,
      }}
      animate={{ x: [0, -50, 30, 0], y: [0, -40, 25, 0] }}
      transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Blob 3 — subtle midnight, center-right */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: "45vw",
        height: "50vh",
        top: "30%",
        right: "5%",
        background: "radial-gradient(circle, #020617 0%, transparent 65%)",
        filter: "blur(130px)",
        opacity: 0.4,
      }}
      animate={{ x: [0, -40, 20, 0], y: [0, 30, -30, 0] }}
      transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Blob 4 — deep indigo accent, top-right */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: "40vw",
        height: "40vh",
        top: "-5%",
        right: "-5%",
        background: "radial-gradient(circle, #1e1b4b 0%, transparent 65%)",
        filter: "blur(120px)",
        opacity: 0.35,
      }}
      animate={{ x: [0, 30, -20, 0], y: [0, -25, 35, 0] }}
      transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Noise / grain overlay — 2% opacity */}
    <div
      className="absolute inset-0"
      style={{
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

export default LivingBackground;
