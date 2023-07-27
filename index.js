import express from "express";
import cors from "cors";
import multer from 'multer'
import path from 'path'
import AllJournals from "./routes/journals.js"
import AllArticles from "./routes/articles.js"

const app = express();
app.use(cors());
app.use(express.json());

// Update file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

app.post('/upload', upload.single("img"), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename)
})

// Testing 

app.get("/", (req, res) => {
    res.json("hello");
  });

  // Get All Journals
  app.use("/journals", AllJournals)

  // Get All Articles
  app.use("/articles", AllArticles)
  
  //Server
app.listen(8800, () => {
    console.log("Server ishga tushdi...");
  });