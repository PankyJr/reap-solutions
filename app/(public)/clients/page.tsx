import { Metadata } from "next"
import { clients } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Clients | Trusted by Leading Organisations | REAP Solutions",
  description: "REAP Solutions works with listed companies, SOEs, SMEs, and organisations across major sectors including Thebe Investment Corporation, Aberdare Cables, Nokia SA, and more.",
  keywords: "REAP Solutions clients, B-BBEE consulting clients, transformation consulting, South Africa",
}

export default function ClientsPage() {
  // Add additional clients if needed
  const additionalClients = [
    { id: "5", name: "Thermitrex", logoUrl: "/images/partners/cropped-Logo.png", websiteUrl: null, industry: "Manufacturing", order: 4, featured: true },
    { id: "6", name: "SGB-SMIT Power Matla", logoUrl: "/images/partners/images.jpeg", websiteUrl: null, industry: "Energy & Power", order: 5, featured: true },
  ]

  const displayClients = [...clients, ...additionalClients].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.order - b.order
  })

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Our Clients
        </h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          We work with listed companies, SOEs, SMEs, and organisations across major sectors
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {displayClients.map((client) => {
          const clientId = client.id
          const clientName = client.name
          const isFeatured = client.featured
          const websiteUrl = client.websiteUrl || undefined
          const industry = client.industry || undefined

          return (
            <Card
              key={clientId}
              className={`border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${
                isFeatured ? "bg-orange-50/30 border-orange-200" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Building2 className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  {websiteUrl && (
                    <Link
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {clientName}
                </h3>
                {industry && (
                  <p className="text-sm text-slate-600">{industry}</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <p className="text-slate-600 mb-6">
          We are proud to partner with organisations committed to sustainable transformation.
        </p>
        <p className="text-sm text-slate-500">
          For more information about our services, please{" "}
          <Link href="/contact" className="text-orange-600 hover:text-orange-700 underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

