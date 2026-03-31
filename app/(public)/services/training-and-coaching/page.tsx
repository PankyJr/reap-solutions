import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "B-BBEE Training & Coaching | REAP Solutions",
  description: "Executive education programs on B-BBEE codes, transformation strategy, and implementation best practices. Build transformation capability within your organisation.",
  keywords: "B-BBEE training, transformation coaching, B-BBEE education, executive training, South Africa",
}

export default async function TrainingAndCoachingPage() {
  const service = await prisma.service.findUnique({
    where: { slug: "training-and-coaching" },
  })

  const defaultContent = {
    title: "Training & Coaching",
    summary: "Executive education programs on B-BBEE codes, transformation strategy, and implementation best practices",
    problem: "Many organisations lack the internal capability to effectively implement and manage B-BBEE transformation initiatives. This results in suboptimal outcomes, compliance risks, and missed opportunities.",
    approach: "We provide comprehensive training and coaching programs that build transformation capability within your organisation, ensuring sustainable implementation and continuous improvement.",
    outcomes: [
      "Enhanced understanding of B-BBEE codes and requirements",
      "Internal capability to manage transformation initiatives",
      "Strategic thinking around transformation opportunities",
      "Improved implementation effectiveness",
      "Sustainable transformation culture within the organisation",
    ],
    whoItsFor: [
      "Executive teams requiring strategic transformation education",
      "Transformation managers and coordinators",
      "HR and procurement teams involved in transformation",
      "Organisations building internal transformation capability",
    ],
    deliverables: [
      "Customised training programs tailored to your needs",
      "Executive coaching on transformation strategy",
      "Workshop facilitation and delivery",
      "Training materials and resources",
      "Ongoing support and capability building",
    ],
  }

  const title = service?.title || defaultContent.title
  const summary = service?.summary || defaultContent.summary

  return (
    <div className="container py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>
      </Button>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">{title}</h1>
        <p className="text-xl text-slate-600 font-light mb-12">{summary}</p>

        <section className="mb-12">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">The Problem We Solve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">{defaultContent.problem}</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategic Approach</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{defaultContent.approach}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Expected Outcomes</h2>
          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {defaultContent.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who This Is For</h2>
          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {defaultContent.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Transformation Capability?</h2>
          <p className="text-lg mb-6 opacity-90">Let us help you develop internal transformation expertise.</p>
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Link href="/training">View Training Programs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

