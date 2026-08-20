const express = require("express");

const app = express();

// 1. Configure EJS template engine
app.set("view engine", "ejs");

// To read form data
app.use(express.urlencoded({ extended: true }));

// 2. Render dynamic values
app.get("/", (req, res) => {
    res.render("index", {
        message: "Welcome to Server Side Rendering",
        error: null,
        student: null
    });
});

// 3. Accept input
// 4. Basic validation
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const age = Number(req.body.age);
    const email = req.body.email;

    // Validate name
    if (!name || name.trim() === "") {
        return res.render("index", {
            message: "Registration Failed",
            error: "Name is required",
            student: null
        });
    }

    // Validate age
    if (!age || age < 18 || age > 100) {
        return res.render("index", {
            message: "Registration Failed",
            error: "Age must be between 18 and 100",
            student: null
        });
    }

    // Validate email
    if (!email || !email.includes("@")) {
        return res.render("index", {
            message: "Registration Failed",
            error: "Enter a valid email",
            student: null
        });
    }

    // Successful submission
    res.render("index", {
        message: "Registration Successful!",
        error: null,
        student: {
            name: name,
            age: age,
            email: email
        }
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
