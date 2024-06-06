import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>This is to illustrate that the server that i have created is successfully listening on port 3000</h1><h2>Hey guys</h2>")
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})