import { PlateTag } from "@/components/ui/PlateTag";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      {eyebrow && <PlateTag>{eyebrow}</PlateTag>}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-paper-dim text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
