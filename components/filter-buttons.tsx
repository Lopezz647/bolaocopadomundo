"use client"

type FilterType = "all" | "live" | "finished" | "upcoming"

interface FilterButtonsProps {
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "live", label: "Ao Vivo" },
  { value: "finished", label: "Encerrados" },
  { value: "upcoming", label: "Próximos" },
]

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === filter.value
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
