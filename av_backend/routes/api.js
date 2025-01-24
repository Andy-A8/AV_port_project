const express = require("express");
const { getAllAlgorithms, getAlgorithmByName } = require("../controllers/algorithmController");

const router = express.Router();

router.get("/algorithms", getAllAlgorithms);
router.get("/algorithms/:name", getAlgorithmByName);

module.exports = router;
