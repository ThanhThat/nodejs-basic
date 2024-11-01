import express from "express";
import APIController from "../controller/APIController";

const route = express.Router();

const initAPIRoute = (app) => {
  route.get("/users", APIController.getAllUsers);
  route.post("/create-user", APIController.createNewUser);
  route.delete("/delete-one-user/:id", APIController.deleteOneUser);
  route.put("/update-one-user/:id", APIController.updateOneUser);

  return app.use("/api/v1/", route);
};

export default initAPIRoute;
