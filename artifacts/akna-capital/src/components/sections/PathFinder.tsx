import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, PieChart, Gem, Building2, Cpu } from "lucide-react";

const FIFTEEN_STOCKS = "/15stocks";

const paths = [
  {
    icon: PieChart,
    who: "I want to start a SIP",
    line: "Replace a fixed SIP with an algorithm-assisted one, mapped to goals like retirement or education.",
    cta: "Enhanced SIP",
    href: "/services/mutual-fund-investing",
  },
  {
    icon: TrendingUp,
    who: "I have ₹3 lakh to ₹1 crore to invest",
    line: "Ranked stock ideas with the reasoning behind each, and regular reviews, over a 5 to 6 year plan.",
    cta: "Research and Ranking",
    href: "/services/research-ranking",
  },
  {
    icon: Gem,
    who: "I have ₹1 crore or more",
    line: "A dedicated advisory across equity, mutual funds and alternates, built for 8 to 10 years and beyond.",
    cta: "AKNA Private Wealth",
    href: "/services/akna-private-wealth",
  },
  {
    icon: Cpu,
    who: "I want rules, not opinions",
    line: "15 index strategies where fixed rules propose trades and you approve each one in your own demat.",
    cta: "15Stocks",
    href: FIFTEEN_STOCKS,
  },
  {
    icon: Building2,
    who: "I run a company and am eyeing an IPO",
    line: "Issuer-side advice on SME and Main-Board IPOs, from readiness to listing day.",
    cta: "IPO Advisory",
    href: "/services/ipo-and-sme-ipo-advisory",
  },
];

export function PathFinder() {
  return (
    <section id="find-your-path" className="scroll-mt-24 py-[clamp(3.5rem,8vw,6.5rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-2xl text-center"
        >
          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-bold tracking-tight">
            Where are you <span className="text-primary">right now?</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Pick the line that sounds like you. We will take you to the right place.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {paths.map((p, i) => (
            <motion.div
              key={p.who}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-foreground leading-snug">{p.who}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
