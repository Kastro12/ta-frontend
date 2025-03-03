// import { NextResponse } from 'next/server';

// export function middleware() {
//   return NextResponse.next();
// }

// // Define which paths to apply the middleware to
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(sr|en)/:path*'],
  matcher: ['/((?!_next|api|static|.*\\..*).*)'], 

};
