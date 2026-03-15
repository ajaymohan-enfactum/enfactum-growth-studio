import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HybridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  // Aurora animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.0015; // Slightly slower for elegance

      // Aurora layer 1 — primary blue, richer
      const g1 = ctx.createRadialGradient(
        w * 0.3 + Math.sin(time * 0.7) * w * 0.15,
        h * 0.4 + Math.cos(time * 0.5) * h * 0.2,
        0, w * 0.3, h * 0.4, w * 0.6
      );
      g1.addColorStop(0, "hsla(210, 100%, 50%, 0.08)");
      g1.addColorStop(0.4, "hsla(210, 80%, 40%, 0.04)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Aurora layer 2 — deeper secondary
      const g2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(time * 0.6) * w * 0.2,
        h * 0.6 + Math.sin(time * 0.4) * h * 0.15,
        0, w * 0.7, h * 0.6, w * 0.5
      );
      g2.addColorStop(0, "hsla(220, 90%, 45%, 0.06)");
      g2.addColorStop(0.5, "hsla(230, 60%, 30%, 0.025)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Aurora layer 3 — teal accent, slightly stronger
      const g3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.9 + 2) * w * 0.25,
        h * 0.3 + Math.cos(time * 0.3 + 1) * h * 0.2,
        0, w * 0.5, h * 0.3, w * 0.4
      );
      g3.addColorStop(0, "hsla(195, 80%, 50%, 0.045)");
      g3.addColorStop(0.5, "hsla(200, 60%, 40%, 0.018)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      // Layer 4 — deep warm undertone for richness
      const g4 = ctx.createRadialGradient(
        w * 0.6 + Math.sin(time * 0.4 + 3) * w * 0.1,
        h * 0.7 + Math.cos(time * 0.6 + 2) * h * 0.1,
        0, w * 0.6, h * 0.7, w * 0.35
      );
      g4.addColorStop(0, "hsla(240, 40%, 25%, 0.03)");
      g4.addColorStop(1, "transparent");
      ctx.fillStyle = g4;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated aurora canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.85 }}
      />

      {/* Parallax depth layer — soft glow */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full"
        style={{
          y: layer1Y,
          background: "radial-gradient(ellipse, hsla(210, 100%, 50%, 0.045) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Parallax depth layer — deep accent */}
      <motion.div
        className="absolute top-1/3 right-0 w-2/3 h-2/3 rounded-full"
        style={{
          y: layer2Y,
          background: "radial-gradient(ellipse, hsla(225, 60%, 30%, 0.065) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Vignette — deeper */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, hsl(225 15% 6% / 0.5) 100%)",
        }}
      />
    </div>
  );
};

export default HybridBackground;
