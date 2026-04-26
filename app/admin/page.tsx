import { AdminDashboard } from "@/components/admin-dashboard";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminPage() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;

  if (!verifyAdminSessionToken(token)) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
