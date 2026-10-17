/** Soft cobalt rule with breathing room on both sides, used between page sections. */
export function SectionDivider() {
  return (
    <div aria-hidden="true" className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="shell">
        <div className="relative h-0.5 w-full rounded-full bg-linear-to-r from-cobalt/0 via-cobalt to-cobalt/0 shadow-[0_0_16px_rgb(0_71_171/0.35)]">
          <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt ring-4 ring-white" />
        </div>
      </div>
    </div>
  );
}
