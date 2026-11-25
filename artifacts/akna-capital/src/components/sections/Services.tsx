import { motion } from "framer-motion";
import { TrendingUp, PieChart, Gem, GraduationCap, ShieldCheck, Bot, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  { title: "Research and Ranking", line: "Ranked stock ideas with the reasoning behind each, built on our Quant Engine. For a surplus of ₹3 lakh to ₹1 crore.", icon: TrendingUp, href: "/services/research-ranking" },
  { title: "Mutual Fund Investing", line: "Enhanced SIP: algorithm-assisted fund selection and rebalancing, tied to your real goals.", icon: PieChart, href: "/services/mutual-fund-investing" },
  { title: "AKNA Private Wealth", line: "High-touch advisory across equity, mutual funds and alternates, for an 8 to 10 year horizon. ₹1 crore and above.", icon: Gem, href: "/services/akna-private-wealth" },
  { title: "Stockmarket Workshop", line: "Learn fundamental, technical and quantitative investing, so you understand every decision you make.", icon: GraduationCap, href: "/services/stockmarket-workshop" },
  { title: "Insurance", line: "Term life and health cover, compared without bias so you pick the plan that fits your family.", icon: ShieldCheck, href: "/services/insurance" },
  { title: "Algo-Trading", line: "Turn your own trading rules into an automated, back-tested strategy on our Quant Engine.", icon: Bot, href: "/services/algo-trading" },
];

export function Services() {
  return (
    <section id="services" className="relative border-y border-border/40 bg-muted/40 py-[clamp(3.5rem,8vw,6.5rem)] section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-2xl text-center"
        >
          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-bold tracking-tight">
            Everything you need, <span className="text-primary">in one place</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">From your first SIP to multi-generational wealth planning.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={s.href}
                className="group flex h-full gap-4 rounded-3xl border border-border bg-card p-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-bold text-foreground">{s.title}</span>
                  <span className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.line}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
