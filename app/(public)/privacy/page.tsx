import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | REAP Solutions",
  description: "Privacy policy for REAP Solutions website.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            This privacy policy will be updated with full legal content. For now, please contact us directly with any privacy concerns.
          </p>
        </div>
      </div>
    </div>
  )
}


