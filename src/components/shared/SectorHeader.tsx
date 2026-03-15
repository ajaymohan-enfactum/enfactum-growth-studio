import { motion } from "framer-motion";

interface SectorHeaderProps {
  num: string;
  title: string;
  descriptor: string;
  narrative: string;
  align?: "left" | "center" | "right";
}

const SectorHeader = ({ num, title, descriptor, narrative, align = "left" }: SectorHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : align === "right" ? "md:text-right md:ml-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`max-w-lg ${alignClass} mb-14 md:mb-20`}
    >
      <span className="text-[80px] md:text-[120px] font-display font-bold text-foreground/[0.025] leading-none select-none block">
        {num}
      </span>
      <div className="mt-[-12px] md:mt-[-20px]">
        <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.025em]">
          {title}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary/40 font-body mt-2.5">
          {descriptor}
        </p>
        <p className="text-[13px] text-foreground/30 leading-[1.8] font-body mt-5">
          {narrative}
        </p>
      </div>
    </motion.div>
  );
};

export default SectorHeader;
