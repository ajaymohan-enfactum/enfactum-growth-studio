import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NoiseTextureBackground = () => {
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const canvas = noiseCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate static noise texture once
    canvas.width = 256;
    canvas.height = 256;
    const imageData = ctx.createImageData(256, 256);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 18; // Very subtle alpha
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Film grain noise layer */}
      <canvas
        ref={noiseCanvasRef}
        className="absolute inset-0 w-full h-full opacity-[0.35] mix-blend-overlay"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Parallax depth layer 1 — top-left warm glow */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full"
        style={{
          y: layer1Y,
          background: "radial-gradient(ellipse, hsla(210, 100%, 50%, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Parallax depth layer 2 — center deep accent */}
      <motion.div
        className="absolute top-1/3 right-0 w-2/3 h-2/3 rounded-full"
        style={{
          y: layer2Y,
          background: "radial-gradient(ellipse, hsla(225, 60%, 30%, 0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Parallax depth layer 3 — bottom subtle highlight */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          y: layer3Y,
          background: "radial-gradient(ellipse, hsla(195, 70%, 45%, 0.04) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(225 15% 8% / 0.5) 100%)",
        }}
      />
    </div>
  );
};

export default NoiseTextureBackground;
