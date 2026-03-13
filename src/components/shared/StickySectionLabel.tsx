import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionLabel {
  id: string;
  label: string;
}

interface StickyLabelProps {
  sections: SectionLabel[];
}

/**
 * Sticky pill that shows the current section name in the bottom-right corner.
 */
const StickySectionLabel = ({ sections }: StickyLabelProps) => {
  const [current, setCurrent] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      // Hide near top
      if (scrollY < viewportH * 0.5) {
        setIsVisible(false);
        ticking.current = false;
        return;
      }

      // Hide near bottom
      const docH = document.documentElement.scrollHeight;
      if (scrollY + viewportH > docH - 200) {
        setIsVisible(false);
        ticking.current = false;
        return;
      }

      setIsVisible(true);

      // Find which section is in view
      let found: string | null = null;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 0.5 && rect.bottom > viewportH * 0.3) {
          found = section.label;
        }
      }
      setCurrent(found);
      ticking.current = false;
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && current && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-lg"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body">
            {current}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickySectionLabel;
