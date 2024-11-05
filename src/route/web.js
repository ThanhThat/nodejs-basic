import express from "express";
import homeController from "../controller/homeController";
import APIController from "../controller/APIController";
import upload from "../config/upload";

const route = express.Router();

const initRouter = (app) => {
  route.get("/", homeController.getHomePage);

  route.get("/about", homeController.getAboutPage);

  route.get("/user/detail/:userId", homeController.getDetailPage);

  route.post("/user/create", homeController.addNewUser);

  route.post("/user/delete", homeController.deleteOneUser);
  route.get("/user/update-user-page/:userId", homeController.getUpdateUserPage);
  route.post("/user/update-one-user/:userId", homeController.updateOneUser);
  route.post("/user/upload-avatar", APIController.uploadAvatar);
  route.get("/user/upload-avatar", homeController.getPageUploadAvatar); // display page upload avatar

  return app.use("/", route);
};

export default initRouter;
