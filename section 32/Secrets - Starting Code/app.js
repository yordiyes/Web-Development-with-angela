require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/userDb")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error) =>{
        console.error("Error connecting to MongoDB:", error)
    })

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})


const user = new mongoose.model("User", userSchema);

app.get("/", (req, res)=> {
    res.render("home");
})

app.get("/login", (req, res) =>{
    res.render("login");
})

app.get("/register", (req, res) =>{
    res.render("register");
})

app.post("/register", (req, res) =>{
    const newUser = new user({
        email: req.body.username,
        password: md5(req.body.password)
    });

    newUser.save()
        .then(() => {
            res.render("Secrets"); // Assuming you have a 'Secrets' page
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error saving user"); // Send an error response
        });
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);

    user.findOne({ email: username })
        .then((foundUser) => {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("Secrets"); 
                } else {
                    res.status(401).send("Incorrect password.");
                }
            } else {
                res.status(404).send("User not found.");
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Error logging in."); 
        });
});

app.get("/logout", (req, res)=>{
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
})