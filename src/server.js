import { configDotenv } from "dotenv";
import express, { urlencoded } from "express";
import configViewEngine from "./config/viewEngine";
import initRouter from "./route/web";
import initAPIRoute from "./route/api";

configDotenv();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

initRouter(app);
initAPIRoute(app);

const listener = app.listen(port, () => {
  console.log("Server in running on port:", listener.address().port);
});
