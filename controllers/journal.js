import { db } from "../db/conn.js"

// get All Journals
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

// Get Journals by ID
export const getJournalById = (req, res) => {
  // const {id} = req.params;
  const q = "SELECT `name`, `img`, `title`, `describtion`, FROM journals WHERE `id` = ? "
  db.query(q,(err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.status(200).json(data[0]);
    });
}

// Add journal
export const Addjournal = (req, res) => {
  const q = "INSERT INTO journals(`img`, `name`, `title`, `describtion`) VALUES (?)";
  const values = [
    req.body.img,
    req.body.name,
    req.body.title,
    req.body.describtion,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
}

// Delete Journal
export const DeleteJournal = (req, res) => {
  const journalID = req.params.id;
    const q = " DELETE FROM journals WHERE id = ? ";
  
    db.query(q, [journalID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }

// Update Journal
export const updateJournal = (req, res) => {

}