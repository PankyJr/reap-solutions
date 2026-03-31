import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | REAP Solutions",
  description: "Terms of service for REAP Solutions website.",
}

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Terms of service will be updated with full legal content. For now, please contact us directly with any questions.
          </p>
        </div>
      </div>
    </div>
  )
}


