import { getAllUser, getOneUser, createUser } from "../services/userCURD";

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
};

export default homeController;
