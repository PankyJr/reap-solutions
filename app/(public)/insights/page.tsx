import { Metadata } from "next"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Insights | REAP Solutions",
  description: "Interactive dashboards and insights (Coming Soon).",
}

export default function InsightsPage() {
  return (
    <ComingSoon
      title="Insights & Analytics"
      message="Interactive dashboards and insights will be available here once our Power BI integration is complete."
    />
  )
}


