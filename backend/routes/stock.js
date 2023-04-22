const express = require("express");
const router = express.Router();

const {
  stock_data,
  twitter_sentiments,
  stock_data_and_twitter_sentiments,
  testing_results,
} = require("../controllers/stock");

router.post("/stock_data", stock_data);
router.post("/twitter_sentiments", twitter_sentiments);
router.post(
  "/stock_data_and_twitter_sentiments",
  stock_data_and_twitter_sentiments
);
router.post("/testing_results", testing_results);

module.exports = router;
