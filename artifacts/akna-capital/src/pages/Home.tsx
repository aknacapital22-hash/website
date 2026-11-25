import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PathFinder } from "@/components/sections/PathFinder";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DelayCost } from "@/components/sections/DelayCost";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/sections/Services";
import { FeaturedSections } from "@/components/sections/FeaturedSections";
import { IpoSpotlight } from "@/components/sections/IpoSpotlight";
import { FifteenStocksSpotlight } from "@/components/sections/FifteenStocksSpotlight";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

// ─── Schema: Organization ────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "AKNA Capital",
  "alternateName": "AKNA Capital Ltd",
  "url": "https://aknacapital.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://aknacapital.com/logo.jpg",
    "width": 500,
    "height": 500,
  },
  "description":
    "AKNA Capital is a SEBI Registered Research Analyst helping individuals, families, and businesses grow wealth through equity research and ranking, enhanced mutual fund SIPs, private wealth management, stockmarket education, insurance, and algo-trading.",
  "identifier": "SEBI Registered RA INH000023515",
  "telephone": ["+91-8989496800", "+91-9768943840"],
  "email": "business@aknacapital.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-201, Ishwar Swaroop CHSL, 3rd Mamletdar Wadi Road",
    "addressLocality": "Malad (West), Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400064",
    "addressCountry": "IN",
  },
  "areaServed": "IN",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+91-8989496800",
    "email": "business@aknacapital.com",
    "availableLanguage": ["English", "Hindi"],
    "areaServed": "IN",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "ratingCount": "1000",
  },
};

// ─── Schema: WebSite (Sitelinks Searchbox) ───────────────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AKNA Capital",
  "url": "https://aknacapital.com/",
  "description":
    "AKNA Capital helps individuals, families, and businesses grow wealth through equity research, mutual fund investing, private wealth management, stockmarket education, insurance, and algo-trading.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://aknacapital.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

// ─── Schema: WebPage with SpeakableSpecification (GEO/LLM) ───────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AKNA Capital | Wealth Advisory",
  "url": "https://aknacapital.com/",
  "description":
    "AKNA Capital makes financial planning and equity investing easy. We grow wealth for individuals, families, and businesses using fundamental, technical and quantitative models, data analytics, and AI. SEBI Registered Research Analyst INH000023515.",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"],
  },
  "about": {
    "@type": "Organization",
    "name": "AKNA Capital",
    "url": "https://aknacapital.com/",
  },
};

const homeSchemas = [organizationSchema, webSiteSchema, faqPageSchema, webPageSchema];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="AKNA Capital | IPO Advisory, SME IPO Consultant & Wealth Advisory, Mumbai"
        description="IPO and SME IPO consultant in Mumbai for promoters and CFOs: Pre-IPO readiness, BSE SME, NSE Emerge and Main-Board IPO advisory, M&A advisory. Plus SEBI Registered Research Analyst (INH000023515) wealth advisory."
        path="/"
        keywords="15Stocks, systematic investing India, IPO consultant India, SME IPO consultant, IPO advisory Mumbai, pre-IPO advisory, NSE Emerge IPO, BSE SME IPO, IPO eligibility, wealth advisory, investment advisory India, SEBI registered research analyst, equity research, stock recommendations, mutual fund investing, enhanced SIP, private wealth management, stockmarket workshop, algo trading India, term insurance, health insurance, portfolio management Mumbai"
        jsonLd={homeSchemas}
      />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PathFinder />
        <HowItWorks />
        <FifteenStocksSpotlight />
        <Services />
        <DelayCost />
        <IpoSpotlight />
        <FeaturedSections />
        <Testimonials />
        <FAQ />

        {/* Final CTA: low-friction, risk-reversed */}
        <section className="relative overflow-hidden bg-primary py-[clamp(3.5rem,8vw,6rem)] text-center text-primary-foreground">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />
          <div className="relative mx-auto max-w-2xl px-4">
            <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-bold tracking-tight">
              Your first conversation is on us
            </h2>
            <p className="mt-3 text-lg opacity-90">
              Tell us where you are and where you want to be. We will point you to the right next step, with no pressure and no obligation.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="h-14 w-full rounded-full px-10 text-base font-semibold sm:w-auto">
                  Book a free consultation
                </Button>
              </Link>
              <Link href="/market-tools">
                <Button size="lg" variant="outline" className="h-14 w-full rounded-full border-white/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground sm:w-auto">
                  Try free calculators first
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
