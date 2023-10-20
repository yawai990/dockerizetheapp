const mysql = require("mysql2/promise");

export async function query({ query, value = [] }) {
  // const connection = await mysql.createPool({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "test",
  // });

  // try {
  //   const pool = connection.promise();
  //   const [rows] = await pool.query(query);
  //   connection.end();
  //   return rows;
  // } catch (err) {
  //   console.log(err);
  //   return err;
  // }

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });
  //seconday ways
  try {
    const [rows, fields] = await connection.execute(query, value);
    connection.end();
    return rows;
  } catch (err) {
    console.log(err);
    return err;
  }
}
