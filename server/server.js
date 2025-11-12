import bcrypt from 'bcrypt';
import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = await mysql.createConnection({
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
    const { name, email, password } = req.body;

    //Duplicate email check
    const [existingUser] = await db.query('SELECT id FROM user WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const cryptPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
      [name, email, cryptPassword]
    );
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (err) {
    console.error('Caught error:', err);
    res.status(500).send('Error creating user');
  }
});

// Start server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
