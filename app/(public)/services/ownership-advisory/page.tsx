import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Ownership Transaction Advisory | REAP Solutions",
  description: "Specialist support on structuring ownership transactions aligned to B-BBEE objectives and commercial realities.",
  keywords: "ownership advisory, ownership analysis, B-BBEE ownership, shareholder structuring, South Africa",
}

export default function OwnershipAdvisoryPage() {
  const defaultContent = {
    title: "Ownership Transaction Advisory",
    summary: "Specialist support on structuring ownership transactions aligned to B-BBEE objectives and commercial realities.",
    problem: "Ownership is a critical element of B-BBEE scorecards, but many organisations struggle to structure ownership arrangements that are both transformation-compliant and commercially sustainable.",
    approach: "We provide comprehensive ownership advisory services, including ownership analysis, structure optimisation, and strategic recommendations for ownership transactions.",
    outcomes: [
      "Advisory on Ownership Transactions - Specialist support on structuring ownership transactions aligned to B-BBEE objectives and commercial realities",
      "Shareholder Profile & Partner Identification - Define the ideal B-BBEE partner profile to unlock real value",
      "Funding Model Advisory - Advise on fit-for-purpose funding structures to optimize B-BBEE ownership outcomes",
      "Tax, Accounting & Legal Advisory (Associates) - Access specialist associates to ensure decisions are grounded in sound technical principles",
      "Optimised ownership structure recommendations",
    ],
    whoItsFor: [
      "Organisations seeking to improve ownership element scores",
      "Companies planning ownership transactions",
      "Businesses requiring ownership structure analysis",
      "Organisations navigating ownership compliance requirements",
    ],
    deliverables: [
      "Ownership structure analysis and assessment",
      "B-BBEE ownership element scorecard impact analysis",
      "Ownership optimisation recommendations",
      "Transaction advisory for ownership changes",
      "Compliance review and risk assessment",
    ],
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="mx-auto w-full px-6 py-12 sm:px-10 lg:px-16">
          <Button asChild variant="ghost" className="mb-8 -ml-2">
            <Link href="/services" className="text-slate-600 hover:text-slate-900">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-slate-900 mb-6">
              {defaultContent.title}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-12">
              Specialist support on structuring ownership transactions aligned to{" "}
              <span className="bg-[#05363A] px-1.5 py-0.5 font-medium text-white">B-BBEE objectives</span>{" "}
              and commercial realities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            {/* Problem Section */}
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-[#05363A] uppercase">
                  THE CHALLENGE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
                The Problem We Solve
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Ownership is a{" "}
                <span className="bg-[#FFCE10] px-1.5 py-0.5 font-medium text-slate-900">critical element</span>{" "}
                of B-BBEE scorecards, but many organisations struggle to structure ownership arrangements that are both transformation-compliant and{" "}
                <span className="bg-[#05363A] px-1.5 py-0.5 font-medium text-white">commercially sustainable</span>.
              </p>
            </div>

            {/* Approach Section */}
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-[#05363A] uppercase">
                  OUR APPROACH
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
                Strategic Approach
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                We provide comprehensive ownership advisory services, including{" "}
                <span className="bg-[#05363A] px-1.5 py-0.5 font-medium text-white">ownership analysis</span>, structure optimisation, and strategic recommendations for ownership transactions.
              </p>
            </div>

            {/* Outcomes Section */}
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-[#05363A] uppercase">
                  WHAT YOU GET
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-8">
                Expected Outcomes
              </h2>
              <div className="space-y-4">
                {defaultContent.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border-l-4 border-[#05363A] bg-slate-50">
                    <CheckCircle2 className="h-6 w-6 text-[#05363A] flex-shrink-0 mt-0.5" />
                    <p className="text-base text-slate-700 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For Section */}
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-[#05363A] uppercase">
                  IDEAL FOR
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-8">
                Who This Is For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {defaultContent.whoItsFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#05363A] flex-shrink-0 mt-0.5" />
                    <p className="text-base text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-[#05363A] uppercase">
                  DELIVERABLES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-8">
                Typical Deliverables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {defaultContent.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#05363A] flex-shrink-0 mt-0.5" />
                    <p className="text-base text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="w-full">
            <div className="border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-10 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.12),transparent_55%)]" />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                  Ready to Optimise Your Ownership Structure?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let us help you develop an optimal ownership strategy.
                </p>
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 h-12 px-8 rounded-none">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
