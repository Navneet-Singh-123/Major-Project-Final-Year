import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    stockname: "",
    startdate: "",
    enddate: "",
  });

  const [stockDataImgs, setStockDataImgs] = useState([]);
  const [twitterSentimentsImgs, setTwitterSentimentsImgs] = useState([]);
  const [
    stockDataAndTwitterSentimentsImgs,
    setStockDataAndTwitterSentimentsImgs,
  ] = useState([]);
  const [testingResultsImgs, setTestingResultsImgs] = useState([]);

  const { stockname, startdate, enddate } = data;

  useEffect(() => {}, [
    stockDataImgs,
    twitterSentimentsImgs,
    stockDataAndTwitterSentimentsImgs,
    testingResultsImgs,
  ]);

  const submit = async (e) => {
    e.preventDefault();

    const res1 = await axios.post("http://localhost:8000/stocks/stock_data", {
      stockname: stockname,
      start_date: startdate,
      end_date: enddate,
    });
    setStockDataImgs((stockDataImgs) => [...stockDataImgs, res1.data]);

    const res2 = await axios.post(
      "http://localhost:8000/stocks/twitter_sentiments",
      {
        stockname: stockname,
        start_date: startdate,
        end_date: enddate,
      }
    );
    setTwitterSentimentsImgs((twitterSentimentsImgs) => [
      ...twitterSentimentsImgs,
      res2.data,
    ]);

    const res3 = await axios.post(
      "http://localhost:8000/stocks/stock_data_and_twitter_sentiments",
      {
        stockname: stockname,
        start_date: startdate,
        end_date: enddate,
      }
    );
    setStockDataAndTwitterSentimentsImgs(
      (stockDataAndTwitterSentimentsImgs) => [
        ...stockDataAndTwitterSentimentsImgs,
        res3.data,
      ]
    );

    const res4 = await axios.post(
      "http://localhost:8000/stocks/testing_results",
      {
        stockname: stockname,
        start_date: startdate,
        end_date: enddate,
      }
    );
    setTestingResultsImgs((testingResultsImgs) => [
      ...testingResultsImgs,
      res4.data,
    ]);
  };

  const updateForm = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="heading">
        Impact of Twitter Sentiments on Stock Price Prediction
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3em",
          marginBottom: "2rem",
        }}
      >
        <form onSubmit={submit} className="form-box">
          <input
            type="text"
            className="form-input"
            name="stockname"
            placeholder="Stock Name"
            onChange={updateForm}
            value={stockname}
            required
          />
          <input
            type="text"
            className="form-input"
            name="startdate"
            placeholder="Start Date (YYYY-MM-DD)"
            onChange={updateForm}
            value={startdate}
            required
          />
          <input
            type="text"
            className="form-input"
            name="enddate"
            placeholder="End Date (YYYY-MM-DD)"
            onChange={updateForm}
            value={enddate}
            required
          />
          <button className="form-btn">Display Trend</button>
        </form>
      </div>

      {stockDataImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data
          </div>
          {stockDataImgs[0].map((cur) => (
            <img
              src={cur["url"]}
              alt=""
              style={{
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
      {twitterSentimentsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Twitter Sentiments
          </div>
          {twitterSentimentsImgs[0].map((cur) => (
            <img
              src={cur["url"]}
              alt=""
              style={{
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
      {stockDataAndTwitterSentimentsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data and Twitter Sentiments
          </div>
          {stockDataAndTwitterSentimentsImgs[0].map((cur) => (
            <img
              src={cur["url"]}
              alt=""
              style={{
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
      {testingResultsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">Testing Results</div>
          {testingResultsImgs[0].map((cur) => (
            <img
              src={cur["url"]}
              alt=""
              style={{
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
