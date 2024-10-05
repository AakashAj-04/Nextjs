import { NextResponse, type NextRequest } from "next/server";

// Custom Matcher config
/*

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/profile",
};

 */

// Conditional Statements

/*
export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === '/profile')
  return NextResponse.redirect(new URL("/hello", request.url));
}
*/

// Headers and Cookies in Middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "header");
  return response;
}
