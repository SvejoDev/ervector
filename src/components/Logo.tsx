import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to white logo (dark mode) until mounted, then use theme
  const logoSrc = !mounted || theme === "dark" 
    ? "/ErvectorWhite.svg" 
    : "/ErvectorBlack.svg"

  return (
    <img 
      src={logoSrc} 
      alt="Ervector" 
      className={className}
      width={200}
      height={200}
    />
  )
}

