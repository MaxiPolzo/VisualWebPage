"use client"

import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  return (
    <Button variant="outline" size="icon" disabled className="opacity-50 cursor-not-allowed bg-transparent">
      <Moon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Modo oscuro activado</span>
    </Button>
  )
}
