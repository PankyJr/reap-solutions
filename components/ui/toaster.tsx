"use client"

import { useEffect, useState } from "react"

type Toast = {
  id: string
  message: string
  type: "success" | "error" | "info" | "warning"
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleToast = (e: CustomEvent<{ message: string; type: Toast["type"] }>) => {
      const toast: Toast = {
        id: Date.now().toString(),
        message: e.detail.message,
        type: e.detail.type,
      }
      setToasts((prev) => [...prev, toast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, 3000)
    }

    window.addEventListener("toast", handleToast as EventListener)
    return () => window.removeEventListener("toast", handleToast as EventListener)
  }, [])

  const getToastStyles = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800"
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
      default:
        return "bg-blue-50 border-blue-200 text-blue-800"
    }
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 border shadow-lg min-w-[300px] ${getToastStyles(toast.type)}`}
        >
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  )
}





