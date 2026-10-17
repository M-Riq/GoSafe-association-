import type { Dictionary } from "@/content";
import { valueIcons } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/lib/motion";

export function Values({ t }: { t: Dictionary["mission"] }) {
  return (
    <div id="valeurs" className="mt-20 lg:mt-28">
      <h3 data-reveal className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.valuesTitle}
      </h3>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {t.values.map((value, i) => (
          <li key={value.title} data-reveal style={delay(i * 90)} className="flex">
            <div className="group flex w-full flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]">
              <div className="flex items-center justify-between">
                <Icon
                  name={valueIcons[i]}
                  className="size-6 text-brand-300 transition-colors duration-300 group-hover:text-accent-500"
                />
                <span className="font-mono text-xs text-brand-300/70">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h4 className="mt-8 text-lg font-semibold tracking-tight">{value.title}</h4>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-brand-100/75">{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
