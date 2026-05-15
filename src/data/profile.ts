export type HeroData = {
  name: string;
  role: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ContactData = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  availability: string;
};

export const profile = {
  hero: {
    name: "Nama Profesional Anda",
    role: "Frontend Developer | UI/UX Enthusiast",
    headline: "Membangun pengalaman digital yang elegan, cepat, dan terasa meyakinkan sejak layar pertama.",
    description:
      "Saya membantu brand, bisnis, dan tim produk menghadirkan antarmuka modern yang rapi, fokus pada detail, dan tetap fungsional di semua perangkat.",
    primaryCta: {
      label: "Hubungi Saya",
      href: "#contact",
    },
    secondaryCta: {
      label: "Lihat Proyek",
      href: "#projects",
    },
  } satisfies HeroData,
  stats: [
    {
      value: "5+",
      label: "Tahun Pengalaman",
      detail: "Mendesain dan membangun interface untuk produk digital dan brand personal.",
    },
    {
      value: "20+",
      label: "Proyek Selesai",
      detail: "Mulai dari landing page, dashboard, hingga website company profile premium.",
    },
    {
      value: "95%",
      label: "Kepuasan Kolaborasi",
      detail: "Fokus pada komunikasi jelas, eksekusi presisi, dan iterasi yang cepat.",
    },
  ] satisfies Stat[],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ] satisfies SocialLink[],
  about: {
    title: "Tentang Saya",
    description:
      "Saya berfokus pada perpaduan strategi visual, struktur konten, dan performa frontend untuk menciptakan pengalaman yang profesional sekaligus mudah digunakan.",
  },
  highlights: [
    {
      title: "Pendekatan Strategis",
      description:
        "Setiap layout dan CTA dirancang untuk membantu pengunjung memahami value Anda dalam hitungan detik.",
    },
    {
      title: "Eksekusi Rapi",
      description:
        "Saya menyukai struktur komponen yang bersih, design system ringan, dan detail visual yang konsisten.",
    },
    {
      title: "Kolaborasi Efektif",
      description:
        "Komunikasi jelas, progres transparan, dan fokus pada hasil yang relevan untuk target bisnis.",
    },
  ] satisfies Highlight[],
  skillGroups: [
    {
      title: "Frontend Engineering",
      description: "Fondasi untuk membangun UI modern yang cepat dan maintainable.",
      items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design", "Accessibility"],
    },
    {
      title: "UI/UX Thinking",
      description: "Pendekatan desain yang menjaga keseimbangan estetika dan kegunaan.",
      items: ["Wireframing", "Design Systems", "Information Architecture", "Interaction Design", "Visual Hierarchy"],
    },
    {
      title: "Workflow",
      description: "Alur kerja yang menjaga kualitas, kecepatan, dan kolaborasi tim.",
      items: ["Figma", "Git", "Component Architecture", "Performance Optimization", "Stakeholder Communication"],
    },
  ] satisfies SkillGroup[],
  experiences: [
    {
      period: "2023 - Sekarang",
      role: "Senior Frontend Developer",
      company: "Studio Digital & Client Projects",
      summary:
        "Memimpin pengembangan antarmuka untuk website profil, campaign pages, dan dashboard ringan dengan fokus pada kualitas visual dan performa.",
      achievements: [
        "Menyederhanakan struktur halaman agar conversion path lebih jelas.",
        "Mengembangkan komponen reusable untuk mempercepat iterasi desain.",
        "Meningkatkan konsistensi UI di berbagai viewport dan device.",
      ],
    },
    {
      period: "2021 - 2023",
      role: "UI Engineer",
      company: "Product Team Collaboration",
      summary:
        "Berkolaborasi dengan designer dan PM untuk menerjemahkan kebutuhan bisnis menjadi pengalaman digital yang jelas dan modern.",
      achievements: [
        "Menyusun design token sederhana untuk konsistensi visual.",
        "Mengoptimalkan landing page marketing agar lebih ringan dan mudah dipindai.",
        "Membantu validasi tampilan lintas perangkat sebelum rilis.",
      ],
    },
    {
      period: "2019 - 2021",
      role: "Frontend Developer",
      company: "Freelance & Agency Support",
      summary:
        "Mengerjakan berbagai website klien dengan kebutuhan branding, storytelling, dan konversi yang berbeda-beda.",
      achievements: [
        "Membangun landing page dengan struktur modular untuk kebutuhan scale cepat.",
        "Menyesuaikan UI agar tetap rapi tanpa kehilangan karakter brand.",
        "Menjaga komunikasi klien dan ekspektasi delivery tetap jelas.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Executive Personal Brand",
      category: "Personal Branding",
      description:
        "Landing page profil profesional untuk menonjolkan positioning, kredibilitas, dan CTA konsultasi dalam satu alur yang rapi.",
      stack: ["React", "Tailwind", "Motion"],
      href: "#contact",
      featured: true,
    },
    {
      title: "Consulting Studio Showcase",
      category: "Business Website",
      description:
        "Website company profile dengan pendekatan visual premium dan arsitektur konten yang mudah dinavigasi oleh calon klien.",
      stack: ["Vite", "TypeScript", "Responsive UI"],
      href: "#contact",
    },
    {
      title: "Launch Campaign Microsite",
      category: "Marketing Experience",
      description:
        "Microsite campaign dengan fokus pada storytelling, CTA, dan pengalaman mobile-first yang cepat.",
      stack: ["React", "Performance", "UI Polish"],
      href: "#contact",
    },
  ] satisfies Project[],
  testimonials: [
    {
      quote: "Eksekusinya cepat, detail visualnya matang, dan hasil akhirnya terasa jauh lebih premium dari versi sebelumnya.",
      name: "Client Placeholder",
      role: "Founder, Creative Business",
    },
    {
      quote: "Komunikasinya jelas dan tahu cara menyusun tampilan agar pesan utama bisnis kami langsung tertangkap.",
      name: "Partner Placeholder",
      role: "Marketing Lead",
    },
  ] satisfies Testimonial[],
  trustStats: [
    {
      label: "Kolaborasi aktif",
      value: "12",
      detail: "Bersama startup, personal brand, dan bisnis jasa.",
    },
    {
      label: "Rata-rata delivery",
      value: "2-4 minggu",
      detail: "Tergantung scope, asset, dan kebutuhan konten.",
    },
  ] satisfies Stat[],
  contact: {
    title: "Siap membangun halaman profil yang terasa profesional dan meyakinkan?",
    description:
      "Jika Anda membutuhkan landing page personal brand, halaman profil profesional, atau website dengan nuansa premium yang tetap ringan, mari diskusikan kebutuhan Anda.",
    primaryCta: {
      label: "Hubungi Saya",
      href: "mailto:hello@example.com",
    },
    secondaryCta: {
      label: "Lihat LinkedIn",
      href: "https://www.linkedin.com",
    },
    availability: "Saat ini tersedia untuk project freelance terkurasi dan kolaborasi jangka pendek.",
  } satisfies ContactData,
  footer: {
    name: "Nama Profesional Anda",
    note: "Dirancang untuk menampilkan kredibilitas, karya, dan value Anda secara singkat namun kuat.",
  },
};
