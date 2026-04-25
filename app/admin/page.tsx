"use client";

import { useEffect, useState } from "react";

type Lead = {
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

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadLeads() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch("/api/leads");

        if (!response.ok) {
          throw new Error("Failed to load leads.");
        }

        const data = (await response.json()) as { leads?: Lead[] };
        setLeads(data.leads ?? []);
      } catch (error) {
        console.error("Admin leads fetch error:", error);
        setErrorMessage("Unable to load leads right now.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadLeads();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="section-shell">
        <div className="glass-card overflow-hidden p-8 sm:p-10">
          <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
                Admin Dashboard
              </p>
              <h1 className="mt-4 font-display text-5xl text-white sm:text-6xl">
                Contact Form Leads
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Review the newest website inquiries, monitor demand, and follow up
                with leads from your BeautySite Builder contact form.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <DashboardStat label="Total Leads" value={String(leads.length)} />
              <DashboardStat
                label="Latest Status"
                value={isLoading ? "Syncing" : errorMessage ? "Issue" : "Live"}
              />
            </div>
          </div>

          {isLoading ? (
            <StatusCard message="Loading leads..." />
          ) : errorMessage ? (
            <StatusCard message={errorMessage} tone="error" />
          ) : leads.length === 0 ? (
            <StatusCard message="No leads yet" />
          ) : (
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#160b1d]/80">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="border-b border-white/10 bg-white/5">
                    <tr className="text-xs uppercase tracking-[0.2em] text-muted">
                      {[
                        "Name",
                        "Business",
                        "Email",
                        "Phone",
                        "Type",
                        "Plan",
                        "Message",
                        "Date Submitted",
                      ].map((heading) => (
                        <th key={heading} className="px-5 py-4 font-medium">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-white/10 align-top last:border-b-0"
                      >
                        <td className="px-5 py-5 text-sm font-semibold text-white">
                          {lead.name}
                        </td>
                        <td className="px-5 py-5 text-sm text-muted">{lead.business}</td>
                        <td className="px-5 py-5 text-sm">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-blush transition hover:text-white"
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td className="px-5 py-5 text-sm text-muted">{lead.phone}</td>
                        <td className="px-5 py-5 text-sm text-muted">{lead.type}</td>
                        <td className="px-5 py-5 text-sm text-gold">{lead.plan}</td>
                        <td className="max-w-xs px-5 py-5 text-sm leading-6 text-muted">
                          {lead.message}
                        </td>
                        <td className="whitespace-nowrap px-5 py-5 text-sm text-muted">
                          {formatDate(lead.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function DashboardStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl text-white">{value}</p>
    </div>
  );
}

function StatusCard({
  message,
  tone = "default",
}: {
  message: string;
  tone?: "default" | "error";
}) {
  return (
    <div
      className={`rounded-[1.75rem] border px-6 py-10 text-center text-base ${
        tone === "error"
          ? "border-rose-300/20 bg-rose-300/10 text-rose-100"
          : "border-white/10 bg-white/5 text-muted"
      }`}
    >
      {message}
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
