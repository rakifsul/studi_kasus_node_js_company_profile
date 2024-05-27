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
    -   [Langkah-langkah](#langkah-langkah)
        -   [Agar Lebih Jelas](#agar-lebih-jelas)
        -   [Menginisialisasi Project dengan npm](#menginisialisasi-project-dengan-npm)
        -   [Meng-install Dependencies](#meng-install-dependencies)
        -   [Membuat File ".env.example" dan ".env"](#membuat-file-envexample-dan-env)
        -   [Membuat File "app.js"](#membuat-file-appjs)
        -   [Membuat Folder "controllers"](#membuat-folder-controllers)
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

-   Pembaca mengenal apa itu aplikasi company profile.
-   Pembaca mampu membuat aplikasi company profile yang dinamis dengan Node JS dan database dari jenis SQL (SQLite dan MySQL).
-   Pembaca mampu menerapkan sistem login dan register pada aplikasi company profile.
-

## Prasyarat

Prasyarat dari artikel ini adalah:

-   Menggunakan Windows 11.
-   Menggunakan Node JS versi 20.9.0.
-   Telah menginstall MySQL Server.
-   Telah menginstall MySQL client (bebas, asal Anda bisa menggunakannya).
-   Telah menguasai HTML, CSS, dan JavaScript secara lancar.

## Langkah-langkah

Walaupun saya telah menyediakan file project yang sudah jadi, ada baiknya jika Anda tahu langkah demi langkah yang harus dilakukan untuk membentuk project tersebut.

Di bagian ini, Anda akan dijelaskan bagaimana membentuk project tersebut.

Di bagian ini, saya tidak akan banyak menjelaskan kode.

Itu karena bagian "Langkah-Langkah" terfokus bagaimana cara membentuk project yang siap pakai.

Adapun pembahasan ada pada bagian "Pembahasan".

### Agar Lebih Jelas

Project ini akan dibuat dalam folder bernama "company_profile".

Karena project yang kita bahas memiliki subfolder yang banyak dan masing masing subfolder juga ada isinya, maka sepakati bahwa tiap nama subfolder atau file path-nya relatif terhadap folder project.

Sebagai contoh:

-   Jika saya mengatakan "package.json", itu artinya adalah file "company_profile/package.json".
-   Jika saya menulis subfolder "controllers", itu artinya adalah subfolder "company_profile/controllers".
-   Jika saya menulis file "routes/admin.js", itu artinya adalah file "company_profile/routes/admin.js".
-   Selain itu, jika saya menulis folder project, itu artinya adalah folder "company_profile".

### Menginisialisasi Project dengan npm

Pertama, buatlah sebuah folder bernama "company_profile".

Kemudian, masuk ke dalam folder tersebut dengan:

```
cd company_profile
```

Selanjutnya, jalankan perintah ini:

```
npm init -y
```

Nanti, Anda akan mendapatkan file "package.json".

Sekarang, replace isi file "package.json" dengan kode ini:

```
{
    "name": "company_profile",
    "version": "2024.05.28",
    "main": "app.js",
    "private": true,
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon -e js,ejs,html -w . -w public -w views -w routes -w models app.js --debug",
        "db:dev:refresh": "npx knex migrate:rollback --env development --knexfile ./databases/knexfile.js && npx knex migrate:latest --env development --knexfile ./databases/knexfile.js",
        "db:stg:refresh": "npx knex migrate:rollback --env staging --knexfile ./databases/knexfile.js && npx knex migrate:latest --env staging --knexfile ./databases/knexfile.js",
        "db:prod:refresh": "npx knex migrate:rollback --env production --knexfile ./databases/knexfile.js && npx knex migrate:latest --env production --knexfile ./databases/knexfile.js"
    },
    "dependencies": {
        "bcryptjs": "^2.4.3",
        "connect-flash": "^0.1.1",
        "cookie-parser": "~1.4.6",
        "dotenv": "^16.0.3",
        "ejs": "~3.1.9",
        "express": "~4.18.2",
        "express-session": "^1.17.3",
        "http-errors": "~2.0.0",
        "joi": "^17.9.1",
        "knex": "^2.4.2",
        "morgan": "~1.10.0",
        "multer": "^1.4.3",
        "mysql2": "^3.2.1",
        "node-os-utils": "^1.3.7",
        "session-file-store": "^1.5.0",
        "sqlite3": "^5.1.6",
        "uuid": "^9.0.0"
    },
    "devDependencies": {
        "nodemon": "^2.0.22"
    }
}
```

### Meng-install Dependencies

Saat ini, Anda telah menginisialisasi project.

Dengan menginisialisasi project, Anda mendapatkan file "package.json"

Di file "package.json" itulah dependencies akan atau telah didaftarkan.

Maka dari itu, jalankan ini dari folder project:

```
npm install
```

Itu untuk meng-install dan mendaftarkan dependencies yang telah terdaftar.

Jika itu sudah dilakukan, maka akan muncul folder baru di dalam folder project bernama folder "node_modules".

### Membuat File ".env.example" dan ".env"

Buatlah file ".env.example" dan ".env", kemudian isi dengan kode ini:

```
BASE_URL=http://localhost:3000
SESSION_SECRET=secret1

# pilih salah satu
KNEX_ENV=development
#KNEX_ENV=staging
#KNEX_ENV=production

# development database (jangan gunakan path. nama file saja.)
KNEX_DEV_DATABASE=company_profile-dev.sqlite3

# staging database
KNEX_STG_HOST=127.0.0.1
KNEX_STG_PORT=3306
KNEX_STG_USER=root
KNEX_STG_PASSWORD=root
KNEX_STG_DATABASE=company_profile-stg

# production database
KNEX_PROD_HOST=127.0.0.1
KNEX_PROD_PORT=3306
KNEX_PROD_USER=root
KNEX_PROD_PASSWORD=root
KNEX_PROD_DATABASE=company_profile-prod
```

### Membuat File "app.js"

Buatlah file "app.js", kemudian isi dengan kode ini:

```
// script ini adalah script utama dari aplikasi ini.
// tugasnya adalah melakukan konfigurasi umum pada aplikasi ini.

// begin: import modules
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("connect-flash");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const url = require("url");
require("dotenv").config();

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
// end: import modules

// inisialisasi expressjs
const app = express();

// set view folder ke folder "views"
app.set("views", path.join(__dirname, "views"));

// set view engine yang digunakan adalah EJS
app.set("view engine", "ejs");

// inisialisasi morgan
app.use(logger("dev"));

// parse body json
app.use(express.json({ limit: "100mb" }));

// parse body urlencoded
app.use(
    express.urlencoded({
        limit: "100mb",
        extended: true,
        parameterLimit: 100000,
    })
);

// setup multer agar bisa upload gambar
app.use(
    multer({
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, "./uploads");
            },
            filename: (req, file, callback) => {
                callback(null, uuidv4() + "-" + file.originalname);
            },
        }),
        fileFilter: (req, file, callback) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
                callback(null, true);
            } else {
                callback(null, false);
            }
        },
    }).single("upload")
);

// parse cookie header
app.use(cookieParser());

// agar bisa menggunakan session
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        // store: new FileStore(), // jika di-enable simpan session di file (ada bug nya)
        resave: false,
        saveUninitialized: false,
    })
);

// inisialisasi connect-flash
app.use(flash());

// setup folder statis untuk menyimpan resources
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(__dirname + "/uploads"));

// route admin ada di path "/admin" nantinya pada URL.
app.use("/admin", adminRouter);

// route auth ada di path "/auth" nantinya pada URL.
app.use("/auth", authRouter);

// route "/" ada di path "/" nantinya pada URL.
app.use("/", indexRouter);

// setup halaman error 404 jika terjadi
app.use(function (req, res, next) {
    next(createError(404));
});

// setup halaman error lainnya jika terjadi
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        error: {
            message: err.message,
            status: err.status,
            stack: err.stack,
        },
    });
});

// jalankan server pada port yang ada di BASE_URL atau 3000 jika tidak ada
const port = url.parse(process.env.BASE_URL).port | 3000;
app.listen(port, function () {
    console.log(`server berjalan di port ${port}`);
});
```

### Membuat Folder "controllers"

Buatlah folder bernama "controllers", kemudian isi dengan file-file ini:

-   admin.js
-   auth.js
-   index.js

Isi file "controllers/admin.js" dengan kode ini:

```
// script ini akan dipanggil di routes/admin.js

const bcrypt = require("bcryptjs");
const fs = require("fs");
const createError = require("http-errors");
const osu = require("node-os-utils");
const knex = require("../databases/connection");

// render halaman admin index
module.exports.getIndex = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // render dan kirimkan data tadi ke front end
        res.render("admin/layout.ejs", {
            child: "admin/index.ejs",
            clientScript: "admin/index.js.ejs",
            data: {
                text: text,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// dapatkan data penggunaan CPU
module.exports.getCPUUsage = async function (req, res, next) {
    osu.cpu.usage().then((cpuPercentage) => {
        res.status(200).json({
            name: "CPU Usage",
            value: cpuPercentage,
        });
    });
};

// dapatkan data penggunaan memory
module.exports.getMemoryUsage = function (req, res) {
    osu.mem.used().then((memUsed) => {
        res.status(200).json({
            name: "Memory Usage",
            value: (memUsed.usedMemMb / memUsed.totalMemMb) * 100,
        });
    });
};

// render halaman settings
module.exports.getSettings = async function (req, res) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // render dan kirimkan data tadi ke front end
        res.render("admin/layout", {
            child: "admin/settings.ejs",
            clientScript: "admin/settings.js.ejs",
            data: {
                adminEmail: req.session.admin.email,
                text: text,
                errors: req.flash("errors"),
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle edit settings
module.exports.postSettingsEdit = async function (req, res, next) {
    try {
        // bongkar request body
        const { email, password } = req.body;

        if (password && email) {
            // jika password dan email ada

            // update data admin
            const ret = await knex("admins")
                .where({ email: req.session.admin.email })
                .update({
                    email: email,
                    password: bcrypt.hashSync(password, 12),
                });
        } else if (email) {
            // jika hanya email yang ada

            // update data admin
            const ret = await knex("admins").where({ email: req.session.admin.email }).update({
                email: email,
            });
        }

        // redirect ke settings
        res.redirect("/admin/settings");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman messages
module.exports.getMessagesIndex = async function (req, res) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // ambil data messages dari tabel messages
        const messages = await knex("messages");

        // render dan kirimkan data tadi ke front end
        res.render("admin/layout", {
            child: "admin/messages.ejs",
            clientScript: "admin/messages.js.ejs",
            data: {
                text: text,
                results: messages,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle delete message
module.exports.getMessagesDelete = async function (req, res, next) {
    try {
        // delete message yang id-nya adalah req.params.id
        // atau dengan kata lain
        // yang id-nya sama dengan yang ada di URL
        await knex("messages")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke messages
        res.redirect("/admin/messages");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman texts
module.exports.getTextsIndex = async function (req, res) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // render dan kirimkan data tadi ke front end
        res.render("admin/layout", {
            child: "admin/texts.ejs",
            clientScript: "admin/texts.js.ejs",
            data: {
                adminEmail: req.session.admin.email,
                text: text,
                errors: req.flash("errors"),
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle edit data dari tabel texts
module.exports.postTextsEdit = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const target = await knex("texts").first();

        // update data tersebut
        const ret = await knex("texts").where({ _id: target._id }).update({
            siteTitle: req.body.siteTitle,
            siteSEOTitle: req.body.siteSEOTitle,
            siteDescription: req.body.siteDescription,
            siteSEODescription: req.body.siteSEODescription,
            aboutSubHeading: req.body.aboutSubHeading,
            aboutSubText: req.body.aboutSubText,
            infoSubHeading: req.body.infoSubHeading,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
        });

        // redirect ke halaman texts
        res.redirect("/admin/texts");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman skills
module.exports.getSkillsIndex = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // ambil data skills dari tabel skills
        const allSkills = await knex("skills");

        // render dan kirim data tersebut ke front end
        res.render("admin/layout.ejs", {
            child: "admin/skills.ejs",
            clientScript: "admin/skills.js.ejs",
            data: {
                results: allSkills,
                text: text,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle penambahan skill
module.exports.postSkillsAdd = async function (req, res, next) {
    try {
        // bongkar request body
        const { title, level } = req.body;

        // insert skill baru, judul dan levelnya
        const skillId = await knex("skills").insert({
            title: title,
            level: level,
        });

        // redirect ke halaman skills
        res.redirect("/admin/skills");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle delete skill
module.exports.getSkillsDelete = async function (req, res, next) {
    try {
        // delete skill yang id-nya adalah req.params.id
        // atau dengan kata lain
        // yang id-nya sama dengan yang ada di URL
        await knex("skills")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke halaman skills
        res.redirect("/admin/skills");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman services
module.exports.getServicesIndex = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // ambil data services dari tabel services
        const allServices = await knex("services");

        // render dan kirim data tersebut ke front end
        res.render("admin/layout.ejs", {
            child: "admin/services.ejs",
            clientScript: "admin/services.js.ejs",
            data: {
                results: allServices,
                text: text,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle tambah service
module.exports.postServicesAdd = async function (req, res, next) {
    try {
        // bongkar request body
        const { title, description, svg } = req.body;

        // insert service baru, judul, deskripsi, dan svg nya
        const serviceId = await knex("services").insert({
            title: title,
            description: description,
            svg: svg,
        });

        // redirect ke halaman services
        res.redirect("/admin/services");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle delete service
module.exports.getServicesDelete = async function (req, res, next) {
    try {
        // delete service yang id-nya adalah req.params.id
        // atau dengan kata lain
        // yang id-nya sama dengan yang ada di URL
        await knex("services")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke halaman services
        res.redirect("/admin/services");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman carousel
module.exports.getCarouselsIndex = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // ambil data carousels dari tabel carousels
        const allCarousels = await knex("carousels");

        // render dan kirim data tadi ke front end
        res.render("admin/layout.ejs", {
            child: "admin/carousels.ejs",
            clientScript: "admin/carousels.js.ejs",
            data: {
                results: allCarousels,
                text: text,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle upload gambar carousel
module.exports.postCarouselsUpload = async function (req, res, next) {
    try {
        if (req.file) {
            // jika request file ada, yang artinya gambar diupload

            // bongkar request body
            const { title, description } = req.body;

            // insert carousel baru, judul, deskripsi, dan path dari file gambarnya
            const fileId = await knex("carousels").insert({
                title: title,
                description: description,
                path: req.file.path.replace("\\", "/"),
            });
        }

        // redirect ke halaman carousels
        res.redirect("/admin/carousels");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle delete carousel
module.exports.getCarouselsDelete = async function (req, res, next) {
    try {
        // dapatkan dulu datanya
        const willBeDeleted = await knex("carousels").where({
            _id: req.params.id,
        });

        // delete carousel yang id-nya adalah req.params.id
        // atau dengan kata lain
        // yang id-nya sama dengan yang ada di URL
        // ini yang di database
        await knex("carousels")
            .where({
                _id: req.params.id,
            })
            .del();

        // hapus file nya
        // ini yang di folder upload
        fs.unlinkSync("./" + willBeDeleted[0].path);

        // redirect ke halaman carousels
        res.redirect("/admin/carousels");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman portfolios
module.exports.getPortfoliosIndex = async function (req, res, next) {
    try {
        // ambil data text pertama dari tabel texts
        const text = await knex("texts").first();

        // ambil data portfolios dari tabel portfolios
        const allPortfolios = await knex("portfolios");

        // render dan kirim data tadi ke front end
        res.render("admin/layout.ejs", {
            child: "admin/portfolios.ejs",
            clientScript: "admin/portfolios.js.ejs",
            data: {
                results: allPortfolios,
                text: text,
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle upload gambar portfolio
module.exports.postPortfoliosUpload = async function (req, res, next) {
    try {
        if (req.file) {
            // jika request file ada, yang artinya gambar diupload

            // bongkar request body
            const { title } = req.body;

            // insert portfolio baru, judul, dan path dari file gambarnya
            const fileId = await knex("portfolios").insert({
                title: title,
                path: req.file.path.replace("\\", "/"),
            });
        }

        // redirect ke halaman portfolios
        res.redirect("/admin/portfolios");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle delete portfolio
module.exports.getPortfoliosDelete = async function (req, res, next) {
    try {
        // dapatkan dulu datanya
        const willBeDeleted = await knex("portfolios").where({
            _id: req.params.id,
        });

        // delete portfolio yang id-nya adalah req.params.id
        // atau dengan kata lain
        // yang id-nya sama dengan yang ada di URL
        // ini yang di database
        await knex("portfolios")
            .where({
                _id: req.params.id,
            })
            .del();

        // hapus file nya
        // ini yang di folder upload
        fs.unlinkSync("./" + willBeDeleted[0].path);

        // redirect ke halaman portfolios
        res.redirect("/admin/portfolios");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};
```

Isi file "controllers/auth.js" dengan kode ini:

```
// script ini akan dipanggil di routes/auth.js

// begin: import modules
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const knex = require("../databases/connection");
// end: import modules

// render halaman login
module.exports.getLogin = async function (req, res, next) {
    try {
        // ambil data tabel texts
        const text = await knex("texts").first();

        // render dan kirim data tadi ke front end
        res.render("auth/layout.ejs", {
            child: "auth/login.ejs",
            clientScript: "auth/login.js.ejs",
            data: {
                text: text,
                errors: req.flash("errors"),
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle form login
module.exports.postLogin = async function (req, res, next) {
    // validasi request body
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    const validObj = schema.validate(req.body);
    if (validObj.error) {
        // jika ada error dalam request body

        // buat pesan error flash
        req.flash("errors", validObj.error.details);
        res.status(422).redirect("/auth/login");
        res.end();
        return;
    }

    // bongkar request body
    const { email, password } = req.body;

    try {
        // ambil admin dari tabel admins yang emailnya adalah email dari request body tadi
        const admin = await knex("admins").where({ email: email }).first();

        if (admin) {
            // jika admin tadi ada

            if (email == admin.email) {
                // jika email dari request body sama dengan yang di tabel

                // bandingkan passwordnya
                if (bcrypt.compareSync(password, admin.password) == true) {
                    // jika password sama

                    // masukkan data-data ini ke session
                    req.session.isLoggedIn = true;
                    req.session.admin = admin;
                    req.session.save();

                    // redirect ke halaman admin
                    res.redirect("/admin");
                } else {
                    // jika password beda

                    // redirect ke halaman login
                    res.redirect("/auth/login");
                }
            } else {
                // jika email dari request body beda dengan yang di tabel

                // redirect ke halaman login
                res.redirect("/auth/login");
            }
        } else {
            // jika admin tidak ada

            // redirect ke halaman login
            res.redirect("/auth/login");
        }
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// render halaman register
module.exports.getRegister = async function (req, res, next) {
    try {
        // ambil data tabel texts
        const text = await knex("texts").first();

        // render dan kirim data tadi ke front end
        res.render("auth/layout.ejs", {
            child: "auth/register.ejs",
            clientScript: "auth/register.js.ejs",
            data: {
                text: text,
                errors: req.flash("errors"),
            },
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle form register
module.exports.postRegister = async function (req, res, next) {
    // validasi request body
    const schema = Joi.object({
        email: Joi.string().required(),
        name: Joi.string().required(),
        password: Joi.string().required(),
        password_repeat: Joi.ref("password"),
    }).with("password", "password_repeat");

    const validObj = schema.validate(req.body);
    if (validObj.error) {
        // jika ada error dalam request body

        // buat pesan error flash
        console.log(validObj.error.details);
        req.flash("errors", validObj.error.details);
        res.status(422).redirect("/auth/register");
        res.end();
        return;
    }

    // bongkar request body
    const { email, name, password } = req.body;
    try {
        // masukkan data admin baru ke tabel admins
        const admin = await knex("admins").insert({
            email: email,
            name: name,
            password: bcrypt.hashSync(password, 12),
        });

        // redirect ke halaman login
        res.redirect("/auth/login");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// handle logout
module.exports.getLogout = function (req, res, next) {
    req.session.destroy((err) => {
        console.log(err);
        res.clearCookie("connect.sid");
        res.redirect("/auth/login");
    });
};
```

Isi file "controllers/index.js" dengan kode ini:

```
// script ini akan dipanggil di routes/index.js

// begin: import modules
const createError = require("http-errors");
const knex = require("../databases/connection");
// end: import modules

// merender homepage
module.exports.getIndex = async function (req, res, next) {
    try {
        // ambil isi masing-masing tabel dan simpan ke variabel
        const text = await knex("texts").first();
        const skills = await knex("skills");
        const services = await knex("services");
        const carousels = await knex("carousels");
        const portfolios = await knex("portfolios");

        // render dan kirimkan datanya yang berupa isi tabel
        res.render("index.ejs", {
            text: text,
            skills: skills,
            services: services,
            carousels: carousels,
            portfolios: portfolios,
        });
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

// meng-handle form kontak post
module.exports.postIndexSendMessage = async function (req, res, next) {
    try {
        // bongkar request body
        const { name, email, message } = req.body;

        // insert data pesan form kontak
        const messageId = await knex("messages").insert({
            name: name,
            email: email,
            message: message,
        });

        // refresh halaman
        res.redirect("/");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};
```

## Bersambung...
