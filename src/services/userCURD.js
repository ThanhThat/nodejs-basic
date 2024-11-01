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

const createUser = async (infoUser) => {
  const result = await pool.query(
    `INSERT INTO user (email, username, address) VALUES (?, ?, ?)`,
    [infoUser.email, infoUser.username, infoUser.address]
  );
};

const deleteOneUser = async (userId) => {
  const result = await pool.query(`DELETE FROM user WHERE id=?`, [userId]);

  console.log(result);
};

const updateOneUser = async (infoUser) => {
  const result = await pool.query(
    `UPDATE user
SET email = ?, username = ?, address = ?
WHERE id = ?`,
    [infoUser.email, infoUser.username, infoUser.address, infoUser.id]
  );

  console.log(result);
};

export { getAllUser, getOneUser, createUser, deleteOneUser, updateOneUser };
