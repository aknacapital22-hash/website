import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const RATE = 12; // illustrative annual return, % p.a.
const YEARS = 15;

function fv(monthly: number, years: number) {
  const r = RATE / 100 / 12;
  const n = years * 12;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

const inr = (v: number) => {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  return `₹${(v / 1e5).toFixed(1)} L`;
};

export function DelayCost() {
  const [monthly, setMonthly] = useState(10000);
  const [delay, setDelay] = useState(3);

  const { now, later, lost } = useMemo(() => {
    const n = fv(monthly, YEARS);
    const l = fv(monthly, YEARS - delay);
    return { now: n, later: l, lost: n - l };
  }, [monthly, delay]);

  return (
    <section className="py-[clamp(3.5rem,8vw,6.5rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-[clamp(1.5rem,4vw,2.75rem)]">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">The cost of waiting</span>
              <h2 className="mt-2 text-[clamp(1.6rem,2.5vw+0.6rem,2.5rem)] font-bold leading-tight tracking-tight">
                Starting later costs more than you think
              </h2>
              <p className="mt-3 text-muted-foreground">
                Move the sliders and see what a few years of delay does to the same monthly SIP over {YEARS} years.
              </p>

              <label className="mt-6 block text-sm font-semibold">
                Monthly SIP: <span className="text-primary">₹{monthly.toLocaleString("en-IN")}</span>
                <input type="range" min={2000} max={100000} step={1000} value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="mt-2 w-full accent-[#0f766e]" />
              </label>
              <label className="mt-5 block text-sm font-semibold">
                If I wait: <span className="text-primary">{delay} {delay === 1 ? "year" : "years"}</span>
                <input type="range" min={1} max={7} step={1} value={delay} onChange={(e) => setDelay(+e.target.value)} className="mt-2 w-full accent-[#0f766e]" />
              </label>
            </div>

            <div className="flex flex-col justify-center gap-4 bg-primary p-[clamp(1.5rem,4vw,2.75rem)] text-primary-foreground">
              <div>
                <p className="text-sm opacity-80">Start today</p>
                <p className="text-3xl font-extrabold tabular-nums">{inr(now)}</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Start after {delay} {delay === 1 ? "year" : "years"}</p>
                <p className="text-3xl font-extrabold tabular-nums">{inr(later)}</p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-sm opacity-80">What waiting could cost you</p>
                <p className="text-2xl font-extrabold tabular-nums">{inr(lost)}</p>
              </div>
              <Link href="/market-tools/sip-delay-calculator" className="inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline">
                Try the full SIP Delay Calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <p className="border-t border-border px-6 py-3 text-[11px] leading-snug text-muted-foreground">
            Illustration only, assuming a constant {RATE}% a year. Actual returns vary, are not guaranteed, and investments are subject to market risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
