// components/AdminLayout.tsx
import Head from "next/head";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const dashboard = document.getElementById(
      "dashboard",
    ) as unknown as CSElement["cs-dashboard"];

    dashboard.logo = "https://placehold.co/64x64/EEE/31343C?text=CS";
    dashboard.title = "CS Dashboard";
    dashboard.subtitle = "Admin Panel";
    dashboard.breadcrumb = ["Dashboard", "Overview"];

    dashboard.sidebar = {
      Platform: [
        {
          title: "Playground",
          icon: "https://placehold.co/36x36/EEE/31343C?text=P",
          link: "#",
          childs: [
            { title: "Sub Menu 1", link: "/somepage" },
            { title: "Sub Menu 2", link: "/anotherpage" },
          ],
        },
        {
          title: "Projects",
          link: "/someotherpage/",
          icon: "https://placehold.co/36x36/EEE/31343C?text=PR",
        },
        {
          title: "Analytics",
          link: "/analytics",
          icon: "https://placehold.co/36x36/EEE/31343C?text=A",
        },
      ],
      Settings: [
        {
          title: "Profile",
          link: "/profile",
          icon: "https://placehold.co/36x36/EEE/31343C?text=U",
        },
        {
          title: "Preferences",
          link: "/preferences",
          icon: "https://placehold.co/36x36/EEE/31343C?text=S",
        },
      ],
    };

    // Set active menu item (triggers smooth icon color animation)
    dashboard.activePath = "/analytics";
  }, []);
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://pages-github.b-cdn.net/webcomponents/modules/cs-input.js"
        />
        <script src="https://pages-github.b-cdn.net/webcomponents/modules/cs-dashboard.js"></script>
      </Head>
      <div className="text-dark">
        <cs-dashboard id="dashboard">
          <div className="content">{children}</div>
        </cs-dashboard>
      </div>
    </>
  );
}
