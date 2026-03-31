import { Metadata } from "next"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Coming Soon | REAP Solutions",
  description: "This page is under development. Return to REAP Solutions homepage.",
}

type Props = {
  searchParams: Promise<{ from?: string }>
}

export default async function ComingSoonPage({ searchParams }: Props) {
  const params = await searchParams
  const from = params.from

  const messages: Record<string, string> = {
    "video-overview": "Our REAP Solutions overview video is in production. We’ll share it here soon.",
    "video-process": "Our transformation process video is in production. We’ll share it here soon.",
  }
  const message = from ? messages[from] : "We’re working on this. Check back soon."

  return <ComingSoon title="Coming soon" message={message} />
}
