import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("Request Method: ",req.method);
  console.log("Reqeust URL: ", req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
