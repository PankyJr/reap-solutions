"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type NewsCategory = "All" | "Reports" | "Insights" | "Announcements"

type NewsItem = {
  id: string
  category: Exclude<NewsCategory, "All">
  date: string // YYYY-MM-DD
  title: string
  excerpt: string
  href: string
  imageSrc: string
  imageAlt: string
}

const categories: { key: NewsCategory; label: string }[] = [
  { key: "All", label: "ALL" },
  { key: "Reports", label: "REPORTS" },
  { key: "Insights", label: "INSIGHTS" },
  { key: "Announcements", label: "ANNOUNCEMENT" },
]

const demoItems: NewsItem[] = [
  {
    id: "1",
    category: "Announcements",
    date: "2026-01-20",
    title: "REAP Solutions launches a new transformation support offering",
    excerpt:
      "We're proud to share a new structured approach to help clients plan, execute, and evidence B-BBEE initiatives with measurable outcomes.",
    href: "/news/reap-new-offering",
    imageSrc: "/images/news/1.jpg",
    imageAlt: "Modern building exterior",
  },
  {
    id: "2",
    category: "Reports",
    date: "2026-01-13",
    title: "B-BBEE Landscape – 2025 in Review",
    excerpt:
      "A practical overview of key changes, common audit findings, and where organisations gained (or lost) points across elements.",
    href: "/news/bbbee-2025-review",
    imageSrc: "/images/news/2.jpg",
    imageAlt: "Architectural interior ceiling",
  },
  {
    id: "3",
    category: "Insights",
    date: "2025-12-08",
    title: "Practical Skills Development: How to evidence compliance correctly",
    excerpt:
      "Clear documentation, correct beneficiary alignment, and a simple evidence pack that reduces friction during verification.",
    href: "/news/skills-development-evidence",
    imageSrc: "/images/news/3.jpg",
    imageAlt: "Abstract white architectural curves",
  },
  {
    id: "4",
    category: "Insights",
    date: "2025-12-04",
    title: "Enterprise & Supplier Development: What \"measurable outcomes\" means",
    excerpt:
      "Design ESD initiatives that strengthen supplier capability and improve scorecard outcomes sustainably.",
    href: "/news/esd-measurable-outcomes",
    imageSrc: "/images/news/4.jpg",
    imageAlt: "Modern building facade",
  },
]

function formatDate(iso: string) {
  // keep it simple: YYYY-MM-DD shown like reference
  return iso
}

export default function AnnouncementsInsightsNewsletterSection() {
  const [active, setActive] = useState<NewsCategory>("All")

  const counts = useMemo(() => {
    const base = { All: demoItems.length, Reports: 0, Insights: 0, Announcements: 0 } as Record<
      NewsCategory,
      number
    >
    for (const item of demoItems) base[item.category]++
    return base
  }, [])

  const filtered = useMemo(() => {
    if (active === "All") return demoItems
    return demoItems.filter((i) => i.category === active)
  }, [active])

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full px-6 py-14 sm:py-16 sm:px-10 lg:px-16">
          {/* Header row */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
                Announcements, <br />
                <span className="text-emerald-600">insights and Newsletter</span>
              </h2>

              {/* Tabs */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium tracking-[0.16em] text-slate-500">
                {categories.map((c) => {
                  const isActive = active === c.key
                  return (
                    <button
                      key={c.key}
                      onClick={() => setActive(c.key)}
                      className={`transition-colors ${
                        isActive ? "text-slate-900" : "hover:text-slate-900"
                      }`}
                    >
                      {c.label} <span className="text-slate-400">({counts[c.key]})</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end lg:pt-6">
              <Button asChild className="h-11 rounded-none px-6 text-sm font-semibold">
                <Link href="/news" className="flex items-center">
                  See More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Divider line */}
          <div className="mt-8 border-t border-slate-200" />

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {filtered.slice(0, 4).map((item) => (
              <article key={item.id} className="group">
                <Link href={item.href} className="block">
                  {/* Image */}
                  <div className="relative aspect-[4/2.6] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Date */}
                  <p className="mt-4 text-xs text-slate-500">{formatDate(item.date)}</p>

                  {/* Title */}
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {item.excerpt}
                  </p>

                  {/* Read more */}
                  <p className="mt-4 text-xs font-medium text-slate-400 group-hover:text-slate-600">
                    Read More
                  </p>
                </Link>
              </article>
            ))}
          </div>
      </div>
    </section>
  )
}

