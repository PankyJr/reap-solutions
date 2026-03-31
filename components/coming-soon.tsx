import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

type ComingSoonProps = {
  title?: string
  message?: string
}

export function ComingSoon({ title = "Coming soon", message }: ComingSoonProps) {
  return (
    <section className="w-full min-h-[80vh] bg-white flex flex-col items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col items-center text-center">
        <div className="w-full max-w-md mx-auto mb-8">
          <Image
            src="/coming-soon.svg"
            alt="Coming soon"
            width={656}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
          {title}
        </h1>
        {message && (
          <p className="text-slate-600 text-lg mb-8 max-w-md">
            {message}
          </p>
        )}
        <Button
          asChild
          className="bg-[#05363A] hover:bg-[#05363A]/90 text-white rounded-none font-semibold border-0"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to homepage
          </Link>
        </Button>
      </div>
    </section>
  )
}
