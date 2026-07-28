type PlateTagProps = {
  children: React.ReactNode;
  tone?: "yellow" | "white";
  className?: string;
};

/**
 * Signature element: a small UK-registration-plate-style tag.
 * Grounded in the subject itself — every supplied photo shows a real
 * plate (several custom-printed "CHUBZ.MOTORS" plates). Used sparingly,
 * only for eyebrows / category labels, never for primary UI chrome.
 */
export function PlateTag({ children, tone = "yellow", className = "" }: PlateTagProps) {
  const toneClasses =
    tone === "yellow"
      ? "bg-plate-yellow text-plate-ink"
      : "bg-plate-white text-plate-ink";

  return (
    <span
      className={`plate-tag inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 text-[11px] leading-none ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
