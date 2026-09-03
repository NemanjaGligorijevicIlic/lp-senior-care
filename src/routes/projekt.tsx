import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import p1 from "@/assets/projekt-1.jpg";
import p2 from "@/assets/projekt-2.jpg";
import p3 from "@/assets/projekt-3.jpg";
import p4 from "@/assets/projekt-4.jpg";
import p5 from "@/assets/projekt-5.jpg";
import beforeGarden from "@/assets/before-garden.jpg";
import afterGarden from "@/assets/after-garden.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeWindows from "@/assets/before-windows.jpg";
import afterWindows from "@/assets/after-windows.jpg";

export const Route = createFileRoute("/projekt")({
  head: () => ({
    meta: [
      { title: "Projekt — Före & Efter | Limhamns Hemhjälp AB" },
      {
        name: "description",
        content: "Se före- och efterbilder från projekt utförda av Limhamns Hemhjälp AB.",
      },
      { property: "og:title", content: "Projekt — Före & Efter | Limhamns Hemhjälp" },
      {
        property: "og:description",
        content: "Riktiga bilder från häckklippning, ogräsrensning, altantvätt och trädgårdsfix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projekt" }],
  }),
  component: ProjectsPage,
});

type Project =
  | { kind: "pair"; before: string; after: string; title: string; desc: string }
  | { kind: "single"; image: string; title: string; desc: string };

const projects: Project[] = [
  {
    kind: "pair",
    before: beforeGarden,
    after: afterGarden,
    title: "Trädgårdsuppfräschning",
    desc: "Före: igenvuxen och överväxt. Efter: rensat, klippt och redo att njutas i.",
  },
  {
    kind: "pair",
    before: beforeKitchen,
    after: afterKitchen,
    title: "Köksstädning",
    desc: "Före: dagligt slitage. Efter: skinande ytor och ett kök som känns nytt.",
  },
  {
    kind: "pair",
    before: beforeWindows,
    after: afterWindows,
    title: "Fönsterputs",
    desc: "Före: smuts och strimmor. Efter: kristallklara fönster som släpper in ljuset.",
  },
  {
    kind: "single",
    image: p1,
    title: "Häckklippning i Limhamn",
    desc: "Nedklippning av kraftigt växande murgröna och häck runt fasaden — allt trädgårdsavfall bortforslat efteråt.",
  },
  {
    kind: "single",
    image: p2,
    title: "Ogräsrensning av rabatt & gång",
    desc: "Rensning av rabatt, kantsten och plattgång. Ytan blev ren, öppen och lätt att sköta.",
  },
  {
    kind: "single",
    image: p3,
    title: "Högtryckstvätt av altan",
    desc: "Trädäck rengjort med högtryckstvätt — träet fick tillbaka sin naturliga färg.",
  },
  {
    kind: "single",
    image: p4,
    title: "Altangång — tvätt & upprensning",
    desc: "Smal altangång rengjord från alger och smuts, med rensade kanter mot gräsmattan.",
  },
  {
    kind: "single",
    image: p5,
    title: "Uteplats & häck i ordning",
    desc: "Häcken formklippt och uteplatsen uppstädad — redo för fika i solen.",
  },
];

function ProjectsPage() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="px-4 lg:px-8 pt-4">
        <div className="mx-auto max-w-7xl bg-surface ring-1 ring-border rounded-[28px] lg:rounded-[40px] px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
            {t("projects.eyebrow")}
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-balance max-w-3xl">
            {t("projects.title")}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 space-y-20">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
            }`}
          >
            {p.kind === "pair" ? (
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: p.before, label: t("projects.before") },
                  { src: p.after, label: t("projects.after") },
                ].map((img) => (
                  <div key={img.label} className="relative overflow-hidden rounded-3xl ring-1 ring-border shadow-card bg-surface">
                    <img
                      src={img.src}
                      alt={`${p.title} — ${img.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 text-xs font-bold uppercase tracking-wider text-foreground">
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-card bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
                Projekt {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl mb-4">{p.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
