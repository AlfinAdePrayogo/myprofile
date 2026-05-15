# PRD Landing Page Profil Profesional

## Summary

Dokumen ini mendefinisikan kebutuhan produk dan rencana implementasi untuk landing page profil profesional berbasis React, Vite, dan Tailwind CSS. Target hasil akhirnya adalah sebuah halaman tunggal yang modern, minimalis, responsif, dan berorientasi konversi dengan CTA utama "Hubungi Saya".

## Current State Analysis

- Repository saat ini belum berisi aplikasi React/Vite; hasil eksplorasi hanya menemukan file `test.txt`.
- Belum ada struktur `src`, konfigurasi Vite, Tailwind CSS, maupun aset UI.
- Karena codebase masih kosong, implementasi perlu dimulai dari bootstrap proyek lalu dilanjutkan dengan penyusunan struktur halaman, styling system, dan komponen presentasional.

## Product Goals

- Menampilkan identitas profesional secara ringkas, meyakinkan, dan premium.
- Memudahkan recruiter, client, atau collaborator memahami profil, kemampuan, pengalaman, dan karya unggulan.
- Mengarahkan pengunjung ke aksi utama `Hubungi Saya`.
- Menjaga performa, responsivitas, dan keterbacaan tinggi di perangkat mobile maupun desktop.

## Target Audience

- Recruiter dan HR yang ingin menilai profil profesional dengan cepat.
- Client potensial yang membutuhkan gambaran kredibilitas dan portofolio.
- Collaborator atau rekan industri yang ingin melihat keahlian dan pengalaman.

## Success Criteria

- Hero section langsung menjelaskan siapa pemilik profil, peran utama, dan nilai yang ditawarkan.
- Navigasi/flow halaman memudahkan pengunjung memahami profil tanpa kebingungan.
- CTA `Hubungi Saya` terlihat jelas pada hero dan area penutup.
- Layout tetap rapi dan nyaman dibaca pada mobile, tablet, dan desktop.
- Visual konsisten dengan tema dark slate minimalis modern.

## Scope

### In Scope

- Single-page landing page profil profesional.
- Tema gelap berbasis `Slate-900` dengan aksen netral modern.
- Typography berbasis `Inter` atau `Geist`.
- Layout `bento grid` ringan yang dipadukan dengan whitespace luas.
- Section: Hero, About, Skills, Experience, Projects, Testimonials/Trust, Contact, Footer.
- Interaksi hover dan transisi scroll yang halus.
- Responsivitas mobile-first.

### Out of Scope

- CMS atau dashboard admin.
- Backend/API produksi.
- Form contact yang benar-benar mengirim data ke server.
- Multi-page routing.
- Multi-language atau dark/light toggle pada fase awal.

## Assumptions & Decisions

- Framework utama: React dengan Vite sebagai build tool.
- Styling: Tailwind CSS.
- Bahasa konten awal: Bahasa Indonesia.
- Tema default: Dark slate.
- CTA utama: `Hubungi Saya`.
- Jika Framer Motion tersedia/ditambahkan saat implementasi, animasi reveal on scroll menggunakan Framer Motion; jika tidak, fallback ke Tailwind transitions dan CSS native.
- Data konten awal akan disimpan statis di frontend untuk mempercepat iterasi awal.

## Information Architecture

Urutan section yang disepakati:

1. Hero
2. About
3. Skills
4. Experience
5. Projects
6. Testimonials / Trust Signals
7. Contact CTA
8. Footer

## Functional Requirements

### 1. Hero Section

- Menampilkan nama, role utama, value proposition singkat, dan CTA primer `Hubungi Saya`.
- Menyediakan CTA sekunder seperti `Lihat Proyek` untuk mendorong eksplorasi.
- Memiliki visual hierarchy kuat dengan headline, supporting text, dan stat/mini cards.

### 2. About Section

- Menjelaskan profil singkat, pendekatan kerja, dan keunggulan profesional.
- Menggunakan card atau blok bento agar informasi mudah dipindai.

### 3. Skills Section

- Menampilkan kompetensi utama dalam bentuk chips, cards, atau grouped stacks.
- Mengelompokkan skill berdasarkan kategori seperti frontend, tools, dan soft skills profesional.

