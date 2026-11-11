import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle, ClipboardCheck, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/calculators/NumberField";

// Indicative screen only. SEBI ICDR and exchange criteria are amended often;
// every verdict is framed as a first-pass read, to be confirmed on a call.
// Amounts are in ₹ crore.

interface Check {
  label: string;
  pass: boolean;
  detail: string;
}

const WA_URL = `https://wa.me/918989496800?text=${encodeURIComponent(
  "Hi AKNA Capital, I ran the IPO eligibility checker and would like to discuss listing my company."
)}`;

const faqs = [
  {
    q: "Is this IPO eligibility checker official?",
    a: "No. It is an indicative screen based on the commonly cited SEBI ICDR and exchange criteria. SEBI and the exchanges revise these thresholds from time to time, so treat the result as a first-pass read and confirm it with an advisor against the rules in force at the time of filing.",
  },
  {
    q: "What is the minimum track record needed for an IPO in India?",
    a: "Both routes generally look for a multi-year operating track record, commonly three years, with positive net worth. The Main-Board has additional tests on net tangible assets and operating profit. Companies that miss the profit track record can sometimes use the book-building route with a higher QIB allocation.",
  },
  {
    q: "Can a loss-making company list on the Main-Board?",
    a: "Yes, under the alternate route in Regulation 6(2) of the ICDR regulations, which requires at least 75% of the net offer to be allotted to Qualified Institutional Buyers and satisfies a set of other conditions. It is a harder, more institution-dependent path.",
  },
  {
    q: "Which is better for my company, an SME IPO or a Main-Board IPO?",
    a: "It depends on size, profitability, valuation expectations, and how much compliance load you are ready for. Smaller, profitable companies often start on BSE SME or NSE Emerge. Larger companies with a strong profit record can aim straight for the Main-Board. Our guide to SME vs Main-Board IPOs covers the trade-offs.",
  },
  {
    q: "What should I do if the checker says I am not eligible yet?",
    a: "Most gaps are fixable with 12 to 24 months of preparation: cleaning up the cap table, strengthening governance, restating financials, and building the profit track record. That is exactly what our Pre-IPO Advisory covers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "IPO Eligibility Checker (SME and Main-Board)",
  applicationCategory: "FinanceApplication",
  description:
    "Free indicative IPO eligibility checker for Indian companies, screening against SME (BSE SME / NSE Emerge) and Main-Board criteria.",
  url: "https://aknacapital.com/ipo-eligibility-checker",
  provider: { "@type": "Organization", name: "AKNA Capital", url: "https://aknacapital.com/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aknacapital.com/" },
    { "@type": "ListItem", position: 2, name: "IPO Eligibility Checker", item: "https://aknacapital.com/ipo-eligibility-checker" },
  ],
};

