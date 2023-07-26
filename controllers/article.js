import { db } from "../db/conn.js"

// get All Articles
export const getArticles = (req, res) => {
    const q = "SELECT * FROM articles";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.status(200).json(data);
    });
}

// Get Articles by ID
export const getArticleById = (req, res) => {
  const q = `SELECT * FROM articles WHERE id = ${req.params.id}`
  db.query(q,(err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.status(200).json(data[0]);
    });
}

// Add Article
export const AddArticle = (req, res) => {
  const q = "INSERT INTO articles(`img`, `name`, `title`, `describtion`) VALUES (?)";
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

// Update Article
export const updateArticle = (req, res) => {
  const articlesId = req.params.id;
        const q = "UPDATE articles SET `img`= ?, `name`= ?, `title`= ?, `describtion`= ? WHERE id = ?";
      
        const values = [
          req.body.img,
          req.body.name,
          req.body.title,
          req.body.describtion,
        ];
      
        db.query(q, [...values, articlesId], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      }


// Delete Article
export const DeleteArticle = (req, res) => {
  const ArticleID = req.params.id;
    const q = " DELETE FROM articles WHERE id = ? ";
  
    db.query(q, [journalID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }