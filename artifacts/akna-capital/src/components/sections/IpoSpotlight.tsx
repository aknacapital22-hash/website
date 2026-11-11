import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, Rocket, ClipboardCheck, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  { icon: ClipboardCheck, title: "IPO Eligibility Check", body: "Find out in a minute whether you fit SME or Main-Board criteria.", href: "/ipo-eligibility-checker" },
  { icon: Rocket, title: "Pre-IPO Advisory", body: "Governance, cap table and financial clean-up, 12 to 24 months out.", href: "/services/pre-ipo-advisory" },
  { icon: Building2, title: "SME & Main-Board IPO Advisory", body: "BSE SME, NSE Emerge and Main-Board listings, from merchant banker selection to listing day.", href: "/services/ipo-and-sme-ipo-advisory" },
  { icon: Landmark, title: "IPO Process Guide", body: "Steps, timeline, documents and costs explained for promoters.", href: "/ipo-process-in-india" },
];

export function IpoSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">For promoters &amp; CFOs</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
            Planning an IPO? Get an <span className="text-primary">issuer-side IPO consultant</span>.
          </h2>
          <p className="text-background/70 text-lg leading-relaxed">
            Going public does not mean giving up control. We advise Indian mid-market and SME companies on SME IPOs (BSE SME, NSE Emerge)
            and Main-Board IPOs, working alongside your SEBI registered merchant banker so the promoters can keep running the business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={o.href}
                className="block h-full rounded-2xl border border-background/15 bg-background/5 p-6 hover:border-primary/60 hover:bg-background/10 transition-colors no-underline group"
              >
                <o.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-bold text-background mb-1.5">{o.title}</h3>
                <p className="text-sm text-background/65 leading-snug">{o.body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/ipo-eligibility-checker">
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold">
              Check IPO Eligibility
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background text-base">
              Talk to our IPO team
            </Button>
          </Link>
        </div>
        <p className="text-xs text-background/45 mt-6 max-w-2xl">
          AKNA Capital is not a SEBI registered merchant banker and does not replace one. A registered merchant banker manages every public issue.
        </p>
      </div>
    </section>
  );
}
