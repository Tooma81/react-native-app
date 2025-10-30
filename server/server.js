const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwerty',
  database: 'furniture_app'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Test route
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body.values;
    const cryptPassword = await bcrypt.hash(password, 10)     
    const user = {
      username: name,
      email: email,
      password: cryptPassword,
    }

    // SQL query
    const sql = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';

    // Execute query
    db.query(sql, [user.username, user.email, user.password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error creating user');
      }
      res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
  } catch (err) {
      console.error(err);
      res.status(500).send('Error creating user');
  } 
})

// Start server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
