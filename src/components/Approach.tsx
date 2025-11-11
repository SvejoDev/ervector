import { Separator } from "@/components/ui/separator"

export function Approach() {
  return (
    <section id="om-oss" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Om oss
        </h2>
        <Separator className="mb-12" />
        <div className="space-y-6 text-muted-foreground">
          <p>
            Mitt namn är Emil. Jag vill kort presentera mitt nystartade företag som erbjuder 
            kompletta lösningar inom säkerhet och skallskydd – med fokus på kvalitet, flexibilitet 
            och helhetslösningar.
          </p>
          <p>
            Vi samarbetar med erfarna underentreprenörer – snickare som återställer och anpassar 
            efter kundens önskemål, samt låssmeder med kompetensen inom både lås och larm. 
            Det gör att vi kan ta ett helhetsansvar från start till färdig lösning, vilket sparar 
            både tid och samordning för kund.
          </p>
          <p>
            Jag själv har över 15 års erfarenhet inom säkerhet, smide, arbetsledning och 
            projektledning, och har arbetat med både större fastighetsägare, bolag och mindre 
            projekt. Stora som små.
          </p>
          <p>
            Vi är intresserade av att komma i kontakt med er för att se hur vi skulle kunna 
            bistå vid framtida behov.
          </p>
        </div>
      </div>
    </section>
  )
}

