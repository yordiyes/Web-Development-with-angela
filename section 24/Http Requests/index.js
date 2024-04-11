import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hey Jordi how are you doing.</h1>");
    // console.log(req.rawHeaders);
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me</h1><p>Phone: +251 930393733</p>");
    // console.log(req.rawHeaders);
})

app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1><p>Hey there i am Yordanos</p>");
    // console.log(req.rawHeaders);
})

app.listen(port, ()=>{
    console.log(`Server have been started on port ${port}.`)
})