import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "public",
  });

  db.connect((err)=>{
    if(err) throw err;
    console.log("Bazaga ulandi");
});
