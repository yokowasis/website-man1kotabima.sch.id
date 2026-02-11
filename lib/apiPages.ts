import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_pages");

export function getPostSlugs() {
  const slugs: string[] = [];
  
  function readDirRecursive(dir: string, baseDir: string = "") {
    const files = fs.readdirSync(dir);
    
    files.forEach((file) => {
      const fullPath = join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        readDirRecursive(fullPath, baseDir ? join(baseDir, file) : file);
      } else if (file.endsWith('.md')) {
        slugs.push(baseDir ? join(baseDir, file) : file);
      }
    });
  }
  
  readDirRecursive(postsDirectory);
  return slugs;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  // Handle both flat and nested paths
  const fullPath = realSlug.endsWith('.md') 
    ? join(postsDirectory, realSlug)
    : join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
