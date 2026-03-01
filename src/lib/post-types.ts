/**
 * Shared types and constants for posts.
 * Safe to import in client components (no Node.js APIs).
 */

export type PostCategory = "finance" | "philosophy" | "faith" | "quantizated";

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
}

export const CATEGORY_LABELS: Record<PostCategory, string> = {
  finance: "Finance",
  philosophy: "Philosophy",
  faith: "Faith",
  quantizated: "Quantizated",
};
