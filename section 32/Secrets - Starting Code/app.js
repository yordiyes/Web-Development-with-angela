const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose")


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDb")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error) =>{
        console.error("Error connecting to MongoDB:", error)
    })

const userSchema = {
    email: String,
    password: String
}

const user = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.render("home");
})

app.get("/login", function(req, res){
    res.render("login");
})

app.get("/register", function(req, res){
    res.render("register");
})

app.post("/register"), function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if(err)
            console.log(err);
        else
            res.render("Secrets");
    })
}

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
})