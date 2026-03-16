import { motion } from "framer-motion";
import BrandLogo from "@/components/shared/BrandLogo";
import { type BrandEntry } from "@/data/brands";

interface BrandPlateProps {
  brand: BrandEntry;
  sector: string;
  size?: "lg" | "md" | "sm";
  delay?: number;
}

const heights = { lg: 72, md: 56, sm: 44 };
const widths = { lg: 220, md: 200, sm: 170 };

const BrandPlate = ({ brand, sector, size = "md", delay = 0 }: BrandPlateProps) => {
  const h = heights[size];
  const w = widths[size];

  const hasColor = !!brand.colorLogo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: w }}
      className={`group/plate relative flex items-center justify-center py-5 px-4 rounded-lg transition-all duration-500 cursor-default ${
        hasColor
          ? "bg-white border border-white/20 hover:border-primary/25"
          : "bg-white/[0.045] border border-white/[0.08] hover:border-primary/25 hover:bg-white/[0.07]"
      }`}
    >
      <BrandLogo
        name={brand.name}
        domain={brand.domain}
        localLogo={brand.localLogo}
        colorLogo={brand.colorLogo}
        height={h}
      />
      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 px-3.5 py-2 rounded-md bg-foreground/90 backdrop-blur-sm opacity-0 group-hover/plate:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap z-20 shadow-lg">
        <span className="block text-[11px] font-display font-semibold text-background leading-tight">{brand.name}</span>
        <span className="block text-[9px] text-background/50 tracking-[0.1em] uppercase font-body mt-0.5">{sector}</span>
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-foreground/90" />
      </div>
    </motion.div>
  );
};

export default BrandPlate;
