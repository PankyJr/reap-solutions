"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsletterSection() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Replace with your API route / provider (Mailchimp, Brevo, etc.)
      // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ fullName, email }) })
      await new Promise((r) => setTimeout(r, 600))
      setFullName("")
      setEmail("")
      // You can replace this with a toast
      alert("Subscribed successfully!")
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto w-full px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left copy */}
            <div className="lg:col-span-5">
              <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Join our newsletter
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base">
                Subscribe for updates, news, events, and community resources.
              </p>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Full name */}
                  <label>
                    <span className="block text-xs font-semibold text-white/90">
                      Full Name
                    </span>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder=""
                      className="mt-2 w-full border-b border-white/40 bg-transparent py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-white"
                    />
                  </label>

                  {/* Email */}
                  <label>
                    <span className="block text-xs font-semibold text-white/90">
                      Email Address
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full border-b border-white/40 bg-transparent py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-white"
                    />
                  </label>
                </div>

                {/* Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={loading || !email}
                    variant="outline"
                    className="h-11 rounded-none border-2 border-white/60 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/80"
                  >
                    <span className="flex items-center">
                      {loading ? "Submitting..." : "Subscribe"}
                      {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </section>
  )
}

