"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Post, PostCategory } from "@/lib/post-types";
import { CATEGORY_LABELS } from "@/lib/post-types";

type FilterValue = "all" | PostCategory;

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "finance", label: "Finance" },
  { value: "philosophy", label: "Philosophy" },
  { value: "faith", label: "Faith" },
  { value: "quantizated", label: "Quantizated" },
];

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

interface JournalSectionProps {
  posts: Post[];
}

export function JournalSection({ posts }: JournalSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredPosts = useMemo(() => {
    if (activeFilter === "all") return posts;
    return posts.filter((post) => post.category === activeFilter);
  }, [posts, activeFilter]);

  const hasAnyPosts = posts.length > 0;

  if (!hasAnyPosts) {
    return (
      <section className="mb-28">
        <h2
          className="mb-3 text-2xl font-medium tracking-tight text-stone-200"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Journal
        </h2>
        <p className="mb-10 text-stone-500" style={{ fontFamily: "var(--font-body)" }}>
          Writings on Finance, Philosophy, and Faith.
        </p>
        <p className="text-stone-500" style={{ fontFamily: "var(--font-body)" }}>
          No posts yet. Add .md files to{" "}
          <code className="rounded bg-stone-800/60 px-1.5 py-0.5 text-sm text-stone-400">
            content/posts
          </code>{" "}
          with a{" "}
          <code className="rounded bg-stone-800/60 px-1.5 py-0.5 text-sm text-stone-400">
            category
          </code>{" "}
          (finance, philosophy, faith, or quantizated).
        </p>
      </section>
    );
  }

  return (
    <section className="mb-28">
      <h2
        className="mb-3 text-2xl font-medium tracking-tight text-stone-200"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Journal
      </h2>
      <p className="mb-8 text-stone-500" style={{ fontFamily: "var(--font-body)" }}>
        Writings on Finance, Philosophy, and Faith.
      </p>

      <div className="mb-10 flex flex-wrap gap-2">
        {FILTER_OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors
              ${activeFilter === value
                ? "border-stone-600 bg-stone-800/60 text-stone-200"
                : "border-stone-700/60 bg-transparent text-stone-500 hover:border-stone-600 hover:text-stone-400"
              }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {label}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-stone-500" style={{ fontFamily: "var(--font-body)" }}>
          No entries found in this category yet.
        </p>
      ) : (
        <ul className="space-y-5">
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span
                  className="font-medium text-stone-200 transition-colors group-hover:text-stone-50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.title}
                </span>
                <span className="flex items-center gap-2 text-sm text-stone-500 sm:shrink-0">
                  <span
                    className="rounded border border-stone-700/60 bg-stone-900/40 px-3 py-0.5 text-xs text-stone-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {CATEGORY_LABELS[post.category]}
                  </span>
                  <time dateTime={post.date}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {formatDate(post.date)}
                  </time>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
