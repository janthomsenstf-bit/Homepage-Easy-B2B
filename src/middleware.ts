import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const pfad = request.nextUrl.pathname;

  // ── Operator-Bereich ──
  if (pfad.startsWith("/dashboard")) {
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("weiter", pfad);
      return NextResponse.redirect(url);
    }
    if (token.rolle !== "operator") {
      // Unternehmen landen in ihrem eigenen Bereich, nicht im Operator-Dashboard.
      return NextResponse.redirect(new URL("/mein-bereich", request.url));
    }
  }

  // ── Unternehmensbereich ──
  if (pfad.startsWith("/mein-bereich")) {
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("weiter", pfad);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/mein-bereich/:path*"],
};