### 4. Experience Section

- Menampilkan ringkasan pengalaman kerja/proyek secara kronologis atau card-based timeline.
- Setiap item minimal memuat role, organisasi/klien, durasi, dan kontribusi utama.

### 5. Projects Section

- Menampilkan 2-6 proyek unggulan dengan judul, deskripsi singkat, stack, dan link aksi jika tersedia.
- Satu proyek dapat diberi penekanan visual sebagai featured project.

### 6. Testimonials / Trust Signals

- Menampilkan bukti kredibilitas seperti testimonial singkat, jumlah proyek, pengalaman tahun, atau logo partner (placeholder bila data belum final).

### 7. Contact Section

- Menjadi area konversi utama dengan headline persuasif dan opsi kontak.
- Minimal menyediakan tombol atau link ke email, LinkedIn, GitHub, WhatsApp, atau platform relevan lainnya.

### 8. Footer

- Menampilkan identitas singkat, copyright, dan tautan sosial.

## Non-Functional Requirements

- Mobile-first dan optimal pada lebar umum 360px, 768px, 1024px, dan 1440px.
- Kontras teks harus nyaman dibaca pada latar gelap.
- Struktur komponen harus sederhana, reusable, dan mudah dikembangkan.
- Animasi tidak boleh mengganggu keterbacaan atau performa.
- Halaman harus tetap usable tanpa animasi kompleks.

## UX/UI Direction

- Gaya visual: minimalis modern, profesional, premium, bersih.
- Warna dasar: `slate-900`/`zinc-950` untuk background, `white`/`zinc-100` untuk teks utama, `zinc-400`/`slate-400` untuk teks sekunder.
- Accent dapat menggunakan satu warna lembut modern seperti cyan, indigo, atau emerald dalam intensitas terbatas.
- Layout menggunakan kombinasi container lebar, whitespace luas, rounded corners halus, border tipis semi-transparan, dan shadow subtil.
- Hero dan section penting memakai `bento cards` untuk menonjolkan informasi prioritas.

## Content Strategy

- Copy menggunakan Bahasa Indonesia profesional, singkat, dan percaya diri.
- Headline harus menjawab: siapa pemilik profil, apa spesialisasinya, dan value yang ditawarkan.
- Deskripsi proyek dan pengalaman fokus pada dampak, bukan hanya daftar tugas.
- CTA menggunakan bahasa langsung seperti `Hubungi Saya`, `Lihat Proyek`, atau `Diskusikan Kolaborasi`.

## Proposed Changes

Dokumen ini menjadi acuan implementasi berikut. File yang diusulkan bersifat spesifik dan sesuai kondisi repo yang saat ini masih kosong.

### Bootstrap Project

- `package.json`
  - Menambahkan dependency inti React, React DOM, Vite, Tailwind CSS, PostCSS, Autoprefixer.
  - Menambahkan `framer-motion` bila dipilih saat eksekusi.
- `index.html`
  - Menyediakan root app dan metadata dasar landing page.
- `vite.config.ts`
  - Konfigurasi dasar Vite untuk React.
- `tsconfig.json`
  - Menetapkan TypeScript config standar Vite React.

### Styling System

- `tailwind.config.js` atau `tailwind.config.ts`
  - Mendefinisikan content paths, extend color palette, font family, shadow, spacing, dan animation tokens ringan.
- `postcss.config.js`
  - Mengaktifkan pipeline Tailwind.
- `src/index.css`
  - Menetapkan Tailwind layers, base styles, body background, typography defaults, utility tambahan ringan, dan scroll behavior.

### App Structure

- `src/main.tsx`
  - Entry point React.
- `src/App.tsx`
  - Menyusun urutan section landing page dan wrapper layout utama.

### Data Layer Sederhana

- `src/data/profile.ts`
  - Menyimpan konten statis awal untuk hero, about, skills, experience, projects, testimonial, dan kontak agar komponen tetap bersih.

### Reusable UI Components

- `src/components/layout/Container.tsx`
  - Wrapper lebar konten dan spacing konsisten.
