import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 }) // 15 minutes
    return true
  }

  if (limit.count >= 5) {
    return false // Max 5 submissions per 15 minutes
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true }) // Silent fail for bots
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email notification (if Resend is configured)
    if (resend && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: "REAP Solutions <noreply@reapsolutions.co.za>",
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form Submission from ${body.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
            ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
            ${body.serviceInterest ? `<p><strong>Service Interest:</strong> ${body.serviceInterest}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, "<br />")}</p>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send email:", emailError)
        // Still return success even if email fails
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}


