import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Phone, ClipboardList, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, n: "01", title: "Tell us about you", body: "A free call to understand your surplus, goals and time horizon. No jargon, no pressure, and no obligation to continue." },
  { icon: ClipboardList, n: "02", title: "Get a clear plan", body: "We recommend the right offering and explain the reasoning, including the risks, before you commit anything." },
  { icon: LineChart, n: "03", title: "Stay on track", body: "Regular reviews keep you disciplined when markets get loud, so you act on a plan and not on noise." },
];

export function HowItWorks() {
  return (
    <section className="relative border-y border-border/40 bg-muted/40 py-[clamp(3.5rem,8vw,6.5rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-2xl text-center"
        >
          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-bold tracking-tight">
            Getting started takes <span className="text-primary">three simple steps</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Know exactly what happens next, from the first call onward.</p>
        </motion.div>

        <ol className="relative grid gap-5 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-3xl border border-border bg-card p-7 text-center"
            >
              <span className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-bold tracking-widest text-primary">STEP {s.n}</span>
              <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link href="/contact">
            <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold">
              Start with a free call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
