import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Hello, From Jordi's Server!</h1>");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});