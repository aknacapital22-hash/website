import { motion } from "framer-motion";
import { Sparkles, Scale, ShieldCheck } from "lucide-react";

const points = [
  {
    title: "Reasoning, not just tips",
    icon: Sparkles,
    description: "Every recommendation comes with the why. Our in-house Quant Engine, with 30+ algorithms, supports our analysts, so you can follow the logic instead of taking it on faith.",
  },
  {
    title: "Honest about risk",
    icon: Scale,
    description: "We tell you what can go wrong before you invest. No guaranteed returns, no hype. Markets carry risk, and good advice starts by saying so.",
  },
  {
    title: "Regulated and transparent",
    icon: ShieldCheck,
    description: "We are a SEBI Registered Research Analyst (INH000023515). Clear scope, clear fees, and a team you can speak to directly in Mumbai.",
  },
];

export function FeaturedSections() {
  return (
    <section id="why-us" className="relative overflow-hidden py-[clamp(3.5rem,8vw,6.5rem)] section-lazy">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-2xl text-center"
        >
          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-bold tracking-tight">
            Why investors <span className="text-primary">stay with us</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">Wealth creation is a long game. Trust is how you play it.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
