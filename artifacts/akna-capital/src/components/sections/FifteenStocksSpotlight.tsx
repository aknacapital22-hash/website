import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Cpu, Wallet, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FIFTEEN_STOCKS_URL = "https://15stocks.aknacapital.com";

/** Outbound link with UTM tags so 15Stocks analytics show which AKNA placement sent the visitor. */
export const stocksLink = (placement: string) =>
  `${FIFTEEN_STOCKS_URL}/?utm_source=aknacapital.com&utm_medium=referral&utm_campaign=${placement}`;

const steps = [
  { n: "1", title: "Pick", body: "A strategy that fits your risk." },
  { n: "2", title: "Model decides", body: "Fixed rules propose the trades." },
  { n: "3", title: "You approve", body: "Your broker, your demat." },
];

const points = [
  { icon: Wallet, title: "We never hold your money", body: "Orders go through your own broker and shares stay in your demat account." },
  { icon: ShieldCheck, title: "You approve every trade", body: "Nothing happens until you say yes. No lock-in, leave any time." },
  { icon: Cpu, title: "Quant, not guesswork", body: "Data and rules decide what to hold and when to rebalance. No gut calls." },
  { icon: Layers, title: "15 index strategies", body: "Momentum, multi asset, hybrid and thematic baskets, with risk shown next to returns." },
];

export function FifteenStocksSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              New · 15Stocks by AKNA Capital
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
              Systematic investing for <span className="text-primary">wealth creation.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Research index strategies and approve rebalances in your own demat account. One flat subscription,
              no fee on your trades, and the platform never holds your money or shares.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/15stocks">
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold">
                  Explore 15Stocks <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href={stocksLink("home_spotlight")} target="_blank" rel="noopener">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base">
                  Find my strategy
                </Button>
              </a>
            </div>

            <ol className="mt-10 grid grid-cols-3 gap-3">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl border border-border bg-card p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{s.n}</span>
                  <p className="font-bold mt-3 text-sm md:text-base">{s.title}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug">{s.body}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-10 max-w-3xl">
          15Stocks is a technology platform. Any returns shown on it are model, back tested figures, are not a promise of future returns, and
          you can lose money. Read the full disclosures on 15Stocks before you subscribe.
        </p>
      </div>
    </section>
  );
}
