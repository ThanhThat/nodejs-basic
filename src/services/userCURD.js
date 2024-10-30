import pool from "../config/connectDB";

const getAllUser = async () => {
  const result = await pool.query(`SELECT * FROM user`);
  const listUser = result.length > 0 ? result[0] : [];
  return listUser;
};

const getOneUser = async (userId) => {
  const result = await pool.query(`SELECT * FROM user WHERE id=?`, userId);
  const currentUser = await (result.length > 0 ? result[0] : []);

  return currentUser[0];
};

export { getAllUser, getOneUser };
