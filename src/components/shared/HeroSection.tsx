import { ReactNode, Children, isValidElement, Fragment, useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HybridBackground from "@/components/shared/HybridBackground";

type HeroVariant = "default" | "immersive" | "systemic" | "editorial" | "institutional" | "minimal";

interface HeroSectionProps {
  eyebrow?: string;
  headline: ReactNode;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
  /** Visual identity variant — changes background and spacing per page type */
  variant?: HeroVariant;
}

// Flatten ReactNode tree into an array of text strings and JSX elements
const flattenChildren = (node: ReactNode): (string | ReactNode)[] => {
  const result: (string | ReactNode)[] = [];
  Children.forEach(node, (child) => {
    if (typeof child === "string") {
      result.push(...child.split(/(\s+)/).filter(Boolean));
    } else if (typeof child === "number") {
      result.push(String(child));
    } else if (isValidElement(child)) {
      if (child.type === Fragment) {
        result.push(...flattenChildren(child.props.children));
      } else {
        const innerParts = flattenChildren(child.props.children);
        innerParts.forEach((part) => {
          if (typeof part === "string" && part.trim()) {
            result.push({ ...child, props: { ...child.props, children: part }, key: `${child.key}-${part}` } as ReactNode);
          } else if (typeof part === "string") {
            result.push(part);
          } else {
            result.push(part);
          }
        });
      }
    }
  });
  return result;
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const variantStyles: Record<HeroVariant, { bg: string; gridOpacity: string; spotlightColor: string }> = {
  default: {
    bg: "",
    gridOpacity: "opacity-[0.08]",
    spotlightColor: "hsl(210 100% 50% / 0.06)",
  },
  immersive: {
    bg: "",
    gridOpacity: "opacity-[0.06]",
    spotlightColor: "hsl(210 100% 50% / 0.08)",
  },
  systemic: {
    bg: "bg-[#060C1A]",
    gridOpacity: "opacity-[0.12]",
    spotlightColor: "hsl(210 100% 50% / 0.04)",
  },
  editorial: {
    bg: "",
    gridOpacity: "opacity-[0.04]",
    spotlightColor: "hsl(210 80% 45% / 0.05)",
  },
  institutional: {
    bg: "",
    gridOpacity: "opacity-[0.05]",
    spotlightColor: "hsl(210 60% 40% / 0.05)",
  },
  minimal: {
    bg: "",
    gridOpacity: "opacity-0",
    spotlightColor: "hsl(210 100% 50% / 0.03)",
  },
};

const HeroSection = ({ eyebrow, headline, description, children, compact = false, variant = "default" }: HeroSectionProps) => {
  const parts = flattenChildren(headline);
  let wordIndex = 0;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const vs = variantStyles[variant];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative ${compact ? "pt-28 pb-16 md:pt-36 md:pb-20" : "pt-32 pb-20 md:pt-44 md:pb-28"} overflow-hidden ${vs.bg}`}
    >
      {/* Cursor spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${cursorPos.x}px ${cursorPos.y}px, ${vs.spotlightColor}, transparent 60%)`,
        }}
      />
      <HybridBackground />
      <motion.div className={`absolute inset-0 topology-grid ${vs.gridOpacity}`} style={{ y: bgY }} />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" style={{ y: bgY, opacity: bgOpacity }} />

      {/* Ambient drift glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(ellipse 50% 50% at 40% 50%, ${vs.spotlightColor}, transparent 70%)`,
            `radial-gradient(ellipse 55% 55% at 60% 45%, ${vs.spotlightColor}, transparent 75%)`,
            `radial-gradient(ellipse 50% 50% at 40% 50%, ${vs.spotlightColor}, transparent 70%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Systemic variant — adds structural grid lines */}
      {variant === "systemic" && (
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
          <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
        </div>
      )}

      {/* Editorial variant — adds a left accent bar */}
      {variant === "editorial" && (
        <div className="absolute top-[20%] bottom-[20%] left-[6%] w-px bg-gradient-to-b from-transparent via-primary/[0.08] to-transparent hidden md:block z-[1]" />
      )}

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-5"
            >
              {eyebrow}
            </motion.p>
          )}
          <h1 className="headline-xl">
            {parts.map((part, i) => {
              const isWhitespace = typeof part === "string" && !part.trim();
              if (isWhitespace) {
                return <span key={`ws-${i}`}>{" "}</span>;
              }
              const idx = wordIndex++;
              return (
                <motion.span
                  key={`w-${i}`}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  style={{ marginRight: "0.27em" }}
                >
                  {part}
                </motion.span>
              );
            })}
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="body-lg mt-6 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
