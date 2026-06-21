import { statusServices, profile } from "@/data/site";

export default function StatusPanel() {
  return (
    <div className="rounded-md border border-border bg-surface/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-border-bright">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
            system status
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
          all systems nominal
        </span>
      </div>

      <div className="divide-y divide-border">
        {statusServices.map((svc) => (
          <div
            key={svc.name}
            className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-elevated/60 transition-colors"
          >
            <div className="min-w-0">
              <p className="truncate font-mono text-xs text-ink">{svc.name}</p>
              <p className="truncate font-mono text-[10px] text-faint">{svc.detail}</p>
            </div>
            <span
              className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                svc.status === "online"
                  ? "border-signal-dim bg-signal-dim text-signal"
                  : "border-amber-dim bg-amber-dim text-amber"
              }`}
            >
              {svc.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
        <Stat label="uptime" value={profile.yearsExperience} sub="years in prod" />
        <Stat label="since" value={profile.experienceSince} sub="career start" />
        <Stat label="base" value="Kolkata" sub="IN · GMT+5:30" />
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="px-4 py-3">
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">{label}</p>
      <p className="font-mono text-base text-ink mt-0.5">{value}</p>
      <p className="font-mono text-[9px] text-faint">{sub}</p>
    </div>
  );
}
