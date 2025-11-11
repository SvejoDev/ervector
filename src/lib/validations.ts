import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  company: z.string().optional(),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().optional(),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
  tag: z.string().optional(), // honeypot field
})

export type ContactFormData = z.infer<typeof contactFormSchema>

