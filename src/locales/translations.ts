export const translations = {
  en: {
    nav: {
      services: "Services",
      catalog: "Catalog",
      about: "About",
      contact: "Contact",
    },
    hero: {
      studio: "[ INDEPENDENT TECHNOLOGY STUDIO ]",
      title: "INTEGRATED <br /> DIGITAL SOLUTIONS",
      description: "From high-performance web systems to precision hardware engineering. We build the infrastructure for the next generation of industry.",
      viewCatalog: "VIEW CATALOG",
      ourServices: "OUR SERVICES",
      workWithUs: "WORK WITH US",
    },
    services: {
      title: "CORE CAPABILITIES",
      web: {
        title: "Web Development",
        desc: "High-performance, scalable web applications and cloud infrastructure designed for modern business needs.",
        items: [
          "Custom Web Applications",
          "System Integration",
          "Cloud Architecture",
          "Scalable Backend Systems",
        ],
      },
      iot: {
        title: "IoT & Automation",
        desc: "Precision hardware design and embedded systems that bridge the gap between physical and digital worlds.",
        items: [
          "Embedded Systems Design",
          "Custom PCB & Hardware",
          "Smart Device Protocols",
          "Industrial Automation",
        ],
      },
    },
    about: {
      title: "OUR PHILOSOPHY",
      desc: "At Azsig Tech, we believe that technology should be a seamless extension of human capability. Our approach combines rigorous engineering principles with a minimalist aesthetic to deliver solutions that are as powerful as they are intuitive.",
      stats: {
        independent: "INDEPENDENT",
        integration: "INTEGRATION",
      },
      status: {
        label: "STATUS: ACTIVE",
        init: "> Initializing system...",
        assets: "> Loading digital assets...",
        web: "> Deploying web solutions...",
        iot: "> Calibrating IoT nodes...",
        online: "> ONLINE",
      },
    },
    ready: {
      title: "READY TO BUILD?",
      desc: "Let's discuss how Azsig Tech can help scale your technology infrastructure.",
      button: "INITIALIZE_COMMUNICATION",
    },
    footer: {
      desc: "Azsig Tech is an Independent Technology Studio providing integrated digital solutions. We specialize in engineering robust web systems and innovative IoT devices.",
      connect: "CONNECT",
      discuss: "DISCUSS PROJECT",
      location: "LOCATION",
      remote: "REMOTE / INDEPENDENT",
      based: "Indonesian Based",
      rights: "ALL RIGHTS RESERVED.",
    },
  },
  id: {
    nav: {
      services: "Layanan",
      catalog: "Katalog",
      about: "Tentang",
      contact: "Kontak",
    },
    hero: {
      studio: "[ STUDIO TEKNOLOGI INDEPENDEN ]",
      title: "SOLUSI DIGITAL <br /> TERPADU",
      description: "Dari sistem web berperforma tinggi hingga rekayasa perangkat keras presisi. Kami membangun infrastruktur untuk industri generasi berikutnya.",
      viewCatalog: "LIHAT KATALOG",
      ourServices: "LAYANAN KAMI",
      workWithUs: "BEKERJA SAMA",
    },
    services: {
      title: "KAPABILITAS UTAMA",
      web: {
        title: "Pengembangan Web",
        desc: "Aplikasi web berperforma tinggi, skalabel, dan infrastruktur cloud yang dirancang untuk kebutuhan bisnis modern.",
        items: [
          "Aplikasi Web Kustom",
          "Integrasi Sistem",
          "Arsitektur Cloud",
          "Sistem Backend Skalabel",
        ],
      },
      iot: {
        title: "IoT & Otomasi",
        desc: "Desain perangkat keras presisi dan sistem tertanam yang menjembatani celah antara dunia fisik dan digital.",
        items: [
          "Desain Sistem Tertanam",
          "PCB & Perangkat Keras Kustom",
          "Protokol Perangkat Pintar",
          "Otomasi Industri",
        ],
      },
    },
    about: {
      title: "FILOSOFI KAMI",
      desc: "Di Azsig Tech, kami percaya bahwa teknologi harus menjadi ekstensi mulus dari kemampuan manusia. Pendekatan kami menggabungkan prinsip rekayasa yang ketat dengan estetika minimalis untuk memberikan solusi yang kuat sekaligus intuitif.",
      stats: {
        independent: "INDEPENDEN",
        integration: "INTEGRASI",
      },
      status: {
        label: "STATUS: AKTIF",
        init: "> Menginisialisasi sistem...",
        assets: "> Memuat aset digital...",
        web: "> Menyebarkan solusi web...",
        iot: "> Mengkalibrasi node IoT...",
        online: "> ONLINE",
      },
    },
    ready: {
      title: "SIAP UNTUK MEMBANGUN?",
      desc: "Mari diskusikan bagaimana Azsig Tech dapat membantu meningkatkan skala infrastruktur teknologi Anda.",
      button: "INISIALISASI_KOMUNIKASI",
    },
    footer: {
      desc: "Azsig Tech adalah Studio Teknologi Independen yang menyediakan solusi digital terpadu. Kami berspesialisasi dalam merekayasa sistem web yang kuat dan perangkat IoT yang inovatif.",
      connect: "HUBUNGI",
      discuss: "DISKUSI PROYEK",
      location: "LOKASI",
      remote: "REMOTE / INDEPENDEN",
      based: "Berbasis di Indonesia",
      rights: "HAK CIPTA DILINDUNGI.",
    },
  },
};

export type Language = "en" | "id";
export type TranslationKeys = typeof translations.en;
