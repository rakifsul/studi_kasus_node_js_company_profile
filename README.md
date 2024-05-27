# Studi Kasus Node JS Membuat Aplikasi Company Profile

-   [Studi Kasus Node JS Membuat Aplikasi Company Profile](#studi-kasus-node-js-membuat-aplikasi-company-profile)
    -   [Cara Mencoba Kode Ini](#cara-mencoba-kode-ini)
        -   [Mencoba Di Environment Development](#mencoba-di-environment-development)
        -   [Mencoba Di Environment Production](#mencoba-di-environment-production)
        -   [Mencoba Di Environment Staging](#mencoba-di-environment-staging)
        -   [Mengunjungi Aplikasi](#mengunjungi-aplikasi)
        -   [Mengubah Favicon](#mengubah-favicon)
    -   [Source Code Project Ini](#source-code-project-ini)
    -   [Jika Ingin Traktir Saya](#jika-ingin-traktir-saya)
    -   [Pendahuluan](#pendahuluan)
    -   [Tujuan](#tujuan)
    -   [Prasyarat](#prasyarat)
    -   [Langkah-Langkah](#langkah-langkah)
    -   [Bersambung...](#bersambung)

## Cara Mencoba Kode Ini

Sekarang, saya akan membahas cara mencoba kode ini di komputer lokal dengan sistem operasi Windows 11.

Untuk mencoba kode ini, copy file .env.example sebagai .env

Sekarang, kita memiliki file .env dalam folder source code yang secara default isinya sama dengan .env.example.

Selanjutnya, Anda bisa mengubah isi dari .env sesuai dengan detail database dan sistem Anda.

Namun, untuk kesamaan, jangan ubah dulu isi dari .env.

Kode ini membutuhkan MySQL server untuk staging dan production.

Jadi, pastikan Anda telah menginstallnya di komputer Anda dan membuat databasenya sesuai konfigurasi yang ada di file .env tadi.

### Mencoba Di Environment Development

Sekarang, kita telah memiliki database di MySQL dan file .env yang sudah dikonfigurasi.

Pastikan Anda berada dalam folder source code.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run db:dev:refresh
```

Catat bahwa dev menggunakan sqlite, jadi tidak perlu install MySQL.

Selanjutnya, jalankan:

```
npm run dev
```

### Mencoba Di Environment Production

Karena versi production dari aplikasi ini memerlukan MySQL server, maka install itu terlebih dahulu.

Selanjutnya, buat database bernama "company_profile-prod".

Selanjutnya, ubah .env bagian ini menjadi:

```
# pilih salah satu
#KNEX_ENV=development
#KNEX_ENV=staging
KNEX_ENV=production
```

Pastikan bagian ini sesuai dengan settingan MySQL Anda:

```
# production database
KNEX_PROD_HOST=127.0.0.1
KNEX_PROD_PORT=3306
KNEX_PROD_USER=root
KNEX_PROD_PASSWORD=root
KNEX_PROD_DATABASE=company_profile-prod
```

Sekarang, kita telah memiliki database di MySQL dan file .env yang sudah dikonfigurasi.

Pastikan Anda berada dalam folder source code.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run db:prod:refresh
```

Selanjutnya, jalankan:

```
npm run dev
```

### Mencoba Di Environment Staging

Pastikan .env bagian ini seperti ini:

```
# pilih salah satu
#KNEX_ENV=development
KNEX_ENV=staging
#KNEX_ENV=production
```

Caranya serupa dengan di environment production, tinggal replace prod dengan stg di langkah ini:

```
npm run db:stg:refresh
```

### Mengunjungi Aplikasi

Terakhir, buka browser Anda ke alamat yang tertera di BASE_URL yang ada di .env

Secara default adalah:

http://localhost:3000

Di bagian paling bawah halaman tersebut, ada link login dan register untuk admin.

Default admin login:

```
username: admin@example.com
password: admin
```

### Mengubah Favicon

Untuk mengubah favicon di halaman depan, replace favicon.png yang ada di folder "/public/img" yang ada di dalam folder source code.

## Source Code Project Ini

Source code project ini ada di folder "company_profile".

## Jika Ingin Traktir Saya

Artikel ini gratis.

Jika Anda ingin traktir saya, kunjungi link saya:

https://taplink.cc/rakifsul

Di sana ada link untuk traktirnya dan link lainnya.

Selamat menikmati.

## Pendahuluan

Node JS telah menjadi salah satu platform yang populer dalam pengembangan aplikasi web, terutama bagi mereka yang mencari efisiensi dan kinerja tinggi.

Dengan menggunakan JavaScript di sisi server, Node JS menawarkan berbagai keunggulan seperti non-blocking I/O dan arsitektur event-driven yang memungkinkan penanganan banyak koneksi secara simultan tanpa membebani server.

Pada artikel ini, saya akan membahas studi kasus tentang cara membuat aplikasi company profile menggunakan Node JS.

Aplikasi company profile adalah sebuah aplikasi web yang dirancang untuk menampilkan informasi penting tentang sebuah perusahaan.

Informasi ini mencakup sejarah perusahaan, visi dan misi, layanan atau produk yang ditawarkan, portofolio proyek, hingga informasi kontak.

Aplikasi ini bertujuan untuk memberikan gambaran lengkap dan profesional kepada klien atau calon pelanggan tentang identitas dan kapabilitas perusahaan.

Tujuan dari artikel ini adalah untuk memberikan panduan praktis langkah demi langkah bagi pengembang pemula hingga menengah dalam membangun aplikasi company profile yang fungsional dan menarik.

Kita akan membahas mulai dari pembentukan struktur file dan folder project, penulisan source code, pembuatan halaman-halaman web, hingga implementasi fitur-fitur dinamis yang umum digunakan dalam aplikasi company profile.

Dengan mengikuti tutorial ini, diharapkan pembaca akan mendapatkan pemahaman yang lebih baik tentang penggunaan Node JS dalam konteks dunia nyata, serta keterampilan praktis yang dapat langsung diterapkan dalam proyek pengembangan mereka.

Mari kita mulai.

## Tujuan

Tujuan dari artikel ini adalah:

-   Pembaca mengenal apa itu aplikasi company profile
-   Pembaca mampu membuat aplikasi company profile yang dinamis dengan Node JS dan database dari jenis SQL (SQLite dan MySQL)
-   Pembaca mampu menerapkan sistem login dan register pada aplikasi company profile
-

## Prasyarat

Prasyarat dari artikel ini adalah:

-   Menggunakan Windows 11
-   Menggunakan Node JS versi 20.9.0
-   Telah menginstall MySQL Server
-   Telah menginstall MySQL client (bebas, asal Anda bisa menggunakannya)

## Langkah-Langkah

## Bersambung...
