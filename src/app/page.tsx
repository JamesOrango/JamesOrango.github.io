import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { JournalSection } from "./components/JournalSection";

const QUANTIZATED_INSTAGRAM = "https://instagram.com/quantizated";

export default function Home() {
  const posts = getPosts();

  const projects = [
    {
      title: "Itaú Quant AI 2025 Challenge",
      description:
        "Finished in the Top 25 out of 1000 participants in Itaú's quantitative AI competition.",
      timeline: "2025",
      highlight: "Top 25 / 1000",
    },
    {
      title: "ICEX/UFMG Chess Team Captain",
      description:
        "Leading the chess team at UFMG's Institute of Exact Sciences.",
      timeline: "2025 – Present",
      highlight: "Leadership",
    },
    {
      title: "Quantitative Finance Laboratory (UFMG)",
      description:
        "Collaborative initiative with Prof. Arbex and Electrical Engineering student Gabriel Vaz. Co-founded the quantitative finance laboratory at UFMG.",
      timeline: "2026 – Present",
      highlight: "Co-founder",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-stone-200">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-10">
        <header className="mb-28">
          <h1
            className="text-4xl font-medium tracking-tight text-stone-50 sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            James Orango
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-400" style={{ fontFamily: "var(--font-body)" }}>
            Exploring the intersection of Quantitative Finance, Philosophy, and Theology.
          </p>

          <a
            href={QUANTIZATED_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded border border-stone-700/60 bg-stone-900/30 px-4 py-3 text-stone-300 transition-colors hover:border-stone-600 hover:bg-stone-800/40 hover:text-stone-100"
          >
            <svg className="h-5 w-5 shrink-0 text-stone-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="text-left" style={{ fontFamily: "var(--font-body)" }}>
              <span className="font-medium">Quantizated</span>
              <span className="mx-2 text-stone-500">·</span>
              <span className="text-sm text-stone-400">
                My repository of daily visual insights on Instagram
              </span>
            </div>
            <span className="ml-1 text-stone-500" aria-hidden>→</span>
          </a>
        </header>

        <JournalSection posts={posts} />

        <section>
          <h2
            className="mb-10 text-2xl font-medium tracking-tight text-stone-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Projects
          </h2>
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.title} className="border-t border-stone-800/70 pt-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3
                        className="font-medium text-stone-100"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-medium text-stone-500 sm:shrink-0 sm:text-right"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.timeline}
                      </span>
                    </div>
                    <p
                      className="mt-2 leading-relaxed text-stone-400"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {project.description}
                    </p>
                    <span
                      className="mt-3 inline-block w-fit rounded-sm border border-stone-700/60 bg-stone-900/40 px-2.5 py-0.5 text-xs font-medium text-stone-500"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {project.highlight}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-36 border-t border-stone-800/70 pt-12">
          <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} James Orango
          </p>
        </footer>
      </main>
    </div>
  );
}
