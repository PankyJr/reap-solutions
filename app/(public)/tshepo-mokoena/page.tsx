import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Award, Briefcase, Users, Building2, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Tshepo Mokoena | Founder & Principal Consultant | REAP Solutions",
  description: "Tshepo Mokoena brings 13+ years of experience in transformation and B-BBEE verification. Former Manager for Training & Consulting at a top empowerment firm, working with listed companies, SOEs, and SMEs across major sectors.",
  keywords: "Tshepo Mokoena, B-BBEE expert, transformation consultant, South Africa, REAP Solutions founder",
}

export default function FounderPage() {
    return (
      <div className="container py-12 md:py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Tshepo Mokoena
            </h1>
            <p className="text-2xl text-slate-600 font-light">
              Founder & Principal Consultant
            </p>
          </div>

          {/* Biography */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Biography</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Tshepo Mokoena is the founder of REAP Solutions, bringing over 13 years of specialised experience in transformation and B-BBEE verification. His career has been dedicated to helping organisations understand that transformation is a business advantage, not a burden.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Prior to founding REAP Solutions, Tshepo served as Manager for Training & Consulting at one of South Africa&apos;s leading empowerment firms, where he developed and delivered transformation strategies for organisations across multiple sectors.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                His approach combines deep legislative knowledge with commercial strategy, ensuring that transformation initiatives drive growth, reduce risk, and create sustainable value for all stakeholders.
              </p>
            </div>
          </section>

          {/* Career History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Career History</h2>
            <div className="space-y-6">
              <Card className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-slate-900">Founder & Principal Consultant</CardTitle>
                      <p className="text-slate-600 mt-1">REAP Solutions</p>
                    </div>
                    <Briefcase className="h-6 w-6 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Leading REAP Solutions in providing specialist B-BBEE consulting services, transaction advisory, and transformation strategy development for organisations across South Africa.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-slate-900">Manager, Training & Consulting</CardTitle>
                      <p className="text-slate-600 mt-1">Leading Empowerment Firm</p>
                    </div>
                    <Award className="h-6 w-6 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Developed and delivered comprehensive B-BBEE training programs and consulting services, working with listed companies, SOEs, and SMEs to implement transformation strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Industries Served */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Industries Served</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Financial Services",
                "Manufacturing",
                "Technology & Telecommunications",
                "Energy & Utilities",
                "Mining & Resources",
                "Retail & Consumer Goods",
                "Professional Services",
                "Government & SOEs",
              ].map((industry: string) => (
                <div key={industry} className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <Building2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Philosophy</h2>
            <Card className="border border-orange-200 bg-orange-50/30 shadow-sm">
              <CardContent className="pt-6">
                <p className="text-lg text-slate-700 leading-relaxed italic mb-4">
                  &quot;Transformation is a business advantage, not a burden. When approached strategically, B-BBEE compliance becomes a catalyst for growth, innovation, and sustainable value creation.&quot;
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Tshepo believes that successful transformation requires deep integration with business strategy, stakeholder engagement, and a long-term perspective. His approach emphasises commercial soundness alongside legislative compliance, ensuring that every transformation initiative drives measurable business outcomes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Client Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Recent Client Highlights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Thebe Investment Corporation",
                "Aberdare Cables",
                "Nokia South Africa",
                "Naamsa",
                "Thermitrex",
                "SGB-SMIT Power Matla",
              ].map((client: string) => (
                <div key={client} className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                  <Users className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{client}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Founder Message */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Message from the Founder</h2>
            <Card className="border border-slate-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    At REAP Solutions, we understand that transformation is a journey, not a destination. Our approach is built on partnership, strategic insight, and a deep commitment to creating sustainable value for our clients and their stakeholders.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    With over 20 years of combined experience across our team, we bring together expertise in commercial law, accounting, taxation, HR, training, and sales to deliver end-to-end transformation solutions that are both compliant and commercially sound.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Whether you are developing your first B-BBEE strategy, optimising an existing transformation program, or navigating complex ownership transactions, we are here to partner with you on your transformation journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="mt-12 p-8 bg-slate-900 rounded-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation Journey?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let us discuss how REAP Solutions can support your organisation&apos;s transformation objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

