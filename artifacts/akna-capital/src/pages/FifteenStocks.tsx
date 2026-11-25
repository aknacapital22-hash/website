import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check, ShieldCheck, Cpu, Wallet, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { FIFTEEN_STOCKS_URL, stocksLink } from "@/components/sections/FifteenStocksSpotlight";

const steps = [
  { title: "Pick a strategy", body: "Choose from 15 index strategies across momentum, multi asset, hybrid and thematic baskets. Each one shows its deepest falls and rolling returns next to the headline number." },
  { title: "The model proposes trades", body: "Fixed rules, not opinions, decide what to hold and when to rebalance. The same process runs every time, so decisions do not swing with headlines or mood." },
  { title: "You approve in your own demat", body: "Nothing happens until you approve. Your own broker places the orders and the shares stay in your demat account." },
];

const trust = [
  { icon: Wallet, title: "Never holds your money", body: "The platform does not take custody of funds or shares." },
  { icon: ShieldCheck, title: "You approve every trade", body: "Every rebalance waits for your approval. No lock-in, leave any time." },
  { icon: Cpu, title: "Rules, not guesswork", body: "Data and fixed rules drive each strategy. No tips, no gut calls." },
  { icon: Layers, title: "15 index strategies", body: "One flat price per basket, with risk shown beside returns." },
];

const compare = [
  ["Minimum", "₹15K to ₹90K, by basket", "Low", "₹50 lakh", "₹1 crore"],
  ["Cost", "Flat subscription per basket", "0.3 to 2.5% a year", "2% + 20%", "~2% + 20%"],
  ["Held by", "You, in your demat", "The fund", "Your demat, managed", "The fund"],
  ["Lock-in", "None", "Varies", "Varies", "Often years"],
];

const faqs = [
  { q: "What is 15Stocks by AKNA Capital?", a: "15Stocks is a systematic investing platform from AKNA Capital. It offers 15 index-based strategies where fixed rules propose rebalances and you approve them in your own demat account through your own broker." },
  { q: "What is quant investing?", a: "Quant investing uses data and fixed rules, not opinions, to decide what to hold and when to trade. It does not remove risk: quant strategies can and do fall." },
  { q: "Does 15Stocks hold my money or shares?", a: "No. Orders go through your own broker and the shares sit in your own demat account. The platform never takes custody." },
  { q: "What does 15Stocks cost?", a: "A flat subscription per basket, charged quarterly or yearly, with no fee on what you trade or invest. Brokerage and statutory charges are separate and charged by your broker. See the platform for current pricing." },
  { q: "Are the returns guaranteed?", a: "No. Any figure shown is a model, back tested number. Back tests flatter the past, real returns can be lower, and you can lose money." },
  { q: "Can I leave whenever I want?", a: "Yes. There is no lock-in, and your holdings are already in your demat account." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "15Stocks by AKNA Capital",
  url: FIFTEEN_STOCKS_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Systematic investing platform with 15 index strategies. Research strategies and approve rebalances in your own demat account.",
  publisher: { "@type": "Organization", name: "AKNA Capital", url: "https://aknacapital.com/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aknacapital.com/" },
    { "@type": "ListItem", position: 2, name: "15Stocks", item: "https://aknacapital.com/15stocks" },
  ],
};

