import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminCredentials,
  getAdminSessionCookieOptions,
} from "@/lib/admin-auth";
import { NextResponse } from "next/server";

type LoginRequestBody = {
  password?: string;
  username?: string;
};

export async function POST(request: Request) {
  try {
    const { password = "", username = "" } = (await request.json()) as LoginRequestBody;
    const credentials = getAdminCredentials();

    if (username !== credentials.username || password !== credentials.password) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set(
      ADMIN_SESSION_COOKIE,
      createAdminSessionToken(credentials.username),
      getAdminSessionCookieOptions(),
    );

    return response;
  } catch (error) {
    console.error("Admin login route error:", error);
    return NextResponse.json({ error: "Unable to sign in." }, { status: 500 });
  }
}
