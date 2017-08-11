const express = require("express");
const router = express.Router();
const { fetchKittens } = require("../controllers/kitten-controller");
const { fetchToms } = require("../controllers/tom-controller");
const { fetchQueens } = require("../controllers/queen-controller");

// default route add routes above
router.post("/api/fetch_kittens/", fetchKittens);

router.post("/api/fetch_toms/", fetchToms);

router.post("/api/fetch_queens", fetchQueens);

module.exports = router;
