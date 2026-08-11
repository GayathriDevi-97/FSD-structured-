const express = require('express');
const app = express();
const PORT = 3000;

/**
 * MIDDLEWARE
 * Allows Express to read JSON data
 * sent in the body of POST or PUT requests.
 */
app.use(express.json());


// Mock Database - Array of Book Objects
let books = [
    { id: 1, title: "JavaScript Basics", author: "John Smith" },
    { id: 2, title: "Learning Node.js", author: "David Brown" }
];


/**
 * 1. GET - Read all books
 *
 * URL:
 * http://localhost:3000/books
 */
app.get('/books', (req, res) => {
    res.json(books);
});


/**
 * 2. POST - Create a new book
 *
 * URL:
 * http://localhost:3000/books
 *
 * JSON body example:
 * {
 *   "title": "Express.js Guide",
 *   "author": "Alice"
 * }
 *
 * If id is not provided, it is generated automatically.
 */
app.post('/books', (req, res) => {

    const newBook = {
        id: req.body.id || books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});


/**
 * 3. PUT - Update an existing book
 * Using Dynamic URL
 *
 * URL Example:
 * http://localhost:3000/books/1
 */
app.put('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    // Find the book using the ID
    const book = books.find(b => b.id === id);

    if (book) {

        // Update the book details
        book.title = req.body.title;
        book.author = req.body.author;

        res.json({
            message: "Book updated successfully",
            book: book
        });

    } else {

        res.status(404).json({
            error: "Book not found"
        });
    }
});


/**
 * 4. DELETE - Remove a book
 * Using Dynamic URL
 *
 * URL Example:
 * http://localhost:3000/books/2
 */
app.delete('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    // Remove the book with the given ID
    books = books.filter(b => b.id !== id);

    res.json({
        message: `Book ${id} deleted`,
        remainingBooks: books
    });
});


/**
 * START SERVER
 */
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});