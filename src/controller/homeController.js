import {
  getAllUser,
  getOneUser,
  createUser,
  deleteOneUser,
  updateOneUser,
} from "../services/userCURD";

const homeController = {
  getHomePage: async (req, res) => {
    const listUser = await getAllUser();
    return res.render("index.ejs", { listUser });
  },

  getAboutPage: (req, res) => {
    return res.send("This is about page!");
  },

  getDetailPage: async (req, res) => {
    const userId = req.params.userId;

    const currentUser = await getOneUser(userId);

    return res.render("userDetail.ejs", { currentUser });
  },

  addNewUser: async (req, res) => {
    const { email, username, address } = req.body;

    const newUser = {
      email,
      username,
      address,
    };

    await createUser(newUser);

    return res.redirect("/");
  },

  deleteOneUser: async (req, res) => {
    const userId = req.body.userId;
    await deleteOneUser(userId);
    return res.redirect("/");
  },

  getUpdateUserPage: async (req, res) => {
    const userId = req.params.userId;
    const infoUser = await getOneUser(userId);
    res.render("updateUser.ejs", { infoUser });
  },

  updateOneUser: async (req, res) => {
    const userId = req.params.userId;
    const { email, username, address } = req.body;

    const infoUpdateUser = {
      id: userId,
      email,
      username,
      address,
    };

    await updateOneUser(infoUpdateUser);

    res.redirect("/");
  },

  getPageUploadAvatar: (req, res) => {
    return res.render("uploadAvatar.ejs");
  },
};

export default homeController;
