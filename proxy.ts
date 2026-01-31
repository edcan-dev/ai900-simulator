import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

  const accessToken = request.cookies.get('access_token')?.value;
  if(!accessToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!auth|_next/static|_next/image|favicon.ico).*)',
  ],
}