import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hey Jordi</h1><p>Hello everyone am yordanos and there is something i wanna share with you guys.</p>");
})

app.post("/about", (req, res)=>{
    res.sendStatus(200);
})

app.put("/some/info", (req,res)=>{
    res.sendStatus(201);
})

app.patch("/patch", (req, res)=>{
    res.sendStatus(200);
})
app.delete("/delete", (req, res)=>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`New server is created on port ${port}`);
})