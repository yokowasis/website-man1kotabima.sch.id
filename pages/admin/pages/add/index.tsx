import { useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/adminlayout";
import { adminSidebar } from "../../../../lib/admin-sidebar";
import { DataPages } from "../../../../lib/tables/pages";

export default function AddPagePage() {
  const router = useRouter();
  const saving = useRef(false);

  const handleSave = async () => {
    if (saving.current) return;
    saving.current = true;

    // Show saving indicator
    const btn = document.getElementById("save-btn") as HTMLButtonElement;
    if (btn) { btn.disabled = true; btn.textContent = "Saving..."; }

    try {
      const title = (document.getElementById("page-title") as any)?.value || "";
      let slug = (document.getElementById("page-slug") as any)?.value || "";
      const rtf = document.getElementById("page-content") as any;
      const content = rtf?.getContent ? rtf.getContent() : rtf?.value || "";

      if (!slug && title) {
        slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      }

      await DataPages.create({
        title: title || "Untitled",
        slug: slug || "untitled-" + Date.now(),
        content,
      });

      (window as any).toast?.success?.("Page created!");
      router.push("/admin/pages");
    } catch (err: any) {
      (window as any).toast?.error?.(err?.message || "Failed to create page");
      if (btn) { btn.disabled = false; btn.textContent = "Save Page"; }
    } finally {
      saving.current = false;
    }
  };

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Pages", "Add Page"]}
      sidebar={adminSidebar}
      activePath="/admin/pages"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0 }}>Add New Page</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => router.push("/admin/pages")}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border, #e4e4e7)",
              background: "#fff",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Cancel
          </button>
          <button
            id="save-btn"
            onClick={handleSave}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "var(--primary, #18181b)",
              color: "var(--primary-foreground, #fafafa)",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            Save Page
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "1rem", maxWidth: "800px" }}>
        <cs-input id="page-title" type="text" label="Title" placeholder="Page title"></cs-input>
        <cs-input id="page-slug" type="text" label="Slug" placeholder="Auto-generated from title" note="Leave empty to auto-generate from title"></cs-input>
        <cs-rtf id="page-content" label="Content" rows={16}></cs-rtf>
      </div>
    </AdminLayout>
  );
}
