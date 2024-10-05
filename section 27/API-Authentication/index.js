import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const Username = "yo";
const Password = "ya";
const APIKey = "632fbf3a-db18-47c1-9260-df210c9650b5";
const BearerToken = "755d46d1-2d4a-43dc-a96e-593857c176df";

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try{
    const response = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }catch(error){
    res.status(404).send(error.message)
  }

});

app.get("/basicAuth", async(req, res) => {
  try{
    const response = await axios.get(API_URL + "/all?page=2",{
      auth: {
        username: `${Username}`,
        password: `${Password}`
      }
    })
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  }catch(error){
    res.status(404).send(error.message)
  }
});

app.get("/apiKey", async(req, res) => {
  try{
    const response = await axios.get(API_URL + `/filter`,{
      params:{
        score: 5,
        apiKey: APIKey
      }
    })
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  }catch(error){
    res.status(404).send(error.message);
  }
});

const config = {
  headers: {Authorization: `Bearer ${BearerToken}`}
 }

app.get("/bearerToken", async (req, res) => {
 try{
  const response = await axios.get(API_URL + `/secrets/42`,config)
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  }catch(error){
   res.status(404).send(error.message);
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
