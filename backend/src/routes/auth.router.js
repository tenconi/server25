import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../persistence/mongoDB/models/user.model.js';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // Cambia esto por una clave secreta segura

// register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check the user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      cart: [],
    });

    await newUser.save();
    res.status(201).json({ message: '✅ User registered successfully' });
  } catch (err) {
    console.error(err);

    res
      .status(500)
      .json({ message: '❌ Error in registration: Internal server error' });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // search user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: '❌User not found' });
    }
    // check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: '❌Invalid password' });
    }

    // create token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: '✅ Login successful', token });
  } catch (err) {
    res.status(500).json({
      message: '❌ Error in registration: Internal server error',
      error: err,
    });
  }
});
