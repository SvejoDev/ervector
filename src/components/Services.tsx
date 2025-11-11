import { Separator } from "@/components/ui/separator"

const services = [
  "Brand- och säkerhetsdörrar",
  "Entrepartier",
  "Fönstergaller",
  "Portar",
  "Jalusi – Brand och Säkerhet",
  "Snickeriarbeten",
  "Lås- och larminstallationer",
  "Utrymningstrappor",
  "Reparationer av befintliga produkter",
]

export function Services() {
  return (
    <section id="tjänster" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Våra tjänster
        </h2>
        <Separator className="mb-12" />
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="text-lg text-muted-foreground">
              {service}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-muted-foreground text-center">
          Allt som har med säkerhet, invändigt och utvändigt. Skallskydd i alla möjliga klasser. 
          Allt vad kunden önskar. Stukatur på dörrar. Råsa dörrar. Portar i alla modeller. Med mera.
        </p>
      </div>
    </section>
  )
}

