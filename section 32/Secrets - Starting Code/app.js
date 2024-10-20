require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const { error } = require("console");


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 

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

userSchema.plugin(passportLocalMongoose);

const user = new mongoose.model("User", userSchema);

passport.use(user.createStrategy());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.get("/", (req, res)=> {
    res.render("home");
})

app.get("/login", (req, res) =>{
    res.render("login");
})

app.get("/register", (req, res) =>{
    res.render("register");
})
 
app.get("/logout", (req, res)=>{
    req.logOut((err)=>{
        console.log(err);
    });
    res.redirect("/");
});

app.get("/secrets", (req, res)=>{
    if(req.isAuthenticated()){
        res.render("secrets");
    }else{
        res.redirect("/login");
    }
})

app.post("/register", (req, res) =>{
    user.register({username: req.body.username}, req.body.password, (err, user)=>{
        if(err){
            console.log(err)
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/secrets");
            })
        }
    });
})

app.post("/login", (req, res) => {
    const newUser = new user({
        username:req.body.username,
        password:req.body.password
    })

    req.login(newUser, (error)=>{
        if(error){
            console.log(error)
        }else{
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/secrets")
            });
        }
    }); 
});

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
})