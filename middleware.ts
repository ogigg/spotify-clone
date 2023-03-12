import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/'
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: 'super-hard-secret' });
  const { pathname } = req.nextUrl;

  if (token || pathname.includes('/api/auth')) {
    return NextResponse.next();
  }
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('http://localhost:3000/login');
  }
}
