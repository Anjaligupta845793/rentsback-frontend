import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  const protectedRoutes = ["/dashboard", "/adminpanel"];
  console.log("Token:", token);
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/adminpanel/:path*"],
};
