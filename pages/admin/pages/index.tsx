import { useEffect, useState } from "react";
import AdminLayout from "../../../components/adminlayout";
import { adminSidebar } from "../../../lib/admin-sidebar";
import { DataPages } from "../../../lib/tables/pages";

export default function PagesAdminPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await DataPages.read(1, 200);
        setData(result.items || []);
      } catch (err) {
        console.error("Failed to load pages:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const refreshData = async () => {
    const result = await DataPages.read(1, 200);
    setData(result.items || []);
  };

  useEffect(() => {
    if (loading) return;
    const setupTable = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("pages-table") as any;
      if (!table) return;

      table.columns = [
        { key: "id", title: "ID", type: "text", readonly: true, hidden: true },
        { key: "title", title: "Title", type: "text" },
        { key: "slug", title: "Slug", type: "text", placeholder: "page-url-slug" },
        { key: "content", title: "Content", type: "rtf" },
        {
          key: "created",
          title: "Created",
          type: "text",
          readonly: true,
          hideColumn: true,
        },
      ];

      table.data = data;

      table.onAdd = async (payload: any) => {
        try {
          const record = await DataPages.create({
            title: payload.title || "Untitled",
            slug: payload.slug || payload.title?.toLowerCase().replace(/\s+/g, "-") || "untitled",
            content: payload.content || "",
          });
          await refreshData();
          (window as any).toast?.success?.("Page created!");
          return { ...payload, id: record.id, created: record.created };
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to create page");
          return false;
        }
      };

      table.onEdit = async (payload: any, previous: any) => {
        try {
          await DataPages.update(previous.id, {
            title: payload.title,
            slug: payload.slug,
            content: payload.content,
          });
          await refreshData();
          (window as any).toast?.success?.("Page updated!");
          return payload;
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to update page");
          return false;
        }
      };

      table.onDelete = async (row: any) => {
        try {
          await DataPages.delete(row.id);
          await refreshData();
          (window as any).toast?.success?.("Page deleted!");
          return true;
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to delete page");
          return false;
        }
      };
    };
    setupTable();
  }, [loading, data]);

  if (loading) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Pages"]}
        sidebar={adminSidebar}
        activePath="/admin/pages"
      >
        <p>Loading pages...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Pages"]}
      sidebar={adminSidebar}
      activePath="/admin/pages"
    >
      <h1>Pages Management</h1>
      <cs-data-table
        id="pages-table"
        title="All Pages"
        page-size="20"
        page-size-options="10,20,50,100"
        download="true"
      ></cs-data-table>
    </AdminLayout>
  );
}
