// Importing required modules
const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

// Configure body-parser middleware for handling JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/templates/index.html");
});

// Route for calculating and displaying the BMI
app.post("/bmiCalculator", (req, res) => {
  const height = req.body.height;
  const heightInMeters = height / 100; // convert the height to meters
  const weight = req.body.weight;
  const bmi = weight / (heightInMeters * heightInMeters);

  res.send(`<h3>Your BMI is: ${bmi.toFixed(2)}</h3>`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
