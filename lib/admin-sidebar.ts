import type { AdminNavItem } from "../components/adminlayout";

const iconUrl = (letter: string) =>
  `https://placehold.co/36x36/EEE/31343C?text=${letter}`;

export const adminSidebar: Record<string, AdminNavItem[]> = {
  Main: [
    {
      title: "Dashboard",
      icon: iconUrl("D"),
      link: "/admin/dashboard",
    },
  ],
  Content: [
    {
      title: "Posts",
      icon: iconUrl("P"),
      link: "/admin/posts",
    },
    {
      title: "Pages",
      icon: iconUrl("A"),
      link: "/admin/pages",
    },
  ],
  Management: [
    {
      title: "Settings",
      icon: iconUrl("S"),
      link: "/admin/settings",
    },
    {
      title: "Media",
      icon: iconUrl("M"),
      link: "/admin/media",
    },
  ],
};

export const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/posts": "Posts",
  "/admin/pages": "Pages",
  "/admin/settings": "Settings",
  "/admin/media": "Media",
};
