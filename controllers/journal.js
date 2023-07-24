import { db } from "../db/conn.js"

export const getJournals = (req, res) => {
    const q = "SELECT * FROM journals";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.status(200).json(data);
    });


}
export const getJournal = (req, res) => {

}
export const Addjournal = (req, res) => {

}
export const DeleteJournal = (req, res) => {

}
export const updateJournal = (req, res) => {

}