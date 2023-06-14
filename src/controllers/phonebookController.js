import sql from "mssql";
import { config } from "../db/config.js";

export const allUsers = async (req, res) => {
  res.send("all users");
};
export const createUser = async (req, res) => {
  res.send("create user");
};
export const getSingleUser = async (req, res) => {
  res.send("get single user");
};
export const updateUser = async (req, res) => {
  res.send("update user");
};
export const deleteUser = async (req, res) => {
  res.send("delete user");
};


