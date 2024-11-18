const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  let rawdata = fs.readFileSync("../thenbalog/_data/profiles.json");
  res.render("index", { data: JSON.parse(rawdata) });
});

module.exports = router;
