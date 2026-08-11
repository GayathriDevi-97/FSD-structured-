// 1. IMPORT EXPRESS

const express = require("express");


// 2. INITIALIZE THE EXPRESS APP

const app = express();


// 3. SET THE PORT

const PORT = 3000;


// --------------------------------------------------
// DYNAMIC ROUTES
// --------------------------------------------------


// 1. ROUTE PARAMETER
// Used to identify one specific student.
//
// Example:
// http://localhost:3000/student/101

app.get("/student/:id", (req, res) => {

    // Get the student ID from the URL
    const studentId = req.params.id;

    console.log("Student ID received:", studentId);

    res.send(`
        <h1>Student Profile</h1>
        <p>You are viewing the profile of Student ID:
        <strong>${studentId}</strong></p>
    `);
});


// --------------------------------------------------


// 2. MULTIPLE ROUTE PARAMETERS
// Used when we need two values from the URL.
//
// Example:
// http://localhost:3000/course/JavaScript/React

app.get("/course/:from/:to", (req, res) => {

    // Get both parameters
    const { from, to } = req.params;

    console.log("Course request:", from, "to", to);

    res.send(`
        <h1>Course Information</h1>
        <p>Learning from
        <strong>${from}</strong>
        to
        <strong>${to}</strong>.
        </p>
    `);
});


// --------------------------------------------------


// 3. QUERY PARAMETERS
// Used for searching or filtering.
//
// Example:
// http://localhost:3000/search?category=programming&level=beginner

app.get("/search", (req, res) => {

    // Get query parameters
    const category = req.query.category;
    const level = req.query.level;

    console.log("Search category:", category);
    console.log("Search level:", level);

    res.json({
        message: "Course Search Results",
        category: category || "All",
        level: level || "All"
    });
});


// --------------------------------------------------
// 4. START THE SERVER
// --------------------------------------------------

app.listen(PORT, () => {

    console.log(
        `Dynamic server is running at http://localhost:${PORT}`
    );

});