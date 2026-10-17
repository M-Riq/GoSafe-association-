import type { Dictionary } from "@/content";
import { serviceIcons } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";

export function Services({ t }: { t: Dictionary }) {
  const { services } = t;
  return (
    <section id="actions" aria-labelledby="services-title" className="section-y bg-surface">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow={services.eyebrow}
          id="services-title"
          title={<Rich parts={services.title} />}
          intro={services.intro}
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.items.map((service, i) => (
            <li key={service.title} data-reveal style={delay((i % 4) * 90)} className="flex">
              <div className="group relative flex min-h-[17rem] w-full flex-col overflow-hidden rounded-lg border border-line bg-white p-7 transition-[translate,border-color,box-shadow] duration-500 ease-(--ease-premium) hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_48px_-28px_rgb(11_44_99/0.35)]">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 ease-(--ease-premium) group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-md bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={serviceIcons[i]} className="size-6" />
                  </span>
                  <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-auto pt-10 text-lg font-semibold leading-snug tracking-tight text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{service.description}</p>
              </div>
            </li>
          ))}

          <li data-reveal style={delay(270)} className="flex">
            <a
              href="#contact"
              className="group flex w-full flex-col justify-between rounded-lg bg-navy-900 p-7 text-white transition-colors duration-300 hover:bg-brand-700"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">{services.ctaKicker}</span>
              <span className="mt-10 block">
                <span className="block text-lg font-semibold leading-snug">{services.ctaTitle}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-500">
                  {services.ctaLink}
                  <Icon
                    name="arrowUpRight"
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
