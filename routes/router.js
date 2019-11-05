// npm imports
const express = require('express');
const router = express.Router();

// file imports
const controller = require("../controllers/controller");

router.get('/',controller.get_root);

router.post('/',controller.post_root);

module.exports = router;