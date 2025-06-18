import express from 'express';
import { __dirname } from './utils.js';
import productsRouter from './routes/products.router.js';
import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import './persistence/mongoDB/mongoDB.js'; // Initialize MongoDB connection
import cors from 'cors'; // a peticion del front

const app = express();


// server incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware "static" + dirname
app.use(express.static(__dirname + '/public'));
// Servir las imágenes en Express

// 🔒 Habilitar CORS
app.use(cors()); // 👈 Esto permite todas las conexiones desde cualquier origen

// routes:
app.use('/uploads', express.static(__dirname + '/../uploads'));
app.use('/', viewsRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)

console.log(__dirname+'/../uploads');

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`♠ Listening port ${PORT}`);
});
