import express from 'express';
import { __dirname } from './utils.js';
import productsRouter from './routes/products.router.js';
import usersRouter from './routes/users.router.js';

const app = express();


// server incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware "static" + dirname
app.use(express.static(__dirname + '/public'));


// routes:
app.use('/products', productsRouter)
app.use('/users', usersRouter)



// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`♠ Listening port ${PORT}`);
});
