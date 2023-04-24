const express = require("express");
const router = express.Router();

const {
  stock_data,
  twitter_sentiments,
  stock_data_and_twitter_sentiments,
  testing_results,
  decision_tree_stock_data,
  decision_tree_twitter_sentiments,
  decision_tree_stock_data_and_twitter_sentiments,
  bilstm_stock_data,
  bilstm_twitter_sentiments,
  bilstm_stock_data_and_twitter_sentiments,
  bilstm_testing_results,
  rnn_stock_data,
  rnn_twitter_sentiments,
  rnn_stock_data_and_twitter_sentiments,
  rnn_testing_results,
  gru_stock_data,
  gru_stock_data_and_twitter_sentiments,
  gru_testing_results,
  gru_twitter_sentiments,
} = require("../controllers/stock");

router.post("/stock_data", stock_data);
router.post("/twitter_sentiments", twitter_sentiments);
router.post(
  "/stock_data_and_twitter_sentiments",
  stock_data_and_twitter_sentiments
);
router.post("/testing_results", testing_results);

router.post("/dt/stock_data", decision_tree_stock_data);
router.post("/dt/twitter_sentiments", decision_tree_twitter_sentiments);
router.post(
  "/dt/stock_data_and_twitter_sentiments",
  decision_tree_stock_data_and_twitter_sentiments
);

router.post("/bilstm/stock_data", bilstm_stock_data);
router.post("/bilstm/twitter_sentiments", bilstm_twitter_sentiments);
router.post(
  "/bilstm/stock_data_and_twitter_sentiments",
  bilstm_stock_data_and_twitter_sentiments
);
router.post("/bilstm/testing_results", bilstm_testing_results);

router.post("/rnn/stock_data", rnn_stock_data);
router.post("/rnn/twitter_sentiments", rnn_twitter_sentiments);
router.post(
  "/rnn/stock_data_and_twitter_sentiments",
  rnn_stock_data_and_twitter_sentiments
);
router.post("/rnn/testing_results", rnn_testing_results);

router.post("/gru/stock_data", gru_stock_data);
router.post("/gru/twitter_sentiments", gru_twitter_sentiments);
router.post(
  "/gru/stock_data_and_twitter_sentiments",
  gru_stock_data_and_twitter_sentiments
);
router.post("/gru/testing_results", gru_testing_results);

module.exports = router;
