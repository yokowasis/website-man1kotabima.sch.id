/**
 * Build-time API helper for getStaticPaths (static pages).
 * Reads slugs from local _pages directory (still available at build time).
 * Content is fetched client-side from Pocketbase at runtime.
 */
import fs from "fs";
import { join } from "path";

const pagesDirectory = join(process.cwd(), "_pages");

export function getPostSlugs() {
  const slugs: string[] = [];

  function readDirRecursive(dir: string, baseDir: string = "") {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        readDirRecursive(fullPath, baseDir ? join(baseDir, file) : file);
      } else if (file.endsWith(".md") && file !== "SCHEMA.md") {
        slugs.push(baseDir ? join(baseDir, file) : file);
      }
    });
  }

  readDirRecursive(pagesDirectory);
  return slugs;
}

export function getPostBySlug(slug: string, _fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = realSlug.endsWith(".md")
    ? join(pagesDirectory, realSlug)
    : join(pagesDirectory, `${realSlug}.md`);

  type Items = { [key: string]: string };
  const items: Items = {};

  _fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    } else {
      items[field] = ""; // content loaded client-side
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields));
}
