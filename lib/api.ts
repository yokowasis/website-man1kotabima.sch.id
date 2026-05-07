/**
 * Build-time API helper for getStaticPaths.
 * Reads slugs from local _posts directory (still available at build time).
 * Content is fetched client-side from Pocketbase at runtime.
 */
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  type Items = { [key: string]: string };
  const items: Items = {};

  // Return only the slug for client-side fetching
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = ""; // content loaded client-side
    }
    // For other fields, return empty - data is fetched client-side
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields));
}
