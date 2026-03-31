"use client"

import Image from "next/image"
import { clients } from "@/lib/data"

export default function ClientLogoMarquee() {
  // Get featured clients for the marquee
  const featuredClients = clients.filter(c => c.featured)
  // Duplicate twice for seamless infinite loop (animation moves by 50%)
  const duplicatedClients = [...featuredClients, ...featuredClients]

  return (
    <div className="relative">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling logos container */}
      <div className="overflow-hidden">
        <div className="flex gap-6 items-center animate-partner-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-white border border-slate-200 px-8 py-6 min-h-[120px] min-w-[200px]"
            >
              <div className="relative h-16 w-full mb-3 transition-opacity duration-300 opacity-70 hover:opacity-100 grayscale hover:grayscale-0">
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
              <span className="text-sm font-semibold text-slate-700 text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

