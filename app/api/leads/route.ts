import { pool } from "@/lib/db";
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
