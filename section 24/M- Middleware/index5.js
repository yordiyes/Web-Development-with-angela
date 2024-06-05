import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index1.html");
})

app.post("/submit",(req, res)=>{
  res.send(`<h1 style='text-align: center'>You have successfully submitted your form</h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
