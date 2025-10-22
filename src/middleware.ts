import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const serbianSpeakingCountries = ['RS', 'ME', 'BA', 'XK'];

export default function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  if (!cookieLocale) {
    const country = request.headers.get('x-vercel-ip-country') || '';

    let defaultLocale = 'sr';
    if (country && !serbianSpeakingCountries.includes(country)) {
      defaultLocale = 'en';
    }
    const response = NextResponse.redirect(
      new URL(`/${defaultLocale}${request.nextUrl.pathname}`, request.url),
    );
    response.cookies.set('NEXT_LOCALE', defaultLocale, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
    });
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(sr|en)/:path*'],
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
