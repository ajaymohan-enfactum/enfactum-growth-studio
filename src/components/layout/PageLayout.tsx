import { ReactNode, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";

interface PageLayoutProps {
  children: ReactNode;
}

/* ─── Route → ambient atmosphere mapping ─── */
type PageAtmosphere = {
  /** Primary ambient glow position & color */
  glow1: string;
  /** Secondary ambient glow */
  glow2: string;
  /** Show subtle grain overlay */
  grain: boolean;
};

const getAtmosphere = (pathname: string): PageAtmosphere => {
  if (pathname === "/") {
    return {
      glow1: "radial-gradient(ellipse 80% 60% at 20% 30%, hsl(210 100% 50% / 0.025), transparent 70%)",
      glow2: "radial-gradient(ellipse 70% 50% at 80% 70%, hsl(225 80% 40% / 0.02), transparent 65%)",
      grain: true,
    };
  }
  if (pathname.startsWith("/work")) {
    return {
      glow1: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(220 80% 30% / 0.018), transparent 70%)",
      glow2: "radial-gradient(ellipse 50% 40% at 70% 80%, hsl(210 60% 25% / 0.012), transparent 60%)",
      grain: true,
    };
  }
  if (pathname.startsWith("/thinking")) {
    return {
      glow1: "radial-gradient(ellipse 70% 50% at 30% 50%, hsl(215 60% 40% / 0.015), transparent 65%)",
      glow2: "radial-gradient(ellipse 50% 40% at 75% 60%, hsl(220 50% 35% / 0.01), transparent 60%)",
      grain: true,
    };
  }
  if (pathname.startsWith("/company")) {
    return {
      glow1: "radial-gradient(ellipse 60% 45% at 40% 35%, hsl(215 50% 35% / 0.015), transparent 65%)",
      glow2: "radial-gradient(ellipse 50% 40% at 65% 75%, hsl(220 40% 30% / 0.01), transparent 60%)",
      grain: false,
    };
  }
  if (pathname === "/brands") {
    return {
      glow1: "radial-gradient(ellipse 70% 50% at 25% 40%, hsl(210 80% 40% / 0.02), transparent 65%)",
      glow2: "radial-gradient(ellipse 60% 45% at 75% 65%, hsl(220 60% 35% / 0.015), transparent 60%)",
      grain: true,
    };
  }
  if (pathname === "/partnerships") {
    return {
      glow1: "radial-gradient(ellipse 65% 50% at 35% 45%, hsl(210 70% 45% / 0.018), transparent 65%)",
      glow2: "radial-gradient(ellipse 55% 40% at 70% 60%, hsl(215 50% 35% / 0.012), transparent 60%)",
      grain: false,
    };
  }
  // Default for other pages
  return {
    glow1: "radial-gradient(ellipse 60% 45% at 40% 40%, hsl(215 60% 40% / 0.012), transparent 65%)",
    glow2: "radial-gradient(ellipse 50% 40% at 65% 70%, hsl(220 50% 30% / 0.008), transparent 60%)",
    grain: false,
  };
};

/* ─── Static grain canvas (generated once) ─── */
const GrainOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 200;
    canvas.height = 200;
    const imageData = ctx.createImageData(200, 200);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 8; // Very subtle
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[2] opacity-[0.35] mix-blend-overlay"
      style={{ imageRendering: "pixelated" }}
    />
  );
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  const atmo = useMemo(() => getAtmosphere(pathname), [pathname]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Ambient glow layers — fixed, ultra-subtle */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: atmo.glow1 }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: atmo.glow2 }}
      />

      {/* Subtle vertical light modulation */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(225 15% 6% / 0.15) 50%, transparent 100%)",
        }}
      />

      {/* Film grain */}
      {atmo.grain && <GrainOverlay />}

      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[1]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PageLayout;
