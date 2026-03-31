"use client"

import WorldMap from "@/components/ui/world-map"
import { MapPin } from "lucide-react"

type LocationCard = {
  city: string
  country: string
  addressLine: string
  // map point
  lat: number
  lng: number
}

export default function GlobalPresenceSection() {
  const locations: LocationCard[] = [
    {
      city: "Johannesburg",
      country: "South Africa",
      addressLine: "Add your street address here",
      // Coordinates for Johannesburg, South Africa
      lat: -26.2041,
      lng: 28.0473,
    },
  ]

  /**
   * The aceternity WorldMap takes "dots" as start/end connections.
   * To show a single location, we connect the point to itself (start=end).
   * This still renders the dot marker on the map.
   */
  const dots = locations.map((loc) => ({
    start: { lat: loc.lat, lng: loc.lng, label: `${loc.city}, ${loc.country}` },
    end: { lat: loc.lat, lng: loc.lng, label: `${loc.city}, ${loc.country}` },
  }))

  return (
    <section className="relative w-full overflow-hidden bg-[#05363A]">
      {/* Top padding similar to reference */}
      <div className="mx-auto w-full px-6 pt-20 pb-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Global Presence
          </h2>
        </div>
      </div>

      {/* Map layer */}
      <div className="relative -mt-10">
        {/* World map (behind cards) */}
        <div className="relative w-full">
          <WorldMap
            dots={dots}
            // Optional: keep the styling close to the screenshot
            // lineColor="#9CA3AF"
          />
        </div>

        {/* Bottom cards overlay */}
        <div className="pointer-events-none absolute bottom-10 left-0 w-full">
          <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {locations.map((loc) => (
                  <div
                    key={`${loc.city}-${loc.country}`}
                    className="pointer-events-auto border border-slate-200 bg-white"
                  >
                    <div className="flex items-center justify-between p-6">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">
                          {loc.city}, {loc.country}
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                          {loc.addressLine}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                        <MapPin className="h-5 w-5 text-amber-500" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* If you have only 1 card, this keeps spacing similar to reference.
                    Remove these placeholders once you add more offices. */}
                {locations.length === 1 && (
                  <>
                    <div className="hidden md:block border border-transparent" />
                    <div className="hidden md:block border border-transparent" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small fade at bottom like the reference depth */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#05363A] to-transparent" />
    </section>
  )
}

