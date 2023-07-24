import express from "express";
import cors from "cors";
import multer from 'multer'
import AllJournals from "./routes/journals.js"

const app = express();
app.use(cors());
app.use(express.json());


const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('img'), function (req, res) {
  res.status(200).json("Image has been uploaded")

})

// Testing 

app.get("/", (req, res) => {
    res.json("hello");
  });

  // Get All Journals
  app.use("/journals", AllJournals)
  
  // app.get("/journals/:id", (req, res) => {
  //   const {id} = req.params;
  //   const q = "SELECT * FROM `journals` WHERE 1"
  //   db.query(q, (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         return res.json(err);
  //       }
  //       return res.json(data);
  //     });
  // })


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

app.listen(8800, () => {
    console.log("Server ishga tushdi...");
  });