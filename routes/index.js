const express = require("express");
const router = express.Router();
const { addNewCat, fetchKittens, fetchToms, fetchQueens } = require("../controllers/cat-controller");
const { fetchSite } = require("../controllers/site-controller");

// default route add routes above
router.post("/api/add_cat/", addNewCat);

router.post("/api/fetch_kittens/", fetchKittens);

router.post("/api/fetch_toms/", fetchToms);

router.post("/api/fetch_queens/", fetchQueens);

router.post("/api/fetch_site/", fetchSite);

module.exports = router;
