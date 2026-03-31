import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Enterprise & Supplier Development | REAP Solutions",
  description: "Design and implement ESD initiatives that strengthen supplier pipelines and improve scorecard outcomes sustainably.",
  keywords: "enterprise supplier development, ESD, supplier development, B-BBEE procurement, South Africa",
}

export default function EnterpriseSupplierDevelopmentPage() {
  const defaultContent = {
    title: "Enterprise & Supplier Development",
    summary: "Design and implement ESD initiatives that strengthen supplier pipelines and improve scorecard outcomes sustainably.",
    problem: "Many ESD programs fail to create sustainable value, resulting in compliance-focused initiatives that don't drive business growth or meaningful transformation.",
    approach: "We develop strategic ESD programs that integrate supplier development with business objectives, creating sustainable value chains and meaningful partnerships that drive both transformation and commercial outcomes.",
    outcomes: [
      "ESD Strategy & Solutions - Design and implement ESD initiatives that strengthen supplier pipelines and improve scorecard outcomes sustainably",
      "Supplier Development Planning - Identify opportunities, structure support, and measure impact to maximize both commercial and transformation value",
      "Enterprise Development Enablement - Support enterprise development initiatives with governance, tracking, and practical execution guidance",
      "Improved B-BBEE procurement element scores",
      "Enhanced supply chain resilience and diversity",
    ],
    whoItsFor: [
      "Organisations seeking to improve procurement element scores",
      "Companies looking to develop strategic supplier partnerships",
      "Businesses requiring ESD program design and implementation",
      "Organisations wanting to transform procurement into a growth engine",
    ],
    deliverables: [
      "ESD strategy and program design",
      "Supplier identification and selection framework",
      "Partnership development and support programs",
      "Impact measurement and reporting",
      "Ongoing program management and optimisation",
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
              Design and implement ESD initiatives that{" "}
              <span className="bg-[#FFCE10] px-1.5 py-0.5 font-medium text-slate-900">strengthen supplier pipelines</span>{" "}
              and improve scorecard outcomes sustainably.
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
                Many ESD programs fail to create sustainable value, resulting in{" "}
                <span className="bg-[#FFCE10] px-1.5 py-0.5 font-medium text-slate-900">compliance-focused initiatives</span>{" "}
                that don&apos;t drive business growth or{" "}
                <span className="bg-[#05363A] px-1.5 py-0.5 font-medium text-white">meaningful transformation</span>.
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
                We develop strategic ESD programs that integrate supplier development with business objectives, creating{" "}
                <span className="bg-[#05363A] px-1.5 py-0.5 font-medium text-white">sustainable value chains</span>{" "}
                and meaningful partnerships that drive both transformation and commercial outcomes.
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
                  Ready to Transform Your Procurement?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let us help you develop a strategic ESD program.
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
