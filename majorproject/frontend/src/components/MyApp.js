import React, { useEffect } from "react";
import axios from "axios";

const MyApp = () => {
  useEffect(() => {
    axios.get("/stocks/retrieve_stocks").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <h1>Major Project Home Page</h1>;
};

export default MyApp;
