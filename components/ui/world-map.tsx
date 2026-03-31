"use client"

import { motion } from "framer-motion"

type Point = {
  lat: number
  lng: number
  label?: string
}

type Dot = {
  start: Point
  end: Point
}

interface WorldMapProps {
  dots: Dot[]
  lineColor?: string
}

// Convert lat/lng to SVG coordinates
const latLngToXY = (lat: number, lng: number, width: number = 1000, height: number = 500) => {
  const x = ((lng + 180) / 360) * width
  const y = ((90 - lat) / 180) * height
  return { x, y }
}

// Generate comprehensive dots for world map continents (dense pattern)
const generateWorldMapDots = () => {
  const dots: Array<{ x: number; y: number }> = []
  
  // North America - dense pattern
  for (let i = 0; i < 300; i++) {
    const x = 140 + Math.random() * 220
    const y = 70 + Math.random() * 150
    // Rough North America shape
    if (
      (x > 150 && x < 340 && y > 80 && y < 210) ||
      (x > 160 && x < 300 && y > 90 && y < 190)
    ) {
      dots.push({ x, y })
    }
  }
  
  // South America - dense pattern
  for (let i = 0; i < 200; i++) {
    const x = 240 + Math.random() * 120
    const y = 230 + Math.random() * 150
    if (x > 250 && x < 340 && y > 240 && y < 370) {
      dots.push({ x, y })
    }
  }
  
  // Europe - dense pattern
  for (let i = 0; i < 150; i++) {
    const x = 440 + Math.random() * 120
    const y = 50 + Math.random() * 120
    if (x > 450 && x < 540 && y > 60 && y < 150) {
      dots.push({ x, y })
    }
  }
  
  // Africa - dense pattern
  for (let i = 0; i < 250; i++) {
    const x = 470 + Math.random() * 140
    const y = 170 + Math.random() * 180
    if (x > 480 && x < 590 && y > 180 && y < 340) {
      dots.push({ x, y })
    }
  }
  
  // Asia - dense pattern
  for (let i = 0; i < 400; i++) {
    const x = 590 + Math.random() * 280
    const y = 50 + Math.random() * 220
    if (
      (x > 600 && x < 850 && y > 60 && y < 220) ||
      (x > 640 && x < 870 && y > 90 && y < 260)
    ) {
      dots.push({ x, y })
    }
  }
  
  // Australia - dense pattern
  for (let i = 0; i < 100; i++) {
    const x = 740 + Math.random() * 120
    const y = 270 + Math.random() * 100
    if (x > 750 && x < 840 && y > 280 && y < 360) {
      dots.push({ x, y })
    }
  }
  
  return dots
}

export default function WorldMap({ dots, lineColor = "#0ea5e9" }: WorldMapProps) {
  const worldMapDots = generateWorldMapDots()
  
  return (
    <div className="relative w-full h-[500px] bg-[#05363A] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* World map dots (continents) */}
        <g opacity="0.3">
          {worldMapDots.map((dot, index) => (
            <circle
              key={`world-dot-${index}`}
              cx={dot.x}
              cy={dot.y}
              r="1.5"
              fill="white"
            />
          ))}
        </g>

        {/* Animated connection lines */}
        {dots.map((dot, index) => {
          const start = latLngToXY(dot.start.lat, dot.start.lng)
          const end = latLngToXY(dot.end.lat, dot.end.lng)

          // Only draw line if start and end are different
          if (dot.start.lat === dot.end.lat && dot.start.lng === dot.end.lng) {
            return null
          }

          return (
            <g key={`line-${index}`}>
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={lineColor}
                strokeWidth="1.5"
                opacity="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            </g>
          )
        })}

        {/* Location markers (dots) */}
        {dots.map((dot, index) => {
          const point = latLngToXY(dot.start.lat, dot.start.lng)
          
          return (
            <g key={`marker-${index}`}>
              {/* Outer circle with animation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="white"
                stroke={lineColor}
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.5,
                  ease: "easeOut",
                }}
              />
              {/* Inner dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.7,
                  ease: "easeOut",
                }}
              />
              {/* Pulsing animation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                opacity="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
