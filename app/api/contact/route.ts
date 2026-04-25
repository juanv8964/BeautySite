import { pool } from "@/lib/db";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  typeOfBusiness?: string;
  preferredPlan?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const {
      name = "",
      business = "",
      email = "",
      phone = "",
      typeOfBusiness = "",
      preferredPlan = "",
      message = "",
    } = (await request.json()) as ContactRequestBody;

    if (
      !name.trim() ||
      !business.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !typeOfBusiness.trim() ||
      !preferredPlan.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Lead from Website",
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Type: ${typeOfBusiness}`,
        `Plan: ${preferredPlan}`,
        `Message: ${message}`,
      ].join("\n"),
    });

    try {
      await pool.query(
        `
          INSERT INTO leads (
            name,
            business,
            email,
            phone,
            type,
            plan,
            message
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
        [name, business, email, phone, typeOfBusiness, preferredPlan, message],
      );
    } catch (dbError) {
      console.error("Lead insert error:", dbError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
