/**
 * Site settings type definition.
 * Data is now loaded from Pocketbase at runtime via client-side fetching.
 * See lib/tables/settings.ts for the loader.
 */

export type Settings = {
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
};

export const settings: Settings = {
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
