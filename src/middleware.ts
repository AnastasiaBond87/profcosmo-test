import { NextResponse, type NextRequest } from 'next/server';
import { Cookies, PRIVATE_PATHS, NO_AUTH_PATHS } from './shared/constants';

export const middleware = ({ cookies, nextUrl, url }: NextRequest) => {
  const role = cookies.get(Cookies.ROLE);
  const path = nextUrl.pathname;

  if (!role && PRIVATE_PATHS.includes(path)) {
    return NextResponse.redirect(new URL('/login', url));
  }

  if (role && NO_AUTH_PATHS.includes(path)) {
    return NextResponse.redirect(new URL('/', url));
  }

  return NextResponse.next();
};
