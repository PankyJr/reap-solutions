import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Briefcase, DollarSign, Scale, Users, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Transaction Advisory | Ownership & Transformation Transactions | REAP Solutions",
  description: "Specialised transaction advisory for complex ownership transactions. Shareholder structuring, funding models, tax/legal integration, and ownership optimisation for transformation initiatives.",
  keywords: "transaction advisory, ownership transactions, shareholder structuring, B-BBEE funding, transformation transactions, South Africa",
}

export default async function TransactionAdvisoryPage() {
  const service = await prisma.service.findUnique({
    where: { slug: "transaction-advisory" },
  })

  return (
    <div className="container py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>
      </Button>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Transaction Advisory
          </h1>
          <p className="text-2xl text-slate-600 font-light leading-relaxed">
            Specialised advisory services for complex ownership transactions and strategic transformation initiatives
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-12">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">
                Ownership transactions in the context of B-BBEE transformation require careful navigation of commercial, legal, tax, and regulatory considerations. Poorly structured transactions can result in suboptimal outcomes, increased risk, and missed opportunities for value creation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Strategic Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Strategic Approach</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            REAP Solutions provides comprehensive transaction advisory services that integrate commercial strategy, legal structure, tax optimisation, and transformation objectives. Our approach ensures that ownership transactions are structured for optimal outcomes across all dimensions.
          </p>
        </section>

        {/* Service Subsections */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Shareholder Structuring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Optimal ownership structures that balance transformation objectives with commercial requirements, governance best practices, and long-term sustainability. We design structures that align with business strategy while maximising B-BBEE scorecard impact.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Ideal Partner Profiling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Strategic partner identification and selection processes that align with business objectives, transformation goals, and cultural fit. We develop comprehensive partner profiles and facilitate the selection process to ensure optimal matches.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Funding Models</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Comprehensive funding strategy development, including debt, equity, and hybrid structures tailored to transformation transactions. We evaluate funding options, structure financing arrangements, and optimise capital structures for sustainable outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Tax & Legal Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Integrated tax and legal advisory ensuring transactions are structured for optimal outcomes across all dimensions. We coordinate with tax and legal specialists to ensure structures are compliant, efficient, and aligned with commercial objectives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ownership Optimisation */}
        <section className="mb-12">
          <Card className="border border-orange-200 bg-orange-50/30 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-2xl font-semibold text-slate-900">Ownership Optimisation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Our ownership optimisation approach ensures that transformation transactions maximise both B-BBEE scorecard impact and commercial value. We analyse current ownership structures, identify optimisation opportunities, and develop strategies that enhance transformation outcomes while supporting business objectives.
              </p>
              <ul className="space-y-2">
                {[
                  "Current ownership structure analysis",
                  "B-BBEE scorecard impact assessment",
                  "Optimisation opportunity identification",
                  "Strategic ownership restructuring recommendations",
                  "Implementation support and execution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Expected Outcomes</h2>
          <div className="grid gap-4">
            <Card className="border border-slate-200 shadow-sm">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Optimally structured ownership transactions that maximise B-BBEE impact",
                    "Tax-efficient structures that minimise transaction costs and ongoing tax burden",
                    "Legally compliant arrangements that reduce regulatory risk",
                    "Sustainable ownership models that support long-term business objectives",
                    "Clear documentation and governance frameworks for ongoing management",
                  ].map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who This Is For</h2>
          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Our transaction advisory services are designed for organisations that are:
              </p>
              <ul className="space-y-2">
                {[
                  "Planning ownership transactions as part of B-BBEE transformation initiatives",
                  "Seeking to optimise existing ownership structures for improved scorecard impact",
                  "Navigating complex transactions involving multiple stakeholders and regulatory requirements",
                  "Requiring integrated advisory across commercial, legal, tax, and transformation dimensions",
                  "Looking for strategic guidance on partner selection and transaction structuring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Engagement Model */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Engagement Model</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Assessment Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Comprehensive analysis of current state, transaction objectives, and stakeholder requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Design Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Development of optimal transaction structure, funding model, and implementation roadmap.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Execution Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Ongoing advisory and support throughout transaction execution and post-transaction integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 p-8 bg-slate-900 rounded-lg text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Transaction?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let us provide strategic advisory for your ownership transaction and transformation initiatives.
          </p>
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

