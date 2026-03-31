"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { 
  FiTrendingUp,
  FiHome,
  FiBook,
  FiSearch,
  FiCheckSquare,
  FiFileText
} from "react-icons/fi";

type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function AnimatedPercent({
  value,
  start,
  durationMs = 900,
}: {
  value: number;
  start: boolean;
  durationMs?: number;
}) {
  const [n, setN] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const from = 0;
    const to = Math.max(0, Math.min(100, Math.round(value)));
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(from + (to - from) * eased);
      setN(next);

      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(tick as any);
      rafRef.current = null;
    };
  }, [start, value, durationMs]);

  return <span>{n}%</span>;
}


export default function ServicesSection() {
  const items: ServiceItem[] = useMemo(
    () => [
      {
        title: "B-BBEE Strategy & Advisory",
        description: "Translate your business strategy into a commercially sound transformation model with measurable outcomes for internal and external stakeholders.",
        bullets: [
          "B-BBEE Strategy Development",
          "Transformation Roadmap & Implementation Support",
          "Ongoing Advisory Support",
        ],
        icon: FiTrendingUp,
        href: "/services/bbbee-strategy",
      },
      {
        title: "Ownership Transaction Advisory",
        description: "Specialist support on structuring ownership transactions aligned to B-BBEE objectives and commercial realities.",
        bullets: [
          "Advisory on Ownership Transactions",
          "Shareholder Profile & Partner Identification",
          "Funding Model Advisory",
          "Tax, Accounting & Legal Advisory (Associates)",
        ],
        icon: FiSearch,
        href: "/services/ownership-advisory",
      },
      {
        title: "Enterprise & Supplier Development",
        description: "Design and implement ESD initiatives that strengthen supplier pipelines and improve scorecard outcomes sustainably.",
        bullets: [
          "ESD Strategy & Solutions",
          "Supplier Development Planning",
          "Enterprise Development Enablement",
        ],
        icon: FiHome,
        href: "/services/enterprise-supplier-development",
      },
      {
        title: "Skills Planning & Implementation",
        description: "Facilitate skills planning aligned to B-BBEE priorities, ensuring initiatives are actionable and auditable.",
        bullets: [
          "Skills Planning Facilitation",
          "Implementation & Evidence Readiness",
          "Coaching for Internal Teams",
        ],
        icon: FiCheckSquare,
        href: "/services/skills-planning",
      },
    ],
    []
  );

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <section className="relative bg-white">
      <div className="mx-auto w-full px-6 pb-20 pt-16 sm:px-10 lg:px-16">
        <img
          src="/services.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-[84px] w-[80px] select-none sm:right-10 sm:w-[100px] lg:right-16 lg:w-[120px]"
        />

        <div className="w-full">
          <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0B0F0F] md:text-[44px] pr-0 md:pr-[140px]">
            Unlock growth opportunities, streamline operations, and achieve measurable results
          </h2>

          <div className="mt-8 h-px w-full bg-[#E7E7E7] pr-0 md:pr-[140px]" />

          <div
            ref={ref}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
              {items.map((item, index) => {
                const Icon = item.icon;
                const isFilled = index % 2 === 0; // 1st & 3rd cards filled (green), 2nd & 4th white
                return (
                  <div
                    key={item.title}
                    className={`border-2 border-[#05363A] p-6 shadow-sm transition-all duration-300 flex flex-col h-full group ${
                      isFilled
                        ? "bg-[#05363A] hover:bg-white hover:shadow-md"
                        : "bg-white hover:bg-[#05363A] hover:shadow-md"
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className={`h-10 w-10 stroke-[1.5] transition-colors duration-300 ${
                        isFilled ? "text-white group-hover:text-[#05363A]" : "text-[#05363A] group-hover:text-white"
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isFilled ? "text-white group-hover:text-slate-900" : "text-slate-900 group-hover:text-white"
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                      isFilled ? "text-white/90 group-hover:text-slate-600" : "text-slate-600 group-hover:text-white/90"
                    }`}>
                      {item.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-sm transition-colors duration-300 ${
                            isFilled ? "text-white/90 group-hover:text-slate-600" : "text-slate-600 group-hover:text-white/90"
                          }`}
                        >
                          <svg 
                            className={`h-4 w-4 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                              isFilled ? "text-white group-hover:text-[#05363A]" : "text-[#05363A] group-hover:text-white"
                            }`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more link */}
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 mt-auto ${
                        isFilled ? "text-white group-hover:text-[#05363A]" : "text-[#05363A] group-hover:text-white"
                      }`}
                    >
                      Learn more
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