export default function FifteenStocks() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="15Stocks: Systematic Index Investing in Your Own Demat | AKNA Capital"
        description="15Stocks by AKNA Capital: 15 rule-based index strategies. Research baskets, approve every rebalance in your own demat, flat subscription, no lock-in, platform never holds your money."
        path="/15stocks"
        keywords="15Stocks, systematic investing India, quant investing India, index strategies, rule based investing, momentum strategy India, rebalance approval demat, alternative to PMS, alternative to mutual funds, AKNA Capital"
        jsonLd={[appSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-10 md:py-16 bg-gradient-to-b from-primary/10 to-background border-b border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Breadcrumbs items={[{ label: "15Stocks" }]} />
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">
                15Stocks: systematic investing for <span className="text-primary">wealth creation</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4">
                Research rule-based index strategies and approve every rebalance in your own demat account. One flat subscription,
                no fee on your trades, and the platform never holds your money or shares.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={stocksLink("15stocks_hero")} target="_blank" rel="noopener">
                  <Button size="lg" className="rounded-full h-12 px-7">Find my strategy, free <ArrowRight className="w-4 h-4 ml-1" /></Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-7">Ask our team</Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Free to explore · No account needed · Leave any time</p>
              <ul className="mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[["15", "index strategies"], ["₹0", "held by the platform"], ["100%", "trades approved by you"], ["0", "lock-in"]].map(([n, l]) => (
                  <li key={l} className="rounded-2xl border border-border bg-card/80 px-4 py-3">
                    <p className="text-2xl font-extrabold text-primary tabular-nums">{n}</p>
                    <p className="text-xs text-muted-foreground">{l}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How 15Stocks works</h2>
              <ol className="grid md:grid-cols-3 gap-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="rounded-2xl border border-border bg-card p-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">{i + 1}</span>
                    <h3 className="font-semibold text-foreground mt-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Built around control and clarity</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {trust.map((t) => (
                  <div key={t.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3"><t.icon className="w-5 h-5" /></div>
                    <h3 className="font-semibold text-foreground">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{t.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-7">
                <h2 className="text-xl md:text-2xl font-bold">15Stocks is for you if</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {["You want a rule-based process, not tips or gut calls", "You want to keep shares in your own demat and approve every trade", "You like knowing the worst fall before you invest", "You want a flat, predictable price, not a cut of your profits"].map((t) => (
                    <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="text-xl md:text-2xl font-bold">It is not for you if</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {["You want guaranteed returns. No honest product can offer them", "You want someone to run your portfolio without your approval", "You need your money back within a few months, as equity can fall sharply", "You want stock tips to trade intraday"].map((t) => (
                    <li key={t} className="flex gap-2"><span className="mt-0.5 shrink-0 text-muted-foreground">✕</span>{t}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">Not sure? Our team can help you decide on a free call.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
              <h2 className="text-2xl md:text-3xl font-bold">One flat price. No cut of your profits.</h2>
              <p className="mt-3 text-muted-foreground">
                On a ₹25 lakh portfolio, a 2% PMS management fee alone is ₹50,000 a year, before any profit share. 15Stocks charges a flat
                subscription per basket, so the cost does not grow as your money does. Brokerage and statutory charges are separate and charged by your broker.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={stocksLink("15stocks_pricing")} target="_blank" rel="noopener">
                  <Button className="rounded-full">See current pricing <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </a>
                <Link href="/contact"><Button variant="outline" className="rounded-full">Talk to a human first</Button></Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Index strategy vs mutual fund, PMS and AIF</h2>
              <p className="text-muted-foreground mb-5 text-sm">A general comparison of structure, not a recommendation.</p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10 text-foreground">
                    <tr>{["", "15Stocks", "Mutual fund", "PMS", "AIF"].map((h) => <th key={h} className="text-left font-semibold p-3">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {compare.map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        {row.map((c, i) => <td key={i} className={`p-3 ${i === 0 ? "font-semibold text-foreground" : i === 1 ? "text-foreground" : "text-muted-foreground"}`}>{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently asked questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between gap-4">
                      {f.q}<Check className="w-4 h-4 text-primary shrink-0 mt-1 opacity-0 group-open:opacity-100" />
                    </summary>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Find the strategy that fits you</h2>
              <p className="opacity-90 mt-2 mb-6">Answer three questions on 15Stocks. No account needed.</p>
              <a href={stocksLink("15stocks_footer_cta")} target="_blank" rel="noopener">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-7">Unlock my strategy <ArrowRight className="w-4 h-4 ml-1" /></Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              15Stocks is a technology platform, not a fund or PMS. Returns shown on the platform are model, back tested figures, are not a
              promise of future returns, and you can lose money. Investments in securities are subject to market risk. Read the full
              disclosures on 15Stocks before subscribing.
            </p>
          </div>
        </section>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={stocksLink("15stocks_sticky")} target="_blank" rel="noopener" className="block">
          <Button className="h-12 w-full rounded-full font-semibold">Find my strategy, free <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
