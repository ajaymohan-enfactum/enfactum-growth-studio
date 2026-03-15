import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * HeroAtmosphere — immersive canvas background for the homepage hero.
 * Layers:
 *   1. Deep radial gradient field (slow drift)
 *   2. Signal topology lines (interconnected growth network)
 *   3. Vertical light modulation bands
 *   4. Film grain overlay
 *   5. Parallax depth glows
 *   6. Edge vignette
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  intensity: number;
}

const HeroAtmosphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const layer1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "18%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "8%"]);

  // Main canvas — topology + aurora + light bands
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const nodes: Node[] = [];
    const nodeCount = 40;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.08,
          radius: Math.random() * 1.5 + 0.5,
          phase: Math.random() * Math.PI * 2,
          intensity: 0.3 + Math.random() * 0.7,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.0015;

      // --- Layer 1: Deep aurora fields ---
      // Primary deep blue sweep
      const g1 = ctx.createRadialGradient(
        w * 0.25 + Math.sin(time * 0.7) * w * 0.12,
        h * 0.35 + Math.cos(time * 0.5) * h * 0.15,
        0,
        w * 0.25,
        h * 0.35,
        w * 0.7
      );
      g1.addColorStop(0, "hsla(215, 80%, 25%, 0.12)");
      g1.addColorStop(0.4, "hsla(215, 60%, 15%, 0.06)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Secondary — deeper, offset
      const g2 = ctx.createRadialGradient(
        w * 0.75 + Math.cos(time * 0.4) * w * 0.15,
        h * 0.6 + Math.sin(time * 0.6) * h * 0.12,
        0,
        w * 0.75,
        h * 0.6,
        w * 0.55
      );
      g2.addColorStop(0, "hsla(225, 70%, 20%, 0.08)");
      g2.addColorStop(0.5, "hsla(230, 50%, 12%, 0.04)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Teal accent — subtle
      const g3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.9 + 2) * w * 0.2,
        h * 0.2 + Math.cos(time * 0.35 + 1) * h * 0.15,
        0,
        w * 0.5,
        h * 0.2,
        w * 0.35
      );
      g3.addColorStop(0, "hsla(200, 70%, 35%, 0.05)");
      g3.addColorStop(0.6, "hsla(210, 50%, 20%, 0.02)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      // --- Layer 2: Vertical light modulation ---
      for (let i = 0; i < 5; i++) {
        const bandX = w * (0.15 + i * 0.18) + Math.sin(time * 0.3 + i * 1.2) * w * 0.03;
        const bandGrad = ctx.createLinearGradient(bandX - 60, 0, bandX + 60, 0);
        bandGrad.addColorStop(0, "transparent");
        bandGrad.addColorStop(0.5, `hsla(210, 100%, 50%, ${0.015 + Math.sin(time * 0.5 + i) * 0.008})`);
        bandGrad.addColorStop(1, "transparent");
        ctx.fillStyle = bandGrad;
        ctx.fillRect(bandX - 60, 0, 120, h);
      }

      // --- Layer 3: Signal topology ---
      // Update nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      }

      // Connection lines — signal paths
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.06 * nodes[i].intensity * nodes[j].intensity;
            // Pulse along connection
            const pulse = Math.sin(time * 2 + nodes[i].phase + nodes[j].phase) * 0.5 + 0.5;
            const finalAlpha = alpha * (0.6 + pulse * 0.4);
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `hsla(210, 80%, 55%, ${finalAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Signal nodes — soft glowing dots
      for (const node of nodes) {
        const pulse = Math.sin(time * 1.5 + node.phase) * 0.5 + 0.5;
        const glowRadius = node.radius * (2 + pulse * 3);
        
        // Outer glow
        const nodeGlow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        nodeGlow.addColorStop(0, `hsla(210, 100%, 60%, ${0.12 * node.intensity * (0.5 + pulse * 0.5)})`);
        nodeGlow.addColorStop(1, "transparent");
        ctx.fillStyle = nodeGlow;
        ctx.fillRect(node.x - glowRadius, node.y - glowRadius, glowRadius * 2, glowRadius * 2);

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 90%, 65%, ${0.2 * node.intensity})`;
        ctx.fill();
      }

      // --- Layer 4: Horizontal signal flow (subtle data stream) ---
      for (let s = 0; s < 3; s++) {
        const streamY = h * (0.3 + s * 0.2);
        const progress = ((time * 0.3 + s * 0.33) % 1);
        const streamX = progress * (w + 200) - 100;
        const streamGrad = ctx.createRadialGradient(streamX, streamY, 0, streamX, streamY, 80);
        streamGrad.addColorStop(0, "hsla(210, 100%, 55%, 0.04)");
        streamGrad.addColorStop(1, "transparent");
        ctx.fillStyle = streamGrad;
        ctx.fillRect(streamX - 80, streamY - 80, 160, 160);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    window.addEventListener("resize", () => { resize(); init(); });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Static grain texture
  useEffect(() => {
    const canvas = grainRef.current;
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
      data[i + 3] = 12;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base atmosphere canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.9 }}
      />

      {/* Film grain */}
      <canvas
        ref={grainRef}
        className="absolute inset-0 w-full h-full opacity-[0.25] mix-blend-overlay"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Parallax glow — left anchor */}
      <motion.div
        className="absolute -top-[20%] -left-[15%] w-[60%] h-[80%] rounded-full"
        style={{
          y: layer1Y,
          background: "radial-gradient(ellipse at center, hsla(215, 80%, 30%, 0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Parallax glow — right depth */}
      <motion.div
        className="absolute top-[15%] -right-[10%] w-[50%] h-[70%] rounded-full"
        style={{
          y: layer2Y,
          background: "radial-gradient(ellipse at center, hsla(225, 60%, 20%, 0.1) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Parallax glow — bottom accent */}
      <motion.div
        className="absolute bottom-[5%] left-[20%] w-[40%] h-[40%] rounded-full"
        style={{
          y: layer3Y,
          background: "radial-gradient(ellipse at center, hsla(210, 100%, 50%, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vertical light column — left side text anchoring */}
      <div
        className="absolute top-0 bottom-0 left-[12%] w-px"
        style={{
          background: "linear-gradient(to bottom, transparent 10%, hsla(210, 100%, 55%, 0.06) 30%, hsla(210, 100%, 55%, 0.03) 70%, transparent 90%)",
        }}
      />

      {/* Second subtle vertical line */}
      <div
        className="absolute top-0 bottom-0 left-[55%] w-px hidden md:block"
        style={{
          background: "linear-gradient(to bottom, transparent 20%, hsla(210, 80%, 50%, 0.03) 50%, transparent 80%)",
        }}
      />

      {/* Horizontal signal line */}
      <div
        className="absolute left-0 right-0 top-[60%] h-px"
        style={{
          background: "linear-gradient(to right, transparent 5%, hsla(210, 100%, 55%, 0.04) 25%, hsla(210, 80%, 50%, 0.02) 75%, transparent 95%)",
        }}
      />

      {/* Deep vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 35% 45%, transparent 20%, hsl(225 15% 8% / 0.5) 100%)",
        }}
      />

      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
    </div>
  );
};

export default HeroAtmosphere;
