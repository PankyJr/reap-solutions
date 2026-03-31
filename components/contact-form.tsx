"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) {
      return // Bot detected
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-[#05363A]/20 bg-[#05363A]/5 rounded-none">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 text-[#05363A]">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            <div>
              <p className="font-semibold text-base">Message sent successfully!</p>
              <p className="text-sm text-[#05363A]/90 mt-1">We&apos;ll get back to you soon.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-slate-200 rounded-none">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold text-slate-900">Send us a message</CardTitle>
        <CardDescription className="text-slate-600 mt-2">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field */}
          <input
            type="text"
            {...register("honeypot")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700 font-medium">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your name"
                className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A]"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A]"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+27 12 345 6789"
                className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-700 font-medium">Company</Label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Your company name"
                className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceInterest" className="text-slate-700 font-medium">Service Interest</Label>
            <Select
              onValueChange={(value) => setValue("serviceInterest", value)}
            >
              <SelectTrigger className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A]">
                <SelectValue placeholder="Select a service (optional)" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value="strategy">B-BBEE Strategy</SelectItem>
                <SelectItem value="implementation">Implementation Support</SelectItem>
                <SelectItem value="training">Training & Education</SelectItem>
                <SelectItem value="assessment">Current State Assessment</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-700 font-medium">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your needs..."
              rows={6}
              className="rounded-none border-slate-300 focus:border-[#05363A] focus:ring-[#05363A] resize-none"
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-none">
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#05363A] text-white hover:bg-[#05363A]/90 border-0 rounded-none font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

