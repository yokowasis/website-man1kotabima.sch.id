import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/adminlayout";
import { adminSidebar } from "../../../../lib/admin-sidebar";
import { DataPosts } from "../../../../lib/tables/posts";

export default function AddPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [slugAuto, setSlugAuto] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Set default date to today
    const dateInput = document.getElementById("post-date") as any;
    if (dateInput) {
      dateInput.setAttribute("value", new Date().toISOString().split("T")[0]);
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const title = (document.getElementById("post-title") as any)?.value || "";
      let slug = (document.getElementById("post-slug") as any)?.value || "";
      const excerpt = (document.getElementById("post-excerpt") as any)?.value || "";
      const author = (document.getElementById("post-author") as any)?.value || "";
      const date = (document.getElementById("post-date") as any)?.value || "";
      const cover = (document.getElementById("post-cover") as any)?.value || "";

      // Get RTF content
      const rtf = document.getElementById("post-content") as any;
      const content = rtf?.getContent ? rtf.getContent() : rtf?.value || "";

      // Auto-generate slug from title if empty
      if (!slug && title) {
        slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      }

      await DataPosts.create({
        title: title || "Untitled",
        slug: slug || "untitled-" + Date.now(),
        content,
        excerpt,
        cover_image: cover,
        author_name: author,
        date: date || new Date().toISOString().split("T")[0],
      });

      (window as any).toast?.success?.("Post created!");
      router.push("/admin/posts");
    } catch (err: any) {
      (window as any).toast?.error?.(err?.message || "Failed to create post");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Posts", "Add Post"]}
      sidebar={adminSidebar}
      activePath="/admin/posts"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0 }}>Add New Post</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => router.push("/admin/posts")}
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
            {saving ? "Saving..." : "Save Post"}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          maxWidth: "800px",
        }}
      >
        <cs-input id="post-title" type="text" label="Title" placeholder="Post title"></cs-input>
        <cs-input id="post-slug" type="text" label="Slug" placeholder="Auto-generated from title" note="Leave empty to auto-generate from title"></cs-input>
        <cs-input id="post-excerpt" type="text" label="Excerpt" placeholder="Brief description"></cs-input>
        <cs-rtf id="post-content" label="Content" rows={12}></cs-rtf>
        <cs-upload id="post-cover" label="Cover Image"></cs-upload>
        <cs-input id="post-author" type="text" label="Author" placeholder="Author name"></cs-input>
        <cs-input id="post-date" type="date" label="Date"></cs-input>
      </div>
    </AdminLayout>
  );
}
