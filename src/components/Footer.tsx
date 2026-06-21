import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint mb-2">
              get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl sm:text-2xl font-mono text-ink hover:text-signal transition-colors focus-ring"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FooterLink href={profile.github} icon={<Github size={16} />} label="GitHub" />
            <FooterLink href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
            <FooterLink href={profile.devto} icon={<FileText size={16} />} label="dev.to" />
            <FooterLink href={`mailto:${profile.email}`} icon={<Mail size={16} />} label="Email" />
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {profile.name}. Built from scratch with Next.js.
          </p>
          <p className="font-mono text-[11px] text-faint">
            <span className="text-signal">●</span> {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:border-signal hover:text-signal focus-ring"
    >
      {icon}
    </a>
  );
}
