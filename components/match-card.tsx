"use client"

import { Shield } from "lucide-react"
import Image from "next/image"

interface Match {
  id: number
  home: string
  away: string
  homeCrest: string
  awayCrest: string
  homeScore: number | null
  awayScore: number | null
  status: string
  date: string
}

interface MatchCardProps {
  match: Match
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")
  return `${day}/${month} - ${hours}:${minutes}`
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "IN_PLAY":
      return "AO VIVO"
    case "FINISHED":
      return "Encerrado"
    case "SCHEDULED":
    case "TIMED":
      return "Agendado"
    case "PAUSED":
      return "Intervalo"
    case "POSTPONED":
      return "Adiado"
    case "CANCELLED":
      return "Cancelado"
    default:
      return status
  }
}

function isLive(status: string): boolean {
  return status === "IN_PLAY" || status === "PAUSED"
}

function TeamCrest({ crest, name }: { crest: string; name: string }) {
  if (crest) {
    return (
      <div className="w-10 h-10 relative shrink-0">
        <Image
          src={crest}
          alt={`Escudo ${name}`}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    )
  }
  
  return (
    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
      <Shield className="w-5 h-5 text-muted-foreground" />
    </div>
  )
}

export function MatchCard({ match }: MatchCardProps) {
  const live = isLive(match.status)

  return (
    <div className="bg-card rounded-xl border border-border p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Header: Data e Status */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
        <span className="text-sm text-muted-foreground font-medium">
          {formatDate(match.date)}
        </span>
        {live ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-destructive/20 text-destructive font-semibold text-xs rounded-full animate-pulse-live">
            <span className="w-2 h-2 bg-destructive rounded-full"></span>
            AO VIVO
          </span>
        ) : (
          <span className="text-xs text-muted-foreground px-2.5 py-1 bg-secondary rounded-full">
            {getStatusLabel(match.status)}
          </span>
        )}
      </div>

      {/* Placar */}
      <div className="flex items-center justify-between gap-4">
        {/* Time da Casa */}
        <div className="flex-1 flex items-center gap-3">
          <TeamCrest crest={match.homeCrest} name={match.home} />
          <span className="font-semibold text-foreground text-sm truncate">
            {match.home}
          </span>
        </div>

        {/* Placar Central */}
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg min-w-[100px] justify-center">
          <span className={`text-2xl font-bold ${live ? "text-primary" : "text-foreground"}`}>
            {match.homeScore ?? "-"}
          </span>
          <span className="text-muted-foreground text-lg">x</span>
          <span className={`text-2xl font-bold ${live ? "text-primary" : "text-foreground"}`}>
            {match.awayScore ?? "-"}
          </span>
        </div>

        {/* Time de Fora */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <span className="font-semibold text-foreground text-sm truncate text-right">
            {match.away}
          </span>
          <TeamCrest crest={match.awayCrest} name={match.away} />
        </div>
      </div>
    </div>
  )
}
