import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Press() {
  return (
    <section id="press" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Press
        </h2>
        <Separator className="mb-12" />
        <div className="mb-8 text-center space-y-4">
          <p className="text-muted-foreground">
            För press och partners som behöver logotyper och marknadsföringsmaterial.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-4"
          >
            <a
              href="https://drive.google.com/drive/folders/1FLNo1hvbhh1ABVtzxmv9HuQFnw3oG3CT?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna logotyper på Google Drive"
            >
              Länk till logotyper
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

