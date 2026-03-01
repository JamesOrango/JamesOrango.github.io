import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostCategory } from "./post-types";
import { CATEGORY_LABELS } from "./post-types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const VALID_CATEGORIES: PostCategory[] = ["finance", "philosophy", "faith", "quantizated"];

export type { Post, PostCategory };
export { CATEGORY_LABELS };

function normalizeCategory(category: unknown): PostCategory {
  const c = String(category ?? "").toLowerCase();
  return VALID_CATEGORIES.includes(c as PostCategory) ? (c as PostCategory) : "finance";
}

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR);
  const posts: Post[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    posts.push({
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? file.replace(/\.md$/, ""),
      date: data.date ?? "",
      category: normalizeCategory(data.category),
    });
  }

  return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { content: string; data: Post } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdown } = matter(content);

  return {
    content: markdown,
    data: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      category: normalizeCategory(data.category),
    },
  };
}

export function getPostsByCategory(): Record<PostCategory, Post[]> {
  const posts = getPosts();
  const grouped: Record<PostCategory, Post[]> = {
    finance: [],
    philosophy: [],
    faith: [],
    quantizated: [],
  };

  for (const post of posts) {
    grouped[post.category].push(post);
  }

  return grouped;
}
