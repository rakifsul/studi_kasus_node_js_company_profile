const express = require("express");
const indexController = require("../controllers/index");
const router = express.Router();

router.get("/", indexController.getIndex);

router.post("/send-message", indexController.postIndexSendMessage);

module.exports = router;
