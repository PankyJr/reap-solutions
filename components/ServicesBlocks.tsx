"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSitemap,
  faHandshake,
  faGraduationCap,
  faChalkboardUser,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

type Service = {
  title: string;
  description: string;
  percentage: string;
  icon: any;
  href?: string;
};

const services: Service[] = [
  {
    title: "Strategy development",
    description: "Focused planning built to drive growth and achieve business goals.",
    percentage: "95%",
    icon: faChartLine,
    href: "/services/bbbee-strategy",
  },
  {
    title: "Project management",
    description: "Efficient processes ensure success with clarity, speed, and impact.",
    percentage: "85%",
    icon: faSitemap,
    href: "/services/ownership-advisory",
  },
  {
    title: "Marketing strategy",
    description: "Targeted campaigns designed to engage audiences and boost results.",
    percentage: "98%",
    icon: faHandshake,
    href: "/services/enterprise-supplier-development",
  },
  {
    title: "Skills development",
    description: "Strategic skills development planning aligned with B-BBEE requirements and your business needs.",
    percentage: "92%",
    icon: faGraduationCap,
    href: "/services/skills-planning",
  },
  {
    title: "Training & coaching",
    description: "Practical workshops and coaching so teams understand the Codes and implement correctly.",
    percentage: "88%",
    icon: faChalkboardUser,
    href: "/services/training-and-coaching",
  },
  {
    title: "Transaction advisory",
    description: "Expert advisory for B-BBEE transactions, mergers, and acquisitions—built for compliance and value.",
    percentage: "90%",
    icon: faFileSignature,
    href: "/services/transaction-advisory",
  },
];

export default function ServicesBlocks() {
  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-12">
          Unlock growth opportunities, streamline operations, and achieve measurable results with tailored business consulting solutions designed to transform challenges.
        </h2>

        {/* Service Blocks */}
        <div className="space-y-0">
          {services.map((s, index) => (
            <React.Fragment key={s.title}>
              <article className="py-6 flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center text-emerald-600 border-2 border-emerald-600">
                    <FontAwesomeIcon icon={s.icon} className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  {/* Percentage */}
                  <div className="flex-shrink-0">
                    <p className="text-4xl sm:text-5xl font-bold text-slate-900">
                      {s.percentage}
                    </p>
                  </div>
                </div>
              </article>

              {/* Separator Line */}
              {index < services.length - 1 && (
                <div className="h-px w-full bg-slate-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}


