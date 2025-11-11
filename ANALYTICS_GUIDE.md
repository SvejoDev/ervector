# Analytics Guide för Ervector

## För kunden (Emil)

### Hur du ser statistik för ervector.se

Vercel Analytics är redan aktiverat på hemsidan. För att se statistik behöver du:

#### Steg 1: Få tillgång till Vercel-kontot
Kontakta Johan Svensson för att få en inbjudan till Vercel-projektet. Du kommer att få ett e-postmeddelande med en länk.

#### Steg 2: Logga in på Vercel
1. Klicka på länken i e-postmeddelandet
2. Skapa ett konto (eller logga in om du redan har ett) - det är gratis
3. Du kommer automatiskt att se Ervector-projektet

#### Steg 3: Se statistik
1. Klicka på "Ervector" projektet
2. Klicka på fliken **"Analytics"** högst upp i menyn
3. Nu ser du:
   - **Antal besökare** - Hur många personer som besökt sidan
   - **Sidvisningar** - Totalt antal sidor som besökts
   - **Populäraste sidor** - Vilka sidor som besöks mest
   - **Varifrån besökarna kommer** - Land, stad, och källa (Google, direkt, etc.)
   - **Vilka enheter de använder** - Mobil, dator, surfplatta
   - **Vilka webbläsare de använder** - Chrome, Safari, Firefox, etc.

#### Vad du kan göra
- **Se daglig/veckovis/månadsvis statistik** - Välj tidsperiod längst upp
- **Exportera data** - Klicka på "Export" för att ladda ner en CSV-fil
- **Se detaljerad information** - Klicka på olika sektioner för mer detaljer
- **Jämföra perioder** - Se skillnaden mellan olika tidsperioder

### Vanliga frågor

**Behöver jag vara teknisk för att använda detta?**
Nej, Vercel Analytics är designat för att vara enkelt att använda. Allt är visuellt och klickbart - inga tekniska kunskaper krävs.

**Hur ofta uppdateras statistiken?**
Statistiken uppdateras i realtid, så du ser besökare nästan direkt när de kommer till sidan.

**Kan jag se vem som besökt sidan?**
Nej, av integritetsskäl ser du bara aggregerad statistik (antal besökare, inte vem som besökt). Detta följer GDPR-regler.

**Vad kostar det?**
Vercel Analytics är gratis för denna typ av användning.

**Var hittar jag Analytics?**
När du är inloggad på Vercel, klicka på ditt projekt "Ervector" och sedan på fliken "Analytics" högst upp.

---

**Behöver du hjälp?** Kontakta Johan Svensson.

---

## För utvecklaren (Johan)

### Aktivera Analytics i Vercel

1. Gå till Vercel Dashboard → Ervector projekt
2. Klicka på "Settings" → "Analytics"
3. Aktivera "Web Analytics" (om inte redan aktiverat)
4. Välj plan (Free tier är tillräckligt för de flesta)

### Ge kunden tillgång

1. Gå till projektet → "Settings" → "Members"
2. Klicka på "Invite Member"
3. Ange kundens e-postadress
4. Välj roll: **"Viewer"** (de behöver bara se analytics, inte ändra något)
5. Skicka inbjudan

Kunden kommer att få ett e-postmeddelande och kan logga in för att se analytics.

### Verifiera att Analytics fungerar

Efter deployment:
1. Besök hemsidan några gånger från olika enheter/webbläsare
2. Vänta några minuter
3. Gå till Vercel Dashboard → Analytics
4. Du bör se besöksstatistik

Analytics är redan integrerat i koden via `AnalyticsWrapper` komponenten.
