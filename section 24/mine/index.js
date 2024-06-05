import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var name = "";

app.use(bodyParser.urlencoded({extended: true}));

function birthdayWish(req, res, next){
  console.log(req.body);
  name = req.body["name"];
  next();
}

app.use(birthdayWish);

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit",(req, res)=>{
  res.send(`<h1>Happy Birthday ${name} ✌.</h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
