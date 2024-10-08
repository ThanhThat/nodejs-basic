import { configDotenv } from "dotenv";
import express from "express";
import configViewEngine from "./config/viewEngine";

configDotenv();
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const listener = app.listen(port, () => {
  console.log("Server in running on port:", listener.address().port);
});
