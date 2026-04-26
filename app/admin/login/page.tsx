import { AdminLoginForm } from "@/components/admin-login-form";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLoginPage() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;

  if (verifyAdminSessionToken(token)) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-x-hidden px-6 py-16 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <AdminLoginForm />
    </main>
  );
}
