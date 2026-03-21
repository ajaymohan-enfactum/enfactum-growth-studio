import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";
import type { CaseStudy } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  cs: CaseStudy;
  index?: number;
  variant?: "flagship" | "full" | "compact";
  id?: string;
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
 * Flagship: large editorial feature with dramatic headline and monumental metrics.
 * Full: detailed card with challenge/role/metrics.
 * Compact: single-row summary.
 */
const CaseCard = ({ cs, index = 0, variant = "full", id }: CaseCardProps) => {
  const cardId = id || cs.id;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hovered, setHovered] = useState(false);

  const primaryCapHref = cs.capabilities[0] ? capabilitySlugMap[cs.capabilities[0]] : null;

  /* ═══════════════════════════════════════════
     FLAGSHIP — Large editorial feature
     ═══════════════════════════════════════════ */
  if (variant === "flagship") {
    return (
      <motion.div
        ref={ref}
        id={cardId}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <article
          className="relative py-16 md:py-20 border-b border-border/20 group transition-all duration-700 hover:border-primary/15"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover accent glow */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, hsl(210 100% 50% / 0.02), transparent 70%)' }} />
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Left — Editorial content */}
            <div className="md:col-span-7">
              {/* Tags row */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {cs.capabilities.map((tag) => (
                  <span key={tag} className="text-[9px] px-2.5 py-1 rounded-sm bg-primary/[0.06] text-primary/60 font-medium tracking-[0.15em] uppercase">
                    {tag}
                  </span>
                ))}
                {cs.sectors[0] && (
                  <span className="text-[9px] px-2.5 py-1 rounded-sm bg-secondary text-muted-foreground/60 font-medium tracking-[0.15em] uppercase">
                    {cs.sectors[0]}
                  </span>
                )}
              </div>

              {/* Client */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] text-foreground tracking-[0.15em] uppercase font-body">{cs.client}</span>
              </div>

              {/* Headline — dramatic scale, links to work page */}
              <Link to={`/work#${cs.id}`}>
                <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] group-hover:text-primary/90 transition-colors duration-500 max-w-xl hover:text-primary/80">
                  {cs.headline}
                </h3>
              </Link>

              {/* Challenge + Role */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-xl">
                <div>
                  <span className="text-[9px] text-foreground/20 uppercase tracking-[0.2em] font-body block mb-2">Challenge</span>
                  <p className="text-[13px] text-foreground/35 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-[9px] text-foreground/20 uppercase tracking-[0.2em] font-body block mb-2">Enfactum's role</span>
                  <p className="text-[13px] text-foreground/40 leading-relaxed">{cs.role}</p>
                </div>
              </div>

              {/* Insight */}
              {cs.insight && (
                <div className="mt-8 max-w-md">
                  <p className="text-[12px] text-foreground/25 italic leading-relaxed border-l-2 border-primary/15 pl-4">
                    "{cs.insight}"
                  </p>
                </div>
              )}

              {/* Region + CTA */}
              <div className="mt-8 flex items-center gap-6">
                {cs.region && (
                  <span className="text-[10px] text-foreground/20 uppercase tracking-[0.2em]">{cs.region}</span>
                )}
                <Link
                  to="/contact?inquiry=client"
                  className="text-[12px] text-primary/60 hover:text-primary transition-colors duration-300"
                >
                  Discuss a challenge like this →
                </Link>
              </div>
            </div>

            {/* Right — Monumental metrics */}
            <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center">
              <div className="space-y-8">
                {cs.results.slice(0, 4).map((r, ri) => (
                  <div key={ri} className="group/metric">
                    <AnimatedCounter
                      value={r.metric}
                      className="font-display text-3xl md:text-4xl font-bold text-primary/70 tracking-tight block leading-none"
                    />
                    <span className="text-[11px] text-foreground/25 mt-2 block leading-snug font-body">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capability link */}
              {primaryCapHref && (
                <Link
                  to={primaryCapHref}
                  className="inline-flex items-center gap-1.5 mt-10 text-[10px] text-primary/40 hover:text-primary uppercase tracking-[0.2em] font-body transition-colors duration-500"
                >
                  {cs.capabilities[0]} <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </article>
      </motion.div>
    );
  }

  /* ═══════════════════════════════════════════
     COMPACT — Single row summary
     ═══════════════════════════════════════════ */
  if (variant === "compact") {
    return (
      <motion.div
        ref={ref}
        id={cardId}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="group block">
          <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20 hover:border-primary/10 transition-colors duration-700">
            <div className="md:col-span-3">
              <span className="text-[11px] text-foreground font-body block mb-1">{cs.client}</span>
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

  /* ═══════════════════════════════════════════
     FULL — Standard detailed card
     ═══════════════════════════════════════════ */
  return (
    <motion.div
      ref={ref}
      id={cardId}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <article
        className="relative py-10 md:py-12 border-b border-border/15 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Client + headline */}
          <div className="md:col-span-5">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {cs.capabilities.map((tag) => (
                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-sm bg-primary/[0.06] text-primary/60 font-medium tracking-[0.12em] uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[10px] text-foreground font-body block mb-2">{cs.client}</span>
            <Link to={`/work#${cs.id}`}>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary/90 transition-colors duration-500 leading-tight hover:text-primary/80">
                {cs.headline}
              </h3>
            </Link>
            {cs.region && (
              <span className="text-[10px] text-muted-foreground/40 font-body block mt-2 uppercase tracking-wider">
                {cs.region}
              </span>
            )}
          </div>

          {/* Middle: Challenge + Role */}
          <div className="md:col-span-4">
            <div className="space-y-3">
              <div>
                <span className="text-[9px] text-dim uppercase tracking-[0.15em] font-body block mb-1">Challenge</span>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <span className="text-[9px] text-dim uppercase tracking-[0.15em] font-body block mb-1">Enfactum's role</span>
                <p className="text-[12px] text-secondary-foreground/70 leading-relaxed">{cs.role}</p>
              </div>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="md:col-span-3">
            <span className="text-[9px] text-dim uppercase tracking-[0.15em] font-body block mb-3">Outcomes</span>
            <div className="space-y-3">
              {cs.results.slice(0, 3).map((r, ri) => (
                <div key={ri}>
                  <AnimatedCounter
                    value={r.metric}
                    className="font-display text-xl font-bold text-primary/75 tracking-tight block leading-none"
                  />
                  <span className="text-[10px] text-muted-foreground/60 mt-1 block leading-snug font-body">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
            {primaryCapHref && (
              <Link
                to={primaryCapHref}
                className="inline-flex items-center gap-1.5 mt-5 text-[10px] text-primary/40 hover:text-primary uppercase tracking-[0.15em] font-body transition-colors duration-500"
              >
                {cs.capabilities[0]} <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Insight */}
        {cs.insight && (
          <div className="mt-6 md:ml-[calc(100%/12*5+2rem)] max-w-md">
            <p className="text-[11px] text-foreground/20 group-hover:text-foreground/35 italic leading-relaxed border-l border-primary/10 pl-3 transition-colors duration-300">
              "{cs.insight}"
            </p>
          </div>
        )}
      </article>
    </motion.div>
  );
};

export default CaseCard;
