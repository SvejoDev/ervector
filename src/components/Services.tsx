import { Separator } from "@/components/ui/separator"

const services = [
  "Brand och säkerhetsdörrar",
  "Entrépartier",
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
        <p className="mt-20 text-muted-foreground text-center">
          Vi skapar trygghet med stil.
        </p>
        <p className="mt-6 text-muted-foreground text-center">
          Hos oss får du helhetslösningar inom säkerhet – både invändigt och utvändigt. Vi erbjuder skalskydd i alla säkerhetsklasser, exklusiva stuckaturdetaljer, specialdesignade dörrar och portar i alla modeller.
        </p>
        <p className="mt-6 text-muted-foreground text-center">
          Varje projekt anpassas efter kundens önskemål – från design till färdigt resultat. Oavsett om det handlar om elegans, säkerhet eller funktionalitet levererar vi kvalitet i varje detalj.
        </p>
      </div>
    </section>
  )
}

