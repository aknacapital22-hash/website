import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileText, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const steps = [
  { title: "Readiness review and route selection", time: "Month 0-2", body: "Assess financials, governance and cap table, then decide between an SME IPO (BSE SME / NSE Emerge) and a Main-Board IPO. This is where eligibility gaps surface." },
  { title: "Clean-up and restatement", time: "Month 1-6", body: "Fix related-party transactions, statutory filings, board composition and share capital history. Auditors prepare restated financial statements, usually for three to five years." },
  { title: "Appoint the intermediaries", time: "Month 2-4", body: "Select a SEBI registered merchant banker (lead manager), legal counsel, registrar, statutory and peer-review auditors, and others. Compare proposals on capability, track record and fees." },
  { title: "Board and shareholder approvals", time: "Month 3-5", body: "Board resolution to go public, shareholder special resolution, conversion to a public company where needed, and fresh articles of association." },
  { title: "Due diligence and DRHP drafting", time: "Month 3-7", body: "The merchant banker and counsel run due diligence and draft the Draft Red Herring Prospectus: business, industry, risk factors, financial information and objects of the issue." },
  { title: "Filing and regulatory review", time: "Month 6-10", body: "The DRHP goes to SEBI (Main-Board) or the exchange (SME). Observations come back in rounds, and each response cycle adds time. This is the biggest timeline risk." },
  { title: "Marketing and price band", time: "Month 9-12", body: "Roadshows, investor meetings and anchor discussions lead to the RHP and the price band. Pricing is a negotiation between valuation ambition and demand." },
  { title: "Issue opens, allotment, listing", time: "Month 10-13", body: "The issue stays open for a few working days, then allotment, refunds and listing on the exchange follow. Post-listing compliance and investor relations begin." },
];

const documents = [
  "Certificate of incorporation, MOA and AOA, with all amendments",
  "Restated audited financial statements for the required period",
  "Statutory registers, ROC filings and share capital history",
  "Board and shareholder resolutions authorising the issue",
  "Material contracts, licences, approvals and registrations",
  "Details of promoters, directors, key managerial personnel and group entities",
  "Litigation, tax and regulatory compliance records",
  "Business plan, use-of-proceeds detail and industry data",
];

const faqs = [
  { q: "How long does an IPO take in India?", a: "From a serious start to listing, most companies need roughly 9 to 18 months, longer if governance and financial clean-up is needed first. Regulatory observation cycles are the most common source of delay." },
  { q: "What documents are required for an IPO in India?", a: "Core documents include incorporation records, restated financials, statutory registers, board and shareholder approvals, material contracts and licences, promoter and director details, and litigation and tax records. Your merchant banker and counsel issue a detailed checklist." },
  { q: "How much does it cost to launch an IPO in India?", a: "Costs depend on the issue size, the platform and the intermediaries chosen. They include merchant banker fees, legal, audit, registrar, exchange and regulatory fees, and marketing. Get written, itemised quotes from several merchant bankers before you commit." },
  { q: "Does an IPO mean the promoters lose control?", a: "No. Unlike private equity, an IPO sells a minority slice to public investors without board seats or investor vetoes. Promoters stay in control, though they take on public-company disclosure and governance duties, and part of their holding is locked in after listing." },
  { q: "Do I need a merchant banker for an IPO?", a: "Yes. Every public issue in India must be managed by a SEBI registered merchant banker acting as lead manager. An issuer-side advisor such as AKNA Capital helps you select and manage that relationship but does not replace it." },
  { q: "What is a DRHP?", a: "The Draft Red Herring Prospectus is the preliminary offer document filed with SEBI and the exchange. It discloses the business, financials, risks and objects of the issue, and is revised after regulatory observations before the final RHP." },
  { q: "What is promoter lock-in?", a: "Promoters must hold a specified minimum share of the post-issue capital, called the minimum promoters' contribution, for a lock-in period after listing. The exact percentages and periods are set by SEBI's ICDR Regulations and have been amended over time, so confirm current numbers before planning." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPO Process in India: Steps, Timeline, Documents and FAQs",
  description: "A plain-English guide to the IPO process in India for promoters and CFOs: steps, timeline, documents and common questions.",
  author: { "@type": "Organization", name: "AKNA Capital" },
  publisher: { "@type": "Organization", name: "AKNA Capital", logo: { "@type": "ImageObject", url: "https://aknacapital.com/logo.jpg" } },
  mainEntityOfPage: "https://aknacapital.com/ipo-process-in-india",
  dateModified: "2026-11-11",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to take a company public in India",
  step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aknacapital.com/" },
    { "@type": "ListItem", position: 2, name: "IPO Process in India", item: "https://aknacapital.com/ipo-process-in-india" },
  ],
};

