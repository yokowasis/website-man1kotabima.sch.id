import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/adminlayout";
import { adminSidebar } from "../../../../lib/admin-sidebar";
import { DataPosts } from "../../../../lib/tables/posts";

export default function EditPostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const fieldsSet = useRef(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const record = await DataPosts.read(1, 1, `id="${id}"`);
        if (record.items.length === 0) {
          setNotFound(true);
        } else {
          setPost(record.items[0]);
        }
      } catch (err) {
        console.error("Failed to load post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Set form field values once post data is loaded
  useEffect(() => {
    if (!post || fieldsSet.current) return;
    fieldsSet.current = true;

    // Use setTimeout to let the custom elements render first
    setTimeout(() => {
      const setVal = (elId: string, val: string) => {
        const el = document.getElementById(elId) as any;
        if (el) el.setAttribute("value", val || "");
      };
      setVal("post-title", post.title || "");
      setVal("post-slug", post.slug || "");
      setVal("post-excerpt", post.excerpt || "");
      setVal("post-content", post.content || "");
      setVal("post-cover", post.cover_image || "");
      setVal("post-author", post.author_name || "");
      setVal("post-date", post.date ? post.date.split("T")[0] : "");
    }, 300);
  }, [post]);

  const handleSave = async () => {
    if (!id) return;
    setSaving(true);
    try {
      const title = (document.getElementById("post-title") as any)?.value || "";
      const slug = (document.getElementById("post-slug") as any)?.value || "";
      const excerpt = (document.getElementById("post-excerpt") as any)?.value || "";
      const author = (document.getElementById("post-author") as any)?.value || "";
      const date = (document.getElementById("post-date") as any)?.value || "";
      const cover = (document.getElementById("post-cover") as any)?.value || "";

      const rtf = document.getElementById("post-content") as any;
      const content = rtf?.getContent ? rtf.getContent() : rtf?.value || "";

      await DataPosts.update(id as string, {
        title: title || "Untitled",
        slug: slug || "untitled",
        content,
        excerpt,
        cover_image: cover,
        author_name: author,
        date: date || new Date().toISOString().split("T")[0],
      });

      (window as any).toast?.success?.("Post updated!");
      router.push("/admin/posts");
    } catch (err: any) {
      (window as any).toast?.error?.(err?.message || "Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Posts", "Edit Post"]}
        sidebar={adminSidebar}
        activePath="/admin/posts"
      >
        <p>Loading post...</p>
      </AdminLayout>
    );
  }

  if (notFound) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Posts", "Edit Post"]}
        sidebar={adminSidebar}
        activePath="/admin/posts"
      >
        <h1>Post Not Found</h1>
        <p>The requested post could not be found.</p>
        <a href="/admin/posts" style={{ color: "var(--primary, #18181b)" }}>← Back to Posts</a>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Posts", "Edit Post"]}
      sidebar={adminSidebar}
      activePath="/admin/posts"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0 }}>Edit Post</h1>
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
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "1rem", maxWidth: "800px" }}>
        <cs-input id="post-title" type="text" label="Title" placeholder="Post title"></cs-input>
        <cs-input id="post-slug" type="text" label="Slug" placeholder="post-url-slug"></cs-input>
        <cs-input id="post-excerpt" type="text" label="Excerpt" placeholder="Brief description"></cs-input>
        <cs-rtf id="post-content" label="Content" rows={12}></cs-rtf>
        <cs-upload id="post-cover" label="Cover Image"></cs-upload>
        <cs-input id="post-author" type="text" label="Author" placeholder="Author name"></cs-input>
        <cs-input id="post-date" type="date" label="Date"></cs-input>
      </div>
    </AdminLayout>
  );
}
