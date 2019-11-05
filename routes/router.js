// npm imports
const express = require('express');
const router = express.Router();

// file imports
const controller = require("../controllers/controller");

router.get('/',controller.getRoot);

module.exports = router;