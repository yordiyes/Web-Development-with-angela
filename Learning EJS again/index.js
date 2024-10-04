import express from 'express';
import bodyparser from 'body-parser';
import axios from 'axios';

const app = express()
const PORT = 3000;

// setting the ejs as the tempating engine
app.set("view engine", "ejs");

//middleware to parse URL encoded bodies
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", async (req, res) => {
    try {
        // Example: fetching a random activity from an API (replace with actual URL)
        const response = await axios.get('https://bored-api.appbrewery.com/random');
        const result = response.data; // Get the data from the response
        res.render("index.ejs", { data: result }); // Render the template with the fetched data
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
        res.render("index.ejs", { error: "Failed to fetch data." }); // Render with an error if fetching fails
    }
});

// Handle POST requests (you may want to implement this)
app.post("/", async (req, res) => {
    const type = req.body.type; // Get the activity type from the form
    const participants = req.body.participants; // Get the number of participants from the form
    
    try {
        // Example: filter activities based on type and participants
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
        const result = response.data; // Get the filtered activities
        res.render("index.ejs", { data: result[Math.floor(Math.random() * result.length)] }); // Render with a random activity
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
        res.render("index.ejs", { error: "No activities that match your criteria." }); // Handle error
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});