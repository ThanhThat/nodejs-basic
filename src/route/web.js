import express from "express";
import homeController from "../controller/homeController";

const route = express.Router();

const initRouter = (app) => {
  route.get("/", homeController.getHomePage);

  route.get("/about", homeController.getAboutPage);

  route.get("/user/detail/:userId", homeController.getDetailPage);

  return app.use("/", route);
};

export default initRouter;
