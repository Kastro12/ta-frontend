// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  // Redirect to /login if not logged in and trying to access any page other than /login
  if (!isLoggedIn && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed if logged in or accessing /login
  return NextResponse.next();
}

// Define which paths to apply the middleware to
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
