// 1. IMPORTING EXPRESS
const express = require("express");

// 2. INITIALIZING THE APP
const app = express();


// 3. SETTING THE PORT
// The server will run on port 3000.
const PORT = 3000;


// --------------------------------------------------
// ROUTING SECTION
// The server handles different URLs here.
// --------------------------------------------------


// 4. HOME ROUTE
// Handles GET request for the main page.

app.get("/", (req, res) => {

    console.log("Home page was visited");

    res.send(`
        <h1>Welcome SVECW!</h1>
        <p>You have reached the Home Page.</p>
    `);
});


// 5. ABOUT ROUTE
// Handles GET request for /about.

app.get("/about", (req, res) => {

    console.log("Home page was visited and seen about");

    res.send("This is the About  home page of my Express Server.");
});


// 6. DATA (JSON) ROUTE
// Sends data in JSON format.

app.get("/api/status", (req, res) => {

    console.log("API status was requested");

    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});


// --------------------------------------------------
// 7. STARTING THE SERVER
// --------------------------------------------------

app.listen(PORT, () => {

    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");

});