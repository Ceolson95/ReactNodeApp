const express = require("express");
const app = express();

// Route handlr example (simple)
app.get("/", (req, res) => {
    res.send({hi: "There"});
});

app.get("**", (req, res) => {
    res.send({dont: "do that"});
});


// Dynamically determines which PORT we should be listening to
// Used for injecting Enviornment varibles, and default use PORT 5000
const PORT = process.env.PORT || 5000;

// Tells node to listen to port 5000
app.listen(PORT);