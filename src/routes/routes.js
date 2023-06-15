import {
  allUsers,
  allGroups,
  createUser,
  getSingleUser,
  updateUser,
  assignGroup,
  deleteUser,
} from "../controllers/phoneContoller.js";

const user = (app) => {
  app.route("/users").get(allUsers).post(createUser);
  app.route("/groups").get(allGroups);

  app.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
  app.route("/groups/:id").put(assignGroup);
};
export default user;
