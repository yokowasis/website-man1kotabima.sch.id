// components/AdminLayout.tsx
import Head from "next/head";
import { useEffect, useRef } from "react";

export interface AdminNavItem {
  title: string;
  link?: string;
  icon?: string;
  childs?: Array<{ title: string; link: string }>;
}

export interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  breadcrumb?: string[];
  sidebar?: Record<string, AdminNavItem[]>;
  activePath?: string;
  logo?: string;
}

export default function AdminLayout({
  children,
  title = "CS Dashboard",
  subtitle = "Admin Panel",
  breadcrumb = ["Dashboard", "Overview"],
  sidebar = {},
  activePath = "/admin/dashboard",
  logo = "https://placehold.co/64x64/EEE/31343C?text=CS",
}: AdminLayoutProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const setupDashboard = () => {
      const dashboard = document.getElementById(
        "dashboard",
      ) as unknown as CSElement["cs-dashboard"];

      if (!dashboard) {
        setTimeout(setupDashboard, 100);
        return;
      }

      dashboard.logo = logo;
      dashboard.title = title;
      dashboard.subtitle = subtitle;
      dashboard.breadcrumb = breadcrumb;
      dashboard.sidebar = sidebar as any;
      dashboard.activePath = activePath;
    };

    // Wait for custom elements to be defined
    if (customElements.get("cs-dashboard")) {
      setupDashboard();
    } else {
      customElements.whenDefined("cs-dashboard").then(setupDashboard);
    }
  }, [title, subtitle, breadcrumb, sidebar, activePath, logo]);

  return (
    <>
      <Head>
        {/* cs-input.js is the main module that imports all submodules (data-table, rtf, modal, select, upload, toast, etc.) */}
        <script
          type="module"
          src="https://pages-github.b-cdn.net/webcomponents/modules/cs-input.js"
        />
        <script src="https://pages-github.b-cdn.net/webcomponents/modules/cs-dashboard.js"></script>
      </Head>
      <style>{`
        .admin-content {
          padding: 1rem 0;
        }
        .admin-content h1 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .admin-content h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          margin-top: 1.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .stat-card {
          background: hsl(var(--card, 0 0% 100%));
          border: 1px solid hsl(var(--border, 240 5.9% 90%));
          border-radius: var(--radius, 0.5rem);
          padding: 1.25rem;
        }
        .stat-card .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: hsl(var(--foreground, 240 10% 3.9%));
        }
        .stat-card .stat-label {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground, 240 3.8% 46.1%));
          margin-top: 0.25rem;
        }
        .settings-section {
          margin-bottom: 2rem;
        }
        .settings-section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid hsl(var(--border, 240 5.9% 90%));
        }
      `}</style>
      <div className="text-dark">
        <cs-dashboard id="dashboard">
          <div className="content admin-content">{children}</div>
        </cs-dashboard>
      </div>
    </>
  );
}
