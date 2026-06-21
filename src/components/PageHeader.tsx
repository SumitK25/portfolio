export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl font-mono font-bold text-ink mb-3">{title}</h1>
        {description && (
          <p className="text-muted max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
