"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type PartnerCard = {
  title: string
  description: string
  logoSrc: string
  logoAlt: string
}

interface PartnersSectionProps {
  kicker?: string
  title?: string
  highlightWord?: string
  ctaText?: string
  ctaHref?: string
  cards?: PartnerCard[]
}

const defaultCards: PartnerCard[] = [
  {
    title: "Thebe Investment Corporation",
    description: "Trusted partner supporting governance and compliance readiness.",
    logoSrc: "/images/partners/Thebe_Investments_Dark-Skin-Logo.png",
    logoAlt: "Thebe Investment Corporation",
  },
  {
    title: "Aberdare Cables",
    description: "Strategic support for transformation and advisory initiatives.",
    logoSrc: "/images/partners/0000692180_resized_aberdare.jpg",
    logoAlt: "Aberdare Cables",
  },
  {
    title: "Nokia South Africa",
    description: "Independent review and assurance for evidence-based compliance.",
    logoSrc: "/images/partners/Nokia-South-Africa.jpg",
    logoAlt: "Nokia South Africa",
  },
  {
    title: "Naamsa",
    description: "Independent auditing partner aligned to best-practice governance.",
    logoSrc: "/images/partners/naamsa-final-logo-600.jpg",
    logoAlt: "Naamsa",
  },
  {
    title: "Thermitrex",
    description: "Trusted partner supporting governance and compliance readiness.",
    logoSrc: "/images/partners/cropped-Logo.png",
    logoAlt: "Thermitrex",
  },
  {
    title: "SGB-SMIT Power Matla",
    description: "Strategic support for transformation and advisory initiatives.",
    logoSrc: "/images/partners/images.jpeg",
    logoAlt: "SGB-SMIT Power Matla",
  },
]

export default function PartnersSection({
  kicker = "PARTNERS",
  title = "Institutional Grade",
  highlightWord = "Partners",
  ctaText = "Our Partners",
  ctaHref = "/about#partners",
  cards = defaultCards,
}: PartnersSectionProps) {
  // Duplicate cards multiple times for seamless infinite loop
  const duplicatedCards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards]

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto w-full px-6 py-14 sm:py-16 sm:px-10 lg:px-16">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium tracking-[0.18em] text-slate-500">
              {kicker}
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              {title} <span className="text-emerald-600">{highlightWord}</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end lg:pt-12">
            <Button asChild variant="outline" className="h-11 rounded-none px-6 text-sm font-semibold">
              <Link href={ctaHref} className="flex items-center">
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Logo Animation Container */}
        <div className="mt-12 relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos */}
          <div className="overflow-hidden">
            <div className="flex gap-6 md:gap-12 items-center animate-partner-scroll">
              {duplicatedCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ minWidth: '200px' }}
                >
                  <div className="relative h-16 w-40 transition-opacity duration-300 opacity-90 hover:opacity-100 grayscale hover:grayscale-0">
                    <Image
                      src={card.logoSrc}
                      alt={card.logoAlt}
                      fill
                      className="object-contain"
                      sizes="160px"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

