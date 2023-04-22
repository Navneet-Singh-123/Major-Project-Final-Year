import "./App.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    stockname: "",
    startdate: "",
    enddate: "",
  });

  const { stockname, startdate, enddate } = data;

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
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
    </div>
  );
};

export default App;
