import { Router } from 'express';

const router = Router();

// Render the home page
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Mi Página</title></head>
      <body>
        <h1>Hola Daniel!</h1>
        <p>Bienvenido a tu eCommerce</p>
      </body>
    </html>
  `);
});

export default router
