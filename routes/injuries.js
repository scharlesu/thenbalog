const express = require("express");
const router = express.Router();
const fs = require("fs");
const { json } = require("stream/consumers");

router.get("/", (req, res) => {
  let injuryData = fs.readFileSync("../thenbalog/_data/injuries.json");
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
        res.render("injuries/index", {
          injuryData: JSON.parse(injuryData),
          scoreboardData: data,
        });
      });
  } catch {
    res.render("injuries/index", { errorMessage: "something went wrong" });
  }
});

module.exports = router;
