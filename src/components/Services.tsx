import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    title: "Brand och säkerhetsdörrar",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Säkerhetsdörrar</h4>
          <p>
            En säkerhetsdörr är konstruerad för att skydda mot inbrott, buller och brand. Dörrbladet och karmen är förstärkta med stål och speciallås som gör det mycket svårt att forcera dörren.
          </p>
          <p className="mt-2">
            Utöver det fysiska skyddet bidrar säkerhetsdörren även till bättre ljudisolering och energibesparing, tack vare sin täta konstruktion. Säkerhetsdörrar klassas ofta enligt europeisk standard (t.ex. SS-EN 1627) och finns i olika säkerhetsnivåer beroende på behov – från grundläggande skydd till högsäkerhetsnivå för särskilt utsatta miljöer.
          </p>
          <p className="mt-2 font-medium">
            Kort sagt: En säkerhetsdörr skyddar mot inbrott, brand och buller – och ökar tryggheten i hemmet eller fastigheten.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Branddörrar</h4>
          <p>
            En branddörr är framtagen för att stå emot brand och förhindra att rök och eld sprids mellan olika delar av en byggnad. Dörrarna testas och klassas efter hur länge de står emot brand, till exempel EI30 (30 minuter) eller EI60 (60 minuter).
          </p>
          <p className="mt-2">
            Branddörrar är ofta tillverkade av stål eller trä med brandhämmande material inuti, och används i trapphus, källare, förråd, offentliga lokaler och andra utrymmen där brandskydd är avgörande.
          </p>
          <p className="mt-2 font-medium">
            Kort sagt: En branddörr stoppar brand och rök – och ger människor tid att utrymma säkert.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Entrépartier",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Ett entréparti är byggnadens första intryck – den del som ramar in entrén och ofta kombinerar dörrar, glaspartier och ibland sidoljus eller överljus.
        </p>
        <p>
          Entrépartier kan utformas i aluminium, stål eller trä, och anpassas helt efter byggnadens stil och funktion – från moderna kontorshus till bostadsfastigheter och offentliga lokaler.
        </p>
        <p>
          Förutom att skapa ett välkomnande intryck ska ett entréparti vara hållbart, energieffektivt och säkert. Det kan utrustas med funktioner som:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Automatiska dörröppnare</li>
          <li>Isolerande glas för energieffektivitet</li>
          <li>Inbrottsskydd och brandklassning vid behov</li>
          <li>Tillgänglighetsanpassning enligt gällande krav</li>
        </ul>
        <p className="font-medium">
          Kort sagt: Ett entréparti förenar design, funktion och säkerhet – och utgör en snygg och trygg inramning till byggnadens huvudentré.
        </p>
      </div>
    ),
  },
  {
    title: "Portar",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Portar används som robusta och funktionella lösningar för in- och utpassage i allt från bostadshus till industri- och garagebyggnader. De ska tåla frekvent användning, ge god säkerhet och ofta även bidra till byggnadens estetiska uttryck.
        </p>
        <p>
          Portar finns i många olika utföranden – till exempel:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Garageportar för privata och gemensamma garage</li>
          <li>Industriportar för lager, verkstäder och logistiklokaler</li>
          <li>Entréportar för flerbostadshus och kontorsbyggnader</li>
        </ul>
        <p>
          De kan vara manuella eller automatiska, och tillverkas i material som stål, aluminium eller trä, ofta med krav på isolering, brandskydd och inbrottssäkerhet.
        </p>
        <p className="font-medium">
          Kort sagt: En port kombinerar styrka, säkerhet och design – och skapar en trygg och funktionell passage anpassad efter varje miljö.
        </p>
      </div>
    ),
  },
  {
    title: "Jalusi – Brand och Säkerhet",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Jalusi används för att skydda öppningar som butiker, lastportar, serveringsluckor och garage mot inbrott, brand och obehörig åtkomst. De består vanligtvis av rullande lameller i stål eller aluminium, som rullas upp ovanför öppningen när de inte används.
        </p>
        <p>
          Det finns två huvudtyper:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            <strong>Säkerhetsjalusi</strong> – Ger effektivt inbrottsskydd genom starka, låsbara lameller och robust konstruktion. Vanligt i butiker, köpcentrum och industrimiljöer.
          </li>
          <li>
            <strong>Brandjalusi</strong> – Är utformat för att motstå och begränsa spridning av brand och rök. De aktiveras automatiskt vid brandlarm och klassas efter hur länge de står emot brand, t.ex. EI30 eller EI60.
          </li>
        </ul>
        <p>
          Jalusier kan anpassas i både storlek, färg och design för att passa byggnadens stil och funktion, och kan manövreras manuellt eller med motor.
        </p>
        <p className="font-medium">
          Kort sagt: Jalusier ger ett starkt skydd mot både inbrott och brand – en flexibel och platsbesparande säkerhetslösning för många typer av miljöer.
        </p>
      </div>
    ),
  },
  {
    title: "Fönstergaller och gallergrindar",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Fönstergaller</h4>
          <p>
            Fönstergaller används för att skydda fönster och andra öppningar mot inbrott, skadegörelse och fallolyckor – utan att hindra ljusinsläppet.
          </p>
          <p className="mt-2">
            De tillverkas vanligtvis i stål och finns i många olika utföranden, från diskreta standardmodeller till måttanpassade och dekorativa galler som smälter in i byggnadens stil.
          </p>
          <p className="mt-2">
            Fönstergaller kan monteras både utvändigt och invändigt, och finns i flera säkerhetsklasser beroende på skyddsbehov. För vissa miljöer, som källarfönster, skolor eller lokaler med värdefull utrustning, är de ett effektivt och prisvärt sätt att öka tryggheten.
          </p>
          <p className="mt-2 font-medium">
            Kort sagt: Fönstergaller ger ett starkt inbrottsskydd – och kombinerar säkerhet med funktion och design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Gallergrindar</h4>
          <p>
            Gallergrindar är en effektiv och smidig lösning för att öka säkerheten i både bostäder och lokaler. De ger ett starkt inbrottsskydd – utan att stänga ute ljus eller ventilation.
          </p>
          <p className="mt-2">
            Grindarna tillverkas vanligtvis i stål och kan monteras invändigt eller utvändigt, framför dörrar, fönster, entréer eller korridorer. De finns som svängbara eller skjutbara modeller, och kan måttanpassas för att passa varje öppning.
          </p>
          <p className="mt-2">
            Gallergrindar kan utrustas med säkerhetsklassade lås, och lackeras i valfri kulör för att smälta in i miljön. De används ofta i källare, trapphus, butiker och lagerlokaler där man vill kombinera säkerhet och åtkomst.
          </p>
          <p className="mt-2 font-medium">
            Kort sagt: Gallergrindar ger ett robust och diskret skydd – en trygg lösning som stoppar inbrottsförsök men håller utrymmen ljusa och tillgängliga.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Skyddsglas",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Skyddsglas är specialglas som kombinerar säkerhet och funktion, och används för att skydda människor, byggnader och inventarier mot skador, inbrott eller brand.
        </p>
        <p>
          Det finns olika typer av skyddsglas, bland annat:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            <strong>Säkerhetsglas</strong> – härdat eller laminerat glas som minskar risken för skärskador vid krossning.
          </li>
          <li>
            <strong>Inbrottsskyddande glas</strong> – glas som är svårt att bryta igenom och som används i exempelvis butiksfönster, entréer och kontor.
          </li>
          <li>
            <strong>Brandskyddsglas</strong> – glas som motstår höga temperaturer och förhindrar spridning av brand och rök.
          </li>
        </ul>
        <p>
          Skyddsglas kan användas i dörrar, fönster, jalusier, entrépartier och inredningslösningar, och finns i olika tjocklekar och säkerhetsklasser för att passa olika behov.
        </p>
        <p className="font-medium">
          Kort sagt: Skyddsglas ger både säkerhet och trygghet – utan att kompromissa med ljusinsläpp eller design.
        </p>
      </div>
    ),
  },
  {
    title: "Lås- och larminstallationer",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          För att kunna erbjuda kompletta säkerhetslösningar samarbetar vi med certifierade leverantörer som är specialister på lås-, larm- och övervakningssystem.
        </p>
        <p>
          Genom vårt samarbete kan vi tillhandahålla:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Installation och service av lås – både mekaniska och elektroniska</li>
          <li>Larm- och övervakningssystem – inbrottslarm, kameraövervakning och integrerade säkerhetslösningar</li>
          <li>Passersystem och kortläsare – för enkel och trygg åtkomstkontroll</li>
          <li>Systemintegration mellan lås, larm och brand- eller driftssystem</li>
        </ul>
        <p>
          Vår samarbetspartner har alla nödvändiga certifikat och behörigheter för att utföra arbetet enligt gällande branschstandarder och säkerhetskrav.
        </p>
        <p className="font-medium">
          Kort sagt: Genom våra certifierade partners kan vi erbjuda trygga och professionella installationer av lås, larm och övervakningssystem – helt anpassade efter kundens behov.
        </p>
      </div>
    ),
  },
  {
    title: "Reparationer av befintliga produkter",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Vi erbjuder reparation och service av befintliga installationer för att förlänga livslängden och säkerställa att produkterna fungerar som de ska.
        </p>
        <p>
          Våra tjänster omfattar alla typer av produkter vi arbetar med – bland annat:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Säkerhetsdörrar och branddörrar</li>
          <li>Entrépartier och portar</li>
          <li>Jalusier och fönstergaller</li>
          <li>Utrymningstrappor och snickeriarbeten</li>
        </ul>
        <p>
          Vi felsöker, reparerar och justerar både mekaniska och elektriska komponenter, och ser till att dörrar, portar och säkerhetssystem uppfyller aktuella säkerhets- och funktionskrav.
        </p>
        <p>
          Vid behov samarbetar vi med certifierade leverantörer för lås, larm och övervakning, så att hela installationen kan servas på ett säkert och godkänt sätt.
        </p>
        <p className="font-medium">
          Kort sagt: Vi tar hand om dina befintliga produkter – med professionell service, reparation och justering för långvarig funktion och trygghet.
        </p>
      </div>
    ),
  },
  {
    title: "Utrymningstrappor",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Utrymningstrappor är en viktig del av byggnadens säkerhets- och räddningsvägar, utformade för att ge en trygg och snabb väg ut vid brand eller annan nödsituation.
        </p>
        <p>
          Trapporna tillverkas vanligtvis i stål för att klara höga krav på hållfasthet, slitstyrka och brandsäkerhet. De kan anpassas för både invändigt och utvändigt bruk, och utformas efter byggnadens arkitektur och gällande säkerhetsföreskrifter.
        </p>
        <p>
          Vi erbjuder lösningar i samarbete med erfarna leverantörer och montörer som säkerställer att trapporna uppfyller alla myndighetskrav och standarder (t.ex. Boverkets byggregler).
        </p>
        <p className="font-medium">
          Kort sagt: Utrymningstrappor skapar säkra utrymningsvägar – anpassade, godkända och byggda för att rädda liv när det verkligen gäller.
        </p>
      </div>
    ),
  },
  {
    title: "Snickeriarbeten",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Våra snickeriarbeten kompletterar installationen av dörrar, portar, fönstergaller och jalusier – och säkerställer att allt återställs snyggt, säkert och enligt gällande krav.
        </p>
        <p>
          Efter montering hjälper vi till med:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Återställning av väggar, karmar och lister</li>
          <li>Justering och inpassning för perfekt funktion och tätning</li>
          <li>Montering av tillbehör som trösklar, foder och skyddsplåtar</li>
        </ul>
        <p>
          Vi utför även snickeriarbeten som bidrar till säkerhets- och utrymningsvägar, till exempel:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Byggnation av säkerhetsväggar och förstärkta partier</li>
          <li>Anpassningar för brandklassade konstruktioner</li>
          <li>Tätning och isolering enligt brand- och ljudkrav</li>
        </ul>
        <p className="font-medium">
          Kort sagt: Våra snickeriarbeten ser till att installationen blir komplett – med både säkerhet, funktion och en professionell finish.
        </p>
      </div>
    ),
  },
]

export function Services() {
  return (
    <section id="tjänster" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Våra tjänster
        </h2>
        <Separator className="mb-12" />
        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {service.title}
              </AccordionTrigger>
              <AccordionContent>
                {service.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

