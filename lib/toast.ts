// Toast utility - can be extended with a toast library later
export type ToastType = "success" | "error" | "info" | "warning"

export function showToast(message: string, type: ToastType = "info") {
  // For now, we'll use browser alert or implement a toast library
  // In production, use react-hot-toast or sonner
  if (typeof window !== "undefined") {
    // Simple implementation - replace with proper toast library
    const event = new CustomEvent("toast", { detail: { message, type } })
    window.dispatchEvent(event)
  }
}





