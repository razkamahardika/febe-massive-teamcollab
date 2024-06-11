const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const db = require('./config/database');
const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json());


// Define storage for the uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Upload files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});

// Initialize multer upload middleware
const upload = multer({ storage: storage });

app.use(express.json());

// Get all products
app.get('/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    let productSql = `SELECT * FROM products WHERE id = ${productId}`;
    let carouselSql = `SELECT * FROM carousel_images WHERE product_id = ${productId}`;

    let productData = {};

    db.query(productSql, (err, productResult) => {
        if (err) {
            return res.status(500).send(err);
        }
        productData = productResult[0];

        db.query(carouselSql, (err, carouselResult) => {
            if (err) {
                return res.status(500).send(err);
            }
            productData.carouselImages = carouselResult;
            res.json(productData);
        });
    });
});

// Get carousel images for a specific product
app.get('/carousel-images/:productId', (req, res) => {
    const productId = req.params.productId;
    let sql = `SELECT * FROM carousel_images WHERE product_id = ${productId}`;
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Log the received data
    console.log('Received data:', req.body);

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
        db.query(query, [firstName, lastName, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error inserting data into MySQL:', err);
                return res.status(500).send('Error registering user.');
            }
            res.status(201).send('User registered successfully.');
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Error registering user.');
    }
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            return res.status(500).send({ message: 'Error logging in.' });
        }

        if (results.length === 0) {
            return res.status(401).send({ message: 'Invalid email or password.' });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid email or password.' });
        }

        res.status(200).send({ message: 'Login successful.' });
    });
});

//Payment
app.post("/api/orders", (req, res) => {
    const { product_name, quantity, price, address, city, province, total } = req.body;

    const query = "INSERT INTO orders (product_name, quantity, price, address, city, province, total) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(query, [product_name, quantity, price, address, city, province, total], (err, results) => {
        if (err) {
            console.error("Error inserting order data:", err);
            res.status(500).send("Error inserting order data");
            return;
        }
        res.status(200).send("Order data inserted successfully");
    });
});

// Endpoint to validate coupon code
app.post('/api/validate-coupon', (req, res) => {
    const { coupon } = req.body;

    const query = 'SELECT * FROM coupons WHERE code = ? AND is_active = TRUE AND expiry_date >= CURDATE()';
    db.query(query, [coupon], (err, results) => {
        if (err) {
            console.error('Error fetching coupon:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else if (results.length > 0) {
            res.json({ valid: true, discount: results[0].discount });
        } else {
            res.json({ valid: false });
        }
    });
});

// Endpoint to handle file upload
app.post('/api/upload-proof', upload.single('proofImage'), (req, res) => {
    const { orderId } = req.body; // Assuming you also want to associate the proof image with an order

    // Get the file path
    const filePath = req.file.path;

    // Update the database with the file path
    const query = 'UPDATE payments SET proof_image_path = ? WHERE order_id = ?';
    db.query(query, [filePath, orderId], (err, results) => {
        if (err) {
            console.error('Error updating database:', err);
            return res.status(500).send('Error updating database');
        }
        res.status(200).send('File uploaded successfully');
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