export default function IpoProcessGuide() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="IPO Process in India: Steps, Timeline, Documents | AKNA Capital"
        description="Step-by-step IPO process in India for SME and Main-Board issues: timeline, documents required, merchant banker role, promoter lock-in and FAQs. Written for promoters and CFOs."
        path="/ipo-process-in-india"
        type="article"
        keywords="IPO process in India, how to launch an IPO, SME IPO process, documents required for IPO, IPO timeline India, IPO consultant Mumbai, DRHP, promoter lock-in"
        jsonLd={[articleSchema, howToSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-10 md:py-16 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Breadcrumbs items={[{ label: "IPO Process in India" }]} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                  IPO Process in India: Steps, Timeline and Documents
                </h1>
              </div>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                A plain-English walkthrough of how a company goes public in India, for promoters and CFOs weighing an SME IPO
                or a Main-Board IPO. Timelines are typical ranges, not guarantees.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/ipo-eligibility-checker">
                  <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Check IPO Eligibility</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full">Talk to our IPO team</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">The 8 steps from decision to listing</h2>
              <p className="text-muted-foreground mb-8">
                Whether you list on <Link href="/blog/sme-ipo-vs-main-board-ipo-which-fits" className="text-primary font-semibold hover:underline">BSE SME, NSE Emerge or the Main-Board</Link>,
                the sequence is broadly the same. What changes is the eligibility bar, the regulator who reviews your draft, and the compliance load afterwards.
              </p>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold text-foreground">{s.title}</h3>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{s.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Documents you should start collecting</h2>
                <ul className="space-y-2.5">
                  {documents.map((d) => (
                    <li key={d} className="text-sm text-muted-foreground leading-snug pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Who does what</h2>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Merchant banker:</strong> SEBI registered lead manager, legally responsible for the offer document and issue process.</li>
                  <li><strong className="text-foreground">Legal counsel:</strong> due diligence, drafting and regulatory compliance.</li>
                  <li><strong className="text-foreground">Auditors:</strong> restated financials and peer review.</li>
                  <li><strong className="text-foreground">Registrar:</strong> handles applications, allotment and refunds.</li>
                  <li><strong className="text-foreground">Issuer-side advisor (AKNA Capital):</strong> sits on your side, picks and manages the counterparties, keeps the timeline on track.</li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-2">Not sure where your company stands?</h2>
              <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
                Start with the eligibility checker, then talk to us about <Link href="/services/pre-ipo-advisory" className="text-primary font-semibold hover:underline">Pre-IPO Advisory</Link> if
                you need 12 to 24 months of preparation, or <Link href="/services/ipo-and-sme-ipo-advisory" className="text-primary font-semibold hover:underline">IPO and SME IPO Advisory</Link> if you are ready to file.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Book a Complimentary Consultation <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">IPO process FAQs</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-1.5">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-2xl">
              This guide is general information, not legal or investment advice. SEBI regulations and exchange rules change; confirm current requirements with a
              SEBI registered merchant banker and legal counsel. AKNA Capital is not a SEBI registered merchant banker.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
