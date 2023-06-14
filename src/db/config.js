import dotenv from "dotenv";

import assert from "assert";

dotenv.config();

const { HOST_URL, HOST, PORT, SQL_SERVER, SQL_USER, SQL_PWD, SQL_DB } =
  process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(HOST, "HOST_URL is required");
assert(PORT, "HOST is required");

export const config = {
  port: PORT,
  host: HOST,

  url: HOST_URL,
  server: SQL_SERVER,
  sql: {
    server: SQL_SERVER,
    user: SQL_USER,
    password: SQL_PWD,
    database: SQL_DB,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
    },
  },
};
