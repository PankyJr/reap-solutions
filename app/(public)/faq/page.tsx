import { Metadata } from "next"
import { faqs } from "@/lib/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | REAP Solutions",
  description: "Common questions about B-BBEE transformation, our services, and how we work.",
}

export default function FAQPage() {
  const publishedFaqs = faqs.filter(f => f.published).sort((a, b) => a.order - b.order)

  if (publishedFaqs.length === 0) {
    return (
      <ComingSoon
        title="FAQs coming soon"
        message="We’re preparing answers to common questions about B-BBEE transformation and our approach."
      />
    )
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Common questions about B-BBEE transformation and our approach.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {publishedFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}


