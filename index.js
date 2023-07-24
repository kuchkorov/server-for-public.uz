import express from "express";
import cors from "cors";
import journalRoutes from "./routes/journals.js"

const app = express();
app.use(cors());
app.use(express.json());

// Testing 

app.get("/", (req, res) => {
    res.json("hello");
  });

  // Get All Journals

  app.use("/journals", journalRoutes)

  // app.get("/journals", (req, res) => {
  //   const q = "SELECT * FROM journals";
  //   db.query(q, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return res.json(err);
  //     }
  //     return res.json(data);
  //   });
  // });

  // Get Journals by ID

  app.get("/journals/:id", (req, res) => {
    const {id} = req.params;
    const q = "SELECT * FROM `journals` WHERE 1"
    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });
  })

  // Add journal

  app.post("/journals", (req, res) => {
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
  });

    // Update Journals by ID

    app.put("/journals/:id", (req, res) => {
        const journalsId = req.params.id;
        const q = "UPDATE journals SET `img`= ?, `name`= ?, `title`= ?, `describtion`= ? WHERE id = ?";
      
        const values = [
          req.body.img,
          req.body.name,
          req.body.title,
          req.body.describtion,
        ];
      
        db.query(q, [...values,journalsId], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });

  // delete Journals bt ID

  app.delete("/journals/:id", (req, res) => {
    const journalID = req.params.id;
    const q = " DELETE FROM journals WHERE id = ? ";
  
    db.query(q, [journalID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });




app.listen(8800, () => {
    console.log("Server ishga tushdi...");
  });