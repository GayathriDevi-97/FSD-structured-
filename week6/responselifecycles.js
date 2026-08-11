/**
 * IMPORT EXPRESS
 * We use the express module to handle our web server logic.
 */

const express = require('express');

const app = express();
const PORT = 3000;


/**
 * 1. BASIC JSON RESPONSE
 * When the user visits the root URL,
 * we send a simple JSON object.
 *
 * res.json() automatically sets the
 * Content-Type to "application/json".
 */

app.get('/', (req, res) => {

    res.json({
        message: "Welcome to the Book Library API!",
        status: "Active",
        timestamp: new Date()
    });

});


/**
 * 2. SENDING AN ARRAY OF OBJECTS
 * This represents a list of books.
 */

app.get('/books', (req, res) => {

    const bookList = [
        {
            id: 101,
            title: "Java Programming",
            author: "James",
            category: "Programming"
        },
        {
            id: 102,
            title: "Web Development",
            author: "Robert",
            category: "Web"
        },
        {
            id: 103,
            title: "Data Science",
            author: "David",
            category: "Technology"
        }
    ];

    // Sending the array as a JSON response
    res.json(bookList);

});


/**
 * 3. DYNAMIC JSON RESPONSE
 * Using Route Parameters to send data
 * about a specific book.
 *
 * URL Example:
 * http://localhost:3000/book/45
 */

app.get('/book/:id', (req, res) => {

    const bookId = req.params.id;

    res.json({
        requestedId: bookId,
        title: "Java Programming",
        author: "James",
        category: "Programming",
        available: true,
        tags: ["java", "coding", "beginner"]
    });

});


/**
 * START THE SERVER
 */

app.listen(PORT, () => {

    console.log(
        `JSON Server is running at http://localhost:${PORT}`
    );

});