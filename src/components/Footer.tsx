import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>Ervector</p>
          <p>
            <a 
              href="mailto:info@ervector.se" 
              className="hover:text-foreground transition-colors"
            >
              info@ervector.se
            </a>
          </p>
          <p>VAT-nummer: SE559541685901</p>
          <p>Org nummer: 559541-6859</p>
          <p className="text-xs">© {new Date().getFullYear()} Ervector. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}

