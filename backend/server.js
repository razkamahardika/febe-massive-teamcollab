const express = require('express');
const cors = require('cors');

const db = require('./config/database');
const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

// Get all products
app.get("/products", (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

app.get("/login", (req, res) => {
    const sql = 'SELECT * FROM login';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

app.get("/signup", (req, res) => {
    const sql = 'SELECT * FROM signup';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Start the rerver
app.listen(port, () => {
    console.log(`Server running in  http://localhost:${port}`);
});
