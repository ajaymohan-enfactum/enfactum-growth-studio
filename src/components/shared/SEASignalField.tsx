import { useEffect, useRef } from "react";

/**
 * SEASignalField — abstract animated canvas representing
 * an interconnected market system. Nodes pulse softly,
 * signal lines flow between them implying ecosystem logic.
 * Restrained, dark, premium.
 */

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  phase: number;
  intensity: number;
  tier: number; // 0 = hub, 1 = secondary, 2 = peripheral
}

const SEASignalField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const nodes: Node[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const initNodes = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Hub nodes — larger, anchored positions (represent key markets)
      const hubs = [
        { x: 0.2, y: 0.35 },
        { x: 0.45, y: 0.25 },
        { x: 0.7, y: 0.4 },
        { x: 0.35, y: 0.65 },
        { x: 0.6, y: 0.7 },
        { x: 0.85, y: 0.55 },
      ];

      hubs.forEach((h_pos) => {
        nodes.push({
          x: h_pos.x * w,
          y: h_pos.y * h,
          baseX: h_pos.x * w,
          baseY: h_pos.y * h,
          radius: 2.5,
          phase: Math.random() * Math.PI * 2,
          intensity: 0.8 + Math.random() * 0.2,
          tier: 0,
        });
      });

      // Secondary nodes
      for (let i = 0; i < 12; i++) {
        const bx = (0.1 + Math.random() * 0.8) * w;
        const by = (0.1 + Math.random() * 0.8) * h;
        nodes.push({
          x: bx, y: by, baseX: bx, baseY: by,
          radius: 1.5,
          phase: Math.random() * Math.PI * 2,
          intensity: 0.4 + Math.random() * 0.4,
          tier: 1,
        });
      }

      // Peripheral — subtle
      for (let i = 0; i < 18; i++) {
        const bx = Math.random() * w;
        const by = Math.random() * h;
        nodes.push({
          x: bx, y: by, baseX: bx, baseY: by,
          radius: 0.8,
          phase: Math.random() * Math.PI * 2,
          intensity: 0.15 + Math.random() * 0.25,
          tier: 2,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.001;

      // Soft breathing motion for nodes
      for (const node of nodes) {
        const drift = node.tier === 0 ? 3 : node.tier === 1 ? 5 : 8;
        node.x = node.baseX + Math.sin(time * 1.5 + node.phase) * drift;
        node.y = node.baseY + Math.cos(time * 1.2 + node.phase * 0.7) * drift * 0.6;
      }

      // Connection lines — only connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          // Skip peripheral-to-peripheral
          if (a.tier === 2 && b.tier === 2) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = a.tier === 0 && b.tier === 0 ? 300 : 160;

          if (dist < maxDist) {
            const proximity = 1 - dist / maxDist;
            const baseAlpha = a.tier === 0 && b.tier === 0 ? 0.08 : 0.04;
            const pulse = Math.sin(time * 2.5 + a.phase + b.phase) * 0.5 + 0.5;
            const alpha = proximity * baseAlpha * (0.5 + pulse * 0.5);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(210, 80%, 55%, ${alpha})`;
            ctx.lineWidth = a.tier === 0 && b.tier === 0 ? 0.8 : 0.4;
            ctx.stroke();

            // Signal flow dot along hub-to-hub connections
            if (a.tier === 0 && b.tier === 0 && proximity > 0.4) {
              const flowPos = ((time * 0.8 + a.phase * 0.3) % 1);
              const fx = a.x + (b.x - a.x) * flowPos;
              const fy = a.y + (b.y - a.y) * flowPos;
              ctx.beginPath();
              ctx.arc(fx, fy, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(210, 100%, 65%, ${alpha * 3})`;
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.phase) * 0.5 + 0.5;

        // Glow for hubs
        if (node.tier === 0) {
          const glowR = node.radius * (4 + pulse * 4);
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
          glow.addColorStop(0, `hsla(210, 100%, 60%, ${0.08 * (0.6 + pulse * 0.4)})`);
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.fillRect(node.x - glowR, node.y - glowR, glowR * 2, glowR * 2);
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (0.8 + pulse * 0.2), 0, Math.PI * 2);
        const coreAlpha = node.tier === 0
          ? 0.5 * (0.7 + pulse * 0.3)
          : node.tier === 1
            ? 0.25 * (0.6 + pulse * 0.4)
            : 0.1 * (0.5 + pulse * 0.5);
        ctx.fillStyle = `hsla(210, 90%, 60%, ${coreAlpha})`;
        ctx.fill();
      }

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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
};

export default SEASignalField;
