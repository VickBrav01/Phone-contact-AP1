import sql from "mssql";
import { config } from "../db/config.js";

export const allUsers = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .query("SELECT FirstName, LastName FROM Contacts");
    res.json(result.recordset);
  } catch (error) {
    res.status(201).json(error.message);
  } finally {
    sql.close();
  }
};
export const createUser = async (req, res) => {
  try {
  } catch (error) {
  } finally {
  }
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
