import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RevealSection from "@/components/shared/RevealSection";
import type { CaseStudy } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  cs: CaseStudy;
  index?: number;
  variant?: "full" | "compact";
}

/**
 * Premium case study card — result-oriented, enterprise-ready.
 * Full variant: detailed card with challenge/role/metrics.
 * Compact variant: single-row with outcome headline and key metric.
 */
const CaseCard = ({ cs, index = 0, variant = "full" }: CaseCardProps) => {
  if (variant === "compact") {
    return (
      <RevealSection delay={index * 0.04}>
        <Link to="/work" className="group block">
          <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20 hover:border-primary/10 transition-colors duration-700">
            <div className="md:col-span-3">
              <span className="text-[11px] text-dim font-body block mb-1">{cs.client}</span>
              <h3 className="font-display text-[14px] font-semibold text-foreground group-hover:text-primary/90 transition-colors duration-500 leading-snug">
                {cs.headline}
              </h3>
            </div>
            <div className="md:col-span-2">
              <span className="text-[10px] text-dim uppercase tracking-wider font-body">{cs.capabilities[0]}</span>
            </div>
            <div className="md:col-span-3">
              <span className="text-[12px] text-muted-foreground">{cs.challenge}</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {cs.results.slice(0, 2).map((r, ri) => (
                  <span key={ri} className="text-[13px] text-primary/70 font-medium">
                    {r.metric} <span className="text-[10px] text-muted-foreground">{r.label}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <ArrowRight className="w-3.5 h-3.5 text-dim group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all duration-500" />
            </div>
          </div>
        </Link>
      </RevealSection>
    );
  }

  return (
    <RevealSection delay={index * 0.08}>
      <div className="py-12 md:py-14 border-b border-border/30 hover:border-primary/15 transition-colors duration-700 group">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Client + headline + tags */}
          <div className="md:col-span-5">
            <div className="flex flex-wrap gap-2 mb-4">
              {cs.capabilities.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary/70 font-medium tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[11px] text-dim font-body block mb-2">{cs.client}</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
              {cs.headline}
            </h3>
          </div>

          {/* Middle: Challenge + Role */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body block mb-1.5">Challenge</span>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body block mb-1.5">Enfactum's role</span>
                <p className="text-[13px] text-secondary-foreground leading-relaxed">{cs.role}</p>
              </div>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="md:col-span-3">
            <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body block mb-4">Outcomes</span>
            <div className="space-y-4">
              {cs.results.slice(0, 4).map((r, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + ri * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-2xl font-extrabold text-primary/85 tracking-tight block leading-none">
                    {r.metric}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1 block leading-snug font-body">
                    {r.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight */}
        {cs.insight && (
          <div className="mt-8 md:ml-[calc(100%/12*5+2rem)] max-w-lg">
            <p className="text-[12px] text-foreground/40 italic leading-relaxed border-l-2 border-primary/15 pl-4">
              "{cs.insight}"
            </p>
          </div>
        )}
      </div>
    </RevealSection>
  );
};

export default CaseCard;
