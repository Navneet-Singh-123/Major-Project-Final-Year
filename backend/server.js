const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const stockRoutes = require("./routes/stock");

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*" }));
app.use("/stocks", stockRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
