const bcrypt = require("bcryptjs");
const fs = require("fs");
const createError = require("http-errors");
const Joi = require("joi");
const osu = require("node-os-utils");
const helper = require("../lib/helper");
const knex = require("../databases/connection");
const sessionChecker = require("../middlewares/sessionchecker");

//
module.exports.getIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();

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

//
module.exports.getCPUUsage = async function (req, res, next) {
    osu.cpu.usage().then((cpuPercentage) => {
        res.status(200).json({
            name: "CPU Usage",
            value: cpuPercentage,
        });
    });
};

//
module.exports.getMemoryUsage = function (req, res) {
    osu.mem.used().then((memUsed) => {
        res.status(200).json({
            name: "Memory Usage",
            value: (memUsed.usedMemMb / memUsed.totalMemMb) * 100,
        });
    });
};

//
module.exports.getSettings = async function (req, res) {
    try {
        const text = await knex("texts").first();

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

//
module.exports.postSettingsEdit = async function (req, res, next) {
    try {
        const { email, password } = req.body;

        if (password && email) {
            const ret = await knex("admins")
                .where({ email: req.session.admin.email })
                .update({
                    email: email,
                    password: bcrypt.hashSync(password, 12),
                });
        } else if (email) {
            const ret = await knex("admins").where({ email: req.session.admin.email }).update({
                email: email,
            });
        }

        res.redirect("/admin/settings");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getMessagesIndex = async function (req, res) {
    try {
        const text = await knex("texts").first();

        const messages = await knex("messages");

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

//
module.exports.getMessagesDelete = async function (req, res, next) {
    try {
        await knex("messages")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke /admin/messages
        res.redirect("/admin/messages");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getTextsIndex = async function (req, res) {
    try {
        const text = await knex("texts").first();

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

//
module.exports.postTextsEdit = async function (req, res, next) {
    try {
        const target = await knex("texts").first();

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

        res.redirect("/admin/texts");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getSkillsIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();

        const allSkills = await knex("skills");

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

//
module.exports.postSkillsAdd = async function (req, res, next) {
    try {
        const { title, level } = req.body;

        console.log(title);
        console.log(level);

        const skillId = await knex("skills").insert({
            title: title,
            level: level,
        });

        res.redirect("/admin/skills");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getSkillsDelete = async function (req, res, next) {
    try {
        await knex("skills")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke /admin/skills
        res.redirect("/admin/skills");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getServicesIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();

        const allServices = await knex("services");

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

//
module.exports.postServicesAdd = async function (req, res, next) {
    try {
        const { title, description, svg } = req.body;

        console.log(title);
        console.log(description);
        console.log(svg);

        const serviceId = await knex("services").insert({
            title: title,
            description: description,
            svg: svg,
        });

        res.redirect("/admin/services");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getServicesDelete = async function (req, res, next) {
    try {
        await knex("services")
            .where({
                _id: req.params.id,
            })
            .del();

        // redirect ke /admin/services
        res.redirect("/admin/services");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getCarouselsIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();

        const allCarousels = await knex("carousels");

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

//
module.exports.postCarouselsUpload = async function (req, res, next) {
    try {
        // jika request file ada
        if (req.file) {
            const { title, description } = req.body;

            const fileId = await knex("carousels").insert({
                title: title,
                description: description,
                path: req.file.path.replace("\\", "/"),
            });
        }

        res.redirect("/admin/carousels");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getCarouselsDelete = async function (req, res, next) {
    try {
        // hapus data di db nya.
        const willBeDeleted = await knex("carousels").where({
            _id: req.params.id,
        });

        await knex("carousels")
            .where({
                _id: req.params.id,
            })
            .del();

        // hapus file nya
        fs.unlinkSync("./" + willBeDeleted[0].path);

        // redirect ke /admin/carousels
        res.redirect("/admin/carousels");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getPortfoliosIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();

        const allPortfolios = await knex("portfolios");

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

//
module.exports.postPortfoliosUpload = async function (req, res, next) {
    try {
        // jika request file ada
        if (req.file) {
            const { title } = req.body;

            const fileId = await knex("portfolios").insert({
                title: title,
                path: req.file.path.replace("\\", "/"),
            });
        }

        res.redirect("/admin/portfolios");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};

//
module.exports.getPortfoliosDelete = async function (req, res, next) {
    try {
        // hapus data di db nya.
        const willBeDeleted = await knex("portfolios").where({
            _id: req.params.id,
        });

        await knex("portfolios")
            .where({
                _id: req.params.id,
            })
            .del();

        // hapus file nya
        fs.unlinkSync("./" + willBeDeleted[0].path);

        // redirect ke /admin/portfolios
        res.redirect("/admin/portfolios");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};
