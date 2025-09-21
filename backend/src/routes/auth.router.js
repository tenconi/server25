import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../persistence/mongoDB/models/user.model.js';
import config from '../utils/config.js';

const router = express.Router();
// const JWT_SECRET = 'your_jwt_secret_key'; // Cambia esto por una clave secreta segura // esta en el .env

// register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // 1- validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // 2- check the user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 3- Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4- create user
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

    // validation
    if (!email || !password) {
      return res.status(400).json({ message: '❌All fields are required' });
    }

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

    // create token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, config.jwt_secret, {
      //define secret in .env
      expiresIn: '2h',
    });

    res
      .status(200)
      .json({
        message: '✅ Login successful',
        token,
        user: { id: user._id, email: user.email },
      });
  } catch (err) {
    res.status(500).json({
      message: '❌ Error in registration: Internal server error',
      error: err,
    });
  }
});

export default router;