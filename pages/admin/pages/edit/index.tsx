import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/adminlayout";
import { adminSidebar } from "../../../../lib/admin-sidebar";
import { DataPages } from "../../../../lib/tables/pages";

export default function EditPagePage() {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const fieldsSet = useRef(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const records = await DataPages.read(1, 1, `id="${id}"`);
        if (records.items.length === 0) {
          setNotFound(true);
        } else {
          setPage(records.items[0]);
        }
      } catch (err) {
        console.error("Failed to load page:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Set form field values once page data is loaded
  useEffect(() => {
    if (!page || fieldsSet.current) return;
    fieldsSet.current = true;

    setTimeout(() => {
      const setVal = (elId: string, val: string) => {
        const el = document.getElementById(elId) as any;
        if (el) el.setAttribute("value", val || "");
      };
      setVal("page-title", page.title || "");
      setVal("page-slug", page.slug || "");
      setVal("page-content", page.content || "");
    }, 300);
  }, [page]);

  const handleSave = async () => {
    if (!id) return;
    setSaving(true);
    try {
      const title = (document.getElementById("page-title") as any)?.value || "";
      const slug = (document.getElementById("page-slug") as any)?.value || "";
      const rtf = document.getElementById("page-content") as any;
      const content = rtf?.getContent ? rtf.getContent() : rtf?.value || "";

      await DataPages.update(id as string, {
        title: title || "Untitled",
        slug: slug || "untitled",
        content,
      });

      (window as any).toast?.success?.("Page updated!");
      router.push("/admin/pages");
    } catch (err: any) {
      (window as any).toast?.error?.(err?.message || "Failed to update page");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Pages", "Edit Page"]}
        sidebar={adminSidebar}
        activePath="/admin/pages"
      >
        <p>Loading page...</p>
      </AdminLayout>
    );
  }

  if (notFound) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Pages", "Edit Page"]}
        sidebar={adminSidebar}
        activePath="/admin/pages"
      >
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <a href="/admin/pages" style={{ color: "var(--primary, #18181b)" }}>← Back to Pages</a>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Pages", "Edit Page"]}
      sidebar={adminSidebar}
      activePath="/admin/pages"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0 }}>Edit Page</h1>
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
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "var(--primary, #18181b)",
              color: "var(--primary-foreground, #fafafa)",
              cursor: saving ? "not-allowed" : "pointer",
              fontSize: "0.875rem",
              fontWeight: 500,
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "1rem", maxWidth: "800px" }}>
        <cs-input id="page-title" type="text" label="Title" placeholder="Page title"></cs-input>
        <cs-input id="page-slug" type="text" label="Slug" placeholder="page-url-slug"></cs-input>
        <cs-rtf id="page-content" label="Content" rows={16}></cs-rtf>
      </div>
    </AdminLayout>
  );
}
