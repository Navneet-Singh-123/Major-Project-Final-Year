import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const App = () => {
  const alert = useAlert();

  const [dir, setDir] = useState("");

  const [stockDataImgs, setStockDataImgs] = useState([]);
  const [twitterSentimentsImgs, setTwitterSentimentsImgs] = useState([]);
  const [
    stockDataAndTwitterSentimentsImgs,
    setStockDataAndTwitterSentimentsImgs,
  ] = useState([]);
  const [testingResultsImgs, setTestingResultsImgs] = useState([]);

  const [dt_stockDataImgs, setDTStockDataImgs] = useState([]);
  const [dt_twitterSentimentsImgs, setDTTwitterSentimentsImgs] = useState([]);
  const [
    dt_stockDataAndTwitterSentimentsImgs,
    setDTStockDataAndTwitterSentimentsImgs,
  ] = useState([]);

  const [BILSTM_stockDataImgs, setBILSTMStockDataImgs] = useState([]);
  const [BILSTM_twitterSentimentsImgs, setBILSTMTwitterSentimentsImgs] =
    useState([]);
  const [
    BILSTM_stockDataAndTwitterSentimentsImgs,
    setBILSTMStockDataAndTwitterSentimentsImgs,
  ] = useState([]);
  const [BILSTM_testingResults, setBILSTMTestingResults] = useState([]);

  const [rnn_stockDataImgs, setRNNStockDataImgs] = useState([]);
  const [rnn_twitterSentimentsImgs, setRNNTwitterSentimentsImgs] = useState([]);
  const [
    rnn_stockDataAndTwitterSentimentsImgs,
    setRNNStockDataAndTwitterSentimentsImgs,
  ] = useState([]);

  const [rnn_testingResults, setRNNTestingResults] = useState([]);

  const [GRU_stockDataImgs, setGRUStockDataImgs] = useState([]);
  const [GRU_twitterSentimentsImgs, setGRUTwitterSentimentsImgs] = useState([]);
  const [
    GRU_stockDataAndTwitterSentimentsImgs,
    setGRUStockDataAndTwitterSentimentsImgs,
  ] = useState([]);
  const [GRU_testingResults, setGRUTestingResults] = useState([]);

  useEffect(() => {
    console.log(
      stockDataImgs,
      twitterSentimentsImgs,
      stockDataAndTwitterSentimentsImgs,
      testingResultsImgs,
      dt_stockDataImgs,
      dt_twitterSentimentsImgs,
      dt_stockDataAndTwitterSentimentsImgs,
      BILSTM_stockDataImgs,
      BILSTM_stockDataAndTwitterSentimentsImgs,
      BILSTM_testingResults,
      BILSTM_twitterSentimentsImgs,
      rnn_stockDataImgs,
      rnn_twitterSentimentsImgs,
      rnn_stockDataAndTwitterSentimentsImgs,
      rnn_testingResults,
      GRU_stockDataImgs,
      GRU_twitterSentimentsImgs,
      GRU_stockDataAndTwitterSentimentsImgs,
      GRU_testingResults
    );
  }, [
    stockDataImgs,
    twitterSentimentsImgs,
    stockDataAndTwitterSentimentsImgs,
    testingResultsImgs,
    dt_stockDataImgs,
    dt_twitterSentimentsImgs,
    dt_stockDataAndTwitterSentimentsImgs,
    BILSTM_stockDataImgs,
    BILSTM_stockDataAndTwitterSentimentsImgs,
    BILSTM_testingResults,
    BILSTM_twitterSentimentsImgs,
    rnn_stockDataImgs,
    rnn_twitterSentimentsImgs,
    rnn_stockDataAndTwitterSentimentsImgs,
    rnn_testingResults,
    GRU_stockDataImgs,
    GRU_twitterSentimentsImgs,
    GRU_stockDataAndTwitterSentimentsImgs,
    GRU_testingResults,
  ]);

  const clearALL = () => {
    setStockDataImgs([]);
    setTwitterSentimentsImgs([]);
    setStockDataAndTwitterSentimentsImgs([]);
    setTestingResultsImgs([]);
    setDTTwitterSentimentsImgs([]);
    setDTStockDataImgs([]);
    setDTStockDataAndTwitterSentimentsImgs([]);
    setBILSTMStockDataAndTwitterSentimentsImgs([]);
    setBILSTMStockDataImgs([]);
    setBILSTMTestingResults([]);
    setBILSTMTwitterSentimentsImgs([]);
    setRNNStockDataAndTwitterSentimentsImgs([]);
    setRNNStockDataImgs([]);
    setRNNTestingResults([]);
    setRNNTwitterSentimentsImgs([]);
    setGRUStockDataAndTwitterSentimentsImgs([]);
    setGRUStockDataImgs([]);
    setGRUTestingResults([]);
    setGRUTwitterSentimentsImgs([]);
  };

  const submitLSTM = async (e) => {
    e.preventDefault();
    clearALL();
    if (dir.length === 0) {
      alert.show("Please select a stock value !!");
      return;
    }

    const res1 = await axios.post("/stocks/stock_data", {
      dirName: dir,
    });
    setStockDataImgs((stockDataImgs) => [...stockDataImgs, res1.data]);

    const res2 = await axios.post("/stocks/twitter_sentiments", {
      dirName: dir,
    });
    setTwitterSentimentsImgs((twitterSentimentsImgs) => [
      ...twitterSentimentsImgs,
      res2.data,
    ]);

    const res3 = await axios.post("/stocks/stock_data_and_twitter_sentiments", {
      dirName: dir,
    });
    setStockDataAndTwitterSentimentsImgs(
      (stockDataAndTwitterSentimentsImgs) => [
        ...stockDataAndTwitterSentimentsImgs,
        res3.data,
      ]
    );

    const res4 = await axios.post("/stocks/testing_results", {
      dirName: dir,
    });
    setTestingResultsImgs((testingResultsImgs) => [
      ...testingResultsImgs,
      res4.data,
    ]);
  };

  const submitRF = async (e) => {
    e.preventDefault();
    clearALL();

    if (dir.length === 0) {
      alert.show("Please select a stock value !!");
      return;
    }

    const res5 = await axios.post("/stocks/dt/stock_data", {
      dirName: dir,
    });
    setDTStockDataImgs((dt_stockDataImgs) => [...dt_stockDataImgs, res5.data]);

    const res6 = await axios.post("/stocks/dt/twitter_sentiments", {
      dirName: dir,
    });
    setDTTwitterSentimentsImgs((dt_twitterSentimentsImgs) => [
      ...dt_twitterSentimentsImgs,
      res6.data,
    ]);

    const res7 = await axios.post(
      "/stocks/dt/stock_data_and_twitter_sentiments",
      {
        dirName: dir,
      }
    );
    setDTStockDataAndTwitterSentimentsImgs(
      (dt_stockDataAndTwitterSentimentsImgs) => [
        ...dt_stockDataAndTwitterSentimentsImgs,
        res7.data,
      ]
    );
  };

  const submitBILSTM = async (e) => {
    e.preventDefault();
    clearALL();

    if (dir.length === 0) {
      alert.show("Please select a stock value !!");
      return;
    }

    const res1 = await axios.post("/stocks/bilstm/stock_data", {
      dirName: dir,
    });
    setBILSTMStockDataImgs((BILSTM_stockDataImgs) => [
      ...BILSTM_stockDataImgs,
      res1.data,
    ]);

    const res2 = await axios.post("/stocks/bilstm/twitter_sentiments", {
      dirName: dir,
    });
    setBILSTMTwitterSentimentsImgs((BILSTM_twitterSentimentsImgs) => [
      ...BILSTM_twitterSentimentsImgs,
      res2.data,
    ]);

    const res3 = await axios.post(
      "/stocks/bilstm/stock_data_and_twitter_sentiments",
      {
        dirName: dir,
      }
    );
    setBILSTMStockDataAndTwitterSentimentsImgs(
      (BILSTM_stockDataAndTwitterSentimentsImgs) => [
        ...BILSTM_stockDataAndTwitterSentimentsImgs,
        res3.data,
      ]
    );

    const res4 = await axios.post("/stocks/bilstm/testing_results", {
      dirName: dir,
    });
    setBILSTMTestingResults((BILSTM_testingResults) => [
      ...BILSTM_testingResults,
      res4.data,
    ]);
  };

  const submitRNN = async (e) => {
    e.preventDefault();
    clearALL();

    if (dir.length === 0) {
      alert.show("Please select a stock value !!");
      return;
    }

    const res1 = await axios.post("/stocks/rnn/stock_data", {
      dirName: dir,
    });
    setRNNStockDataImgs((rnn_stockDataImgs) => [
      ...rnn_stockDataImgs,
      res1.data,
    ]);

    const res2 = await axios.post("/stocks/rnn/twitter_sentiments", {
      dirName: dir,
    });
    setRNNTwitterSentimentsImgs((rnn_twitterSentimentsImgs) => [
      ...rnn_twitterSentimentsImgs,
      res2.data,
    ]);

    const res3 = await axios.post(
      "/stocks/rnn/stock_data_and_twitter_sentiments",
      {
        dirName: dir,
      }
    );
    setRNNStockDataAndTwitterSentimentsImgs(
      (rnn_stockDataAndTwitterSentimentsImgs) => [
        ...rnn_stockDataAndTwitterSentimentsImgs,
        res3.data,
      ]
    );

    const res4 = await axios.post("/stocks/rnn/testing_results", {
      dirName: dir,
    });
    setRNNTestingResults((rnn_testingResults) => [
      ...rnn_testingResults,
      res4.data,
    ]);
  };

  const submitGRU = async (e) => {
    e.preventDefault();
    clearALL();

    if (dir.length === 0) {
      alert.show("Please select a stock value !!");
      return;
    }

    const res1 = await axios.post("/stocks/gru/stock_data", {
      dirName: dir,
    });
    setGRUStockDataImgs((GRU_stockDataImgs) => [
      ...GRU_stockDataImgs,
      res1.data,
    ]);

    const res2 = await axios.post("/stocks/gru/twitter_sentiments", {
      dirName: dir,
    });
    setGRUTwitterSentimentsImgs((GRU_twitterSentimentsImgs) => [
      ...GRU_twitterSentimentsImgs,
      res2.data,
    ]);

    const res3 = await axios.post(
      "/stocks/gru/stock_data_and_twitter_sentiments",
      {
        dirName: dir,
      }
    );
    setGRUStockDataAndTwitterSentimentsImgs(
      (GRU_stockDataAndTwitterSentimentsImgs) => [
        ...GRU_stockDataAndTwitterSentimentsImgs,
        res3.data,
      ]
    );

    const res4 = await axios.post("/stocks/gru/testing_results", {
      dirName: dir,
    });
    setGRUTestingResults((GRU_testingResults) => [
      ...GRU_testingResults,
      res4.data,
    ]);
  };

  const handleChange = (e) => {
    setDir(e.target.value);
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
        <select
          name=""
          id=""
          style={{
            width: "50rem",
            height: "3rem",
            fontSize: "1.3rem",
            outline: "none",
            paddingLeft: "1rem",
          }}
          value={dir}
          onChange={handleChange}
        >
          <option selected="true" disabled="true" value="">
            Select Stock
          </option>
          <option value="AMZN.2022-01-01.2022-11-01">
            AMZN (2022-01-01 :: 2022-11-01)
          </option>
          <option value="SB=F.2021-01-01.2021-11-01">
            SB=F (2021-01-01 :: 2021-11-01)
          </option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "2rem",
        }}
      >
        <button className="form-btn" onClick={submitLSTM}>
          LSTM
        </button>
        <button className="form-btn" onClick={submitBILSTM}>
          BILSTM
        </button>
        <button className="form-btn" onClick={submitRNN}>
          RNN
        </button>
        <button className="form-btn" onClick={submitGRU}>
          GRU
        </button>
      </div>

      {stockDataImgs && stockDataImgs.length !== 0 && (
        <div className="sub-heading">LSTM Model</div>
      )}

      {stockDataImgs && stockDataImgs.length !== 0 && (
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
      {twitterSentimentsImgs && twitterSentimentsImgs.length !== 0 && (
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
      {stockDataAndTwitterSentimentsImgs &&
        stockDataAndTwitterSentimentsImgs.length !== 0 && (
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
      {testingResultsImgs && testingResultsImgs.length !== 0 && (
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

      {dt_stockDataImgs && dt_stockDataImgs.length !== 0 && (
        <div className="sub-heading">Random Forest Model</div>
      )}
      {dt_stockDataImgs && dt_stockDataImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data
          </div>
          {dt_stockDataImgs[0].map((cur) => (
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
      {dt_twitterSentimentsImgs && dt_twitterSentimentsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Twitter Sentiments
          </div>
          {dt_twitterSentimentsImgs[0].map((cur) => (
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
      {dt_stockDataAndTwitterSentimentsImgs &&
        dt_stockDataAndTwitterSentimentsImgs.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div className="imgs-desc">
              Predicting Stock Prices using Stock Data and Twitter Sentiments
            </div>
            {dt_stockDataAndTwitterSentimentsImgs[0].map((cur) => (
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

      {BILSTM_stockDataImgs && BILSTM_stockDataImgs.length !== 0 && (
        <div className="sub-heading">BILSTM Model</div>
      )}
      {BILSTM_stockDataImgs && BILSTM_stockDataImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data
          </div>
          {BILSTM_stockDataImgs[0].map((cur) => (
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
      {BILSTM_twitterSentimentsImgs &&
        BILSTM_twitterSentimentsImgs.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div className="imgs-desc">
              Predicting Stock Prices using Twitter Sentiments
            </div>
            {BILSTM_twitterSentimentsImgs[0].map((cur) => (
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
      {BILSTM_stockDataAndTwitterSentimentsImgs &&
        BILSTM_stockDataAndTwitterSentimentsImgs.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div className="imgs-desc">
              Predicting Stock Prices using Stock Data and Twitter Sentiments
            </div>
            {BILSTM_stockDataAndTwitterSentimentsImgs[0].map((cur) => (
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

      {BILSTM_testingResults && BILSTM_testingResults.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">Testing Results</div>
          {BILSTM_testingResults[0].map((cur) => (
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

      {rnn_stockDataImgs && rnn_stockDataImgs.length !== 0 && (
        <div className="sub-heading">RNN Model</div>
      )}
      {rnn_stockDataImgs && rnn_stockDataImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data
          </div>
          {rnn_stockDataImgs[0].map((cur) => (
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
      {rnn_twitterSentimentsImgs && rnn_twitterSentimentsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Twitter Sentiments
          </div>
          {rnn_twitterSentimentsImgs[0].map((cur) => (
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
      {rnn_stockDataAndTwitterSentimentsImgs &&
        rnn_stockDataAndTwitterSentimentsImgs.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div className="imgs-desc">
              Predicting Stock Prices using Stock Data and Twitter Sentiments
            </div>
            {rnn_stockDataAndTwitterSentimentsImgs[0].map((cur) => (
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

      {rnn_testingResults && rnn_testingResults.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">Testing Results</div>
          {rnn_testingResults[0].map((cur) => (
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
      {GRU_stockDataImgs && GRU_stockDataImgs.length !== 0 && (
        <div className="sub-heading">GRU Model</div>
      )}
      {GRU_stockDataImgs && GRU_stockDataImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Stock Data
          </div>
          {GRU_stockDataImgs[0].map((cur) => (
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
      {GRU_twitterSentimentsImgs && GRU_twitterSentimentsImgs.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">
            Predicting Stock Prices using Twitter Sentiments
          </div>
          {GRU_twitterSentimentsImgs[0].map((cur) => (
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
      {GRU_stockDataAndTwitterSentimentsImgs &&
        GRU_stockDataAndTwitterSentimentsImgs.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div className="imgs-desc">
              Predicting Stock Prices using Stock Data and Twitter Sentiments
            </div>
            {GRU_stockDataAndTwitterSentimentsImgs[0].map((cur) => (
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

      {GRU_testingResults && GRU_testingResults.length !== 0 && (
        <div style={{ width: "100%" }}>
          <div className="imgs-desc">Testing Results</div>
          {GRU_testingResults[0].map((cur) => (
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
