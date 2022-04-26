const tesseract = require("tesseract.js");
const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("server is up");
});

app.post("/", upload.single("picture"), (req, res) => {
  tesseract.recognize(req.file.buffer, "eng").then(({ data: { text } }) => {
    return res.send(text);
  });
});

app.listen(3001, () => {
  console.log("server is up");
});
