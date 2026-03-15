import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

export interface OutcomeCapsuleData {
  brand: string;
  caseId: string;
  label: string;
  outcome: string;
  featured: boolean;
}

interface FeaturedOutcomeProps {
  capsule: OutcomeCapsuleData;
  index: number;
  delay?: number;
}

export const FeaturedOutcome = ({ capsule, index, delay = 0 }: FeaturedOutcomeProps) => (
  <RevealSection delay={delay} blur>
    <Link to={`/work#${capsule.caseId}`} className="block h-full">
      <div className="group relative rounded-xl border border-white/[0.06] bg-white/[0.025] p-10 md:p-12 lg:p-14 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.12)] transition-all duration-700 h-full flex flex-col justify-between min-h-[320px] cursor-pointer">
        <span className="absolute top-8 right-10 text-[120px] font-display font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <span className="text-[10px] tracking-[0.2em] text-primary/40 uppercase font-body block mb-4">
            {capsule.label}
          </span>
          <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em]">
            {capsule.brand}
          </h3>
          <p className="text-[14px] text-foreground/35 leading-[1.85] font-body mt-6 max-w-md">
            {capsule.outcome}
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-primary/20 group-hover:w-12 transition-all duration-500" />
            <span className="text-[10px] text-primary/30 group-hover:text-primary/50 uppercase tracking-[0.15em] font-body transition-colors duration-500">Case outcome</span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-body text-primary/0 group-hover:text-primary/60 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
            View case study <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  </RevealSection>
);

interface SupportingOutcomeProps {
  capsule: OutcomeCapsuleData;
  delay?: number;
}

export const SupportingOutcome = ({ capsule, delay = 0 }: SupportingOutcomeProps) => (
  <RevealSection delay={delay} blur>
    <Link to={`/work#${capsule.caseId}`} className="block">
      <div className="group rounded-lg border border-white/[0.04] bg-white/[0.015] px-8 py-7 md:px-9 md:py-8 hover:border-primary/15 hover:bg-white/[0.03] hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.08)] transition-all duration-700 cursor-pointer">
        <span className="text-[9px] text-primary/30 uppercase tracking-[0.2em] font-body block mb-3">{capsule.label}</span>
        <h4 className="text-base font-display font-semibold text-foreground/85 leading-tight mb-3">{capsule.brand}</h4>
        <p className="text-[13px] text-foreground/30 leading-[1.75] font-body">{capsule.outcome}</p>
        <span className="flex items-center gap-1.5 text-[10px] font-body text-primary/0 group-hover:text-primary/50 mt-4 translate-x-1 group-hover:translate-x-0 transition-all duration-500">
          View case study <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  </RevealSection>
);
