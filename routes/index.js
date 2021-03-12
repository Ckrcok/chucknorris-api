var express = require("express");
var router = express.Router();
const chucknorrisCrtl = require("../controller/chuckNorris");

/* GET home page. */
router.get("/", chucknorrisCrtl.index);

module.exports = router;
