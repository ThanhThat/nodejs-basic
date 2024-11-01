import express from "express";
import homeController from "../controller/homeController";

const route = express.Router();

const initRouter = (app) => {
  route.get("/", homeController.getHomePage);

  route.get("/about", homeController.getAboutPage);

  route.get("/user/detail/:userId", homeController.getDetailPage);

  route.post("/user/create", homeController.addNewUser);

  route.post("/user/delete", homeController.deleteOneUser);
  route.get("/user/update-user-page/:userId", homeController.getUpdateUserPage);
  route.post("/user/update-one-user/:userId", homeController.updateOneUser);

  return app.use("/", route);
};

export default initRouter;
