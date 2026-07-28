"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitEnquiry } from "@/lib/actions";
import { ENQUIRY_FIELDS, ENQUIRY_LABELS } from "@/lib/data/enquiryFields";
import type { EnquiryFormState, EnquiryType } from "@/lib/types";

const initialState: EnquiryFormState = { status: "idle" };

const fieldBase =
  "w-full rounded-sm border border-ink-line-strong bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper-faint focus:border-red focus:outline-none";

export function EnquiryForm({
  enquiryType,
  defaultVehicle,
  compact = false,
}: {
  enquiryType: EnquiryType;
  defaultVehicle?: string;
  compact?: boolean;
}) {
  const action = submitEnquiry.bind(null, enquiryType);
  const [state, formAction, pending] = useActionState(action, initialState);
  const fields = ENQUIRY_FIELDS[enquiryType];

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-sm border border-ink-line-strong bg-ink-raised p-8">
        <CheckCircle2 className="text-red" size={28} />
        <p className="text-paper" aria-live="polite">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {!compact && (
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {ENQUIRY_LABELS[enquiryType]}
        </h3>
      )}

      {state.status === "error" && (
        <div
          className="flex items-center gap-2 rounded-sm border border-red-deep bg-red-deep/20 px-4 py-3 text-sm text-paper"
          aria-live="polite"
        >
          <AlertCircle size={16} className="shrink-0 text-red-bright" />
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const error = state.fieldErrors?.[field.name];
          const spanClass = field.half ? "" : "sm:col-span-2";
          const defaultValue =
            field.name === "vehicleOfInterest" ? defaultVehicle : undefined;

          return (
            <div key={field.name} className={`flex flex-col gap-1.5 ${spanClass}`}>
              <label htmlFor={field.name} className="text-xs font-medium text-paper-dim">
                {field.label}
                {field.required && <span className="text-red"> *</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={4}
                  placeholder={field.placeholder}
                  defaultValue={defaultValue}
                  className={fieldBase}
                />
              ) : field.type === "select" ? (
                <select id={field.name} name={field.name} defaultValue="" className={fieldBase}>
                  <option value="" disabled>
                    Select…
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  defaultValue={defaultValue}
                  className={fieldBase}
                />
              )}

              {error && <span className="text-xs text-red-bright">{error}</span>}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-sm bg-red px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-red-bright disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-xs text-paper-faint">
        Fields marked * are required. We&apos;ll only use these details to
        respond to your enquiry.
      </p>
    </form>
  );
}
