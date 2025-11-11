import { Logo } from "./Logo"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("tjänster")}
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Tjänster
          </button>
          <button
            onClick={() => scrollToSection("om-oss")}
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Om oss
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Kontakt
          </button>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

