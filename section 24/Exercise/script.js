import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<h1 style='text-align:center; color:blue'>Home page</h1>")
})

app.get("/about", (req,res)=>{
    res.send("<h1>Aboute Me</h1><p>My name is yordanos, I am a software engineering student!</p>")
})

app.get("/contact", (req,res)=>{
    res.send("<input type='text' placeholder='any comment'> <input type='submit' value='Send'><p>Phone: </p><span>+215 930 393733</span><h2>Contact Me</h2>")
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})