// npm imports
const express = require('express');
const router = express.Router();

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({storage:storage});

// file imports
const controller = require("../controllers/controller");

router.get('/',controller.get_root);

router.get('/editHomepage',controller.get_editHomepage);

router.post('/saveHomepage',controller.post_saveHomePage);

module.exports = router;