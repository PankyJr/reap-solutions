import { Metadata } from "next"
import { resources, resourceCategories } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResourcesSearch } from "@/components/resources-search"
import { ExternalLink, FileText, Video, BookOpen } from "lucide-react"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Transformation Knowledge Hub | B-BBEE Resources | REAP Solutions",
  description: "Access legislation, insights, training materials, guides, and educational content to support your B-BBEE transformation journey. Comprehensive knowledge hub for transformation professionals.",
  keywords: "B-BBEE resources, transformation knowledge, B-BBEE legislation, transformation guides, South Africa",
}

type SearchParams = {
  search?: string
  category?: string
}

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function ResourcesPage({ searchParams }: Props) {
  const params = await searchParams
  const search = params.search || ""
  const categorySlug = params.category

  const categories = resourceCategories.sort((a, b) => a.order - b.order)

  let filteredResources = [...resources]

  if (categorySlug) {
    const category = categories.find(c => c.slug === categorySlug)
    if (category) {
      filteredResources = filteredResources.filter(r => r.categoryId === category.id)
    }
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredResources = filteredResources.filter(
      (r) =>
        r.title.toLowerCase().includes(searchLower) ||
        r.summary.toLowerCase().includes(searchLower) ||
        r.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  }

  // Sort by featured first, then by date
  filteredResources.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.publishDate.getTime() - a.publishDate.getTime()
  })

  const getIcon = (sourceType: string) => {
    switch (sourceType) {
      case "video":
        return <Video className="h-5 w-5" />
      case "file":
        return <FileText className="h-5 w-5" />
      default:
        return <ExternalLink className="h-5 w-5" />
    }
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">Transformation Knowledge Hub</h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          Access legislation, insights, training materials, guides, and educational content to support your B-BBEE transformation journey.
        </p>
      </div>

      {/* Search and Filters */}
      <ResourcesSearch categories={categories} />

      {/* Resources Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => {
          const category = resource.categoryId ? categories.find(c => c.id === resource.categoryId) : null
          return (
          <Card key={resource.id} className={resource.featured ? "border-orange-200 bg-orange-50/50" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  {getIcon(resource.sourceType)}
                  {category && (
                    <span className="text-xs font-medium">{category.name}</span>
                  )}
                </div>
                {resource.featured && (
                  <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
              <CardDescription className="line-clamp-2">{resource.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>{formatDate(resource.publishDate)}</span>
                {resource.readingTime && (
                  <span>{resource.readingTime} min read</span>
                )}
              </div>
              {resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {resource.url ? (
                <Button asChild variant="outline" className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.sourceType === "video" ? "Watch" : "View"} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button asChild variant="outline" className="w-full">
                  <Link href="/coming-soon">
                    Coming Soon — View page
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
          )
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No resources found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}

