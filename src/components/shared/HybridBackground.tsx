import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HybridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null);
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
      time += 0.002;

      // Aurora layer 1 — primary blue
      const g1 = ctx.createRadialGradient(
        w * 0.3 + Math.sin(time * 0.7) * w * 0.15,
        h * 0.4 + Math.cos(time * 0.5) * h * 0.2,
        0, w * 0.3, h * 0.4, w * 0.6
      );
      g1.addColorStop(0, "hsla(210, 100%, 50%, 0.07)");
      g1.addColorStop(0.5, "hsla(210, 80%, 40%, 0.03)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Aurora layer 2 — secondary sweep
      const g2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(time * 0.6) * w * 0.2,
        h * 0.6 + Math.sin(time * 0.4) * h * 0.15,
        0, w * 0.7, h * 0.6, w * 0.5
      );
      g2.addColorStop(0, "hsla(220, 90%, 45%, 0.05)");
      g2.addColorStop(0.6, "hsla(230, 60%, 30%, 0.02)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Aurora layer 3 — teal accent
      const g3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.9 + 2) * w * 0.25,
        h * 0.3 + Math.cos(time * 0.3 + 1) * h * 0.2,
        0, w * 0.5, h * 0.3, w * 0.4
      );
      g3.addColorStop(0, "hsla(195, 80%, 50%, 0.04)");
      g3.addColorStop(0.5, "hsla(200, 60%, 40%, 0.015)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
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

  // Static noise grain
  useEffect(() => {
    const canvas = noiseCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 256;
    canvas.height = 256;
    const imageData = ctx.createImageData(256, 256);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 15;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated aurora canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Film grain overlay */}
      <canvas
        ref={noiseCanvasRef}
        className="absolute inset-0 w-full h-full opacity-[0.3] mix-blend-overlay"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Parallax depth layer — soft glow */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full"
        style={{
          y: layer1Y,
          background: "radial-gradient(ellipse, hsla(210, 100%, 50%, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Parallax depth layer — deep accent */}
      <motion.div
        className="absolute top-1/3 right-0 w-2/3 h-2/3 rounded-full"
        style={{
          y: layer2Y,
          background: "radial-gradient(ellipse, hsla(225, 60%, 30%, 0.06) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(225 15% 8% / 0.4) 100%)",
        }}
      />
    </div>
  );
};

export default HybridBackground;
