import {
  allUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/phoneContoller.js";

const user = (app) => {
  app.route("/users").get(allUsers).post(createUser);

  app.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
};
export default user;
