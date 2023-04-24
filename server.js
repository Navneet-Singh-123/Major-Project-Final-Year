const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const stockRoutes = require("./routes/stock");

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*" }));
app.use("/stocks", stockRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
