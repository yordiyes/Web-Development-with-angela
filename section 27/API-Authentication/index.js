import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const Username = "yo";
const Password = "ya";
const APIKey = "e0f8c7ce-7943-4a0b-9b08-0fa5a1797263";
const BearerToken = "e176984a-9a98-42e4-bc9b-aae28f4252aa";

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
    console.log(error.message)
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
