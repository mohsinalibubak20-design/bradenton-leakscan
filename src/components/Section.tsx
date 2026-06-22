import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
          {eyebrow}
        </span>
      )}
      <Tag className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>
      )}
    </div>
  );
}
