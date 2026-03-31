import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth-helpers"

export async function requireAdmin() {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  if (user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
  return null
}

export function successResponse(data?: any) {
  return NextResponse.json({ success: true, data })
}

export function errorResponse(message: string, status: number = 400) {
  return NextResponse.json({ success: false, error: message }, { status })
}





