import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next();
}

// Define which paths to apply the middleware to
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
