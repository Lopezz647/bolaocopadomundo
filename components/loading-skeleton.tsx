"use client"

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-card rounded-xl border border-border p-4 animate-pulse"
        >
          {/* Header skeleton */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <div className="h-4 w-24 bg-secondary rounded"></div>
            <div className="h-6 w-20 bg-secondary rounded-full"></div>
          </div>

          {/* Content skeleton */}
          <div className="flex items-center justify-between gap-4">
            {/* Time da casa */}
            <div className="flex-1 flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full"></div>
              <div className="h-4 w-24 bg-secondary rounded"></div>
            </div>

            {/* Placar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
              <div className="h-8 w-20 bg-muted rounded"></div>
            </div>

            {/* Time de fora */}
            <div className="flex-1 flex items-center justify-end gap-3">
              <div className="h-4 w-24 bg-secondary rounded"></div>
              <div className="w-10 h-10 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
