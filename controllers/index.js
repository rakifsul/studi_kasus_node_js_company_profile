const createError = require("http-errors");
const moment = require("moment");
const helper = require("../lib/helper");
const knex = require("../databases/connection");

//
module.exports.getIndex = async function (req, res, next) {
    try {
        const text = await knex("texts").first();
        const skills = await knex("skills");
        const services = await knex("services");
        const carousels = await knex("carousels");
        const portfolios = await knex("portfolios");
        console.log(carousels);

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

//
module.exports.postIndexSendMessage = async function (req, res, next) {
    try {
        const { name, email, message } = req.body;

        console.log(name);
        console.log(email);
        console.log(message);

        const messageId = await knex("messages").insert({
            name: name,
            email: email,
            message: message,
        });

        res.redirect("/");
    } catch (err) {
        console.log(err);
        next(createError(500));
    }
};
