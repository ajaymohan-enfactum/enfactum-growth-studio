import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { CaseStudy } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  cs: CaseStudy;
  index?: number;
  variant?: "full" | "compact";
}

/** Map capability name to slug for internal linking */
const capabilitySlugMap: Record<string, string> = {
  "Growth Infrastructure": "/capabilities/growth-infrastructure",
  "Brand & Demand": "/capabilities/brand-demand",
  "AI Ecosystems": "/capabilities/ai-ecosystems",
  "Live Experiences": "/capabilities/live-experiences",
};

/**
 * Premium case study card — result-oriented, enterprise-ready.
 * Full variant: detailed card with challenge/role/metrics + sector + geography + challenge tag.
 * Compact variant: single-row with outcome headline and key metric.
 */
const CaseCard = ({ cs, index = 0, variant = "full" }: CaseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (variant === "compact") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="group block">
          <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20 hover:border-primary/10 transition-colors duration-700">
            <div className="md:col-span-3">
              <span className="text-[11px] text-dim font-body block mb-1">{cs.client}</span>
              <h3 className="font-display text-[14px] font-semibold text-foreground group-hover:text-primary/90 transition-colors duration-500 leading-snug">
                {cs.headline}
              </h3>
            </div>
            <div className="md:col-span-2">
              <span className="text-[10px] text-dim uppercase tracking-wider font-body">{cs.capabilities[0]}</span>
              {cs.sectors[0] && (
                <span className="text-[10px] text-muted-foreground/50 block mt-0.5 font-body">{cs.sectors[0]}</span>
              )}
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
              {cs.capabilities[0] && capabilitySlugMap[cs.capabilities[0]] && (
                <Link
                  to={capabilitySlugMap[cs.capabilities[0]]}
                  className="text-dim hover:text-primary/60 transition-all duration-500"
                  aria-label={`View ${cs.capabilities[0]} capability`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const primaryCapHref = cs.capabilities[0] ? capabilitySlugMap[cs.capabilities[0]] : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="py-12 md:py-14 border-b border-border/30 hover:border-primary/15 transition-colors duration-700 group">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Client + headline + tags */}
          <div className="md:col-span-5">
            <div className="flex flex-wrap gap-2 mb-3">
              {cs.capabilities.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary/70 font-medium tracking-wide uppercase">
                  {tag}
                </span>
              ))}
              {cs.sectors[0] && (
                <span className="text-[10px] px-2.5 py-1 rounded-sm bg-secondary text-muted-foreground font-medium tracking-wide uppercase">
                  {cs.sectors[0]}
                </span>
              )}
              {cs.challengeTypes[0] && (
                <span className="text-[10px] px-2.5 py-1 rounded-sm border border-border/40 text-muted-foreground/70 font-medium tracking-wide uppercase">
                  {cs.challengeTypes[0]}
                </span>
              )}
            </div>
            <span className="text-[11px] text-dim font-body block mb-2">{cs.client}</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
              {cs.headline}
            </h3>
            {cs.region && (
              <span className="text-[10px] text-muted-foreground/50 font-body block mt-3 uppercase tracking-wider">
                {cs.region}
              </span>
            )}
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
                <div key={ri}>
                  <span className="font-display text-2xl font-extrabold text-primary/85 tracking-tight block leading-none">
                    {r.metric}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1 block leading-snug font-body">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Capability link */}
            {primaryCapHref && (
              <Link
                to={primaryCapHref}
                className="inline-flex items-center gap-1.5 mt-6 text-[11px] text-primary/50 hover:text-primary uppercase tracking-wider font-body transition-colors duration-500"
              >
                {cs.capabilities[0]} <ArrowRight className="w-3 h-3" />
              </Link>
            )}
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
      </article>
    </motion.div>
  );
};

export default CaseCard;
