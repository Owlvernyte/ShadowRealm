require("dotenv").config();
const express = require("express");
const app = express();
// const routes = require("./routes");

app.get("/", (req, res) => {
  res.send("Hi");
});

// app.use("/api", routes);

// listening to things
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on ${PORT}`);
});
