// npm imports
const express = require('express');
const router = express.Router();

// file imports
const controller = require("../controllers/controller");

router.get('/',controller.get_root);

router.post('/',controller.post_root);

router.post('/products/create',controller.post_productCreate);

router.put('/products/update',controller.put_productUpdate);

module.exports = router;