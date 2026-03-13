import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      time += 0.003;

      // Layer 1 — deep blue aurora
      const grad1 = ctx.createRadialGradient(
        w * 0.3 + Math.sin(time * 0.7) * w * 0.15,
        h * 0.4 + Math.cos(time * 0.5) * h * 0.2,
        0,
        w * 0.3,
        h * 0.4,
        w * 0.6
      );
      grad1.addColorStop(0, "hsla(210, 100%, 50%, 0.08)");
      grad1.addColorStop(0.5, "hsla(210, 80%, 40%, 0.04)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Layer 2 — secondary sweep
      const grad2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(time * 0.6) * w * 0.2,
        h * 0.6 + Math.sin(time * 0.4) * h * 0.15,
        0,
        w * 0.7,
        h * 0.6,
        w * 0.5
      );
      grad2.addColorStop(0, "hsla(220, 90%, 45%, 0.06)");
      grad2.addColorStop(0.6, "hsla(230, 60%, 30%, 0.03)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Layer 3 — subtle teal accent
      const grad3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.9 + 2) * w * 0.25,
        h * 0.3 + Math.cos(time * 0.3 + 1) * h * 0.2,
        0,
        w * 0.5,
        h * 0.3,
        w * 0.4
      );
      grad3.addColorStop(0, "hsla(195, 80%, 50%, 0.05)");
      grad3.addColorStop(0.5, "hsla(200, 60%, 40%, 0.02)");
      grad3.addColorStop(1, "transparent");
      ctx.fillStyle = grad3;
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default AuroraBackground;
