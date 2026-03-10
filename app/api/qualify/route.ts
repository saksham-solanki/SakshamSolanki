import { NextResponse } from 'next/server'

// TODO Phase 4: Send to HubSpot CRM (SALES-07)

interface QualifyRequest {
  name: string
  email: string
  company: string
  role: string
  challenge: string
  timeline: string
  context?: string
}

const REQUIRED_FIELDS: (keyof QualifyRequest)[] = [
  'name',
  'email',
  'company',
  'role',
  'challenge',
  'timeline',
]

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body: QualifyRequest = await request.json()

    // Validate required fields
    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
        return NextResponse.json(
          { success: false, error: `${field} is required.` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Validate context length
    if (body.context && body.context.length > 500) {
      return NextResponse.json(
        { success: false, error: 'Context must be 500 characters or fewer.' },
        { status: 400 }
      )
    }

    // Log submission (CRM integration in Phase 4)
    console.log('[Pre-Qualification Submission]', {
      name: body.name,
      email: body.email,
      company: body.company,
      role: body.role,
      challenge: body.challenge,
      timeline: body.timeline,
      context: body.context || '',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest. Redirecting you to book a strategy call.',
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request. Please try again.' },
      { status: 400 }
    )
  }
}
