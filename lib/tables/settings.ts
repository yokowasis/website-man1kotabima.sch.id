import { pb } from "../db";
import {
  Collections,
  SchoolSettingsRecord,
  SliderItemsRecord,
  KeunggulanRecord,
  TeachersRecord,
  MenusRecord,
  EventsRecord,
  QuickPopularLinksRecord,
} from "../pocketbase-types";

const TENANT_FILTER = 'tenant="ie9a1spnndt3fl4"';

export interface SiteSettings {
  InfoSekolah: {
    Title: string;
    Logo: string;
    Gambar: string;
    Gambar2: string;
    Nama: string;
    SekilasInfo: string;
    Telepon: string;
    Email: string;
    Alamat: string;
    JamKerja: string;
    Facebook: string;
    Twitter: string;
    Instagram: string;
    Youtube: string;
  };
  Slider: Array<{ image: string; text: string }>;
  Keunggulan: Array<{ icon: string; judul: string; deskripsi: string }>;
  Guru: Array<{ Nama: string; Foto: string; Mapel: string; Facebook: string; Twitter: string; Instagram: string }>;
  Sambutan: string;
  Menu: Record<string, any>;
  QuickLinks: Record<string, string>;
  PopularLinks: Record<string, string>;
  HomeBackground: string;
  About: { image: string; video: string };
  Events: Array<{ image: string; text: string; link: string; title: string }>;
  VisiMisi: { image: string; Visi: string; Misi: string[] };
}

const defaults: SiteSettings = {
  InfoSekolah: {
    Title: "Website Resmi MAN 1 Kota Bima",
    Logo: "",
    Gambar: "",
    Gambar2: "",
    Nama: "MAN 1 Kota Bima",
    SekilasInfo: "",
    Telepon: "",
    Email: "",
    Alamat: "",
    JamKerja: "",
    Facebook: "",
    Twitter: "",
    Instagram: "",
    Youtube: "",
  },
  Slider: [],
  Keunggulan: [],
  Guru: [],
  Sambutan: "",
  Menu: {},
  QuickLinks: {},
  PopularLinks: {},
  HomeBackground: "",
  About: { image: "", video: "" },
  Events: [],
  VisiMisi: { image: "", Visi: "", Misi: [] },
};

export const DataSettings = {
  /** Load all site settings from Pocketbase collections */
  loadAll: async (): Promise<SiteSettings> => {
    const s: SiteSettings = JSON.parse(JSON.stringify(defaults));

    // 1. School settings
    try {
      const records = await pb.collection(Collections.SchoolSettings).getFullList({
        filter: TENANT_FILTER,
      });
      if (records.length > 0) {
        const r = records[0] as any;
        s.InfoSekolah.Nama = r.nama_sekolah || s.InfoSekolah.Nama;
        s.InfoSekolah.Telepon = r.telepon || "";
        s.InfoSekolah.Email = r.email || "";
        s.InfoSekolah.Alamat = r.alamat || "";
        s.InfoSekolah.JamKerja = r.jam_kerja || "";
        s.InfoSekolah.SekilasInfo = r.sekilas_info || "";
        s.InfoSekolah.Facebook = r.facebook || "";
        s.InfoSekolah.Twitter = r.twitter || "";
        s.InfoSekolah.Instagram = r.instagram || "";
        s.InfoSekolah.Youtube = r.youtube || "";
        s.Sambutan = r.tentang_kepsek || "";
        s.HomeBackground = r.home_background || "";
        s.About.video = r.video || "";
      }
    } catch {}

    // 2. Tenant user for logo/images
    try {
      const user = await pb.collection(Collections.Users).getOne("ie9a1spnndt3fl4");
      const u = user as any;
      s.InfoSekolah.Logo = u.logo || "";
      s.InfoSekolah.Gambar = u.about_image || "";
      s.InfoSekolah.Gambar2 = u.logo || "";
      s.About.image = u.about_image || "";
      s.InfoSekolah.Title = u.title || s.InfoSekolah.Title;
    } catch {}

    // 3. Slider
    try {
      const items = await pb.collection(Collections.SliderItems).getFullList({
        filter: TENANT_FILTER,
        sort: "+created",
      });
      s.Slider = (items as any[]).map((r) => ({ image: r.image || "", text: r.text || "" }));
    } catch {}

    // 4. Keunggulan
    try {
      const items = await pb.collection(Collections.Keunggulan).getFullList({
        filter: TENANT_FILTER,
      });
      s.Keunggulan = (items as any[]).map((r) => ({
        icon: r.icon || "",
        judul: r.judul || "",
        deskripsi: r.deskripsi || "",
      }));
    } catch {}

    // 5. Teachers
    try {
      const items = await pb.collection(Collections.Teachers).getFullList({
        filter: TENANT_FILTER,
      });
      s.Guru = (items as any[]).map((r) => ({
        Nama: r.nama || "",
        Foto: r.foto || "",
        Mapel: r.mapel || "",
        Facebook: r.facebook || "",
        Twitter: r.twitter || "",
        Instagram: r.instagram || "",
      }));
    } catch {}

    // 6. Menus
    try {
      const items = (await pb.collection(Collections.Menus).getFullList({
        filter: TENANT_FILTER,
      })) as any[];
      const menuMap: Record<string, any> = {};
      for (const r of items) {
        if (r.parent) {
          const parentName = items.find((p: any) => p.id === r.parent)?.name || "Unknown";
          if (!menuMap[parentName]) menuMap[parentName] = {};
          menuMap[parentName][r.name] = r.url;
        } else {
          menuMap[r.name] = r.url;
        }
      }
      s.Menu = menuMap;
    } catch {}

    // 7. Quick & Popular links
    try {
      const items = (await pb.collection(Collections.QuickPopularLinks).getFullList({
        filter: TENANT_FILTER,
      })) as any[];
      for (const r of items) {
        if (r.type === "quick") s.QuickLinks[r.name] = r.url;
        else if (r.type === "popular") s.PopularLinks[r.name] = r.url;
      }
    } catch {}

    // 8. Events
    try {
      const items = (await pb.collection(Collections.Events).getFullList({
        filter: TENANT_FILTER,
      })) as any[];
      s.Events = items.map((r) => ({
        image: r.image || "",
        text: r.text || "",
        link: r.link || "",
        title: r.title || "",
      }));
    } catch {}

    s.InfoSekolah.Title = `Website Resmi ${s.InfoSekolah.Nama}`;
    return s;
  },
};
