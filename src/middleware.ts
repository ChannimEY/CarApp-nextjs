// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const botUserAgents = [
  /facebookexternalhit/i,
  /Twitterbot/i,
  /Slackbot-LinkExpanding/i,
  /Discordbot/i,
  /WhatsApp/i,
  /TelegramBot/i,
  /LinkedInBot/i,
]

export default function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''

  const isBot = botUserAgents.some((botRegex) => botRegex.test(userAgent))

  if (isBot && req.nextUrl.pathname.startsWith('/product')) {
    const response = NextResponse.next()
    response.headers.set('x-middleware-cache', 'no-cache')
    console.log("🤖 Bot detected — forcing dynamic SSR for", req.url)
    return response
  }

  return NextResponse.next()
}

// config matcher
export const config = {
  matcher: ['/product/:path*', '/dashboard/:path*'],
}
