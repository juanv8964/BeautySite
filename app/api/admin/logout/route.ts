import { ADMIN_SESSION_COOKIE, getAdminSessionCookieOptions } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const redirectUrl = new URL("/admin/login", request.url);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    ...getAdminSessionCookieOptions(),
    maxAge: 0,
  });

  return response;
}
