import { configDotenv } from "dotenv";
import express from "express";
import configViewEngine from "./config/viewEngine";
import initRouter from "./route/web";

configDotenv();
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

initRouter(app);

const listener = app.listen(port, () => {
  console.log("Server in running on port:", listener.address().port);
});