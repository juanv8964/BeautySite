import { pool } from "@/lib/db";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type LeadRow = {
  id: number;
  name: string;
  business: string;
  email: string;
  phone: string;
  type: string;
  plan: string;
  message: string;
  created_at: string;
};

export async function GET() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;

  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await pool.query<LeadRow>(
      "SELECT * FROM leads ORDER BY created_at DESC",
    );

    return NextResponse.json({ leads: result.rows });
  } catch (error) {
    console.error("Leads fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads." },
      { status: 500 },
    );
  }
}
