import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container flex flex-col items-center justify-center gap-8 py-24 md:py-32">
      <div className="flex flex-col items-center gap-6 text-center">
        <Logo className="h-48 w-auto md:h-64 lg:h-80" />
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
          Säkerhet och skallskydd
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          Kvalitet, flexibilitet och helhet
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="mt-4"
        >
          Kontakta oss
        </Button>
      </div>
    </section>
  )
}

