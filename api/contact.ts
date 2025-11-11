import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  tag: z.string().optional(), // honeypot
})

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log('Contact API called:', req.method, req.body)

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    console.error('Validation error:', parsed.error)
    return res.status(400).json({ ok: false, error: 'Invalid input', details: parsed.error.errors })
  }

  // Check honeypot
  if (parsed.data.tag) {
    console.log('Honeypot triggered')
    return res.status(400).json({ ok: false, error: 'Invalid request' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ ok: false, error: 'Server configuration error' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const result = await resend.emails.send({
      from: 'Ervector Hemsida <noreply@svejo.se>',
      to: 'johan.svensson@svejo.se',
      replyTo: parsed.data.email,
      subject: `Kontakt från hemsida: ${parsed.data.name}`,
      text: `Ny kontaktförfrågan från ervector.se\n\nMeddelande:\n${parsed.data.message}\n\n---\nKontaktinformation:\nNamn: ${parsed.data.name}\nE-post: ${parsed.data.email}${parsed.data.phone ? `\nTelefon: ${parsed.data.phone}` : ''}${parsed.data.company ? `\nFöretag: ${parsed.data.company}` : ''}`,
    })

    console.log('Email sent successfully:', result)
    return res.status(200).json({ ok: true })
  } catch (error: any) {
    console.error('Resend error:', error)
    return res.status(500).json({
      ok: false,
      error: 'Failed to send email',
      details: error?.message || 'Unknown error'
    })
  }
}

