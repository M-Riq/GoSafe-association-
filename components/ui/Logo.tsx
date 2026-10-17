// TODO(brand): replace this provisional wordmark with the official GOSAFE logo files when available.
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const text = tone === "light" ? "text-white" : "text-navy-900";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="7" className="fill-brand-600" />
        <path d="M11 26 14.5 6M21 26 17.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 23v-3M16 15.5v-2.5M16 9V7.5" stroke="#f26b1d" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="text-[1.05rem] font-semibold tracking-[0.14em]">GOSAFE</span>
        <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.28em] opacity-70">
          Association
        </span>
      </span>
    </span>
  );
}