function YesNo({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex rounded-full border border-border/70 overflow-hidden shrink-0">
        {[true, false].map((opt) => (
          <button
            key={String(opt)}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-1.5 text-sm font-semibold transition-colors ${
              value === opt ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            {opt ? "Yes" : "No"}
          </button>
        ))}
      </div>
    </div>
  );
}

function Verdict({ title, checks }: { title: string; checks: Check[] }) {
  const passed = checks.filter((c) => c.pass).length;
  const all = passed === checks.length;
  return (
    <div className={`rounded-2xl border p-6 ${all ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <span
          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            all ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          {all ? "Looks eligible" : `${passed}/${checks.length} criteria met`}
        </span>
      </div>
      <ul className="space-y-3">
        {checks.map((c) => (
          <li key={c.label} className="flex gap-3 text-sm">
            {c.pass ? (
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-foreground">{c.label}</p>
              <p className="text-muted-foreground leading-snug">{c.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IpoEligibilityChecker() {
  const [years, setYears] = useState(5);
  const [netWorth, setNetWorth] = useState(8);
  const [nta, setNta] = useState(6);
  const [avgOpProfit, setAvgOpProfit] = useState(4);
  const [profitYears, setProfitYears] = useState(3);
  const [postIssueCapital, setPostIssueCapital] = useState(12);
  const [nameChanged, setNameChanged] = useState(false);

  const { sme, main } = useMemo(() => {
    const sme: Check[] = [
      {
        label: "Operating track record of 3+ years",
        pass: years >= 3,
        detail: `You entered ${years} year(s). SME platforms look for an established, multi-year operating history.`,
      },
      {
        label: "Positive net worth",
        pass: netWorth > 0,
        detail: `Net worth entered: ₹${netWorth} crore. A positive, growing net worth is a baseline requirement.`,
      },
      {
        label: "Operating profit in at least 2 of the last 3 years",
        pass: profitYears >= 2,
        detail: `You reported ${profitYears} profitable year(s) of the last 3. SME platforms commonly screen on a recent profit record.`,
      },
      {
        label: "Post-issue paid-up capital within the SME ceiling (₹25 crore)",
        pass: postIssueCapital <= 25,
        detail: `Planned post-issue paid-up capital: ₹${postIssueCapital} crore. Above the ceiling, the Main-Board is the usual route.`,
      },
    ];
    const main: Check[] = [
      {
        label: "Net tangible assets of ₹3 crore+ in each of the last 3 years",
        pass: nta >= 3 && years >= 3,
        detail: `Net tangible assets entered: ₹${nta} crore. Assumes this level held across three full years.`,
      },
      {
        label: "Average operating profit of ₹15 crore+ over the last 3 years",
        pass: avgOpProfit >= 15,
        detail: `Average operating profit entered: ₹${avgOpProfit} crore. Companies below this can look at the alternate institution-heavy route.`,
      },
      {
        label: "Net worth of ₹1 crore+ in each of the last 3 years",
        pass: netWorth >= 1 && years >= 3,
        detail: `Net worth entered: ₹${netWorth} crore.`,
      },
      {
        label: "No recent change in name (or 50%+ revenue from the current activity)",
        pass: !nameChanged,
        detail: nameChanged
          ? "A name change in the last year can be a problem unless at least 50% of revenue comes from the activity the new name suggests."
          : "No name change in the last year reported.",
      },
    ];
    return { sme, main };
  }, [years, netWorth, nta, avgOpProfit, profitYears, postIssueCapital, nameChanged]);

  const smeOk = sme.every((c) => c.pass);
  const mainOk = main.every((c) => c.pass);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="IPO Eligibility Checker: SME & Main-Board | AKNA Capital"
        description="Free IPO eligibility checker for Indian companies. See in a minute whether your company looks ready for a BSE SME, NSE Emerge or Main-Board IPO, and what to fix first."
        path="/ipo-eligibility-checker"
        keywords="IPO eligibility checker, SME IPO eligibility, check IPO eligibility India, NSE Emerge eligibility, BSE SME eligibility, Main Board IPO eligibility criteria, am I eligible for IPO"
        jsonLd={[appSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-10 md:py-16 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Breadcrumbs items={[{ label: "IPO Eligibility Checker" }]} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                  IPO Eligibility Checker: Is Your Company Ready to List?
                </h1>
              </div>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                Enter a few numbers from your financials and see how your company screens against SME (BSE SME, NSE Emerge)
                and Main-Board IPO criteria. Takes about a minute. All amounts are in ₹ crore.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <NumberField label="Years of operating history" value={years} onChange={setYears} min={0} max={30} step={1} suffix="yrs" />
                <NumberField label="Net worth" value={netWorth} onChange={setNetWorth} min={-10} max={500} step={0.5} prefix="₹" suffix="Cr" />
                <NumberField label="Net tangible assets" value={nta} onChange={setNta} min={0} max={500} step={0.5} prefix="₹" suffix="Cr" />
                <NumberField label="Average operating profit (last 3 yrs)" value={avgOpProfit} onChange={setAvgOpProfit} min={0} max={200} step={0.5} prefix="₹" suffix="Cr" />
                <NumberField label="Profitable years out of the last 3" value={profitYears} onChange={setProfitYears} min={0} max={3} step={1} />
                <NumberField label="Planned post-issue paid-up capital" value={postIssueCapital} onChange={setPostIssueCapital} min={1} max={200} step={1} prefix="₹" suffix="Cr" />
                <YesNo label="Company name changed in the last year?" value={nameChanged} onChange={setNameChanged} />
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl bg-foreground text-background p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-background/50 mb-2">First-pass read</p>
                  <p className="text-xl font-bold leading-snug">
                    {mainOk
                      ? "You look eligible for a Main-Board IPO and an SME IPO."
                      : smeOk
                        ? "You look better suited to an SME IPO on BSE SME or NSE Emerge."
                        : "Not eligible yet on this screen, but most gaps are fixable in 12 to 24 months."}
                  </p>
                </div>
                <Verdict title="SME IPO (BSE SME / NSE Emerge)" checks={sme} />
                <Verdict title="Main-Board IPO (BSE / NSE)" checks={main} />
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <p className="text-lg font-bold text-foreground">Get a proper eligibility read from our IPO team</p>
                <p className="text-sm text-muted-foreground mt-1 max-w-lg">
                  We review your actual restated numbers, governance and cap table, and tell you which route fits, what to fix, and a realistic listing timeline. First conversation is complimentary.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md group whitespace-nowrap">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-12 px-6 rounded-full whitespace-nowrap">
                    <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-1.5">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Related reading:{" "}
                <Link href="/ipo-process-in-india" className="text-primary font-semibold hover:underline">IPO process in India</Link>,{" "}
                <Link href="/blog/sme-ipo-vs-main-board-ipo-which-fits" className="text-primary font-semibold hover:underline">SME vs Main-Board IPO</Link>,{" "}
                <Link href="/services/pre-ipo-advisory" className="text-primary font-semibold hover:underline">Pre-IPO Advisory</Link>.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-2xl">
              This tool is indicative and educational only. It is not legal advice or an offer document, and it does not guarantee that SEBI or any
              exchange will approve an issue. Eligibility thresholds are set by SEBI's ICDR Regulations and the exchanges and are amended from time
              to time. AKNA Capital is not a SEBI registered merchant banker; a registered merchant banker must manage every IPO.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
