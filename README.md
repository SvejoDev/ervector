# Ervector Website

En modern, minimalistisk hemsida för Ervector – kompletta lösningar inom säkerhet och skallskydd.

## Teknisk stack

- **React 18** med **Vite**
- **TypeScript**
- **Tailwind CSS** med dark mode support
- **shadcn/ui** komponenter
- **next-themes** för tema-hantering
- **react-hook-form** + **zod** för formulärvalidering
- **Resend** för e-post via Vercel serverless functions
- **Vercel Analytics**

## Utveckling

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build

# Förhandsgranska produktionsbygg
npm run preview
```

## Deployment på Vercel

1. Pusha koden till GitHub/GitLab/Bitbucket
2. Importera projektet i Vercel
3. Vercel kommer automatiskt att detektera Vite-konfigurationen
4. Lägg till miljövariabel i Vercel:
   - `RESEND_API_KEY` – din Resend API-nyckel

### Resend-konfiguration

1. Skapa ett konto på [Resend](https://resend.com)
2. Verifiera domänen `ervector.se` i Resend (lägg till DKIM/SPF records)
3. Skapa en API-nyckel och lägg till den som miljövariabel i Vercel

## Projektstruktur

```
ervector.se/
├── api/                 # Vercel serverless functions
│   └── contact.ts       # Kontaktformulär API
├── public/              # Statiska filer
│   ├── ErvectorBlack.svg
│   └── ErvectorWhite.svg
├── src/
│   ├── components/      # React-komponenter
│   │   ├── ui/         # shadcn/ui komponenter
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Approach.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/            # Utilities
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── styles/         # Globala stilar
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Funktioner

- ✅ Dark/Light tema med persistent lagring
- ✅ Responsiv design
- ✅ Kontaktformulär med validering
- ✅ E-post via Resend
- ✅ SEO-optimerad
- ✅ Tillgänglighetsanpassad
- ✅ Honeypot spam-skydd

## Licens

Privat projekt för Ervector.

