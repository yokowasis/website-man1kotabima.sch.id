import { useEffect, useState } from "react";
import AdminLayout from "../../../components/adminlayout";
import { adminSidebar } from "../../../lib/admin-sidebar";
import { DataSliderItems } from "../../../lib/tables/slider_items";
import { DataKeunggulan } from "../../../lib/tables/keunggulan";
import { DataTeachers } from "../../../lib/tables/teachers";
import { DataMenus } from "../../../lib/tables/menus";
import { DataEvents } from "../../../lib/tables/events";
import { DataQuickPopularLinks } from "../../../lib/tables/quick_popular_links";
import { DataSchoolSettings } from "../../../lib/tables/school_settings";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [keunggulanData, setKeunggulanData] = useState<any[]>([]);
  const [teachersData, setTeachersData] = useState<any[]>([]);
  const [menusData, setMenusData] = useState<any[]>([]);
  const [eventsData, setEventsData] = useState<any[]>([]);
  const [linksData, setLinksData] = useState<any[]>([]);
  const [schoolSettings, setSchoolSettings] = useState<any>(null);

  const loadAll = async () => {
    const [slider, keunggulan, teachers, menus, events, links, school] =
      await Promise.all([
        DataSliderItems.all(),
        DataKeunggulan.all(),
        DataTeachers.all(),
        DataMenus.all(),
        DataEvents.all(),
        DataQuickPopularLinks.all(),
        DataSchoolSettings.first(),
      ]);
    setSliderData(slider);
    setKeunggulanData(keunggulan);
    setTeachersData(teachers);
    setMenusData(menus);
    setEventsData(events);
    setLinksData(links);
    setSchoolSettings(school);
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  useEffect(() => {
    if (loading) return;

    // Setup slider table
    const setupSlider = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("slider-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "image", title: "Image URL", type: "upload" },
        { key: "text", title: "Text", type: "text", placeholder: "Slide caption" },
      ];
      table.data = sliderData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataSliderItems.create(p);
          await loadAll();
          (window as any).toast?.success?.("Slider item added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataSliderItems.update(prev.id, p);
          await loadAll();
          (window as any).toast?.success?.("Slider item updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataSliderItems.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Slider item deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    // Setup keunggulan table
    const setupKeunggulan = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("keunggulan-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "icon", title: "Icon URL", type: "upload" },
        { key: "judul", title: "Title", type: "text" },
        { key: "deskripsi", title: "Description", type: "text" },
      ];
      table.data = keunggulanData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataKeunggulan.create(p);
          await loadAll();
          (window as any).toast?.success?.("Keunggulan added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataKeunggulan.update(prev.id, p);
          await loadAll();
          (window as any).toast?.success?.("Keunggulan updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataKeunggulan.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Keunggulan deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    // Setup teachers table
    const setupTeachers = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("teachers-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "nama", title: "Name", type: "text" },
        { key: "foto", title: "Photo URL", type: "upload" },
        { key: "mapel", title: "Subject", type: "text" },
        { key: "facebook", title: "Facebook", type: "text" },
        { key: "twitter", title: "Twitter", type: "text" },
        { key: "instagram", title: "Instagram", type: "text" },
      ];
      table.data = teachersData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataTeachers.create(p);
          await loadAll();
          (window as any).toast?.success?.("Teacher added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataTeachers.update(prev.id, p);
          await loadAll();
          (window as any).toast?.success?.("Teacher updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataTeachers.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Teacher deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    // Setup menus table
    const setupMenus = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("menus-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "name", title: "Name", type: "text" },
        { key: "url", title: "URL", type: "text", placeholder: "/page-url or https://..." },
        { key: "parent", title: "Parent ID", type: "text", placeholder: "Leave empty for top-level menu" },
      ];
      table.data = menusData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataMenus.create({
            name: p.name,
            url: p.url,
            parent: p.parent || undefined,
          });
          await loadAll();
          (window as any).toast?.success?.("Menu added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataMenus.update(prev.id, {
            name: p.name,
            url: p.url,
            parent: p.parent || undefined,
          });
          await loadAll();
          (window as any).toast?.success?.("Menu updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataMenus.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Menu deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    // Setup events table
    const setupEvents = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("events-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "title", title: "Title", type: "text" },
        { key: "text", title: "Description", type: "text" },
        { key: "image", title: "Image URL", type: "upload" },
        { key: "link", title: "Link", type: "text" },
      ];
      table.data = eventsData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataEvents.create(p);
          await loadAll();
          (window as any).toast?.success?.("Event added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataEvents.update(prev.id, p);
          await loadAll();
          (window as any).toast?.success?.("Event updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataEvents.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Event deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    // Setup quick/popular links table
    const setupLinks = async () => {
      await customElements.whenDefined("cs-data-table");
      const table = document.getElementById("links-table") as any;
      if (!table) return;
      table.columns = [
        { key: "id", title: "ID", readonly: true, hidden: true },
        { key: "name", title: "Name", type: "text" },
        { key: "url", title: "URL", type: "text" },
        {
          key: "type",
          title: "Type",
          type: "select",
          data: "Quick Link;Popular Link",
          dataValue: "quick;popular",
        },
      ];
      table.data = linksData;
      table.onAdd = async (p: any) => {
        try {
          const r = await DataQuickPopularLinks.create(p);
          await loadAll();
          (window as any).toast?.success?.("Link added");
          return { ...p, id: r.id };
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onEdit = async (p: any, prev: any) => {
        try {
          await DataQuickPopularLinks.update(prev.id, p);
          await loadAll();
          (window as any).toast?.success?.("Link updated");
          return p;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
      table.onDelete = async (row: any) => {
        try {
          await DataQuickPopularLinks.delete(row.id);
          await loadAll();
          (window as any).toast?.success?.("Link deleted");
          return true;
        } catch (e: any) { (window as any).toast?.error?.(e.message); return false; }
      };
    };

    setupSlider();
    setupKeunggulan();
    setupTeachers();
    setupMenus();
    setupEvents();
    setupLinks();
  }, [loading, sliderData, keunggulanData, teachersData, menusData, eventsData, linksData]);

  if (loading) {
    return (
      <AdminLayout
        title="MAN 1 Kota Bima"
        subtitle="Admin Panel"
        breadcrumb={["Dashboard", "Settings"]}
        sidebar={adminSidebar}
        activePath="/admin/settings"
      >
        <p>Loading settings...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="MAN 1 Kota Bima"
      subtitle="Admin Panel"
      breadcrumb={["Dashboard", "Settings"]}
      sidebar={adminSidebar}
      activePath="/admin/settings"
    >
      <h1>Settings</h1>
      <p style={{ color: "var(--muted-foreground, #71717a)", marginBottom: "1.5rem" }}>
        Manage your website content and configuration
      </p>

      {/* School Settings */}
      <div className="settings-section">
        <h3>School Settings</h3>
        {schoolSettings ? (
          <div style={{ padding: "1rem", border: "1px solid var(--border, #e4e4e7)", borderRadius: "0.5rem" }}>
            <p><strong>School Name:</strong> {schoolSettings.nama_sekolah || "—"}</p>
            <p><strong>Phone:</strong> {schoolSettings.telepon || "—"}</p>
            <p><strong>Email:</strong> {schoolSettings.email || "—"}</p>
            <p><strong>Address:</strong> {schoolSettings.alamat || "—"}</p>
            <p style={{ color: "var(--muted-foreground, #71717a)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
              Edit school settings directly in Pocketbase admin panel.
            </p>
          </div>
        ) : (
          <p style={{ color: "var(--muted-foreground, #71717a)" }}>No school settings configured.</p>
        )}
      </div>

      {/* Slider Items */}
      <div className="settings-section">
        <h3>Slider Items</h3>
        <cs-data-table
          id="slider-table"
          title="Homepage Slider"
          page-size="10"
        ></cs-data-table>
      </div>

      {/* Keunggulan */}
      <div className="settings-section">
        <h3>Keunggulan (Advantages)</h3>
        <cs-data-table
          id="keunggulan-table"
          title="Keunggulan"
          page-size="10"
        ></cs-data-table>
      </div>

      {/* Teachers */}
      <div className="settings-section">
        <h3>Teachers (Guru)</h3>
        <cs-data-table
          id="teachers-table"
          title="Teachers"
          page-size="10"
          download="true"
        ></cs-data-table>
      </div>

      {/* Menus */}
      <div className="settings-section">
        <h3>Menus</h3>
        <cs-data-table
          id="menus-table"
          title="Navigation Menus"
          page-size="10"
        ></cs-data-table>
      </div>

      {/* Events */}
      <div className="settings-section">
        <h3>Events</h3>
        <cs-data-table
          id="events-table"
          title="Events"
          page-size="10"
        ></cs-data-table>
      </div>

      {/* Quick & Popular Links */}
      <div className="settings-section">
        <h3>Quick & Popular Links</h3>
        <cs-data-table
          id="links-table"
          title="Links"
          page-size="10"
        ></cs-data-table>
      </div>
    </AdminLayout>
  );
}
