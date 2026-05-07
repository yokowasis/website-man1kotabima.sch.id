import { useEffect, useState } from "react";
import AdminLayout from "../../../components/adminlayout";
import { adminSidebar } from "../../../lib/admin-sidebar";
import { DataPosts } from "../../../lib/tables/posts";

export default function PostsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await DataPosts.read(1, 200);
        setData(result.items || []);
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const refreshData = async () => {
    const result = await DataPosts.read(1, 200);
    setData(result.items || []);
  };

  useEffect(() => {
    if (loading) return;
    const setupTable = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("posts-table") as any;
      if (!table) return;

      table.columns = [
        { key: "id", title: "ID", type: "text", readonly: true, hidden: true },
        { key: "title", title: "Title", type: "text" },
        { key: "slug", title: "Slug", type: "text", placeholder: "auto-generated from title" },
        { key: "excerpt", title: "Excerpt", type: "text" },
        { key: "content", title: "Content", type: "rtf" },
        { key: "cover_image", title: "Cover Image", type: "upload" },
        { key: "author_name", title: "Author", type: "text" },
        { key: "date", title: "Date", type: "date" },
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
          const record = await DataPosts.create({
            title: payload.title || "Untitled",
            slug: payload.slug || payload.title?.toLowerCase().replace(/\s+/g, "-") || "untitled",
            content: payload.content || "",
            excerpt: payload.excerpt || "",
            cover_image: payload.cover_image || "",
            author_name: payload.author_name || "",
            date: payload.date || new Date().toISOString().split("T")[0],
          });
          await refreshData();
          (window as any).toast?.success?.("Post created!");
          return { ...payload, id: record.id, created: record.created };
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to create post");
          return false;
        }
      };

      table.onEdit = async (payload: any, previous: any) => {
        try {
          await DataPosts.update(previous.id, {
            title: payload.title,
            slug: payload.slug,
            content: payload.content,
            excerpt: payload.excerpt,
            cover_image: payload.cover_image,
            author_name: payload.author_name,
            date: payload.date,
          });
          await refreshData();
          (window as any).toast?.success?.("Post updated!");
          return payload;
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to update post");
          return false;
        }
      };

      table.onDelete = async (row: any) => {
        try {
          await DataPosts.delete(row.id);
          await refreshData();
          (window as any).toast?.success?.("Post deleted!");
          return true;
        } catch (err: any) {
          (window as any).toast?.error?.(err?.message || "Failed to delete post");
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
        breadcrumb={["Dashboard", "Posts"]}
        sidebar={adminSidebar}
        activePath="/admin/posts"
      >
        <p>Loading posts...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Posts"]}
      sidebar={adminSidebar}
      activePath="/admin/posts"
    >
      <h1>Posts Management</h1>
      <cs-data-table
        id="posts-table"
        title="All Posts"
        page-size="20"
        page-size-options="10,20,50,100"
        download="true"
      ></cs-data-table>
    </AdminLayout>
  );
}
