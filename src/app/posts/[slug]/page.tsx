import { getPostBySlug, getPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-stone-200">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-10">
        <Link
          href="/"
          className="mb-14 inline-block text-sm text-stone-500 transition-colors hover:text-stone-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          ← Back
        </Link>

        <article>
          <h1
            className="text-3xl font-medium tracking-tight text-stone-50 sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.data.title}
          </h1>
          {post.data.date && (
            <time
              dateTime={post.data.date}
              className="mt-5 block text-stone-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {formatDate(post.data.date)}
            </time>
          )}

          <div
            className="prose prose-invert mt-14 max-w-none
              prose-headings:text-stone-100
              prose-p:text-stone-300 prose-p:leading-[1.8]
              prose-a:text-stone-200 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-stone-50
              prose-code:rounded prose-code:bg-stone-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-stone-300 prose-code:before:content-none prose-code:after:content-none prose-code:font-mono
              prose-pre:bg-stone-900 prose-pre:text-stone-200
              prose-strong:text-stone-200
              prose-li:text-stone-300 prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children, ...props }) => (
                  <h1 {...props} style={{ fontFamily: "var(--font-heading)" }}>{children}</h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 {...props} style={{ fontFamily: "var(--font-heading)" }}>{children}</h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 {...props} style={{ fontFamily: "var(--font-heading)" }}>{children}</h3>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
