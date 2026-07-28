import { Container } from "@/components/ui/Container";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-ink-line pb-14 pt-36 md:pb-20 md:pt-44">
      <Container>
        <Reveal>
          {eyebrow && <PlateTag>{eyebrow}</PlateTag>}
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-paper-dim md:text-lg">{description}</p>
          )}
        </Reveal>
      </Container>
    </div>
  );
}
