import { Metadata } from "next"
import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  return {
    title: `${service.title} | REAP Solutions`,
    description: service.seoDescription || service.summary,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service || !service.published) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{service.summary}</p>

        {service.outcome && (
          <Card className="mb-8 border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-green-700">Expected Outcome</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.outcome}</p>
            </CardContent>
          </Card>
        )}

        <div className="prose prose-lg max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: service.body.replace(/\n/g, '<br />') }} />
        </div>

        {service.whoItsFor && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Who This Is For</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{service.whoItsFor}</p>
            </CardContent>
          </Card>
        )}

        {service.deliverables && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Typical Deliverables</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.deliverables.split('\n').filter(Boolean).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item.trim()}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how this service can drive growth in your business.
          </p>
          <Button asChild size="lg" variant="orange">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


