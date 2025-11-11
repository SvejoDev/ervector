import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.tag) {
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Något gick fel")
      }

      toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.")
      reset()
    } catch (error) {
      toast.error("Kunde inte skicka meddelandet. Försök igen senare.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Kontakt
        </h2>
        <Separator className="mb-12" />
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Tveka inte att höra av er om ni vill veta mer eller boka ett möte.
          </p>
          <p className="mt-2">
            <a 
              href="mailto:info@ervector.se" 
              className="text-primary hover:underline"
            >
              info@ervector.se
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Namn *
            </label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Ditt namn"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Företag
            </label>
            <Input
              id="company"
              {...register("company")}
              placeholder="Företagsnamn"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-post *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="din@epost.se"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefon
            </label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="070-123 45 67"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Meddelande *
            </label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Ditt meddelande..."
              rows={6}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {/* Honeypot field */}
          <input
            type="text"
            {...register("tag")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Skickar..." : "Skicka meddelande"}
          </Button>
        </form>
      </div>
    </section>
  )
}

