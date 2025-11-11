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
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: 'Invalid input' })
  }

  // Check honeypot
  if (parsed.data.tag) {
    return res.status(400).json({ ok: false, error: 'Invalid request' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Ervector <info@ervector.se>',
      to: 'info@ervector.se',
      subject: `Kontakt: ${parsed.data.name}`,
      text: `${parsed.data.message}\n\n---\n${parsed.data.name}\n${parsed.data.email}${parsed.data.phone ? `\n${parsed.data.phone}` : ''}${parsed.data.company ? `\n${parsed.data.company}` : ''}`,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
}

