const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  let injuryData = fs.readFileSync("../thenbalog/_data/out_or_d2d.json");
  let depthData = fs.readFileSync("../thenbalog/_data/depth.json");
  let scoreboardData = {};
  try {
    fetch(process.env.API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        res.render("depth/index", {
          injuryData: JSON.parse(injuryData),
          scoreboardData: data,
          depthData: JSON.parse(depthData),
        });
      });
  } catch {
    res.render("depth/index", { errorMessage: "something went wrong" });
  }
});

module.exports = router;
