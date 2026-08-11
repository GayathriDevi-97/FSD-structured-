const express = require('express');
const app = express();
const PORT = 3000;

// 1. BUILT-IN MIDDLEWARE
// Allows Express to read JSON data from POST/PUT requests
app.use(express.json());

// 2. CUSTOM LOGGING MIDDLEWARE
// Runs for every request
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Incoming Request: ${req.method} to ${req.url}`);
    next();
});

// 3. CUSTOM SECURITY MIDDLEWARE
// Checks whether User-Agent exists
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing!"
        });
    }

    next();
});

// --- MOCK DATABASE ---
let books = [
    { id: 1, title: "Java Programming" },
    { id: 2, title: "Web Development Basics" }
];

// --- ROUTES ---

// GET - Read all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST - Create a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: req.body.id != null ? req.body.id : books.length + 1,
        title: req.body.title
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT - Update a book
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (book) {
        book.title = req.body.title;
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

// DELETE - Remove a book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    books = books.filter(b => b.id !== id);

    res.json({
        message: `Book ${id} deleted`,
        remainingBooks: books
    });
});

// Start server
app.listen(PORT, () => {
    console.log("=================================");
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    console.log("=================================");
});