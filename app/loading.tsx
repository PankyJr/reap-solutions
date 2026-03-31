export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#05363A] border-t-transparent" />
        <p className="text-sm font-medium text-slate-600">Loading...</p>
      </div>
    </div>
  )
}
