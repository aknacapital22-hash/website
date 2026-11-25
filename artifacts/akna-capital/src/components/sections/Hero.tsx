import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BadgeCheck, Star, Cpu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  { icon: BadgeCheck, label: "SEBI Registered Research Analyst", sub: "INH000023515" },
  { icon: Star, label: "4.6 rating", sub: "1,000+ reviews" },
  { icon: Cpu, label: "30+ in-house algorithms", sub: "Quant Engine" },
  { icon: MapPin, label: "Based in Mumbai", sub: "Malad" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-[clamp(6.5rem,12vw,9rem)] pb-[clamp(3rem,7vw,6rem)]">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f766e0d_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#000_60%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.span
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary"
        >
          <BadgeCheck className="h-4 w-4" /> SEBI Registered Research Analyst · INH000023515
        </motion.span>

        <motion.h1
          {...fade(0.08)}
          className="mt-6 max-w-5xl font-extrabold tracking-tight text-foreground leading-[1.06] text-[clamp(2.4rem,6.5vw+0.5rem,5.5rem)]"
        >
          Grow your wealth with <span className="text-primary">research you can trust</span>
        </motion.h1>

        <motion.p
          {...fade(0.18)}
          className="mt-5 max-w-2xl text-[clamp(1rem,0.6vw+0.9rem,1.35rem)] text-muted-foreground leading-relaxed"
        >
          Every recommendation comes with its reasoning, backed by fundamental, technical and quantitative models.
          Clear plans for investors and families. Issuer-side advice for businesses heading to an IPO.
        </motion.p>

        <motion.div {...fade(0.28)} className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link href="/contact">
            <Button size="lg" className="h-14 w-full rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform sm:w-auto group">
              Book a free consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="#find-your-path">
            <Button size="lg" variant="outline" className="h-14 w-full rounded-full px-8 text-base bg-background/60 backdrop-blur-sm sm:w-auto">
              Find my path
            </Button>
          </a>
        </motion.div>

        <motion.p {...fade(0.34)} className="mt-4 text-sm text-muted-foreground">
          Free first call · No obligation · No lock-in to get started
        </motion.p>

        {/* Trust strip */}
        <motion.ul
          {...fade(0.42)}
          className="mt-[clamp(2.5rem,6vw,4.5rem)] grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {trust.map((t) => (
            <li key={t.label} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-left backdrop-blur-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-foreground">{t.label}</span>
                <span className="block text-xs text-muted-foreground">{t.sub}</span>
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