- `src/components/layout/Section.tsx`
  - Abstraksi section title, subtitle, dan spacing.
- `src/components/ui/Button.tsx`
  - Variasi CTA primer dan sekunder.
- `src/components/ui/Badge.tsx`
  - Untuk skill tags atau trust labels.
- `src/components/ui/BentoCard.tsx`
  - Card generik untuk hero stats, about highlights, atau project blocks.

### Page Sections

- `src/components/sections/HeroSection.tsx`
  - Headline, subheadline, CTA, social links, dan mini summary cards.
- `src/components/sections/AboutSection.tsx`
  - Ringkasan profil dan nilai kerja.
- `src/components/sections/SkillsSection.tsx`
  - Daftar skill terstruktur.
- `src/components/sections/ExperienceSection.tsx`
  - Timeline/card pengalaman.
- `src/components/sections/ProjectsSection.tsx`
  - Showcase proyek unggulan.
- `src/components/sections/TrustSection.tsx`
  - Testimonial/trust signals.
- `src/components/sections/ContactSection.tsx`
  - CTA konversi utama.
- `src/components/sections/Footer.tsx`
  - Footer ringkas.

### Optional Motion Layer

- `src/components/motion/Reveal.tsx`
  - Abstraksi animasi sederhana per section/card bila `framer-motion` digunakan.
- Jika tidak memakai Framer Motion, efek masuk menggunakan kombinasi opacity, translate, dan transition berbasis Tailwind/CSS.

## Implementation Steps

1. Bootstrap proyek React + Vite dengan template TypeScript.
2. Pasang dan konfigurasi Tailwind CSS, PostCSS, dan font system (`Inter` atau `Geist`).
3. Definisikan design tokens dasar: warna, container, radius, shadow, typography scale.
4. Buat data statis terpusat untuk seluruh konten landing page.
5. Bangun komponen layout dan UI reusable.
6. Implementasikan seluruh section sesuai information architecture.
7. Tambahkan interaksi hover, scroll reveal, dan polish visual.
8. Lakukan penyesuaian responsivitas mobile-tablet-desktop.
9. Validasi visual, aksesibilitas dasar, dan performa ringan.

## Acceptance Criteria

- Aplikasi berhasil dijalankan sebagai landing page single-page berbasis React + Vite.
- Semua section inti muncul dalam urutan yang sudah disepakati.
- Tema dark slate konsisten di seluruh halaman.
- CTA `Hubungi Saya` muncul jelas minimal pada hero dan contact section.
- Layout mobile-first tetap rapi tanpa overflow utama.
- Komponen terstruktur rapi dan reusable, bukan ditulis monolitik dalam satu file.
- Konten awal berada di layer data statis terpisah dari presentasi.
- Animasi hover/scroll terasa halus dan tidak berlebihan.

## Risks & Mitigations

- Risiko: repo kosong membuat banyak keputusan implementasi harus ditetapkan di awal.
  - Mitigasi: struktur file, section, dan dependency sudah dikunci di dokumen ini.
- Risiko: animasi berlebihan dapat menurunkan kesan profesional.
  - Mitigasi: gunakan motion halus, durasi pendek, dan fallback tanpa motion.
- Risiko: terlalu banyak konten membuat landing page terasa padat.
  - Mitigasi: prioritaskan whitespace dan bento grouping agar scanning tetap mudah.

## Verification Steps

Setelah fase eksekusi dimulai, verifikasi dilakukan melalui langkah berikut:

1. Install dependency dan pastikan proyek dapat dijalankan dalam mode development.
2. Periksa seluruh section tampil berurutan dan konsisten secara visual.
3. Uji responsive layout pada viewport mobile, tablet, dan desktop.
4. Uji hover states, CTA, dan transisi scroll.
5. Pastikan tidak ada error build atau error TypeScript/lint utama.
6. Review kembali hierarchy visual, spacing, dan keterbacaan teks.

## Deliverable

- Satu landing page profil profesional berbasis React, Vite, dan Tailwind CSS.
- Struktur komponen yang siap dikembangkan lebih lanjut.
- Visual direction yang konsisten dengan tema minimalis modern profesional.
