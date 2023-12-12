export const settings = {
  InfoSekolah: {
    Title: "",
    Nama: "MAN 1 Kota Bima",
    SekilasInfo: `MAN 1 Kota Bima adalah sebuah sekolah menengah atas yang berada di bawah naungan Kementerian Agama. MAN 1 Kota Bima memiliki status negeri dan menawarkan jenjang pendidikan Madrasah Aliyah (MA), serta memiliki fasilitas yang memadai, seperti ruang kelas, laboratorium, perpustakaan, masjid, dan lapangan olahraga. MAN 1 Kota Bima memiliki visi untuk menjadi sekolah unggul yang berakhlak mulia, berwawasan global, dan berdaya saing tinggi.`,
    Telepon: "(0374) 42434",
    Email: "info@man1kotabima.sch.id",
    Alamat:
      "Jalan Seruni No.06 Saleko Kota Bima, Kecamatan Rasanae Barat, Kota Bima, Provinsi Nusa Tenggara Barat",
    JamKerja: "Senin s/d Sabtu : 07.00 - 14.30",
  },

  HomeBackground:
    "https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&w=1920",

  About: {
    image:
      "https://images.pexels.com/photos/887584/pexels-photo-887584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: "https://www.youtube.com/embed/wgeDmKOKPrY?si=eNwahyAmd1l1xHLM",
  },

  Events: [
    {
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Ini adalah deskripsi kegiatan",
      link: "https://google.com/",
      title: "Judul Kegiatan 1",
    },
    {
      image:
        "https://images.pexels.com/photos/848752/pexels-photo-848752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Ini adalah deskripsi kegiatan",
      link: "https://google.com/",
      title: "Judul Kegiatan 2",
    },
  ],

  VisiMisi: {
    image:
      "https://images.pexels.com/photos/1236421/pexels-photo-1236421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    Visi: "Menjadi pusat pendidikan unggul yang mengintegrasikan keilmuan dan nilai-nilai keagamaan, mencetak generasi terampil, beriman, dan berakhlak mulia untuk masa depan yang berkelanjutan.",

    Misi: [
      "Memberikan pendidikan berkualitas tinggi yang mencakup aspek akademis, spiritual, dan karakter untuk membentuk individu yang beriman dan bertanggung jawab",
      "Mengembangkan kurikulum yang holistik, mengintegrasikan pengetahuan umum dengan nilai-nilai agama Islam, serta menginspirasi pemikiran kritis dan kreativitas",
      "Mendorong partisipasi aktif dalam kegiatan ekstrakurikuler, seminar, dan kegiatan keagamaan untuk memperluas wawasan siswa dan memperdalam pemahaman mereka akan nilai-nilai keagamaan",
      "Melibatkan komunitas pendidikan dalam upaya menciptakan lingkungan belajar yang inklusif, inovatif, dan berorientasi pada perkembangan individu secara menyeluruh.",
      "Memotivasi siswa untuk menjadi pemimpin yang bertanggung jawab, peduli terhadap masyarakat, serta memiliki komitmen terhadap perubahan positif dalam lingkungan sekitarnya.",
    ],
  },
};

// infer type from settings
export type Settings = typeof settings;
