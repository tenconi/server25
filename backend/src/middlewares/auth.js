import jwt from 'jsonwebtoken';
import config from '../utils/config.js';

export const authMiddleware = (req, res, next) => {
  // 👉 1. Traemos el token del header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No hay token, autorización denegada" });
  }

  try {
    // 👉 2. Verificamos el token con la clave secreta
    const decoded = jwt.verify(token, config.jwt_secret);

    // 👉 3. Guardamos los datos del usuario en req.user
    req.user = decoded; // { id, email, role }

    // 👉 4. Continuamos con la ejecución
    next();
  } catch (err) {
    console.error("Error en authMiddleware:", err);
    res.status(401).json({ message: "Inválid Token" });
  }
};