"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  fullName: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  businessType: string;
  preferredPlan: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  phoneNumber: "",
  businessType: "",
  preferredPlan: "",
  message: "",
};

const businessTypes = [
  "Nail salon",
  "Nail tech",
  "Lash artist",
  "Hair salon",
  "Spa",
  "Other beauty business",
];

const plans = ["Plan A", "Plan B", "Plan C"];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [, setSubmittedEntries] = useState<FormData[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(data: FormData): FormErrors {
    const nextErrors: FormErrors = {};

    if (!data.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!data.businessName.trim()) nextErrors.businessName = "Business name is required.";
    if (!data.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.phoneNumber.trim()) nextErrors.phoneNumber = "Phone number is required.";
    if (!data.businessType.trim()) nextErrors.businessType = "Type of business is required.";
    if (!data.preferredPlan.trim()) nextErrors.preferredPlan = "Preferred plan is required.";
    if (!data.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage("");
      setErrorMessage("");
      return;
    }

    try {
      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          business: formData.businessName,
          email: formData.email,
          phone: formData.phoneNumber,
          typeOfBusiness: formData.businessType,
          preferredPlan: formData.preferredPlan,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      const result = (await response.json()) as { success?: boolean };

      if (!result.success) {
        throw new Error("Email could not be sent.");
      }

      setSubmittedEntries((current) => [...current, formData]);
      setFormData(initialFormData);
      setErrors({});
      setSuccessMessage("Thanks! I'll reach out within one business day.");
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
              Book a demo
            </p>
            <h2 className="mt-4 font-display text-5xl text-white">
              Let&apos;s build a website that helps clients trust you faster
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Tell us about your business, services, and goals, and we&apos;ll map
              out the best package for a premium website that feels polished and
              ready to convert.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Mobile-first design for beauty clients",
                "Service, pricing, and inquiry sections",
                "Lead-ready forms built into the site",
                "Support after launch so you are not left guessing",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.75rem] border border-gold/20 bg-gold/10 p-5">
              <p className="text-sm font-semibold text-gold">What happens next</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                After you submit, you&apos;ll hear back within one business day to
                talk through your package, timeline, and next steps.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <FormField
                label="Full name"
                name="fullName"
                value={formData.fullName}
                error={errors.fullName}
                onChange={handleChange}
              />
              <FormField
                label="Business name"
                name="businessName"
                value={formData.businessName}
                error={errors.businessName}
                onChange={handleChange}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                />
                <FormField
                  label="Phone number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  error={errors.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Type of business"
                  name="businessType"
                  value={formData.businessType}
                  error={errors.businessType}
                  onChange={handleChange}
                  options={businessTypes}
                />
                <SelectField
                  label="Preferred plan"
                  name="preferredPlan"
                  value={formData.preferredPlan}
                  error={errors.preferredPlan}
                  onChange={handleChange}
                  options={plans}
                />
              </div>
              <FormField
                label="Message"
                name="message"
                value={formData.message}
                error={errors.message}
                onChange={handleChange}
                multiline
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-blush px-6 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
              {successMessage ? (
                <p className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                  {successMessage}
                </p>
              ) : null}
              {errorMessage ? (
                <p className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
                  {errorMessage}
                </p>
              ) : null}
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                You&apos;ll get a reply within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type BaseFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  error?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
};

function FormField({
  label,
  name,
  value,
  error,
  onChange,
  multiline = false,
  type = "text",
}: BaseFieldProps & { multiline?: boolean; type?: string }) {
  const sharedClasses =
    "w-full rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-blush/60 focus:bg-white/10";

  return (
    <label className="grid gap-2 text-sm text-muted">
      <span>{label}</span>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className={sharedClasses}
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={sharedClasses}
          placeholder={label}
        />
      )}
      {error ? <span className="text-xs text-rose-200">{error}</span> : null}
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  error,
  onChange,
  options,
}: BaseFieldProps & { options: string[] }) {
  return (
    <label className="grid gap-2 text-sm text-muted">
      <span>{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blush/60 focus:bg-white/10"
      >
        <option value="" className="bg-panel text-muted">
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-panel text-white">
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="text-xs text-rose-200">{error}</span> : null}
    </label>
  );
}
