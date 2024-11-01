import {
  createUser,
  deleteOneUser,
  getAllUser,
  getOneUser,
  updateOneUser,
} from "../services/userCURD";

const APIController = {
  getAllUsers: async (req, res) => {
    const listUsers = await getAllUser();
    return res.status(200).json(listUsers);
  },

  createNewUser: async (req, res) => {
    const { email, username, address } = req.body;

    if (!email || !username || !address)
      return res.status(422).json({ message: "Missing a require parameter!" });

    try {
      await createUser({ email, username, address });
      return res.status(201).json({ message: "Created" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  deleteOneUser: async (req, res) => {
    const userId = req.params.id;

    if (!userId)
      return res.status(422).json({ message: "Missing field require!" });

    try {
      const result = await deleteOneUser(userId);
      if (!result.affectedRows)
        return res.status(422).json({ message: "User does not exist" });
      return res.status(200).json({ message: "Deleted!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  updateOneUser: async (req, res) => {
    const userId = req.params.id;
    const { id, email, username, address } = req.body;

    if (!userId) return res.status(422).json({ message: "Invalid user id" });
    if (!email || !username || !address)
      return res.status(422).json({ message: "Invalid field!" });

    try {
      const result = await updateOneUser({ id, email, username, address });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(422).json({ error: error.message });
    }
  },
};

export default APIController;
